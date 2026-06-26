export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  as: level = "h2",
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  as?: "h1" | "h2";
}) {
  const Heading = level;
  return (
    <div className="mb-14">
      <div className="inline-flex items-center gap-2 font-mono text-[12px] tracking-widest uppercase text-a1/75 mb-3.5 before:content-[''] before:w-5 before:h-px before:bg-a1/50">
        {eyebrow}
      </div>
      <Heading className="text-[clamp(24px,3.5vw,40px)] font-bold tracking-tight leading-tight text-t1 mb-3.5">
        {title}{" "}
        <span className="bg-linear-to-r from-a1 to-a2 bg-clip-text text-transparent">
          {highlight}
        </span>
      </Heading>
      <p className="text-[clamp(14px,1.4vw,16px)] text-t2 leading-relaxed max-w-145">
        {subtitle}
      </p>
    </div>
  );
}
