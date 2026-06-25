import type { Metric } from "../data/content";
import CountUp from "./CountUp";

interface Props {
  metric: Metric;
  delay?: string;
}

export default function MetricCard({ metric, delay = "" }: Props) {
  return (
    <div className={`bg-bg2 p-9 text-center flex flex-col items-center gap-2 transition-colors hover:bg-bg3 ${delay}`}>
      <span className="text-[28px] mb-1">{metric.icon}</span>
      <div className="font-mono text-[clamp(28px,3.5vw,44px)] font-medium text-t1 leading-none flex items-baseline gap-0.5">
        <CountUp target={parseInt(metric.value)} suffix={metric.suffix || ""} />
      </div>
      <div className="text-[11px] text-t3 tracking-wider uppercase leading-tight text-center whitespace-pre-line">
        {metric.label}
      </div>
    </div>
  );
}
