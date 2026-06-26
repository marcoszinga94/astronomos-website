export interface Estacion {
  num: string;
  icono: string;
  titulo: string;
  texto: string;
  featured?: boolean;
  badge?: string;
}

export const estaciones: Estacion[] = [
  {
    num: "01",
    icono: "⭐",
    titulo: "Estrellas y Planetas",
    texto: "Los niños descubren la diferencia entre estrellas y planetas, aprenden los nombres de los planetas del sistema solar y exploran maquetas e imágenes del universo.",
  },
  {
    num: "02",
    icono: "🌅",
    titulo: "Día, Noche y Estaciones del Año",
    texto: "Experimentos prácticos para entender la rotación y traslación de la Tierra. Los niños comprenden por qué existe el día y la noche y por qué cambian las estaciones.",
  },
  {
    num: "03",
    icono: "🔭",
    titulo: "Instrumentos de Observación",
    texto: "Telescopios, binoculares y materiales didácticos. Los niños aprenden cómo los astrónomos observan el cielo y tienen su primer contacto con los instrumentos de observación astronómica.",
  },
  {
    num: "04",
    icono: "🌙",
    titulo: "La Luna, Fases y Eclipses",
    texto: "Modelos físicos de las fases lunares y simulaciones de eclipses. Los niños comprenden el movimiento de la Luna, por qué cambia su forma visible y qué es un eclipse solar y lunar.",
  },
  {
    num: "05",
    icono: "🎮",
    titulo: "Videojuegos y Recursos Digitales",
    texto: "La estación final: 8 videojuegos educativos programados por estudiantes de Desarrollo de Software. La tecnología y la astronomía se unen en una experiencia única e interactiva.",
    featured: true,
    badge: "8 juegos desarrollados por estudiantes ↓",
  },
];

export const timeline = [
  {
    emoji: "📋",
    step: "Fase 1 · Análisis de requerimientos",
    title: "Investigación del usuario final",
    text: "¿Qué necesitan los niños de primer grado? ¿Cómo aprenden mejor? Los estudiantes investigan, entrevistan docentes y definen los requisitos pedagógicos y técnicos del software antes de escribir una línea de código.",
    chips: ["Entrevistas a docentes", "Análisis de requisitos", "Benchmarking pedagógico"],
  },
  {
    emoji: "🎨",
    step: "Fase 2 · Diseño",
    title: "Diseño de mecánicas e interfaces",
    text: "Bocetos de pantallas, definición de mecánicas de juego, paleta de colores adaptada a niños de 6 años. Wireframes y prototipos validados con usuarios antes de programar, siguiendo un proceso UX real.",
    chips: ["UX para niños", "Wireframes", "Prototipado"],
  },
  {
    emoji: "💻",
    step: "Fase 3 · Desarrollo",
    title: "Programación del videojuego",
    text: "Codificación con Python y Pygame. Cada estudiante toma decisiones arquitectónicas reales: estructuración del código, gestión del estado del juego, manejo de audio, sprites y optimización de rendimiento.",
    chips: ["Python", "Pygame", "GitHub", "Control de versiones"],
  },
  {
    emoji: "🧪",
    step: "Fase 4 · Testing",
    title: "Pruebas y corrección de errores",
    text: "Pruebas de usuario, corrección de bugs y mejoras de UX. Los estudiantes aprenden que el código que funciona no siempre es suficiente: también debe ser usable, accesible y seguro para niños de 6 años.",
    chips: ["Testing de usuario", "QA", "Depuración", "Accesibilidad"],
  },
  {
    emoji: "🎮",
    step: "Fase 5 · Producto Final",
    title: "Implementación en la Expo Carrera",
    text: "El videojuego terminado se integra a la Estación 5. Los estudiantes configuran el entorno, preparan la presentación y defienden sus decisiones técnicas ante docentes, autoridades y la comunidad educativa.",
    chips: ["Expo Carrera 2026", "Comunicación técnica", "Presentación profesional"],
  },
  {
    emoji: "👦",
    step: "Fase 6 · Experiencia Educativa",
    title: "Uso por niños de primer grado",
    text: "El momento que da sentido a todo el proceso: niños de 6 y 7 años juegan los videojuegos diseñados para ellos, aprenden astronomía y se divierten. Los estudiantes ven el impacto real de lo que programaron.",
    chips: ["Impacto educativo real", "Primer grado", "Aprendizaje lúdico"],
  },
];
