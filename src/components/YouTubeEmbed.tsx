import { useState } from "react";

interface Props {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title = "Video" }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative w-full aspect-video cursor-pointer group"
      onClick={() => setLoaded(true)}
    >
      {loaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white&autoplay=1&mute=1`}
          className="absolute inset-0 w-full h-full border-none"
          allowFullScreen
          allow="autoplay; encrypted-media; picture-in-picture"
          title={title}
        />
      ) : (
        <>
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all group-hover:bg-black/20">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#111">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
