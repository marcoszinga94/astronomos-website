export interface Metric {
  icon: string;
  value: string;
  suffix?: string;
  label: string;
}

export const metrics: Metric[] = [
  { icon: "🎮", value: "8", label: "Videojuegos\ndesarrollados" },
  { icon: "🎓", value: "9", label: "Estudiantes\nparticipantes" },
  { icon: "⏱️", value: "150", suffix: "+", label: "Horas de\ndesarrollo" },
  { icon: "🗺️", value: "5", label: "Estaciones\ntemáticas" },
  { icon: "📚", value: "3", label: "Materias\nintegradas" },
];

export interface HeroStat {
  target: number;
  label: string;
  suffix?: string;
}

export const heroStats: HeroStat[] = [
  { target: 8, label: "Videojuegos" },
  { target: 9, label: "Estudiantes" },
  { target: 5, label: "Estaciones" },
  { target: 150, suffix: "+", label: "Horas de\ndesarrollo" },
];

export interface CarreraStat {
  number: string;
  suffix: string;
  suffixClass: string;
  label: string;
}

export const carreraStats: CarreraStat[] = [
  { number: "3", suffix: " años", suffixClass: "text-sm text-a1", label: "Duración" },
  { number: "100", suffix: "%", suffixClass: "text-sm text-a1", label: "Presencial" },
];

export const curriculum = [
  {
    year: "Primer año",
    title: "Fundamentos",
    subjects: [
      { name: "Introducción a la Programación", highlight: true },
      { name: "Matemática para la Computación" },
      { name: "Redes e Infraestructura" },
      { name: "Inglés Técnico" },
      { name: "Sistemas Operativos" },
      { name: "Diseño Digital" },
    ],
  },
  {
    year: "Segundo año",
    title: "Desarrollo profesional",
    subjects: [
      { name: "Programación II ← Este proyecto", highlight: true },
      { name: "Desarrollo Web Frontend" },
      { name: "Bases de Datos Relacionales" },
      { name: "Diseño de Interfaces (UX/UI)" },
      { name: "Práctica Profesionalizante I ← Este proyecto", highlight: true },
      { name: "Metodologías Ágiles" },
    ],
  },
  {
    year: "Tercer año",
    title: "Especialización",
    subjects: [
      { name: "Inteligencia Artificial aplicada" },
      { name: "Desarrollo Backend y APIs" },
      { name: "Seguridad Informática" },
      { name: "Práctica Profesionalizante II" },
      { name: "Gestión de Proyectos" },
      { name: "Proyecto Final Integrador", highlight: true },
    ],
  },
];

export const careerCards = [
  { icon: "💻", title: "Programación", desc: "Lógica computacional, algoritmos, estructuras de datos y resolución de problemas reales con Python, JavaScript y más.", tags: ["Python", "Algoritmos", "Lógica"], color: "#4f7fff" },
  { icon: "🌐", title: "Desarrollo Web", desc: "Creación de sitios y aplicaciones web modernas con HTML5, CSS3, JavaScript y frameworks actuales del mercado.", tags: ["HTML5", "CSS3", "React"], color: "#00c8ff" },
  { icon: "🗄️", title: "Bases de Datos", desc: "Diseño, modelado y administración de bases de datos relacionales y NoSQL para aplicaciones empresariales.", tags: ["SQL", "PostgreSQL", "NoSQL"], color: "#7c4dff" },
  { icon: "🧠", title: "Inteligencia Artificial", desc: "Fundamentos de IA, machine learning y automatización aplicados a proyectos reales de la industria y la educación.", tags: ["Machine Learning", "Python"], color: "#ff9f43" },
  { icon: "⚙️", title: "Automatización", desc: "Herramientas para automatizar procesos, testing, integración continua y despliegue de aplicaciones en producción.", tags: ["CI/CD", "Testing", "Scripts"], color: "#4fbb7c" },
  { icon: "🎮", title: "Desarrollo de Videojuegos", desc: "Diseño de mecánicas, programación de motores 2D/3D y creación de experiencias interactivas educativas y de entretenimiento.", tags: ["Pygame", "Unity", "UX"], color: "#ff6b6b" },
];

export interface Competencia {
  icon: string;
  title: string;
  text: string;
}

export const competencias: Competencia[] = [
  { icon: "💻", title: "Programación", text: "Lógica, algoritmos y código funcional en Python. De cero a un producto terminado." },
  { icon: "🎨", title: "Diseño de Interfaces", text: "Creación de interfaces usables, accesibles y atractivas pensadas para el usuario real." },
  { icon: "🤝", title: "Trabajo en Equipo", text: "Colaboración, comunicación y coordinación en proyectos de múltiples desarrolladores." },
  { icon: "🔍", title: "Resolución de Problemas", text: "Diagnóstico, depuración y pensamiento algorítmico para solucionar errores reales." },
  { icon: "🧪", title: "Testing", text: "Verificación sistemática del software para garantizar calidad, usabilidad y robustez." },
  { icon: "📢", title: "Comunicación Profesional", text: "Presentación, defensa y documentación de decisiones técnicas ante audiencias diversas." },
  { icon: "📋", title: "Gestión de Proyectos", text: "Planificación, seguimiento y entrega de software completo dentro de plazos reales." },
  { icon: "🌍", title: "Software Educativo", text: "Aplicar la tecnología para resolver problemas reales de aprendizaje con impacto comunitario." },
];

export interface Testimonial {
  text: string;
  emoji: string;
  name: string;
  role: string;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "Yo aprendí que las estrellas tienen nombres y que hay una que se llama igual que mi abuela. Y el juego me dejaba equivocarme sin retarme. Me gustó mucho.",
    emoji: "👦",
    name: "Alumno de primer grado",
    role: "Beneficiario · Estación 5",
    gradient: "linear-gradient(90deg,#4fbb7c,#00c8ff)",
  },
  {
    text: "Al principio no sabía cómo hacer que los planetas se movieran. Busqué, pregunté, rompí el código cuatro veces. Cuando funcionó, entendí que eso es programar de verdad.",
    emoji: "🎓",
    name: "Estudiante desarrollador",
    role: "Tecnicatura en Programación Full Stack",
    gradient: "linear-gradient(90deg,#4f7fff,#7c4dff)",
  },
  {
    text: "Ver a mis alumnos explicarle a un nene de seis años cómo funciona su juego fue uno de los momentos más poderosos que viví como docente. Eso no se planifica, se construye.",
    emoji: "👩‍🏫",
    name: "Docente de la carrera",
    role: "Práctica Profesionalizante I · El Nacional · UPC",
    gradient: "linear-gradient(90deg,#ff9f43,#ff6b6b)",
  },
];

export const salidasLaborales = [
  "Desarrollador Full Stack",
  "Programador de aplicaciones",
  "Analista de sistemas",
  "Desarrollador de videojuegos",
  "Técnico en software educativo",
  "Freelancer / Emprendedor tech",
];
