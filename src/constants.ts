export interface PDA {
  id: string;
  descripcion: string;
}

export interface Contenido {
  id: string;
  titulo: string;
  pdas: PDA[];
}

export interface CampoFormativo {
  id: string;
  nombre: string;
  contenidos: Contenido[];
}

export const CURRICULO: CampoFormativo[] = [
  {
    id: "lenguajes",
    nombre: "Lenguajes",
    contenidos: [
      {
        id: "l1",
        titulo: "Escritura de nombres en la lengua materna.",
        pdas: [
          { id: "l1-p1", descripcion: "Escribe su nombre y lo compara con los nombres de sus compañeros, lo usa para indicar la autoría de sus trabajos, marcar sus útiles escolares, registrar su asistencia, entre otros." },
          { id: "l1-p2", descripcion: "Identifica nombres más largos o cortos que el suyo, nombres que empiezan o terminan con la misma letra que el suyo, sus iniciales, el común de sus apellidos, etc." }
        ]
      },
      {
        id: "l2",
        titulo: "Descripción de objetos, personas, seres vivos y lugares.",
        pdas: [
          { id: "l2-p1", descripcion: "Describe de manera oral y/o escrita, en su lengua materna, objetos, personas, seres vivos y lugares que conoce en su contexto real o en la fantasía." },
          { id: "l2-p2", descripcion: "Representa objetos, personas, seres vivos y lugares de forma plástica, sonora, corporal, teatral o por medio de otros lenguajes artísticos." }
        ]
      },
      {
        id: "l3",
        titulo: "Uso de elementos y convenciones de la escritura presentes en la cotidianidad.",
        pdas: [
          { id: "l3-p1", descripcion: "Comprende que se escribe de izquierda a derecha y de arriba abajo." },
          { id: "l3-p2", descripcion: "Distingue letras de números, u otros signos o marcas gráficas que identifica en textos de uso cotidiano." },
          { id: "l3-p3", descripcion: "Reconoce espacios entre palabras y comienza a utilizar signos de puntuación." }
        ]
      },
      {
        id: "l4",
        titulo: "Uso del dibujo y/o la escritura para recordar actividades y acuerdos escolares.",
        pdas: [
          { id: "l4-p1", descripcion: "Escribe y/o dibuja para realizar tareas en casa, recordar mensajes, llevar materiales a clase, registrar acuerdos, etc." }
        ]
      },
      {
        id: "l5",
        titulo: "Registro y/o resumen de información consultada en fuentes orales, escritas, audiovisuales, táctiles o sonoras.",
        pdas: [
          { id: "l5-p1", descripcion: "Registra sobre un tema de su interés, por medio de la escritura, esquema, dibujo, fotografía y video, a partir de la escucha, lectura, observación u otra manera de interactuar con alguna fuente de información." }
        ]
      },
      {
        id: "l6",
        titulo: "Empleo de textos con instrucciones para participar en juegos, usar o elaborar objetos, preparar alimentos u otros propósitos.",
        pdas: [
          { id: "l6-p1", descripcion: "Sigue instrucciones, orales o escritas, para preparar un alimento sencillo y saludable (receta), utilizar o construir un objeto y participar en un juego o alguna otra actividad." },
          { id: "l6-p2", descripcion: "Explica a sus compañeros las instrucciones que siguió y revisa el proceso, así como el resultado." }
        ]
      },
      {
        id: "l7",
        titulo: "Comprensión y producción de textos expositivos (problema-solución, comparación-contraste, causa-consecuencia y enumeración).",
        pdas: [
          { id: "l7-p1", descripcion: "Identifica la intención comunicativa de los textos expositivos." },
          { id: "l7-p2", descripcion: "Participa en la elaboración de textos expositivos en los que se planteen: problema-solución, comparación-contraste, causa-consecuencia y enumeración." }
        ]
      },
      {
        id: "l8",
        titulo: "Búsqueda y manejo reflexivo de información.",
        pdas: [
          { id: "l8-p1", descripcion: "Formula preguntas sobre el tema de interés y localiza información en diversas fuentes." }
        ]
      },
      {
        id: "l9",
        titulo: "Comunicación a distancia con familiares u otras personas.",
        pdas: [
          { id: "l9-p1", descripcion: "Participa con ideas en la elaboración de mensajes para personas que se encuentran lejos, utilizando diversos medios." }
        ]
      },
      {
        id: "l10",
        titulo: "Conversaciones o entrevistas con personas de la comunidad y otros lugares.",
        pdas: [
          { id: "l10-p1", descripcion: "Formula preguntas para obtener la información que desea y escucha atentamente las respuestas." }
        ]
      },
      {
        id: "l11",
        titulo: "Reconocimiento de la diversidad lingüística y cultural en la familia, la escuela y el resto de la comunidad.",
        pdas: [
          { id: "l11-p1", descripcion: "Identifica que las personas hablan de manera distinta y que existen otras lenguas además de la suya." }
        ]
      },
      {
        id: "l12",
        titulo: "Exploración de testimonios escritos, fotográficos y audiovisuales del pasado familiar y comunitario.",
        pdas: [
          { id: "l12-p1", descripcion: "Expresa lo que sabe de su familia o de su comunidad, a partir de lo que observa en fotografías, escucha en relatos o descubre en objetos." }
        ]
      },
      {
        id: "l13",
        titulo: "Representación de distintas formas de ser y estar en el mundo a partir de la ficción.",
        pdas: [
          { id: "l13-p1", descripcion: "Lee de forma individual o colectiva textos que contienen seres imaginarios, para representarlos empleando diversos lenguajes." }
        ]
      },
      {
        id: "l14",
        titulo: "Narración de actividades y eventos relevantes que tengan lugar en la familia, la escuela o el resto de la comunidad.",
        pdas: [
          { id: "l14-p1", descripcion: "Relata historias relacionadas con actividades y eventos que tienen lugar en su entorno inmediato, cuidando el orden lógico de los hechos y el volumen de voz." }
        ]
      },
      {
        id: "l15",
        titulo: "Recreación de historias mediante el uso de lenguajes artísticos en juegos dramáticos y de representación.",
        pdas: [
          { id: "l15-p1", descripcion: "Interpreta historias sencillas mediante el uso de lenguajes artísticos, como el teatro, la danza o la música." }
        ]
      }
    ]
  },
  {
    id: "saberes",
    nombre: "Saberes y Pensamiento Científico",
    contenidos: [
      {
        id: "s1",
        titulo: "Cuerpo humano: estructura externa, acciones para su cuidado y sus cambios como parte del crecimiento.",
        pdas: [
          { id: "s1-p1", descripcion: "Compara y representa las partes externas del cuerpo humano, explica su funcionamiento; propone y practica acciones para cuidarlo y argumenta la frecuencia con que hay que llevarlas a cabo y por qué." },
          { id: "s1-p2", descripcion: "Describe sus características físicas y las de sus pares para favorecer el autoconocimiento y reconocer que todos los cuerpos son especiales, únicos e irrepetibles." }
        ]
      },
      {
        id: "s2",
        titulo: "Beneficios del consumo de alimentos saludables, de agua simple potable, y de la práctica de actividad física.",
        pdas: [
          { id: "s2-p1", descripcion: "Indaga y describe los beneficios de consumir alimentos saludables (frutas, verduras, cereales, leguminosas y de origen animal), y de beber agua simple potable para el adecuado funcionamiento del cuerpo." },
          { id: "s2-p2", descripcion: "Reconoce la importancia de realizar actividad física de manera regular." }
        ]
      },
      {
        id: "s3",
        titulo: "Características del entorno natural y sociocultural.",
        pdas: [
          { id: "s3-p1", descripcion: "Distingue, describe y registra, en su lengua materna, las características del entorno natural: plantas, animales, cuerpos de agua, si hace frío o calor, frecuencia de lluvias, sequías, entre otras." },
          { id: "s3-p2", descripcion: "Observa, compara y registra características de plantas y animales, como color, estructura y cubierta corporal, si son domésticos o silvestres; tienen flores, frutos o tienen espinas, raíces u otras características." }
        ]
      },
      {
        id: "s4",
        titulo: "Impacto de las actividades humanas en el entorno natural, así como acciones y prácticas socioculturales para su cuidado.",
        pdas: [
          { id: "s4-p1", descripcion: "Identifica actividades que se realizan en su comunidad y que tienen un impacto en la naturaleza, y propone acciones para su cuidado." }
        ]
      },
      {
        id: "s5",
        titulo: "Objetos del entorno: características, propiedades, estados físicos y usos en la vida cotidiana.",
        pdas: [
          { id: "s5-p1", descripcion: "Observa, manipula y compara diversos objetos a partir de características como color, tamaño, forma, textura, material de que están hechos (flexible, rígido, frágil, resistente) y si flotan o se hunden." }
        ]
      },
      {
        id: "s6",
        titulo: "Efectos de la aplicación de fuerzas: movimiento y deformación.",
        pdas: [
          { id: "s6-p1", descripcion: "Observa y describe los efectos de fuerzas en objetos del entorno: cambios en el movimiento (reposo, dirección, rapidez) y cambios en la forma (deformación)." }
        ]
      },
      {
        id: "s7",
        titulo: "Características del sonido y la luz.",
        pdas: [
          { id: "s7-p1", descripcion: "Indaga y describe características del sonido: tono, intensidad y duración." },
          { id: "s7-p2", descripcion: "Explora y describe características de la luz: color, intensidad y dirección." }
        ]
      },
      {
        id: "s8",
        titulo: "Cambios y regularidades de fenómenos naturales y actividades de las personas.",
        pdas: [
          { id: "s8-p1", descripcion: "Reconoce la sucesión del día y la noche a partir de la observación de la presencia del Sol y la Luna, y la relaciona con actividades cotidianas." }
        ]
      },
      {
        id: "s9",
        titulo: "Estudio de los números.",
        pdas: [
          { id: "s9-p1", descripcion: "Expresa oralmente la sucesión numérica en su lengua materna y en español, primero hasta 20, luego hasta 40, posteriormente hasta 60 y finalmente hasta 120 elementos, de manera ascendente y descendente a partir de un número dado." },
          { id: "s9-p2", descripcion: "A través de situaciones cotidianas, cuenta, ordena, representa de diferentes formas, interpreta lee y escribe la cantidad de elementos de una colección, primero de hasta 5, después hasta 10 y paulatinamente de hasta 100 elementos." }
        ]
      },
      {
        id: "s10",
        titulo: "Construcción de la noción de suma y resta, y su relación como operaciones inversas.",
        pdas: [
          { id: "s10-p1", descripcion: "Reconoce, a partir de la resolución de situaciones que implican agregar, quitar, juntar, comparar y completar, que la suma es el total de dos o más cantidades y la resta como la pérdida de elementos en una colección." }
        ]
      },
      {
        id: "s11",
        titulo: "Cuerpos geométricos y sus características.",
        pdas: [
          { id: "s11-p1", descripcion: "Observa y manipula objetos de su entorno para identificar y describir líneas rectas o curvas, caras planas o curvas; los representa mediante dibujos." }
        ]
      },
      {
        id: "s12",
        titulo: "Figuras geométricas y sus características.",
        pdas: [
          { id: "s12-p1", descripcion: "Representa animales, plantas u objetos utilizando el tangram y otras figuras geométricas, para reconocer y describir oralmente y por escrito sus nombres y propiedades (forma y número de lados y vértices)." }
        ]
      },
      {
        id: "s13",
        titulo: "Medición de la longitud, masa y capacidad.",
        pdas: [
          { id: "s13-p1", descripcion: "Compara la longitud de objetos de manera directa e indirecta con apoyo de un intermediario (cuerda, palitos); determina cuál es el más largo, el más corto o si son iguales y lo expresa en su lengua materna y en español." }
        ]
      },
      {
        id: "s14",
        titulo: "Medición del tiempo.",
        pdas: [
          { id: "s14-p1", descripcion: "Utiliza términos como antes, después, hoy, ayer, mañana, etc., en su lengua materna y en español, para describir y registrar actividades en una semana, mes y año." }
        ]
      },
      {
        id: "s15",
        titulo: "Organización e interpretación de datos.",
        pdas: [
          { id: "s15-p1", descripcion: "Elabora registros de datos mediante dibujos, símbolos o pictogramas, para responder preguntas de su interés." }
        ]
      }
    ]
  },
  {
    id: "etica",
    nombre: "Ética, Naturaleza y Sociedades",
    contenidos: [
      {
        id: "e1",
        titulo: "Valoración de la naturaleza: Respeto, cuidado y empatía hacia la naturaleza, como parte de un todo interdependiente.",
        pdas: [
          { id: "e1-p1", descripcion: "Describe la existencia de otros seres vivos y componentes de la naturaleza presentes en el lugar donde vive." },
          { id: "e1-p2", descripcion: "Analiza las formas de interactuar con la naturaleza que causan deterioro, como el consumo excesivo de recursos naturales y la generación de basura, así como el impacto en la vida de otros seres vivos." },
          { id: "e1-p3", descripcion: "Propone acciones de respeto y cuidado hacia la naturaleza." }
        ]
      },
      {
        id: "e2",
        titulo: "Impacto de las actividades humanas en la naturaleza y sustentabilidad.",
        pdas: [
          { id: "e2-p1", descripcion: "Identifica actividades que se realizan en su comunidad y que tienen un impacto en la naturaleza, y propone acciones para su cuidado." }
        ]
      },
      {
        id: "e3",
        titulo: "Cambios en la naturaleza del lugar donde vive, y su relación con las actividades humanas cotidianas.",
        pdas: [
          { id: "e3-p1", descripcion: "Identifica cambios en la naturaleza del lugar donde vive, y los relaciona con actividades humanas cotidianas asociadas a ciclos agrícolas y festividades." }
        ]
      },
      {
        id: "e4",
        titulo: "Los seres humanos son diversos y valiosos y tienen derechos humanos.",
        pdas: [
          { id: "e4-p1", descripcion: "Reconoce que todas las personas son únicas, valiosas y tienen derechos humanos, sin importar su origen, género, edad o condición." }
        ]
      },
      {
        id: "e5",
        titulo: "Atención a las necesidades básicas, como parte de los derechos humanos.",
        pdas: [
          { id: "e5-p1", descripcion: "Relaciona la atención de sus necesidades básicas (alimentación, salud, vivienda, entre otras) con el ejercicio de sus derechos humanos." }
        ]
      },
      {
        id: "e6",
        titulo: "Situaciones de injusticia o discriminación en la familia, la escuela o la comunidad.",
        pdas: [
          { id: "e6-p1", descripcion: "Identifica situaciones de injusticia o discriminación y expresa su opinión al respecto." }
        ]
      },
      {
        id: "e7",
        titulo: "Responsabilidad compartida en el cuidado de sí y del entorno cercano.",
        pdas: [
          { id: "e7-p1", descripcion: "Identifica y asume responsabilidades en el cuidado de sí mismo y de su entorno cercano (familia, escuela, comunidad)." }
        ]
      },
      {
        id: "e8",
        titulo: "Historia personal y familiar, diversidad de familias y el derecho a pertenecer a una.",
        pdas: [
          { id: "e8-p1", descripcion: "Indaga en diversas fuentes orales, escritas, digitales, objetos y testimonios, para construir su historia personal y familiar y la representa por medio de dibujos y líneas del tiempo." }
        ]
      },
      {
        id: "e9",
        titulo: "Sentido de pertenencia a la familia y la comunidad.",
        pdas: [
          { id: "e9-p1", descripcion: "Identifica elementos que le dan sentido de pertenencia a su familia y a su comunidad." }
        ]
      },
      {
        id: "e10",
        titulo: "El derecho a la igualdad de género y a una vida libre de violencia.",
        pdas: [
          { id: "e10-p1", descripcion: "Analiza situaciones de injusticia y discriminación que afectan a niñas y mujeres y propone acciones para la igualdad." }
        ]
      },
      {
        id: "e11",
        titulo: "Funciones y responsabilidades de las autoridades para la organización de la convivencia.",
        pdas: [
          { id: "e11-p1", descripcion: "Identifica las funciones y responsabilidades de las autoridades en su entorno cercano." }
        ]
      },
      {
        id: "e12",
        titulo: "Situaciones de la vida cotidiana en las que niñas y niños pueden o no tomar decisiones.",
        pdas: [
          { id: "e12-p1", descripcion: "Identifica situaciones en las que puede tomar decisiones y en las que requiere ayuda." }
        ]
      },
      {
        id: "e13",
        titulo: "El derecho a la salud y la prevención de enfermedades.",
        pdas: [
          { id: "e13-p1", descripcion: "Reconoce su derecho a la salud y la importancia de prevenir enfermedades." }
        ]
      }
    ]
  },
  {
    id: "humano",
    nombre: "De lo Humano y lo Comunitario",
    contenidos: [
      {
        id: "h1",
        titulo: "Formas de ser, pensar, actuar y relacionarse.",
        pdas: [
          { id: "h1-p1", descripcion: "Reconoce y descubre características y cambios (corporales, gustos, intereses, necesidades y capacidades) que lo hacen una persona única, con la finalidad de valorar y respetar la diversidad." }
        ]
      },
      {
        id: "h2",
        titulo: "Construcción del proyecto de vida.",
        pdas: [
          { id: "h2-p1", descripcion: "Explica situaciones cotidianas que se presentan en la escuela y la casa, con la intención de proponer acuerdos que generen una mejor convivencia." }
        ]
      },
      {
        id: "h3",
        titulo: "Educación integral de la sexualidad.",
        pdas: [
          { id: "h3-p1", descripcion: "Identifica y expresa sus emociones y sentimientos ante diferentes situaciones." }
        ]
      },
      {
        id: "h4",
        titulo: "Capacidades y habilidades motrices.",
        pdas: [
          { id: "h4-p1", descripcion: "Utiliza patrones básicos de movimiento ante situaciones que implican explorar los diferentes espacios, el tiempo y los objetos." }
        ]
      },
      {
        id: "h5",
        titulo: "Posibilidades cognitivas, expresivas, motrices, creativas y de relación.",
        pdas: [
          { id: "h5-p1", descripcion: "Explora sus posibilidades motrices y expresivas en situaciones lúdicas." }
        ]
      },
      {
        id: "h6",
        titulo: "Estilos de vida activos y saludables.",
        pdas: [
          { id: "h6-p1", descripcion: "Participa en diferentes juegos para explorar alternativas que le permitan mantener una vida activa y saludable." }
        ]
      },
      {
        id: "h7",
        titulo: "Pensamiento lúdico, divergente y creativo.",
        pdas: [
          { id: "h7-p1", descripcion: "Busca soluciones creativas a problemas que se le presentan en situaciones de juego y cotidianas." }
        ]
      },
      {
        id: "h8",
        titulo: "Interacción motriz.",
        pdas: [
          { id: "h8-p1", descripcion: "Colabora en juegos y actividades motrices para el logro de metas comunes." }
        ]
      },
      {
        id: "h9",
        titulo: "Acciones individuales que repercuten en la conservación y mejora de la salud.",
        pdas: [
          { id: "h9-p1", descripcion: "Reconoce la importancia de la higiene personal y la limpieza del entorno para la salud." }
        ]
      },
      {
        id: "h10",
        titulo: "Sentido de comunidad y satisfacción de necesidades humanas.",
        pdas: [
          { id: "h10-p1", descripcion: "Identifica necesidades humanas básicas y la importancia de la colaboración en la comunidad." }
        ]
      },
      {
        id: "h11",
        titulo: "Toma de decisiones y creatividad, ante problemas de la vida.",
        pdas: [
          { id: "h11-p1", descripcion: "Describe problemas de su vida cotidiana y propone soluciones creativas." }
        ]
      }
    ]
  }
];
