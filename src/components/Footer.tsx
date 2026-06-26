export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-[1120px] mx-auto px-10 max-md:px-5">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex flex-col gap-1">
            <div className="text-15 font-semibold text-t1">
              El Nacional · Expo Carrera 2026
            </div>
            <div className="text-13 text-t2">
              Esc. Educ. Superior El Nacional · UPC · La Carlota, Córdoba · Argentina
            </div>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <a href="/" className="text-sm text-t2 transition-colors hover:text-t1 px-3 py-2">Inicio</a>
            <a href="/escuela" className="text-sm text-t2 transition-colors hover:text-t1 px-3 py-2">Institución</a>
            <a href="/equipo" className="text-sm text-t2 transition-colors hover:text-t1 px-3 py-2">Estudiantes</a>
            <a href="/proyecto" className="text-sm text-t2 transition-colors hover:text-t1 px-3 py-2">El Proyecto</a>
            <a href="/juegos" className="text-sm text-t2 transition-colors hover:text-t1 px-3 py-2">Videojuegos</a>
            <a href="/testimonios" className="text-sm text-t2 transition-colors hover:text-t1 px-3 py-2">Testimonios</a>
            <a href="/inscripcion" className="text-sm text-t2 transition-colors hover:text-t1 px-3 py-2">Inscripción</a>
          </div>
          <div className="font-mono text-xs text-t2 tracking-wider">
            © 2026 El Nacional · UPC
          </div>
        </div>
        <div className="text-xs text-t2 text-center mt-6">
          Desarrollada por <a href="https://marcoszinga.vercel.app" target="_blank" rel="noopener noreferrer" className="text-a1 hover:text-t1 underline underline-offset-2 transition-colors">Marcos Zingaretti</a> y <a href="https://instagram.com/alejandro_appendino" target="_blank" rel="noopener noreferrer" className="text-a1 hover:text-t1 underline underline-offset-2 transition-colors">Alejandro Appendino</a> con ❤️
        </div>
      </div>
    </footer>
  );
}
