interface Props {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title = "Video" }: Props) {
  return (
    <div className="relative w-full aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white&autoplay=1&mute=1`}
        className="absolute inset-0 w-full h-full border-none"
        allowFullScreen
        allow="autoplay; encrypted-media; picture-in-picture"
        title={title}
      />
    </div>
  );
}
