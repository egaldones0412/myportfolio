export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-black/5 bg-white py-10 text-sm">
      <div className="container-section flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-slate-600">© {year} Edz Lilian Galdones. All rights reserved.</p>
        <nav aria-label="footer">
          <ul className="flex flex-wrap items-center gap-4">
            <li><a className="hover:underline underline-offset-4" href="#home">Home</a></li>
            <li><a className="hover:underline underline-offset-4" href="#services">Services</a></li>
            <li><a className="hover:underline underline-offset-4" href="#work">Work</a></li>
            <li><a className="hover:underline underline-offset-4" href="#about">About</a></li>
            <li><a className="hover:underline underline-offset-4" href="#contact">Contact</a></li>
            <li><a className="hover:underline underline-offset-4" href="mailto:info@elgaldones.works">Email</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
