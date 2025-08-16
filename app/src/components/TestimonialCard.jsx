import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card.jsx";

export default function TestimonialCard({ rating = 5, name, text }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
      <Card className="h-full rounded-2xl shadow">
        <CardContent className="p-6">
          <div className="flex items-center gap-1 text-accent">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <p className="mt-3 italic text-slate-800">&ldquo;{text}&rdquo;</p>
          <p className="mt-4 text-sm font-semibold text-slate-700">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
