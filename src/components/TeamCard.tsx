import type { Game } from "../data/games";

interface Props {
  game: Game;
  index: number;
}

export default function TeamCard({ game, index }: Props) {
  const gradients = [
    "linear-gradient(135deg,#4f7fff,#7c4dff)",
    "linear-gradient(135deg,#00c8ff,#4f7fff)",
    "linear-gradient(135deg,#ff6b6b,#ff9f43)",
    "linear-gradient(135deg,#4fbb7c,#00c8ff)",
    "linear-gradient(135deg,#7c4dff,#4f7fff)",
    "linear-gradient(135deg,#ff9f43,#ff6b6b)",
    "linear-gradient(135deg,#4fbb7c,#4f7fff)",
    "linear-gradient(135deg,#00c8ff,#7c4dff)",
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <article className="bg-bg3 border border-white/10 rounded-card overflow-hidden flex flex-col transition-all duration-300 hover:border-a1/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_24px_rgba(79,127,255,0.08)] hover:-translate-y-1">
      <div
        className="px-6 py-4 border-b border-white/10 bg-bg3 relative overflow-hidden flex flex-row before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5"
        style={{ background: gradient }}
      >
        <div className="flex flex-col gap-1.5 flex-1 py-1">
          <div className="text-15 font-bold text-t1">
            {game.dev}
          </div>
          <div className="text-13 text-t1 font-medium truncate">
            {game.title}
          </div>
          <span className="inline-flex self-start font-mono text-2xs tracking-wider uppercase text-t2 px-2 py-0.5 rounded bg-bg5 border border-white/10">
            Desarrollador · {game.category}
          </span>
        </div>
        <a
          href={`/juegos#${game.slug}`}
          className="w-28 shrink-0 relative -my-4 -mr-6"
        >
          <img
            src={`/images/${encodeURIComponent(game.image)}`}
            alt={game.title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </a>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="text-15 text-t2 leading-relaxed">
          {game.description}
        </p>
        {game.highlight && (
          <div className="py-2.5 px-3 bg-a1/10 border-l-2 border-a1 rounded-r-md text-13 text-t1 italic leading-relaxed">
            &ldquo;{game.highlight}&rdquo;
          </div>
        )}
        <div className="flex flex-wrap gap-1.5">
          {game.tags.concat(`Niveles`).map((t) => (
            <span
              key={t}
              className="font-mono text-2xs px-2 py-1 rounded bg-bg4 border border-white/10 text-t2"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={`/juegos#${game.slug}`}
          className="mt-1 inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-a1/80 bg-a1/8 border border-a1/15 rounded-md px-3.5 py-2 transition-all duration-200 hover:bg-a1/20 hover:text-white hover:-translate-y-0.5 self-start"
        >
          Ver videojuego →
        </a>
      </div>
    </article>
  );
}
