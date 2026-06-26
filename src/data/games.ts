export interface Game {
  title: string;
  dev: string;
  initials: string;
  slug: string;
  category: string;
  weeks: string;
  objective: string;
  description: string;
  demoUrl?: string;
  image: string;
  tags: string[];
  gradient: string;
  color: string;
  highlight?: string;
}

function sortGames(g: Game[]) {
  return g.sort((a, b) => {
    if (a.demoUrl && !b.demoUrl) return -1;
    if (!a.demoUrl && b.demoUrl) return 1;
    return a.title.localeCompare(b.title, "es");
  });
}

export const games: Game[] = sortGames([
  {
    title: "Boom Cósmico",
    dev: "Benjamín Basiluk",
    initials: "BB",
    slug: "boom-cosmico",
    category: "Acción",
    weeks: "~3 sem.",
    objective:
      "Desarrollar coordinación y reconocimiento de constelaciones a través del juego.",
    description:
      "Controlá un cohete que recolecta estrellas para formar constelaciones mientras esquivás meteoritos. Poderes especiales, múltiples niveles y mecánica de puntuación progresiva.",
    image: "Boom Cosmico.png",
    tags: ["Python", "Pygame"],
    gradient: "linear-gradient(135deg,#4f7fff,#7c4dff)",
    color: "#4f7fff",
    highlight:
      "El desafío más grande fue hacer que el juego se sintiera justo para un nene de seis años: si era muy difícil se frustraba, si era muy fácil se aburría.",
  },
  {
    title: "ArcSpace",
    dev: "Ulises Sosa",
    initials: "US",
    slug: "arcspace",
    category: "Exploración",
    weeks: "~3 sem.",
    objective:
      "Familiarizar al niño con los astros del universo de forma visual e interactiva.",
    description:
      "Explorá el universo como astrónomo espacial equipado con un telescopio digital. Fotografiá planetas, estrellas y astros para completar tu álbum cósmico personal.",
    image: "ARCSPACE.png",
    tags: ["Python", "Pygame"],
    gradient: "linear-gradient(135deg,#00c8ff,#4f7fff)",
    color: "#00c8ff",
    highlight:
      "Quería que el niño sintiera que estaba descubriendo algo real, que cada astro que fotografiaba era un logro genuino de su exploración.",
  },
  {
    title: "SolarDefender",
    dev: "Nahuel Pedraza",
    initials: "NP",
    slug: "solar-defender",
    category: "Arcade",
    weeks: "~4 sem.",
    objective:
      "Aprender los planetas del Sistema Solar a través de la acción y el progreso por niveles.",
    description:
      "Sos un astronauta que defiende el sistema solar viajando de planeta en planeta. Mercurio, Venus, Marte, Júpiter y Saturno. Cada uno con 3 fases de dificultad creciente.",
    image: "Solar Defender.png",
    tags: ["Python", "Pygame"],
    gradient: "linear-gradient(135deg,#ff6b6b,#ff9f43)",
    color: "#ff6b6b",
    highlight:
      "Lo más desafiante fue que el juego enseñara los planetas de manera divertida.",
  },
  {
    title: "El Cielo Cordobés",
    dev: "Aleida Appendino",
    initials: "AA",
    slug: "el-cielo-cordobes",
    category: "Educativo",
    weeks: "~3 sem.",
    objective:
      "Enseñar las constelaciones visibles desde Córdoba de forma lúdica e interactiva.",
    description:
      "Guiado por Lumina, una simpática estrella exploradora, conectá estrellas en el orden correcto para formar las 12 constelaciones del cielo cordobés. Datos curiosos incluidos.",
    image: "el cielo cordobez.png",
    tags: ["Python", "Pygame"],
    gradient: "linear-gradient(135deg,#4fbb7c,#00c8ff)",
    color: "#4fbb7c",
    highlight:
      "Elegí hacer el cielo de Córdoba porque quería que los chicos supieran que la astronomía también la pueden vivir desde su patio, mirando arriba.",
  },
  {
    title: "¡Viaje Galáctico!",
    dev: "Marcos Zingaretti",
    initials: "MZ",
    slug: "sistema-solar",
    category: "Simulación",
    weeks: "~5 sem.",
    objective:
      "Visualizar el Sistema Solar con precisión científica de forma accesible.",
    description:
      "Simulación en tiempo real del Sistema Solar con datos orbitales reales. Explorá cada planeta, sus lunas, velocidades de traslación y datos científicos de forma interactiva.",
    image: "Viaje Galactico.png",
    demoUrl: "https://viaje-galactico.vercel.app",
    tags: ["Python", "Pygame"],
    gradient: "linear-gradient(135deg,#7c4dff,#4f7fff)",
    color: "#7c4dff",
    highlight:
      "El Sistema Solar tiene proporciones imposibles de representar a escala real. Aprendí que en visualización científica hay que elegir entre precisión y comprensión.",
  },
  {
    title: "Cartas Espaciales",
    dev: "Ezequiel Stromberg & Celia Cassagne",
    initials: "ES",
    slug: "cartas-espaciales",
    category: "Memoria",
    weeks: "~2 sem.",
    objective:
      "Desarrollar la memoria visual y el reconocimiento de astros del Sistema Solar.",
    description:
      "Juego de memoria clásico ambientado en el espacio exterior. Encontrá todos los pares de cartas de planetas y astros antes de cometer demasiados errores. Con peligros espaciales sorpresa.",
    image: "cartas espaciales.png",
    tags: ["Python", "Pygame"],
    gradient: "linear-gradient(135deg,#ff9f43,#ff6b6b)",
    color: "#ff9f43",
    highlight:
      "El juego de memoria parece simple pero requirió pensar mucho la dificultad: demasiadas cartas abruman a un chico de seis años, muy pocas lo aburren.",
  },
  {
    title: "Preguntados Kids 🚀",
    dev: "Santiago Martino",
    initials: "SM",
    slug: "preguntados-kids",
    category: "Trivia",
    weeks: "~3 sem.",
    objective:
      "Acercar el conocimiento astronómico a niños de 6 años con soporte visual y auditivo.",
    description:
      "Trivia astronómica diseñada para primer grado. Estética colorida, guía de audio, tres opciones de respuesta y sistema de recompensas que nunca penaliza el error para fomentar la exploración.",
    image: "Astro-Kids.png",
    tags: ["Python", "Pygame", "Audio"],
    gradient: "linear-gradient(135deg,#4fbb7c,#4f7fff)",
    color: "#4fbb7c",
    highlight:
      "Aprendí que diseñar para niños es un desafío de UX enorme. Todo tiene que comunicarse visualmente y con sonido, sin depender del texto.",
  },
  {
    title: "Stellar Scrap",
    dev: "Agustín Godoy",
    initials: "AG",
    slug: "stellar-scrap",
    category: "Aventura",
    weeks: "~4 sem.",
    objective:
      "Explorar la galaxia descubriendo astros, planetas y fenómenos cósmicos.",
    description:
      "Una aventura galáctica interactiva donde el jugador viaja por diferentes sectores del universo descubriendo planetas, nebulosas y fenómenos astronómicos con mecánicas de exploración progresiva.",
    image: "Stellar Scrap.png",
    tags: ["Python", "Pygame"],
    gradient: "linear-gradient(135deg,#00c8ff,#7c4dff)",
    color: "#00c8ff",
    highlight:
      "Quería que el juego sintiera como un viaje de verdad. Que cada sector del universo fuera visualmente diferente y que el jugador tuviera razones para seguir explorando.",
  },
]);
