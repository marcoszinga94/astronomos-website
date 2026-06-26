import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/proyecto", label: "Proyecto" },
  { href: "/juegos", label: "Videojuegos" },
  { href: "/equipo", label: "Estudiantes" },
  { href: "/impacto", label: "Impacto" },
  { href: "/testimonios", label: "Testimonios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg/85 backdrop-blur-2xl border-b border-white/5 h-15">
      <div className="max-w-[1120px] mx-auto px-10 max-md:px-5 h-full flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-a1 shadow-[0_0_10px_var(--color-a1)] animate-[pulse-dot_2.5s_ease-in-out_infinite]" />
          <span className="text-15 font-semibold whitespace-nowrap">
            El Nacional
          </span>
        </a>

        <button
          className="max-lg:flex hidden p-3 text-t2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        <div
          className={`max-lg:${open ? "flex" : "hidden"} max-lg:flex-col max-lg:absolute max-lg:top-15 max-lg:left-0 max-lg:right-0 max-lg:bg-bg2 max-lg:border-b max-lg:border-white/10 max-lg:p-3 max-lg:gap-0.5 flex items-center gap-1`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-t2 max-lg:px-5 max-lg:py-3.5 px-3.5 py-1.5 rounded-lg transition-all duration-200 hover:text-t1 hover:bg-white/5 whitespace-nowrap"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full text-t2 hover:text-t1 hover:bg-white/5 transition-all duration-200 cursor-pointer shrink-0"
          aria-label="Cambiar tema"
        >
          {light ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </button>

        <a
          href="/inscripcion"
          className="text-13 font-semibold tracking-wider uppercase px-6 py-3 rounded-full bg-a1 text-white transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5 shrink-0 max-lg:hidden"
        >
          Conocé la escuela →
        </a>
      </div>
    </nav>
  );
}
