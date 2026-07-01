import { useEffect, useRef, useState, useCallback } from "react";

const videos = [
  { name: "Arc Space", src: "/videos/arc space.mp4", color: "#4f7fff" },
  { name: "Boom Cósmico", src: "/videos/boom cosmico.mp4", color: "#7c4dff" },
  { name: "Cielo Cordobés", src: "/videos/cielo cordobes.mp4", color: "#00c8ff" },
  { name: "Memoria Estelar", src: "/videos/memoria estelar.mp4", color: "#ff9f43" },
  { name: "Preguntados Kids", src: "/videos/preguntados-kids.mp4", color: "#4fbb7c" },
  { name: "Solar Defender", src: "/videos/solar defender.mp4", color: "#ff6b6b" },
  { name: "Stellar Scrap", src: "/videos/stellar scrap.mp4", color: "#e040fb" },
  { name: "Viaje Galáctico", src: "/videos/viaje galactico.mp4", color: "#f59e0b" },
];

const RADIUS = 370;
const BASE_W = 140;
const BASE_H = 105;
const ANGLE_STEP = 360 / 8;
const FRONT_SCALE = 2.4;
const AUTO_SPEED = 360 / 55;
const DRAG_SENSITIVITY = 0.45;

export default function VideoOrbit() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const fixerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const sunRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const startMusic = () => {
      if (musicRef.current && musicRef.current.paused) {
        musicRef.current.volume = 0.2;
        musicRef.current.play().catch(() => {});
      }
    };
    window.addEventListener("pointerdown", startMusic, { once: true });
    return () => window.removeEventListener("pointerdown", startMusic);
  }, []);
  const starsRef = useRef<HTMLCanvasElement | null>(null);
  const carouselAngleRef = useRef(0);
  const rotationRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartRot = useRef(0);
  const dragStartX = useRef(0);
  const lastTime = useRef(0);
  const [frontIndex, setFrontIndex] = useState(0);

  useEffect(() => {
    videoRefs.current.forEach((el) => {
      if (el) {
        el.muted = true;
        el.play().catch(() => {});
      }
    });
  }, []);

  useEffect(() => {
    const canvas = starsRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const starCount = 300;
    const stars: { x: number; y: number; r: number; a: number; s: number }[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        a: Math.random(),
        s: Math.random() * 0.02 + 0.005,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.a += s.s;
        const alpha = 0.3 + 0.7 * Math.abs(Math.sin(s.a));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === frontIndex) {
        el.muted = false;
        el.volume = 0.3;
      } else {
        el.muted = true;
      }
    });
  }, [frontIndex]);

  useEffect(() => {
    lastTime.current = performance.now();
    let raf: number;
    const animate = (now: number) => {
      const dt = Math.min((now - lastTime.current) / 1000, 0.1);
      lastTime.current = now;

      if (!isDragging.current) {
        rotationRef.current += AUTO_SPEED * dt;
      }

      const angle = ((rotationRef.current % 360) + 360) % 360;
      carouselAngleRef.current = angle;

      if (carouselRef.current) {
        carouselRef.current.style.transform = `rotateY(${angle}deg)`;
      }

      fixerRefs.current.forEach((el, i) => {
        if (el) {
          el.style.transform = `rotateY(${-angle - i * ANGLE_STEP}deg)`;
        }
      });

      if (sunRef.current) {
        sunRef.current.style.transform = `translateZ(0px) rotateY(${-angle}deg)`;
      }

      const front = Math.round(((360 - angle) % 360) / ANGLE_STEP) % 8;
      setFrontIndex((prev) => (prev !== front ? front : prev));

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [frontIndex]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartRot.current = rotationRef.current;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    rotationRef.current = dragStartRot.current + dx * DRAG_SENSITIVITY;
  }, []);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
    lastTime.current = performance.now();
  }, []);

  const setVideoRef = (i: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[i] = el;
  };

  const setFixerRef = (i: number) => (el: HTMLDivElement | null) => {
    fixerRefs.current[i] = el;
  };

  return (
    <div className="vo-root">
      <canvas ref={starsRef} className="absolute inset-0 pointer-events-none" />
      <audio
        ref={musicRef}
        src="/M%C3%BAsica%20electr%C3%B3nica%20espacial.mp3"
        loop
        preload="auto"
        className="hidden"
      />
      <style>{`
        .vo-root {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: var(--color-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-y;
        }
        .vo-root:active {
          cursor: grabbing;
        }
        .vo-scene {
          perspective: 1000px;
          perspective-origin: 50% 44%;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .vo-tilt {
          transform-style: preserve-3d;
          transform: rotateX(-6deg);
        }
        .vo-carousel {
          position: relative;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .vo-card {
          position: absolute;
          width: ${BASE_W}px;
          height: ${BASE_H}px;
          top: -${BASE_H / 2}px;
          left: -${BASE_W / 2}px;
          pointer-events: auto;
          transition: width 0.55s ease, height 0.55s ease, top 0.55s ease, left 0.55s ease;
        }
        .vo-card-fixer {
          width: 100%;
          height: 100%;
        }
        .vo-card-inner {
          width: 100%;
          height: 100%;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: #000;
          transition: transform 0.55s ease, border-color 0.55s ease, box-shadow 0.55s ease;
        }
        .vo-card:hover .vo-card-inner {
          border-color: rgba(255,255,255,0.2);
        }
        .vo-card.vo-front .vo-card-inner {
          border-color: rgba(255,255,255,0.22);
          box-shadow: 0 0 50px rgba(255,255,255,0.06), 0 0 100px var(--vo-glow, rgba(79,127,255,0.1));
        }
        .vo-card-inner video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .vo-card-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(transparent, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.9));
          pointer-events: none;
        }
        .vo-card-label span {
          font-size: 11px;
          font-weight: 600;
          color: #f0f2f7;
          text-align: center;
          line-height: 1.2;
          text-shadow: 0 1px 3px rgba(0,0,0,0.6);
        }
        .vo-sun-wrap {
          position: absolute;
          top: -120px;
          left: -120px;
          width: 240px;
          height: 240px;
          transform: translateZ(0px);
          pointer-events: none;
          will-change: transform;
        }
        .vo-sun-core {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background:
            radial-gradient(circle at 45% 40%, #ffffff 0%, #fff8dc 8%, #ffe066 22%, #ffb020 42%, #ff6a00 68%, #cc3300 88%, #4d0f00 100%);
          box-shadow:
            0 0 60px rgba(255,200,40,0.8),
            0 0 150px rgba(255,140,0,0.5),
            0 0 260px rgba(255,80,0,0.25),
            0 0 400px rgba(255,40,0,0.1);
          animation: vo-sun-pulse 3s ease-in-out infinite;
        }
        .vo-sun-halo {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 340px;
          height: 340px;
          margin: -170px 0 0 -170px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,170,20,0.18) 0%, rgba(255,110,0,0.08) 40%, rgba(255,60,0,0.02) 60%, transparent 75%);
          animation: vo-sun-pulse 3s ease-in-out 0.5s infinite;
          pointer-events: none;
        }
        .vo-sun-aura {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 480px;
          height: 480px;
          margin: -240px 0 0 -240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,160,0,0.08) 0%, rgba(255,100,0,0.03) 35%, transparent 60%);
          animation: vo-sun-pulse 3s ease-in-out 1s infinite;
          pointer-events: none;
        }
        @keyframes vo-sun-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
        @media (max-width: 1000px) {
          .vo-scene {
            transform: scale(0.72);
          }
        }
        @media (max-width: 650px) {
          .vo-scene {
            transform: scale(0.48);
          }
        }
      `}</style>

      <div
        className="vo-scene"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: RADIUS * 2 + 100,
            height: RADIUS * 2 + 100,
            background: "radial-gradient(circle, rgba(79,127,255,0.03) 0%, rgba(124,77,255,0.01) 40%, transparent 70%)",
          }}
        />

        <div className="vo-tilt">
          <div className="vo-carousel" ref={carouselRef}>
            <div className="vo-sun-wrap" ref={sunRef}>
              <div className="vo-sun-aura" />
              <div className="vo-sun-halo" />
              <div className="vo-sun-core" />
            </div>

            {videos.map((v, i) => {
              const angle = ANGLE_STEP * i;
              const isFront = i === frontIndex;
              const w = isFront ? BASE_W * FRONT_SCALE : BASE_W;
              const h = isFront ? BASE_H * FRONT_SCALE : BASE_H;
              return (
                <div
                  key={v.name}
                  className={`vo-card${isFront ? " vo-front" : ""}`}
                  style={{
                    width: w,
                    height: h,
                    top: -h / 2,
                    left: -w / 2,
                    transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                    "--vo-glow": `${v.color}44`,
                  } as React.CSSProperties}
                >
                  <div
                    className="vo-card-fixer"
                    ref={setFixerRef(i)}
                  >
                    <div className="vo-card-inner">
                      <video
                        ref={setVideoRef(i)}
                        src={encodeURI(v.src)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                      <div className="vo-card-label">
                        <span>{v.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
