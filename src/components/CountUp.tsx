import { useEffect, useRef, useState } from "react";

interface Props {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ target, suffix = "", duration = 1800 }: Props) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const step = (now: number) => {
      const pct = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - pct, 4);
      setVal(Math.floor(ease * target));
      if (pct < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return <span ref={ref}>{val.toLocaleString("es-AR")}{suffix}</span>;
}
