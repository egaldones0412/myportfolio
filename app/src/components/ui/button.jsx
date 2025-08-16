import { cn } from "../../lib/utils.js";

export function Button({ as: Comp = "button", className, variant = "primary", size = "md", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    primary: "bg-accent text-black shadow-elevate hover:opacity-90",
    outline: "border border-black/10 bg-white hover:bg-slate-50"
  };
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5",
    lg: "px-5 py-3"
  };
  return <Comp className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
