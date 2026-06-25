import type { Testimonial } from "../data/content";

interface Props {
  testimonial: Testimonial;
  delay?: string;
}

export default function TestimonialCard({ testimonial, delay = "" }: Props) {
  return (
    <div className={`bg-bg2 border border-white/5 rounded-[20px] p-8 flex flex-col gap-5 relative transition-all duration-200 hover:border-a1/25 hover:-translate-y-0.5 overflow-hidden ${delay}`}>
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-70"
        style={{ background: testimonial.gradient }}
      />
      <span className="absolute top-2.5 left-[18px] text-[72px] leading-[0.85] text-a1/8 font-serif pointer-events-none">
        &ldquo;
      </span>
      <p className="text-[14px] text-t1 font-light leading-relaxed italic pt-[18px] relative z-1">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3.5 border-t border-white/5 pt-4 mt-auto">
        <span className="w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0 border border-white/10 bg-bg3">
          {testimonial.emoji}
        </span>
        <div className="flex flex-col gap-0.5">
          <div className="text-[13px] font-semibold text-t1">{testimonial.name}</div>
          <div className="font-mono text-[10px] text-a1/75 tracking-wider">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
