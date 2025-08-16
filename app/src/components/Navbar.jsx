import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 border-b border-black/5 backdrop-blur ${solid ? "bg-white/80" : "bg-white/60"}`}>
      <div className="container-section flex items-center justify-between py-3">
        <a href="#home" className="font-semibold">EL Galdones</a>
        <button className="md:hidden rounded-lg border border-black/10 px-3 py-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          Menu
        </button>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a className="text-sm text-slate-700 hover:underline underline-offset-4" href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className="border-t border-black/5 bg-white py-2 md:hidden">
          <ul className="container-section grid gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-100" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
