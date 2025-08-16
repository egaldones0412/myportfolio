import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section border-t border-black/5 bg-white py-16 first:border-0">
      <div className="container-section">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold">{title}</h2>
          {subtitle ? <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p> : null}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
