import type { Game } from "../data/games";
import { useState } from "react";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  const [showAlert, setShowAlert] = useState(false);
  const disabled = !game.demoUrl;

  const handleDemo = () => {
    if (disabled) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2500);
      return;
    }
    window.open(game.demoUrl, "_blank");
  };

  return (
    <article className="bg-bg2 border border-white/5 rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:border-a1/35 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_32px_rgba(79,127,255,0.1)] hover:-translate-y-1">
      <div
        className="aspect-video relative overflow-hidden flex items-center justify-center"
        style={{ background: game.gradient }}
      >
        <img
          src={`/images/${encodeURIComponent(game.image)}`}
          alt={game.title}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />
      </div>
      <div className="p-[22px] flex flex-col gap-3 flex-1">
        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex items-center font-mono text-[9px] font-medium tracking-wider uppercase px-[9px] py-[3px] rounded bg-a1/10 border border-a1/20 text-a1/90">
            {game.category}
          </span>
          <span className="inline-flex items-center font-mono text-[9px] font-medium tracking-wider uppercase px-[9px] py-[3px] rounded bg-green/8 border border-green/20 text-green/90">
            1° Grado
          </span>
          <span className="inline-flex items-center font-mono text-[9px] font-medium tracking-wider uppercase px-[9px] py-[3px] rounded bg-orange/8 border border-orange/20 text-orange/90">
            {game.weeks}
          </span>
        </div>
        <h3 className="text-lg font-bold text-t1 tracking-tight leading-tight">{game.title}</h3>
        <p className="text-[12px] text-t3 flex items-center gap-1.5">
          por <span className="text-a1/75 font-medium">{game.dev}</span>
        </p>
        <div className="text-[11px] text-t2 leading-relaxed py-2.5 px-3 bg-bg3 border-l-2 border-a1 rounded-r-md italic">
          {game.objective}
        </div>
        <p className="text-[12px] text-t2 leading-relaxed font-light flex-1">{game.description}</p>
        <div className="mt-auto pt-3.5 border-t border-white/5 flex items-center justify-between gap-2.5 flex-wrap">
          <div className="flex gap-1.5 flex-wrap">
            {game.tags.map((t) => (
              <span key={t} className="font-mono text-[9px] px-2 py-[3px] rounded bg-bg4 border border-white/5 text-t3">
                {t}
              </span>
            ))}
          </div>
          {game.demoUrl ? (
            <a
              href={game.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase text-a1/90 bg-a1/10 border border-a1/20 rounded-md px-3.5 py-[7px] transition-all duration-200 hover:bg-a1/20 hover:text-white hover:-translate-y-0.5 whitespace-nowrap"
            >
              Demo ↗
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase text-t3/50 border border-white/5 rounded-md px-3.5 py-[7px] whitespace-nowrap">
              Próximamente
            </span>
          )}
        </div>
      </div>
      {showAlert && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-bg3 border border-a1/30 rounded-lg px-5 py-3 text-[13px] text-t2 z-50 shadow-xl">
          Demo disponible próximamente.
        </div>
      )}
    </article>
  );
}
