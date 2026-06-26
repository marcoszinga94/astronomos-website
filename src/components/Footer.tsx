export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-[1120px] mx-auto px-10 max-md:px-5">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex flex-col gap-1">
            <div className="text-[13px] font-semibold text-t1">
              Astrónomos por un día · Expo Carrera 2026
            </div>
            <div className="text-[11px] text-t3">
              Esc. Educ. Superior El Nacional · UPC · La Carlota, Córdoba · Argentina
            </div>
          </div>
          <div className="flex gap-5 flex-wrap">
            <a href="/" className="text-[11px] text-t3 transition-colors hover:text-t1">Inicio</a>
            <a href="/carrera" className="text-[11px] text-t3 transition-colors hover:text-t1">Institución y Carrera</a>
            <a href="/equipo" className="text-[11px] text-t3 transition-colors hover:text-t1">Estudiantes</a>
            <a href="/proyecto" className="text-[11px] text-t3 transition-colors hover:text-t1">El Proyecto</a>
            <a href="/juegos" className="text-[11px] text-t3 transition-colors hover:text-t1">Videojuegos</a>
            <a href="/testimonios" className="text-[11px] text-t3 transition-colors hover:text-t1">Testimonios</a>
            <a href="/inscripcion" className="text-[11px] text-t3 transition-colors hover:text-t1">Inscripción</a>
          </div>
          <div className="font-mono text-[10px] text-t3 tracking-wider">
            © 2026 El Nacional · UPC
          </div>
        </div>
      </div>
    </footer>
  );
}
