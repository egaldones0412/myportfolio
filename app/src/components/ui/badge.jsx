import { cn } from "../../lib/utils.js";

export function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-black/80 text-white",
    outline: "border border-black/10 bg-white text-slate-800",
    soft: "bg-accent/20 text-accent"
  };
  return <span className={cn("inline-flex items-center rounded-xl px-3 py-1 text-xs", variants[variant], className)} {...props} />;
}
