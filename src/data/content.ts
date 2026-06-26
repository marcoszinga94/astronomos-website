export interface Technology {
  logo: string;
  logoBg: string;
  role: string;
  name: string;
  desc: string;
  bridgeLabel: string;
  bridgeText: string;
}

export const technologies: Technology[] = [
  {
    logo: "Py",
    logoBg: "linear-gradient(135deg,#306998,#ffd43b)",
    role: "Lenguaje principal · Programación II",
    name: "Python",
    desc: "Lenguaje versátil, legible y ampliamente usado en IA, ciencia de datos, web y desarrollo de videojuegos. Ideal para aprender sin perder potencia profesional.",
    bridgeLabel: "Industria",
    bridgeText: "IA · ciencia de datos · automatización · backend",
  },
  {
    logo: "Pg",
    logoBg: "linear-gradient(135deg,#1a7a1a,#2ecc40)",
    role: "Motor de videojuegos 2D · PP1",
    name: "Pygame",
    desc: "Librería para desarrollo de videojuegos en Python. Gráficos, audio, físicas, eventos y animaciones. Usada en los 8 juegos de este proyecto.",
    bridgeLabel: "Industria",
    bridgeText: "desarrollo de juegos indie · prototipos interactivos",
  },
  {
    logo: "H5",
    logoBg: "linear-gradient(135deg,#e44d26,#f16529)",
    role: "Estructura web · Desarrollo Web",
    name: "HTML5",
    desc: "Lenguaje de marcado semántico para páginas y aplicaciones web. Este mismo sitio fue construido con HTML5 puro por estudiantes de la carrera.",
    bridgeLabel: "Industria",
    bridgeText: "toda aplicación web · frontend · correo · documentos",
  },
  {
    logo: "CSS",
    logoBg: "linear-gradient(135deg,#1572b6,#33a9dc)",
    role: "Diseño visual · Desarrollo Web",
    name: "CSS3",
    desc: "Estilos, animaciones y responsive design. Las animaciones, el sistema de partículas y el diseño de este sitio son 100% CSS3 escrito por estudiantes.",
    bridgeLabel: "Industria",
    bridgeText: "diseño UI · branded design systems · apps móviles",
  },
  {
    logo: "JS",
    logoBg: "linear-gradient(135deg,#f0db4f,#c8a800)",
    role: "Interactividad web · Desarrollo Web",
    name: "JavaScript",
    desc: "Lenguaje del navegador: animaciones, lógica de cliente, APIs y contadores. La interactividad de esta landing fue programada en JS por estudiantes de la carrera.",
    bridgeLabel: "Industria",
    bridgeText: "React · Node.js · apps en tiempo real · APIs",
  },
  {
    logo: "Git",
    logoBg: "linear-gradient(135deg,#24292e,#555)",
    role: "Control de versiones · Todas las materias",
    name: "GitHub",
    desc: "Plataforma colaborativa de desarrollo. Los estudiantes trabajan con la misma herramienta que usan millones de desarrolladores profesionales en todo el mundo.",
    bridgeLabel: "Industria",
    bridgeText: "trabajo en equipo · CI/CD · open source · portafolio",
  },
];

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

export interface InstitucionStat {
  number: string;
  suffix: string;
  label: string;
}

export const institucionStats: InstitucionStat[] = [
  { number: "2", suffix: "+", label: "Niveles educativos" },
  { number: "3", suffix: "+", label: "Tecnicaturas" },
];

export interface CarreraStat {
  number: string;
  suffix: string;
  suffixClass: string;
  label: string;
}

export const carreraStats: CarreraStat[] = [
  { number: "3", suffix: " años", suffixClass: "text-[14px] text-a1", label: "Duración" },
  { number: "100", suffix: "%", suffixClass: "text-[14px] text-a1", label: "Presencial" },
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
  projectText: string;
}

export const competencias: Competencia[] = [
  { icon: "💻", title: "Programación", text: "Lógica, algoritmos y código funcional en Python. De cero a un producto terminado.", projectText: "Cada juego fue codificado de cero: bucles de juego, manejo de eventos, sprites, colisiones y sistemas de puntuación." },
  { icon: "🎨", title: "Diseño de Interfaces", text: "Creación de interfaces usables, accesibles y atractivas pensadas para el usuario real.", projectText: "Interfaces diseñadas para niños de 6 años: botones grandes, colores llamativos, feedback visual y audio sin textos complejos." },
  { icon: "🤝", title: "Trabajo en Equipo", text: "Colaboración, comunicación y coordinación en proyectos de múltiples desarrolladores.", projectText: "Exposición conjunta en la Expo: 8 juegos de distintos autores funcionando como una propuesta pedagógica unificada." },
  { icon: "🔍", title: "Resolución de Problemas", text: "Diagnóstico, depuración y pensamiento algorítmico para solucionar errores reales.", projectText: "Bugs de colisión, errores de lógica, problemas de rendimiento y casos borde encontrados durante el testing con niños." },
  { icon: "🧪", title: "Testing", text: "Verificación sistemática del software para garantizar calidad, usabilidad y robustez.", projectText: "Pruebas con usuarios finales reales — niños de primer grado — que encontraron bugs que ningún estudiante habría anticipado." },
  { icon: "📢", title: "Comunicación Profesional", text: "Presentación, defensa y documentación de decisiones técnicas ante audiencias diversas.", projectText: "Presentación del juego ante docentes, autoridades, familias y niños: explicar código de manera comprensible para todos." },
  { icon: "📋", title: "Gestión de Proyectos", text: "Planificación, seguimiento y entrega de software completo dentro de plazos reales.", projectText: "Un cuatrimestre para investigar, diseñar, desarrollar, testear y presentar un videojuego educativo funcional." },
  { icon: "🌍", title: "Software Educativo", text: "Aplicar la tecnología para resolver problemas reales de aprendizaje con impacto comunitario.", projectText: "8 juegos que combinan contenido curricular de Ciencias Naturales de primer grado con mecánicas lúdicas pensadas pedagógicamente." },
];

export const aulaCards = [
  { num: "01", icon: "📋", title: "Planificación", text: "Definición de alcance, plazos y entregables antes de comenzar a desarrollar.", result: "→ Requisitos documentados" },
  { num: "02", icon: "🗂️", title: "Organización", text: "Estructura del código, carpetas y recursos siguiendo buenas prácticas de ingeniería.", result: "→ Repositorio ordenado" },
  { num: "03", icon: "⌨️", title: "Desarrollo", text: "Implementación iterativa con control de versiones y resolución de bugs en tiempo real.", result: "→ Código funcional" },
  { num: "04", icon: "📄", title: "Documentación", text: "Manual técnico, comentarios en el código y descripción del producto para el equipo docente.", result: "→ Proyecto documentado" },
  { num: "05", icon: "🧪", title: "Pruebas", text: "Testing con usuarios reales, detección de errores y ciclos de mejora continua.", result: "→ Producto validado" },
  { num: "06", icon: "🎤", title: "Presentación", text: "Defensa técnica ante la comunidad con demostración en vivo del producto final.", result: "→ Impacto real" },
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
