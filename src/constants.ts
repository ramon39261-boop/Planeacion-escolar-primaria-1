export interface PDA {
  id: string;
  descripcion: string;
  actividades?: string[];
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
          { 
            id: "l1-p1", 
            descripcion: "Escribe su nombre y lo compara con los nombres de sus compañeros, lo usa para indicar la autoría de sus trabajos, marcar sus útiles escolares, registrar su asistencia, entre otros.",
            actividades: [
              "Crear un gafete decorado con su nombre para usarlo en el salón.",
              "Juego de 'Encuentra tu nombre': buscar su tarjeta de nombre entre varias esparcidas en una mesa.",
              "Pasar lista colocando su nombre en un tablero de asistencia diario.",
              "Lotería de nombres: cantar los nombres de los alumnos para que los marquen en su tablero.",
              "Modelado de plastilina: formar las letras de su nombre con tiras de plastilina."
            ]
          },
          { 
            id: "l1-p2", 
            descripcion: "Identifica nombres más largos o cortos que el suyo, nombres que empiezan o terminan con la misma letra que el suyo, sus iniciales, el común de sus apellidos, etc.",
            actividades: [
              "Gráfica de nombres: clasificar nombres por número de letras (cortos y largos).",
              "Lotería de iniciales: identificar compañeros que comparten la misma letra inicial.",
              "Tren de nombres: formar una fila de tarjetas de nombres que rimen o terminen igual.",
              "Cacería de letras: buscar en el salón objetos que empiecen con la misma letra que su nombre.",
              "Escritura en el aire: trazar las iniciales de sus compañeros siguiendo el movimiento del docente."
            ]
          }
        ]
      },
      {
        id: "l2",
        titulo: "Descripción de objetos, personas, seres vivos y lugares.",
        pdas: [
          { 
            id: "l2-p1", 
            descripcion: "Describe de manera oral y/o escrita, en su lengua materna, objetos, personas, seres vivos y lugares que conoce en su contexto real o en la fantasía.",
            actividades: [
              "Adivina quién: describir a un compañero para que los demás adivinen de quién se trata.",
              "Bolsa misteriosa: tocar un objeto dentro de una bolsa y describirlo sin verlo.",
              "Mi lugar favorito: dibujar y describir oralmente el rincón preferido de su casa.",
              "Retrato hablado: describir a un familiar para que un compañero intente dibujarlo.",
              "Bitácora de campo: salir al patio y describir detalladamente una planta o insecto."
            ]
          },
          { 
            id: "l2-p2", 
            descripcion: "Representa objetos, personas, seres vivos y lugares de forma plástica, sonora, corporal, teatral o por medio de otros lenguajes artísticos.",
            actividades: [
              "Esculturas de plastilina: modelar un animal fantástico y explicar sus partes.",
              "Sonidos de la selva: imitar con la voz y objetos el ambiente de un lugar natural.",
              "Mímica de profesiones: representar acciones de personas de la comunidad sin hablar.",
              "Danza de los elementos: representar con el cuerpo el movimiento del agua, el fuego o el viento.",
              "Cuadro viviente: recrear una pintura famosa usando sus cuerpos y objetos del salón."
            ]
          }
        ]
      },
      {
        id: "l3",
        titulo: "Uso de elementos y convenciones de la escritura presentes en la cotidianidad.",
        pdas: [
          { 
            id: "l3-p1", 
            descripcion: "Comprende que se escribe de izquierda a derecha y de arriba abajo.",
            actividades: [
              "Lectura con dedo: seguir con el dedo la lectura de un cuento gigante frente al grupo.",
              "Caminitos de letras: trazar flechas que indiquen la dirección correcta de la escritura.",
              "Escritura en arena: practicar el trazo de líneas y letras siguiendo la dirección adecuada.",
              "Pintura con agua: usar pinceles y agua para 'escribir' en el patio siguiendo la dirección correcta.",
              "Carrera de flechas: colocar flechas en el piso y caminar sobre ellas de izquierda a derecha."
            ]
          },
          { 
            id: "l3-p2", 
            descripcion: "Distingue letras de números, u otros signos o marcas gráficas que identifica en textos de uso cotidiano.",
            actividades: [
              "Cacería de signos: buscar en periódicos y revistas letras, números y signos para recortarlos.",
              "Clasificador de símbolos: usar dos botes (uno para letras y otro para números) y clasificar tarjetas.",
              "Detective de etiquetas: observar empaques de productos y señalar qué son letras y qué son números.",
              "Collage de números: crear una obra de arte usando solo recortes de números de diferentes tamaños.",
              "Bingo de letras: identificar letras específicas en una cuadrícula mientras el docente las nombra."
            ]
          },
          { 
            id: "l3-p3", 
            descripcion: "Reconoce espacios entre palabras y comienza a utilizar signos de puntuación.",
            actividades: [
              "Palabras con 'frijolitos': colocar un frijol o semilla entre palabras escritas para visualizar el espacio.",
              "Aplausos por palabra: dar un aplauso cada vez que termina una palabra en una oración leída.",
              "Semáforo de puntos: colocar un círculo rojo al final de cada oración (punto final).",
              "Saltos de espacio: dar un salto entre palabras gigantes escritas en el suelo.",
              "Caza de puntos: rodear con color rojo todos los puntos finales que encuentren en una página de un libro."
            ]
          }
        ]
      },
      {
        id: "l4",
        titulo: "Uso del dibujo y/o la escritura para recordar actividades y acuerdos escolares.",
        pdas: [
          { 
            id: "l4-p1", 
            descripcion: "Escribe y/o dibuja para realizar tareas en casa, recordar mensajes, llevar materiales a clase, registrar acuerdos, etc.",
            actividades: [
              "Agenda del día: dibujar las actividades que haremos hoy.",
              "Recadito para casa: escribir una palabra clave para recordar traer un material.",
              "Mural de acuerdos: dibujar las reglas del salón.",
              "Lista de materiales: dibujar los objetos necesarios para un experimento y tacharlos al traerlos.",
              "Calendario de tareas: marcar con un dibujo el día que deben entregar un trabajo especial."
            ]
          }
        ]
      },
      {
        id: "l5",
        titulo: "Registro y/o resumen de información consultada en fuentes orales, escritas, audiovisuales, táctiles o sonoras.",
        pdas: [
          { 
            id: "l5-p1", 
            descripcion: "Registra sobre un tema de su interés, por medio de la escritura, esquema, dibujo, fotografía y video, a partir de la escucha, lectura, observación u otra manera de interactuar con alguna fuente de información.",
            actividades: [
              "Investigadores de animales: ver un video corto y dibujar lo que aprendieron.",
              "Entrevista a un experto: escuchar a un abuelo contar una historia y registrarla con dibujos.",
              "Esquema de la planta: observar una planta y registrar sus partes en un dibujo.",
              "Galería de fotos: tomar fotos de insectos en el jardín y explicar qué observaron.",
              "Mapa de sonidos: cerrar los ojos, escuchar los sonidos del patio y dibujarlos en un mapa."
            ]
          }
        ]
      },
      {
        id: "l6",
        titulo: "Empleo de textos con instrucciones para participar en juegos, usar o elaborar objetos, preparar alimentos u otros propósitos.",
        pdas: [
          { 
            id: "l6-p1", 
            descripcion: "Sigue instrucciones, orales o escritas, para preparar un alimento sencillo y saludable (receta), utilizar o construir un objeto y participar en un juego o alguna otra actividad.",
            actividades: [
              "Cocinando ensalada: seguir los pasos de una receta ilustrada.",
              "Armado de juguete: seguir instrucciones para hacer un avión de papel.",
              "Juego de mesa: leer o escuchar las reglas de un juego nuevo y jugar.",
              "Manual de convivencia: ilustrar los pasos para resolver un conflicto en el aula.",
              "Instrucciones de siembra: seguir los pasos para plantar una semilla en una maceta."
            ]
          },
          { 
            id: "l6-p2", 
            descripcion: "Explica a sus compañeros las instrucciones que siguió y revisa el proceso, así como el resultado.",
            actividades: [
              "Explicando mi receta: contar a un compañero cómo preparó su ensalada.",
              "Revisión de pasos: marcar con una palomita las instrucciones que ya completó.",
              "Círculo de reflexión: compartir qué fue lo más difícil de seguir las instrucciones.",
              "Tutoría entre pares: enseñar a un compañero de otro grado a jugar un juego siguiendo las reglas.",
              "Video-tutorial: grabar un video corto explicando cómo armaron su juguete."
            ]
          }
        ]
      },
      {
        id: "l7",
        titulo: "Comprensión y producción de textos expositivos (problema-solución, comparación-contraste, causa-consecuencia y enumeración).",
        pdas: [
          { 
            id: "l7-p1", 
            descripcion: "Identifica la intención comunicativa de los textos expositivos.",
            actividades: [
              "Exploradores de libros: hojear libros informativos y cuentos para notar diferencias.",
              "Búsqueda de porqués: identificar en un texto corto por qué llueve.",
              "Comparando animales: notar diferencias entre un perro y un gato en un texto.",
              "Detective de noticias: encontrar en un periódico escolar qué pasó y por qué.",
              "Mesa de curiosidades: observar objetos y leer pequeñas fichas informativas sobre ellos."
            ]
          },
          { 
            id: "l7-p2", 
            descripcion: "Participa en la elaboración de textos expositivos en los que se planteen: problema-solución, comparación-contraste, causa-consecuencia y enumeración.",
            actividades: [
              "Cartel de problema-solución: dibujar un problema del salón y su solución.",
              "Tabla comparativa: pegar imágenes de día y noche para contrastar.",
              "Línea de causa-efecto: dibujar qué pasa si no regamos una planta.",
              "Infografía del agua: crear un esquema que muestre el ciclo del agua de forma sencilla.",
              "Diccionario de clase: elaborar una lista de palabras nuevas con sus definiciones y dibujos."
            ]
          }
        ]
      },
      {
        id: "l8",
        titulo: "Búsqueda y manejo reflexivo de información.",
        pdas: [
          { 
            id: "l8-p1", 
            descripcion: "Formula preguntas sobre el tema de interés y localiza información en diversas fuentes.",
            actividades: [
              "Muro de preguntas: escribir o dictar preguntas sobre los dinosaurios.",
              "Visita a la biblioteca: buscar libros que hablen sobre el tema elegido.",
              "Entrevista escolar: preguntar al director sobre su trabajo.",
              "Búsqueda del tesoro informativo: encontrar un dato específico en un libro marcado.",
              "Caja de curiosidades: traer de casa un recorte de revista sobre un tema que les guste."
            ]
          }
        ]
      },
      {
        id: "l9",
        titulo: "Comunicación a distancia con familiares u otras personas.",
        pdas: [
          { 
            id: "l9-p1", 
            descripcion: "Participa con ideas en la elaboración de mensajes para personas que se encuentran lejos, utilizando diversos medios.",
            actividades: [
              "Carta al futuro: dictar un mensaje para ellos mismos cuando sean grandes.",
              "Audio-mensaje: grabar un saludo para un compañero que faltó.",
              "Correo de la amistad: hacer dibujos para niños de otro salón.",
              "Video-llamada simulada: practicar qué decir en una llamada a un familiar lejano.",
              "Postal de viaje: dibujar un lugar que les gustaría visitar y escribir un saludo corto."
            ]
          }
        ]
      },
      {
        id: "l10",
        titulo: "Conversaciones o entrevistas con personas de la comunidad y otros lugares.",
        pdas: [
          { 
            id: "l10-p1", 
            descripcion: "Formula preguntas para obtener la información que desea y escucha atentamente las respuestas.",
            actividades: [
              "Pequeños reporteros: entrevistar a la cocinera de la escuela.",
              "Preguntas de curiosidad: formular 3 preguntas para un bombero invitado.",
              "Escucha activa: dibujar la respuesta más interesante que recibieron.",
              "Entrevista a un oficio: invitar a un panadero o carpintero y preguntarle sobre sus herramientas.",
              "Juego de la silla caliente: un alumno es el 'experto' y los demás le hacen preguntas sobre un tema visto."
            ]
          }
        ]
      },
      {
        id: "l11",
        titulo: "Reconocimiento de la diversidad lingüística y cultural en la familia, la escuela y el resto de la comunidad.",
        pdas: [
          { 
            id: "l11-p1", 
            descripcion: "Identifica que las personas hablan de manera distinta y que existen otras lenguas además de la suya.",
            actividades: [
              "Mapa de lenguas: escuchar saludos en diferentes lenguas indígenas de México.",
              "Palabras prestadas: identificar palabras que usamos y vienen de otras lenguas (ej. chocolate).",
              "Invitado bilingüe: escuchar a alguien hablar en su lengua materna distinta al español.",
              "Lotería en náhuatl: aprender nombres de animales en una lengua indígena jugando.",
              "Cancionero diverso: escuchar y tratar de seguir el ritmo de una canción en una lengua distinta."
            ]
          }
        ]
      },
      {
        id: "l12",
        titulo: "Exploración de testimonios escritos, fotográficos y audiovisuales del pasado familiar y comunitario.",
        pdas: [
          { 
            id: "l12-p1", 
            descripcion: "Expresa lo que sabe de su familia o de su comunidad, a partir de lo que observa en fotografías, escucha en relatos o descubre en objetos.",
            actividades: [
              "Museo del aula: traer un objeto antiguo de casa y contar su historia.",
              "Álbum de fotos: describir qué pasaba en una foto de cuando eran bebés.",
              "Relatos de abuelos: escuchar una leyenda local contada por un familiar.",
              "Línea de vida: ordenar dibujos de eventos importantes desde que nacieron hasta hoy.",
              "Entrevista familiar: preguntar a sus padres a qué jugaban cuando eran niños y compartirlo."
            ]
          }
        ]
      },
      {
        id: "l13",
        titulo: "Representación de distintas formas de ser y estar en el mundo a partir de la ficción.",
        pdas: [
          { 
            id: "l13-p1", 
            descripcion: "Lee de forma individual o colectiva textos que contienen seres imaginarios, para representarlos empleando diversos lenguajes.",
            actividades: [
              "Lectura de monstruos: leer sobre seres fantásticos y dibujarlos.",
              "Teatro de sombras: representar a un personaje imaginario con las manos.",
              "Disfraz creativo: usar materiales reciclados para convertirse en un ser de ficción.",
              "Cuento corporal: representar con movimientos una historia sin usar palabras.",
              "Máscaras de fantasía: crear una máscara de un personaje que no existe en la realidad."
            ]
          }
        ]
      },
      {
        id: "l14",
        titulo: "Narración de actividades y eventos relevantes que tengan lugar en la familia, la escuela o el resto de la comunidad.",
        pdas: [
          { 
            id: "l14-p1", 
            descripcion: "Relata historias relacionadas con actividades y eventos que tienen lugar en su entorno inmediato, cuidando el orden lógico de los hechos y el volumen de voz.",
            actividades: [
              "Noticiero escolar: contar qué pasó en el recreo como si fuera una noticia.",
              "Cuento de mi familia: narrar una anécdota divertida que pasó en casa.",
              "Línea del evento: ordenar dibujos de lo que pasó en el festival escolar.",
              "Cápsula del tiempo: dibujar un evento de hoy para 'abrirlo' al final del año.",
              "Relato encadenado: empezar una historia sobre un paseo y que cada compañero agregue un hecho lógico."
            ]
          }
        ]
      },
      {
        id: "l15",
        titulo: "Recreación de historias mediante el uso de lenguajes artísticos en juegos dramáticos y de representación.",
        pdas: [
          { 
            id: "l15-p1", 
            descripcion: "Interpreta historias sencillas mediante el uso de lenguajes artísticos, como el teatro, la danza o la música.",
            actividades: [
              "Obra de títeres: representar un cuento clásico con calcetines.",
              "Danza de animales: moverse al ritmo de música imaginando ser un animal.",
              "Concierto de historias: usar instrumentos para dar sonido a un relato.",
              "Pintura musical: escuchar una melodía y pintar los personajes que imaginan en la historia.",
              "Mímica de cuentos: representar escenas de un cuento conocido para que los demás adivinen cuál es."
            ]
          }
        ]
      },
      {
        id: "l16",
        titulo: "Lectura compartida en voz alta.",
        pdas: [
          { 
            id: "l16-p1", 
            descripcion: "Reconoce que se lee y escribe de izquierda a derecha y de arriba a abajo.",
            actividades: [
              "Carrera de lectura: seguir con el dedo un texto mientras el docente lee rápido o lento.",
              "Flechas de dirección: colocar flechas en un texto para recordar por dónde empezar.",
              "Lectura invertida: jugar a intentar leer de derecha a izquierda para notar que no se entiende.",
              "Dedo saltarín: seguir la lectura de un poema y saltar con el dedo al cambiar de línea.",
              "Lectura de mural: identificar la dirección de lectura en carteles pegados en la escuela."
            ]
          },
          { 
            id: "l16-p2", 
            descripcion: "Sigue la lectura en textos impresos y presta atención a la pronunciación y entonación.",
            actividades: [
              "Eco de lectura: repetir frases que el docente lee con diferentes entonaciones.",
              "Teatro leído: leer diálogos sencillos con voces de personajes.",
              "Atención al tono: levantar la mano cuando escuchen una pregunta en la lectura.",
              "Voces locas: leer una frase con voz de gigante, de ratón o de robot.",
              "Grabadora de voz: escucharse a sí mismos leyendo y notar su entonación."
            ]
          },
          { 
            id: "l16-p3", 
            descripcion: "Lee en voz alta, para otros, textos de su interés y de otros.",
            actividades: [
              "Rincón del lector: elegir un cuento y 'leérselo' a un peluche o compañero.",
              "Lectura de imágenes: narrar la historia de un libro álbum a todo el grupo.",
              "Micrófono abierto: pasar al frente a leer una palabra o frase favorita.",
              "Lectura a los más pequeños: visitar el grupo de preescolar para leerles un cuento corto.",
              "Recomendación del día: elegir un libro y decir por qué les gustó a sus compañeros."
            ]
          },
          { 
            id: "l16-p4", 
            descripcion: "Identifica la función de los signos de puntuación (punto, coma, signos de interrogación y admiración).",
            actividades: [
              "Semáforo de puntos: poner una estampa roja en cada punto y verde en cada mayúscula.",
              "Entonación de signos: leer una frase como pregunta y luego como exclamación.",
              "Caza de comas: buscar comas en un texto y hacer una pausa corta al verlas.",
              "Orquesta de signos: usar un triángulo musical para los puntos y maracas para las comas.",
              "Dibujando pausas: poner una línea curva donde sientan que deben respirar al leer."
            ]
          }
        ]
      },
      {
        id: "l17",
        titulo: "Lectura, escritura y otros tipos de interacción con recursos de los lenguajes que ocurren en la familia, la escuela y la comunidad.",
        pdas: [
          { 
            id: "l17-p1", 
            descripcion: "Explora portadores de texto que se encuentran en su ambiente familiar, escolar y comunitario.",
            actividades: [
              "Exploradores de etiquetas: leer nombres de productos en la cooperativa.",
              "Letreros de la calle: identificar señales de tránsito o nombres de tiendas cerca de la escuela.",
              "Buzón de mensajes: leer las notas que se dejan en el tablero del salón.",
              "Cacería de logotipos: identificar marcas conocidas y tratar de leer qué dicen.",
              "Menú del día: leer qué habrá de comer en el comedor o cooperativa."
            ]
          }
        ]
      },
      {
        id: "l18",
        titulo: "Interpretación de historias mediante el uso de lenguajes artísticos.",
        pdas: [
          { 
            id: "l18-p1", 
            descripcion: "Interpreta historias sencillas mediante el uso de lenguajes artísticos, como el teatro de títeres, la danza o la música.",
            actividades: [
              "Títeres de dedo: contar una historia breve usando personajes en los dedos.",
              "Baile de las estaciones: representar el otoño o la primavera con movimientos.",
              "Música de cuentos: elegir una canción que combine con la emoción de una historia.",
              "Sombras de animales: usar una sábana y una lámpara para representar una fábula.",
              "Ritmos de cuento: usar claves o tambores para marcar los pasos de los personajes."
            ]
          }
        ]
      },
      {
        id: "l19",
        titulo: "Producción de textos dirigidos a autoridades y personas de la comunidad.",
        pdas: [
          { 
            id: "l19-p1", 
            descripcion: "Identifica necesidades de su entorno y participa en la elaboración de textos para solicitar apoyo o informar.",
            actividades: [
              "Carta al director: solicitar material para el patio mediante un dibujo y firmas.",
              "Cartel informativo: avisar a la comunidad escolar sobre el cuidado del agua.",
              "Petición de apoyo: escribir una nota para pedir ayuda a los padres en una actividad.",
              "Buzón de sugerencias: escribir una idea para mejorar el recreo y ponerla en una caja.",
              "Invitación formal: elaborar una invitación para que el director visite su exposición de arte."
            ]
          }
        ]
      },
      {
        id: "l20",
        titulo: "Experimentación con elementos visuales y sonoros en producciones colectivas artísticas.",
        pdas: [
          { 
            id: "l20-p1", 
            descripcion: "Participa en la creación de producciones artísticas colectivas, experimentando con diversos materiales y sonidos.",
            actividades: [
              "Mural colectivo: pintar entre todos un paisaje usando diferentes técnicas.",
              "Orquesta de objetos: crear ritmos usando botes, palos y semillas en grupo.",
              "Escultura de grupo: armar una figura gigante con cajas de cartón entre todos.",
              "Tapete de texturas: pegar diferentes materiales en un cartón grande para tocarlo con los pies.",
              "Instalación sonora: colgar objetos metálicos y de madera para que el viento haga música."
            ]
          }
        ]
      },
      {
        id: "l21",
        titulo: "Reflexión sobre los lenguajes artísticos en la vida cotidiana.",
        pdas: [
          { 
            id: "l21-p1", 
            descripcion: "Reconoce elementos de los lenguajes artísticos (formas, colores, sonidos, movimientos) en su entorno cotidiano.",
            actividades: [
              "Cacería de colores: buscar objetos de un color específico en el salón.",
              "Formas en las nubes: observar el cielo y describir qué figuras ven.",
              "Sonidos del entorno: cerrar los ojos e identificar 3 sonidos diferentes de la calle.",
              "Texturas del patio: frotar un crayón sobre papel colocado en el tronco de un árbol o pared.",
              "Ritmo de mi corazón: escuchar los latidos después de correr y compararlos con el reposo."
            ]
          }
        ]
      },
      {
        id: "l22",
        titulo: "Interacción con manifestaciones culturales y artísticas.",
        pdas: [
          { 
            id: "l22-p1", 
            descripcion: "Explora manifestaciones culturales y artísticas de su comunidad y otros lugares, y comparte sus impresiones.",
            actividades: [
              "Visita virtual: ver fotos de una zona arqueológica o museo y comentar.",
              "Feria cultural: traer un objeto artesanal y explicar de dónde es.",
              "Galería de impresiones: dibujar lo que más les gustó de una danza tradicional vista en video.",
              "Taller de barro: intentar crear una pieza inspirada en la alfarería local.",
              "Música del mundo: escuchar instrumentos exóticos (sitar, didgeridoo) y dibujar qué imaginan."
            ]
          }
        ]
      },
      {
        id: "l23",
        titulo: "Apreciación de canciones, rondas infantiles, arrullos y cuentos.",
        pdas: [
          { 
            id: "l23-p1", 
            descripcion: "Escucha y disfruta de canciones, rondas infantiles, arrullos y cuentos, y expresa lo que le hacen sentir.",
            actividades: [
              "Canto de cuna: escuchar arrullos y mecer a un muñeco imaginario.",
              "Ronda de juegos: participar en 'Naranja dulce' o 'Doña Blanca'.",
              "Dibujo de sentimientos: escuchar una canción triste y una alegre, y dibujar qué sintieron.",
              "Cuento con linterna: apagar las luces y leer un cuento usando solo una pequeña luz.",
              "Inventando estrofas: cambiar una parte de una canción conocida por una idea propia."
            ]
          }
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
          { 
            id: "s1-p1", 
            descripcion: "Compara y representa las partes externas del cuerpo humano, explica su funcionamiento; propone y practica acciones para cuidarlo y argumenta la frecuencia con que hay que llevarlas a cabo y por qué.",
            actividades: [
              "Rompecabezas del cuerpo: armar una figura humana identificando cabeza, tronco y extremidades.",
              "Simón dice (partes del cuerpo): juego motor para identificar rápidamente zonas corporales.",
              "Diario de salud: registrar cuántas veces al día se lavan las manos o los dientes.",
              "Silueta gigante: dibujar el contorno de un compañero en papel bond y señalar órganos externos.",
              "Carrera de sentidos: identificar objetos usando solo el tacto o el olfato."
            ]
          },
          { 
            id: "s1-p2", 
            descripcion: "Describe sus características físicas y las de sus pares para favorecer el autoconocimiento y reconocer que todos los cuerpos son especiales, únicos e irrepetibles.",
            actividades: [
              "Autorretrato frente al espejo: observar detalles de sus ojos, cabello y piel para dibujarse.",
              "Huellas dactilares: observar con lupa sus huellas y compararlas con las de otros para ver que son únicas.",
              "Mural de la diversidad: pegar fotos o dibujos de todos resaltando una cualidad física especial de cada uno.",
              "Gráfica de estaturas: medir a todos con una cinta y ver quién es más alto o bajo.",
              "Libro de 'Todo sobre mí': crear una página con su color de ojos, cabello y comida favorita."
            ]
          }
        ]
      },
      {
        id: "s2",
        titulo: "Beneficios del consumo de alimentos saludables, de agua simple potable, y de la práctica de actividad física.",
        pdas: [
          { 
            id: "s2-p1", 
            descripcion: "Indaga y describe los beneficios de consumir alimentos saludables (frutas, verduras, cereales, leguminosas y de origen animal), y de beber agua simple potable para el adecuado funcionamiento del cuerpo.",
            actividades: [
              "Semáforo de alimentos: clasificar imágenes de comida en verde (saludable), amarillo (moderado) y rojo (poco saludable).",
              "Cata de frutas: probar diferentes frutas y describir su sabor y textura.",
              "Cartel del agua: dibujar por qué es importante beber agua simple.",
              "Mercadito saludable: jugar a comprar y vender solo productos naturales.",
              "Chef de ensaladas: armar una ensalada creativa usando recortes de revistas."
            ]
          },
          { 
            id: "s2-p2", 
            descripcion: "Reconoce la importancia de realizar actividad física de manera regular.",
            actividades: [
              "Circuito de retos: realizar una serie de ejercicios (saltar, correr, gatear) en el patio.",
              "Baile de las estatuas: moverse al ritmo de música y detenerse cuando pare.",
              "Registro de movimiento: marcar en un calendario los días que hicieron ejercicio.",
              "Yoga de animales: imitar posturas de animales para estirar el cuerpo.",
              "Contador de pasos: usar un podómetro o contar pasos en una vuelta al patio."
            ]
          }
        ]
      },
      {
        id: "s3",
        titulo: "Características del entorno natural y sociocultural.",
        pdas: [
          { 
            id: "s3-p1", 
            descripcion: "Distingue, describe y registra, en su lengua materna, las características del entorno natural: plantas, animales, cuerpos de agua, si hace frío o calor, frecuencia de lluvias, sequías, entre otras.",
            actividades: [
              "Exploradores del jardín: observar plantas y animales pequeños con una lupa.",
              "Calendario del clima: registrar diariamente si está soleado, nublado o lluvioso con dibujos.",
              "Colección de hojas: recolectar diferentes tipos de hojas y clasificarlas por forma.",
              "Cazadores de nubes: identificar diferentes tipos de nubes y dibujarlas.",
              "Termómetro de sensaciones: salir al patio en diferentes momentos y registrar si sienten frío o calor."
            ]
          },
          { 
            id: "s3-p2", 
            descripcion: "Observa, compara y registra características de plantas y animales, como color, estructura y cubierta corporal, si son domésticos o silvestres; tienen flores, frutos o tienen espinas, raíces u otras características.",
            actividades: [
              "Álbum de animales: pegar estampas de animales y clasificarlos en domésticos o silvestres.",
              "Germinación de frijol: observar y registrar el crecimiento de una planta desde la semilla.",
              "Maqueta de hábitats: crear un pequeño escenario para un animal usando materiales naturales.",
              "Clasificación por cubiertas: agrupar animales por si tienen pelos, plumas, escamas o piel desnuda.",
              "Visitante botánico: invitar a un jardinero para que explique las partes de una planta real."
            ]
          }
        ]
      },
      {
        id: "s4",
        titulo: "Impacto de las actividades humanas en el entorno natural, así como acciones y prácticas socioculturales para su cuidado.",
        pdas: [
          { 
            id: "s4-p1", 
            descripcion: "Identifica actividades que se realizan en su comunidad y que tienen un impacto en la naturaleza, y propone acciones para su cuidado.",
            actividades: [
              "Mapa de basura: identificar lugares de la escuela donde se acumula basura y proponer botes.",
              "Cartel de ahorro: diseñar mensajes para recordar cerrar la llave del agua.",
              "Brigada de cuidado: realizar una jornada de riego de las plantas de la escuela.",
              "Cuento del río sucio: reflexionar sobre qué pasa con los peces cuando tiramos basura al agua.",
              "Inventores de reciclaje: crear un juguete nuevo usando solo materiales de desecho."
            ]
          }
        ]
      },
      {
        id: "s5",
        titulo: "Objetos del entorno: características, propiedades, estados físicos y usos en la vida cotidiana.",
        pdas: [
          { 
            id: "s5-p1", 
            descripcion: "Observa, manipula y compara diversos objetos a partir de características como color, tamaño, forma, textura, material de que están hechos (flexible, rígido, frágil, resistente) y si flotan o se hunden.",
            actividades: [
              "Laboratorio de flotación: predecir y probar qué objetos flotan o se hunden en una tina.",
              "Texturas táctiles: tocar diferentes materiales (algodón, lija, madera) con los ojos cerrados.",
              "Clasificador de materiales: agrupar objetos por si son rígidos o flexibles.",
              "Prueba de resistencia: intentar doblar o romper (con cuidado) diferentes materiales para ver su fragilidad.",
              "Imanes en acción: descubrir qué objetos del salón son atraídos por un imán."
            ]
          }
        ]
      },
      {
        id: "s6",
        titulo: "Efectos de la aplicación de fuerzas: movimiento y deformación.",
        pdas: [
          { 
            id: "s6-p1", 
            descripcion: "Observa y describe los efectos de fuerzas en objetos del entorno: cambios en el movimiento (reposo, dirección, rapidez) y cambios en la forma (deformación).",
            actividades: [
              "Carrera de carritos: observar cómo cambian de rapidez al empujarlos con diferente fuerza.",
              "Fuerza de plastilina: ver cómo cambia la forma de una bola de masa al apretarla o estirarla.",
              "Juego de jalar la cuerda: experimentar la fuerza de tracción en equipo.",
              "Paracaídas de papel: lanzar figuras con paracaídas para ver cómo el aire frena la caída.",
              "Fuerza de soplido: mover pompones de algodón por una pista usando solo un popote."
            ]
          }
        ]
      },
      {
        id: "s7",
        titulo: "Características del sonido y la luz.",
        pdas: [
          { 
            id: "s7-p1", 
            descripcion: "Indaga y describe características del sonido: tono, intensidad y duración.",
            actividades: [
              "Teléfono de vasos: construir un teléfono con vasos y cuerda para escuchar sonidos.",
              "Orquesta de agua: llenar vasos con diferentes niveles de agua y golpearlos suavemente.",
              "Adivina el sonido: identificar sonidos de la naturaleza grabados (trueno, lluvia, pájaros).",
              "Vibraciones visibles: colocar arroz sobre un tambor y ver cómo salta al golpearlo.",
              "Eco en el pasillo: experimentar cómo rebota el sonido en diferentes lugares de la escuela."
            ]
          },
          { 
            id: "s7-p2", 
            descripcion: "Explora y describe características de la luz: color, intensidad y dirección.",
            actividades: [
              "Sombras chinescas: usar una linterna para crear sombras de animales en la pared.",
              "Arcoíris con CD: usar la luz del sol y un disco para ver los colores de la luz.",
              "Espejos mágicos: observar cómo se refleja la luz y las imágenes en diferentes superficies.",
              "Linterna de colores: colocar papel celofán de colores sobre una linterna para cambiar la luz.",
              "Caleidoscopio casero: usar espejos y cuentas de colores para ver patrones de luz."
            ]
          }
        ]
      },
      {
        id: "s8",
        titulo: "Cambios y regularidades de fenómenos naturales y actividades de las personas.",
        pdas: [
          { 
            id: "s8-p1", 
            descripcion: "Reconoce la sucesión del día y la noche a partir de la observación de la presencia del Sol y la Luna, y la relaciona con actividades cotidianas.",
            actividades: [
              "Reloj de actividades: dibujar qué hacen cuando sale el sol y qué hacen cuando sale la luna.",
              "Observatorio de sombras: marcar la sombra de un poste a diferentes horas del día.",
              "Cuento del día y la noche: representar con dibujos la rotación de la tierra de forma sencilla.",
              "Sombras en movimiento: dibujar la sombra de un compañero en la mañana y en la tarde para ver cómo cambió.",
              "Mural del cielo: observar el cielo en el día y en la noche y dibujar las diferencias."
            ]
          }
        ]
      },
      {
        id: "s9",
        titulo: "Estudio de los números.",
        pdas: [
          { 
            id: "s9-p1", 
            descripcion: "Expresa oralmente la sucesión numérica en su lengua materna y en español, primero hasta 20, luego hasta 40, posteriormente hasta 60 y finalmente hasta 120 elementos, de manera ascendente y descendente a partir de un número dado.",
            actividades: [
              "Canto de números: rimas y canciones que sigan la secuencia numérica.",
              "El intruso: identificar qué número falta o está fuera de lugar en una serie.",
              "Saltos numéricos: avanzar en una recta numérica dibujada en el piso mientras cuentan.",
              "Carrera de números: correr hacia el número que el docente mencione en voz alta.",
              "Dictado de saltos: saltar en la recta numérica según el número dictado."
            ]
          },
          { 
            id: "s9-p2", 
            descripcion: "A través de situaciones cotidianas, cuenta, ordena, representa de diferentes formas, interpreta lee y escribe la cantidad de elementos de una colección, primero de hasta 5, después hasta 10 y paulatinamente de hasta 100 elementos.",
            actividades: [
              "Tiendita escolar: contar monedas y productos para realizar 'compras'.",
              "Colecciones de tesoros: agrupar semillas, piedras o botones en decenas.",
              "Dictado de cantidades: dibujar la cantidad de objetos que el docente mencione.",
              "Estimación de dulces: adivinar cuántos dulces hay en un frasco y luego contarlos.",
              "Dominó de colecciones: asociar una tarjeta con puntos con el número escrito correspondiente."
            ]
          },
          { 
            id: "s9-p3", 
            descripcion: "Identifica regularidades en los numerales que representan conjuntos de hasta 100 elementos.",
            actividades: [
              "Tablero del 100: colorear patrones (todos los que terminan en 0, los que empiezan con 5).",
              "Rompecabezas numérico: armar partes de una tabla del 100 recortada.",
              "Bingo de patrones: identificar números que siguen una regla específica.",
              "Cacería de dieces: identificar todos los números que terminan en cero en el salón.",
              "Escritura en equipo: completar una tabla del 100 gigante entre todos los alumnos."
            ]
          }
        ]
      },
      {
        id: "s10",
        titulo: "Construcción de la noción de suma y resta, y su relación como operaciones inversas.",
        pdas: [
          { 
            id: "s10-p1", 
            descripcion: "Reconoce, a partir de la resolución de situaciones que implican agregar, quitar, juntar, comparar y completar, que la suma es el total de dos o más cantidades y la resta como la pérdida de elementos en una colección.",
            actividades: [
              "Cuentas con pinzas: usar un tendedero y pinzas de ropa para agregar o quitar elementos.",
              "Historias matemáticas: inventar cuentos cortos (ej. 'había 3 pájaros y llegaron 2').",
              "Dados sumadores: lanzar dos dados y juntar la cantidad de semillas que indiquen.",
              "Boliche matemático: restar los pinos que cayeron del total inicial.",
              "Juego de '¿Cuántos faltan?': esconder algunos objetos de un grupo y adivinar cuántos faltan."
            ]
          },
          { 
            id: "s10-p2", 
            descripcion: "Resuelve problemas vinculados a su contexto que implican sumas o restas (sin el algoritmo convencional) con cantidades de hasta dos dígitos.",
            actividades: [
              "Reparto de materiales: calcular cuántos lápices faltan si hay 10 niños y solo 7 lápices.",
              "Autobús escolar: usar una caja como autobús donde 'suben' y 'bajan' pasajeros (fichas).",
              "Colección de canicas: comparar quién tiene más y calcular la diferencia contando.",
              "Problemas de recreo: calcular cuántas pelotas quedan si se prestan algunas.",
              "Reparto de galletas: dividir una cantidad de objetos entre dos equipos y ver si sobra alguno."
            ]
          },
          { 
            id: "s10-p3", 
            descripcion: "Utiliza los signos + , – , = para representar oralmente y por escrito operaciones de suma y resta.",
            actividades: [
              "Tarjetas de símbolos: formar operaciones usando tarjetas con números y tarjetas con los signos.",
              "Dictado de operaciones: el docente dice 'cinco más dos igual a siete' y el niño escribe '5 + 2 = 7'.",
              "Dominó de sumas: asociar una operación escrita con su resultado visual.",
              "Calculadora humana: representar con el cuerpo los signos + y - para resolver operaciones.",
              "Memorama de operaciones: encontrar la pareja de una suma con su resultado."
            ]
          }
        ]
      },
      {
        id: "s11",
        titulo: "Cuerpos geométricos y sus características.",
        pdas: [
          { 
            id: "s11-p1", 
            descripcion: "Observa y manipula objetos de su entorno para identificar y describir líneas rectas o curvas, caras planas o curvas; los representa mediante dibujos.",
            actividades: [
              "Caza de formas 3D: buscar objetos en el salón que se parezcan a una esfera o un cubo.",
              "Estampado de caras: usar cuerpos geométricos con pintura para ver qué forma dejan sus caras.",
              "Construcción con cajas: armar un robot usando cajas de diferentes tamaños.",
              "Adivina el cuerpo: describir un cuerpo geométrico (ej. 'tiene 6 caras cuadradas') para que lo identifiquen.",
              "Escultura de plastilina 3D: modelar esferas, cubos y cilindros con masa."
            ]
          }
        ]
      },
      {
        id: "s12",
        titulo: "Figuras geométricas y sus características.",
        pdas: [
          { 
            id: "s12-p1", 
            descripcion: "Representa animales, plantas u objetos utilizando el tangram y otras figuras geométricas, para reconocer y describir oralmente y por escrito sus nombres y propiedades (forma y número de lados y vértices).",
            actividades: [
              "Tangram de animales: armar un gato o un conejo usando las piezas del tangram.",
              "Geoplano elástico: formar cuadrados y triángulos usando ligas en un tablero de clavos.",
              "Mosaico de figuras: crear un diseño libre pegando triángulos y cuadrados de papel de colores.",
              "Dibujo con figuras: crear un paisaje usando solo círculos, cuadrados y triángulos.",
              "Caminata de formas: identificar figuras geométricas en las ventanas, puertas y pisos de la escuela."
            ]
          }
        ]
      },
      {
        id: "s13",
        titulo: "Medición de la longitud, masa y capacidad.",
        pdas: [
          { 
            id: "s13-p1", 
            descripcion: "Compara la longitud de objetos de manera directa e indirecta con apoyo de un intermediario (cuerda, palitos); determina cuál es el más largo, el más corto o si son iguales y lo expresa en su lengua materna y en español.",
            actividades: [
              "Medición con pasos: contar cuántos pasos mide el largo del salón.",
              "Cuerdas comparativas: usar una cuerda para ver si una mesa es más larga que otra.",
              "Orden de estaturas: formarse del más bajo al más alto en el grupo.",
              "Regla de manos: usar su propia mano como unidad de medida para medir su cuaderno.",
              "Caminata de hormiga: medir objetos pequeños usando clips o semillas."
            ]
          },
          { 
            id: "s13-p2", 
            descripcion: "Sopesa dos o más objetos para comparar su masa de manera directa y decir cuál es más pesado o ligero que otro, o si son iguales.",
            actividades: [
              "Balanza humana: sostener un objeto en cada mano y sentir cuál pesa más.",
              "Balanza de platos: construir una balanza sencilla con un gancho y vasos para comparar masas.",
              "Clasificación por peso: ordenar frutas de la más ligera a la más pesada.",
              "Adivina el peso: cerrar los ojos y tratar de adivinar cuál de dos objetos es más pesado.",
              "Bolsa de arena vs algodón: comparar el volumen y el peso de dos bolsas iguales llenas de diferentes materiales."
            ]
          },
          { 
            id: "s13-p3", 
            descripcion: "Compara la capacidad de dos o más recipientes de manera directa, al verter el contenido de uno en otro, para saber cuál tiene mayor o menor capacidad o si son iguales.",
            actividades: [
              "Llenado de botes: ver cuántos vasos de agua caben en una cubeta pequeña.",
              "Trasvase de arena: pasar arena de un recipiente ancho a uno angosto para comparar.",
              "Fiesta de jugos: repartir agua en vasos iguales para notar que tienen la misma capacidad.",
              "Cocinando pociones: usar cucharas de diferentes tamaños para llenar un frasco.",
              "Comparación visual: ordenar botellas de diferentes formas por la cantidad de líquido que creen que les cabe."
            ]
          },
          { 
            id: "s13-p4", 
            descripcion: "Representa la longitud, masa y capacidad de objetos, con dibujos y numerales.",
            actividades: [
              "Dibujo de medidas: dibujar un objeto largo y uno corto al lado de una regla de papel.",
              "Gráfica de pesos: registrar con dibujos qué objetos fueron más pesados en la balanza.",
              "Numerales de capacidad: escribir cuántos vasos llenaron una botella.",
              "Mural de medidas: pegar tiras de papel que representen el largo de diferentes objetos del salón.",
              "Etiquetas de peso: poner una carita feliz a los objetos ligeros y una pesa a los pesados en un dibujo."
            ]
          }
        ]
      },
      {
        id: "s14",
        titulo: "Medición del tiempo.",
        pdas: [
          { 
            id: "s14-p1", 
            descripcion: "Utiliza términos como antes, después, hoy, ayer, mañana, etc., en su lengua materna y en español, para describir y registrar actividades en una semana, mes y año.",
            actividades: [
              "Línea del tiempo semanal: dibujar qué hicieron ayer, qué hacen hoy y qué harán mañana.",
              "Calendario de cumpleaños: ubicar su fecha de nacimiento en el calendario del salón.",
              "Reloj de sol: observar cómo se mueve la sombra durante la jornada escolar.",
              "Reloj de arena casero: usar dos botellas y arena para medir cuánto tardan en limpiar su mesa.",
              "Cuento de 'Mañana será...': imaginar y dibujar qué actividades harán el próximo fin de semana."
            ]
          }
        ]
      },
      {
        id: "s15",
        titulo: "Organización e interpretación de datos.",
        pdas: [
          { 
            id: "s15-p1", 
            descripcion: "Elabora registros de datos mediante dibujos, símbolos o pictogramas, para responder preguntas de su interés.",
            actividades: [
              "Votación de frutas: registrar en el pizarrón con marcas cuál es la fruta favorita del grupo.",
              "Pictograma de clima: hacer una gráfica con dibujos de soles y nubes de la semana.",
              "Conteo de útiles: contar cuántos niños trajeron mochila roja y registrarlo con dibujos.",
              "Gráfica de mascotas: usar recortes de animales para ver qué mascota es la más común en el grupo.",
              "Tablero de asistencia: usar fichas de colores para ver cuántos niños y niñas vinieron hoy."
            ]
          }
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
          { 
            id: "e1-p1", 
            descripcion: "Describe la existencia de otros seres vivos y componentes de la naturaleza presentes en el lugar donde vive.",
            actividades: [
              "Caminata de observación: recorrer el patio de la escuela para identificar plantas e insectos.",
              "Bitácora del explorador: dibujar y nombrar los seres vivos encontrados en su comunidad.",
              "Maqueta del entorno: representar con materiales reciclados los elementos naturales de su colonia.",
              "Hotel de insectos: observar dónde viven los bichitos en el jardín y respetarlos.",
              "Colección de sonidos naturales: grabar o imitar sonidos de pájaros, viento y agua."
            ]
          },
          { 
            id: "e1-p2", 
            descripcion: "Analiza las formas de interactuar con la naturaleza que causan deterioro, como el consumo excesivo de recursos naturales y la generación de basura, así como el impacto en la vida de otros seres vivos.",
            actividades: [
              "Auditoría de basura: clasificar los desechos del salón durante una semana.",
              "Cuento reflexivo: crear una historia sobre un animal que pierde su hogar por la contaminación.",
              "Experimento de degradación: observar qué pasa con diferentes materiales enterrados en tierra.",
              "Campaña de 'Cero Plástico': contar cuántas bolsas de plástico traen en su lonchera y buscar alternativas.",
              "Mural del daño: pegar imágenes de lugares limpios vs lugares sucios para notar el impacto."
            ]
          },
          { 
            id: "e1-p3", 
            descripcion: "Propone acciones de respeto y cuidado hacia la naturaleza.",
            actividades: [
              "Carteles de brigada verde: diseñar mensajes para invitar a cuidar el agua y las plantas.",
              "Huerto escolar: participar en la siembra y cuidado de una hortaliza.",
              "Patrulla de luces: asignar responsables para apagar luces y ventiladores al salir.",
              "Adopta una planta: cada alumno se encarga de cuidar y hablarle a una plantita del salón.",
              "Composta escolar: aprender a separar restos de fruta para alimentar a la tierra."
            ]
          }
        ]
      },
      {
        id: "e2",
        titulo: "Impacto de las actividades humanas en la naturaleza y sustentabilidad.",
        pdas: [
          { 
            id: "e2-p1", 
            descripcion: "Identifica actividades que se realizan en su comunidad y que tienen un impacto en la naturaleza, y propone acciones para su cuidado.",
            actividades: [
              "Mapa de basura: identificar lugares de la escuela donde se acumula basura y proponer botes.",
              "Cartel de ahorro: diseñar mensajes para recordar cerrar la llave del agua.",
              "Brigada de cuidado: realizar una jornada de riego de las plantas de la escuela.",
              "Cuento del río sucio: reflexionar sobre qué pasa con los peces cuando tiramos basura al agua.",
              "Inventores de reciclaje: crear un juguete nuevo usando solo materiales de desecho."
            ]
          }
        ]
      },
      {
        id: "e3",
        titulo: "Cambios en la naturaleza del lugar donde vive, y su relación con las actividades humanas cotidianas.",
        pdas: [
          { 
            id: "e3-p1", 
            descripcion: "Identifica cambios en la naturaleza del lugar donde vive, y los relaciona con actividades humanas cotidianas asociadas a ciclos agrícolas y festividades.",
            actividades: [
              "Calendario de siembra: identificar qué plantas crecen en cada estación en su región.",
              "Mural de festividades: dibujar cómo cambia el paisaje durante las fiestas del pueblo.",
              "Observación de árboles: notar cómo cambian las hojas de un árbol cercano a lo largo del año.",
              "Rueda de las estaciones: crear un disco giratorio que muestre cómo cambia el clima y la ropa que usamos.",
              "Entrevista al campesino: escuchar cómo se prepara la tierra antes de las lluvias."
            ]
          }
        ]
      },
      {
        id: "e4",
        titulo: "Los seres humanos son diversos y valiosos y tienen derechos humanos.",
        pdas: [
          { 
            id: "e4-p1", 
            descripcion: "Reconoce que todas las personas son únicas, valiosas y tienen derechos humanos, sin importar su origen, género, edad o condición.",
            actividades: [
              "Círculo de aprecio: decir algo valioso de la persona que está sentada a la derecha.",
              "Lotería de derechos: identificar derechos básicos (juego, salud, educación) en imágenes.",
              "Invitado especial: escuchar el relato de una persona de la comunidad sobre su origen y cultura.",
              "Museo de objetos queridos: traer algo que represente a su familia y explicar por qué es especial.",
              "Cuento de 'Todos somos diferentes': leer un libro sobre diversidad y dibujar qué nos hace únicos."
            ]
          },
          { 
            id: "e4-p2", 
            descripcion: "Identifica que las personas son diferentes y que esas diferencias son valiosas.",
            actividades: [
              "Mural de talentos: cada niño pega una estrella con algo que sabe hacer muy bien.",
              "Lectura de 'Elmer el elefante': reflexionar sobre la importancia de ser diferente.",
              "Intercambio de tradiciones: compartir una costumbre o comida que su familia acostumbre.",
              "Círculo de cumplidos: sentarse en círculo y decir algo positivo de la persona de al lado.",
              "Buzón de la amistad: escribir o dibujar mensajes de apoyo para compañeros que se sientan tristes."
            ]
          }
        ]
      },
      {
        id: "e5",
        titulo: "Atención a las necesidades básicas, como parte de los derechos humanos.",
        pdas: [
          { 
            id: "e5-p1", 
            descripcion: "Relaciona la atención de sus necesidades básicas (alimentación, salud, vivienda, entre otras) con el ejercicio de sus derechos humanos.",
            actividades: [
              "Pirámide de necesidades: clasificar dibujos en 'necesidades' (comida, casa) y 'deseos' (juguetes).",
              "Visita al centro de salud: conocer quiénes nos ayudan a cumplir nuestro derecho a la salud.",
              "Dibujo de mi hogar: representar su casa como el lugar donde se protege su derecho a la vivienda.",
              "Visita al mercado: identificar quiénes venden comida y ropa en su comunidad.",
              "Juego de '¿Quién nos ayuda?': asociar herramientas con profesiones (ej. manguera-bombero)."
            ]
          },
          { 
            id: "e5-p2", 
            descripcion: "Comprende que todas las personas tienen derecho a la satisfacción de sus necesidades básicas.",
            actividades: [
              "Cuento de la comunidad: leer una historia sobre cómo un pueblo se organiza para que todos tengan agua.",
              "Cartel de derechos: ilustrar que todos los niños del mundo merecen comer sano.",
              "Juego de roles: representar situaciones donde se ayuda a alguien a cubrir una necesidad básica.",
              "Día de la solidaridad: recolectar ropa o comida para alguien que lo necesite.",
              "Mural de la salud: dibujar qué necesitamos para no enfermarnos (agua, jabón, comida)."
            ]
          }
        ]
      },
      {
        id: "e6",
        titulo: "Situaciones de injusticia o discriminación en la familia, la escuela o la comunidad.",
        pdas: [
          { 
            id: "e6-p1", 
            descripcion: "Identifica situaciones de injusticia o discriminación y expresa su opinión al respecto.",
            actividades: [
              "Teatro de títeres: representar una situación donde no dejan jugar a alguien y proponer una solución.",
              "Asamblea escolar: dialogar sobre por qué es injusto poner apodos.",
              "Mural de la inclusión: dibujar a todos los niños jugando juntos sin importar sus diferencias.",
              "El termómetro de las emociones: identificar cuándo se sienten enojados y practicar respiraciones.",
              "Contrato de manos: pintar sus manos y pegarlas en un cartel prometiendo no usarlas para pegar."
            ]
          }
        ]
      },
      {
        id: "e7",
        titulo: "Responsabilidad compartida en el cuidado de sí y del entorno cercano.",
        pdas: [
          { 
            id: "e7-p1", 
            descripcion: "Identifica y asume responsabilidades en el cuidado de sí mismo y de su entorno cercano (familia, escuela, comunidad).",
            actividades: [
              "Responsables del día: asignar tareas como repartir material o cuidar el orden.",
              "Mi compromiso: escribir o dibujar una action diaria para cuidar su salón.",
              "Cuidado de pertenencias: organizar sus útiles y marcar sus nombres para no perderlos.",
              "Patrulla de limpieza: recoger basura del patio después del recreo.",
              "Calendario de tareas: anotar qué le toca hacer a cada quien en casa para ayudar."
            ]
          }
        ]
      },
      {
        id: "e8",
        titulo: "Historia personal y familiar, diversidad de familias y el derecho a pertenecer a una.",
        pdas: [
          { 
            id: "e8-p1", 
            descripcion: "Indaga en diversas fuentes orales, escritas, digitales, objetos y testimonios, para construir su historia personal y familiar y la representa por medio de dibujos y líneas del tiempo.",
            actividades: [
              "Árbol genealógico: dibujar a los miembros de su familia y contar una historia de ellos.",
              "Línea de vida: pegar fotos o dibujos desde que nacieron hasta hoy.",
              "Caja de recuerdos: traer un objeto que haya pertenecido a sus abuelos y explicarlo.",
              "Entrevista a los abuelos: preguntar a qué jugaban cuando eran niños.",
              "Álbum de fotos grupal: cada niño trae una foto de bebé y los demás adivinan quién es."
            ]
          }
        ]
      },
      {
        id: "e9",
        titulo: "Sentido de pertenencia a la familia y la comunidad.",
        pdas: [
          { 
            id: "e9-p1", 
            descripcion: "Identifica elementos que le dan sentido de pertenencia a su familia y a su comunidad.",
            actividades: [
              "Escudo familiar: diseñar un escudo con los valores y gustos de su familia.",
              "Mapa de mi barrio: dibujar los lugares de su comunidad donde se siente feliz.",
              "Celebración comunitaria: participar en un evento escolar que resalte las tradiciones locales.",
              "Cápsula del tiempo: guardar un dibujo de su juguete favorito para abrirlo al final del año.",
              "Mural de 'Nuestras Raíces': pegar fotos de lugares que visitan con su familia."
            ]
          }
        ]
      },
      {
        id: "e10",
        titulo: "El derecho a la igualdad de género y a una vida libre de violencia.",
        pdas: [
          { 
            id: "e10-p1", 
            descripcion: "Analiza situaciones de injusticia y discriminación que afectan a niñas y mujeres y propone acciones para la igualdad.",
            actividades: [
              "Cuento de igualdad: leer historias donde niñas y niños realizan las mismas actividades.",
              "Debate de juegos: reflexionar sobre por qué todos pueden jugar fútbol o con muñecas.",
              "Cartel de respeto: dibujar acciones que demuestren que niñas y niños son iguales.",
              "Cambiando roles: jugar a las profesiones sin importar si son niños o niñas.",
              "Entrevista a una mujer trabajadora: conocer qué hace una mamá o maestra en su día a día."
            ]
          }
        ]
      },
      {
        id: "e11",
        titulo: "Funciones y responsabilidades de las autoridades para la organización de la convivencia.",
        pdas: [
          { 
            id: "e11-p1", 
            descripcion: "Identifica las funciones y responsabilidades de las autoridades en su entorno cercano.",
            actividades: [
              "Entrevista al director: preguntar cuáles son sus responsabilidades en la escuela.",
              "Conociendo al policía escolar: platicar con la autoridad sobre cómo nos cuidan.",
              "Mapa de autoridades: identificar quiénes mandan en casa, en el salón y en la escuela.",
              "Simulacro de votación: elegir a un representante de fila para organizar los materiales.",
              "Juego de '¿Qué pasaría si...': reflexionar sobre por qué necesitamos reglas y quién las cuida."
            ]
          }
        ]
      },
      {
        id: "e12",
        titulo: "Situaciones de la vida cotidiana en las que niñas y niños pueden o no tomar decisiones.",
        pdas: [
          { 
            id: "e12-p1", 
            descripcion: "Identifica situaciones en las que puede tomar decisiones y en las que requiere ayuda.",
            actividades: [
              "Semáforo de decisiones: identificar qué pueden elegir solos (color de ropa) y en qué necesitan ayuda (cruzar la calle).",
              "Votación del juego: elegir por mayoría a qué jugarán en el recreo.",
              "Dilemas morales: platicar qué harían en situaciones sencillas de la vida diaria.",
              "Menú escolar: proponer y elegir democráticamente qué fruta les gustaría comer en el convivio.",
              "Cuento de 'Yo puedo elegir': identificar momentos del día donde toman decisiones propias."
            ]
          }
        ]
      },
      {
        id: "e13",
        titulo: "El derecho a la salud y la prevención de enfermedades.",
        pdas: [
          { 
            id: "e13-p1", 
            descripcion: "Reconoce su derecho a la salud y la importancia de prevenir enfermedades.",
            actividades: [
              "Feria de la salud: practicar el estornudo de etiqueta y el uso de cubrebocas.",
              "Cartilla de vacunación: conocer para qué sirven las vacunas mediante dibujos.",
              "Plática con el médico: escuchar consejos sobre cómo evitar enfermarse en invierno.",
              "Lavado de manos divertido: cantar una canción mientras practican la técnica correcta.",
              "Semáforo de alimentos: clasificar comida en saludable (verde) y no saludable (rojo)."
            ]
          }
        ]
      },
      {
        id: "e14",
        titulo: "Democracia como forma de vida: Construcción participativa de normas, reglas y acuerdos para formas de convivencia y de organización.",
        pdas: [
          { 
            id: "e14-p1", 
            descripcion: "Participa en la revisión y construcción de acuerdos y reglas que regulan la convivencia en la familia y en la escuela.",
            actividades: [
              "Reglamento ilustrado: proponer y dibujar las reglas de convivencia del salón.",
              "Círculo de diálogo: revisar cada semana si se están cumpliendo los acuerdos.",
              "Votación de representantes: elegir democráticamente a los encargados de biblioteca.",
              "Buzón de sugerencias: escribir o dibujar ideas para mejorar el recreo.",
              "Mural de compromisos: cada niño firma con su huella un acuerdo de convivencia."
            ]
          }
        ]
      },
      {
        id: "e15",
        titulo: "Construcción de la paz mediante el diálogo: situaciones de conflicto como oportunidad de aprendizaje.",
        pdas: [
          { 
            id: "e15-p1", 
            descripcion: "Analiza situaciones de conflicto en su entorno cercano y propone alternativas de solución basadas en el diálogo.",
            actividades: [
              "Rincón de la paz: crear un espacio con cojines para dialogar cuando haya un problema.",
              "Mediadores de conflictos: practicar cómo pedir una disculpa y escuchar al otro.",
              "Cuento de soluciones: inventar finales pacíficos para historias de desacuerdos.",
              "Semáforo del conflicto: identificar cuándo un problema está en verde (fácil), amarillo (necesita ayuda) o rojo (grave).",
              "Círculo de perdón: practicar cómo pedir disculpas de corazón ante un error."
            ]
          }
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
          { 
            id: "h1-p1", 
            descripcion: "Reconoce y descubre características y cambios (corporales, gustos, intereses, necesidades y capacidades) que lo hacen una persona única, con la finalidad de valorar y respetar la diversidad.",
            actividades: [
              "Silueta de vida: dibujar su contorno en papel bond y llenarlo con dibujos de sus gustos.",
              "Caja de tesoros personales: traer 3 objetos que representen quiénes son.",
              "Árbol de capacidades: pegar hojas con habilidades que cada niño ha descubierto en sí mismo.",
              "Autorretrato emocional: dibujarse a sí mismos expresando una emoción específica.",
              "Juego de espejos: imitar los movimientos y gestos de un compañero."
            ]
          }
        ]
      },
      {
        id: "h2",
        titulo: "Construcción del proyecto de vida.",
        pdas: [
          { 
            id: "h2-p1", 
            descripcion: "Explica situaciones cotidianas que se presentan en la escuela y la casa, con la intención de proponer acuerdos que generen una mejor convivencia.",
            actividades: [
              "Acuerdos de convivencia: proponer reglas para jugar en el patio sin pelear.",
              "Mapa de mi casa: identificar lugares seguros y proponer reglas de orden.",
              "Asamblea de grupo: discutir cómo podemos ayudarnos más entre compañeros.",
              "Cápsula del tiempo: guardar un dibujo de lo que quieren aprender este año.",
              "Mural de metas: pegar estrellas con algo que quieren lograr solos (ej. amarrarse las agujetas)."
            ]
          }
        ]
      },
      {
        id: "h3",
        titulo: "Educación integral de la sexualidad.",
        pdas: [
          { 
            id: "h3-p1", 
            descripcion: "Identifica y expresa sus emociones y sentimientos ante diferentes situaciones.",
            actividades: [
              "Emocionómetro: usar una pinza con su nombre para marcar cómo se sienten al llegar a clase.",
              "Mímica de emociones: representar con gestos alegría, tristeza, enojo o miedo.",
              "El frasco de la calma: crear un frasco con diamantina para usarlo cuando sientan emociones fuertes.",
              "Cuento de 'Mis límites': leer sobre el respeto al espacio personal y dibujar su 'burbuja'.",
              "Juego de '¿Cómo se siente?': ver fotos de caras y adivinar qué emoción tienen."
            ]
          }
        ]
      },
      {
        id: "h4",
        titulo: "Capacidades y habilidades motrices.",
        pdas: [
          { 
            id: "h4-p1", 
            descripcion: "Utiliza patrones básicos de movimiento ante situaciones que implican explorar los diferentes espacios, el tiempo y los objetos, para favorecer el conocimiento de sí.",
            actividades: [
              "Circuito motriz: saltar aros, gatear por túneles y mantener el equilibrio en una línea.",
              "Juego de las estatuas: moverse de diferentes formas y congelarse al silbatazo.",
              "Lanzamiento de precisión: intentar meter pelotas en botes a diferentes distancias.",
              "Yoga para niños: imitar posturas de animales para trabajar el equilibrio y la fuerza.",
              "Carrera de obstáculos: esquivar conos y pasar por debajo de mesas con control."
            ]
          }
        ]
      },
      {
        id: "h5",
        titulo: "Posibilidades cognitivas, expresivas, motrices, creativas y de relación.",
        pdas: [
          { 
            id: "h5-p1", 
            descripcion: "Explora sus posibilidades motrices y expresivas en situaciones lúdicas que impliquen el uso de los sentidos, para favorecer el autoconocimiento.",
            actividades: [
              "Taller de sentidos: identificar olores, sabores y texturas con los ojos vendados.",
              "Danza creativa: expresar con el cuerpo cómo se siente la música rápida o lenta.",
              "Pintura con pies: experimentar nuevas formas de expresión artística usando el cuerpo.",
              "Teatro de sombras: usar las manos para crear figuras de animales en la pared.",
              "Mímica de acciones: representar oficios o animales sin usar palabras."
            ]
          }
        ]
      },
      {
        id: "h6",
        titulo: "Estilos de vida activos y saludables.",
        pdas: [
          { 
            id: "h6-p1", 
            descripcion: "Participa en diferentes juegos para explorar alternativas que le permitan mantener una vida activa y saludable.",
            actividades: [
              "Carrera de relevos: participar en juegos que impliquen correr y trabajar en equipo.",
              "Yoga para niños: practicar posturas sencillas para relajar el cuerpo.",
              "Registro de hidratación: marcar cuántos vasos de agua toman después de jugar.",
              "Semáforo de alimentos: clasificar comida en saludable (verde) y no saludable (rojo).",
              "Caminata de la salud: dar vueltas al patio contando cuántos pasos dan para mantenerse activos."
            ]
          }
        ]
      },
      {
        id: "h7",
        titulo: "Pensamiento lúdico, divergente y creativo.",
        pdas: [
          { 
            id: "h7-p1", 
            descripcion: "Busca soluciones creativas a problemas que se le presentan en situaciones de juego y cotidianas.",
            actividades: [
              "Retos de construcción: armar la torre más alta usando solo 10 bloques.",
              "Juego de 'El suelo es lava': buscar formas creativas de cruzar el salón sin pisar el piso.",
              "Inventores de juegos: cambiar las reglas de un juego conocido para hacerlo más divertido.",
              "Desafío de la caja: imaginar 5 usos diferentes para una caja de cartón vacía.",
              "Búsqueda del tesoro: resolver pistas sencillas para encontrar un objeto escondido."
            ]
          }
        ]
      },
      {
        id: "h8",
        titulo: "Interacción motriz.",
        pdas: [
          { 
            id: "h8-p1", 
            descripcion: "Colabora en juegos y actividades motrices para el logro de metas comunes.",
            actividades: [
              "Paracaídas gigante: mover una tela entre todos para que una pelota no caiga.",
              "Relevos de cooperación: transportar un objeto entre dos personas sin usar las manos.",
              "Juegos tradicionales: participar en 'El stop' o 'La cuerda' fomentando el apoyo mutuo.",
              "Cadena humana: pasar un aro por todo el grupo sin soltarse de las manos.",
              "Carrera de orugas: caminar en fila coordinando los pasos con el compañero de adelante."
            ]
          }
        ]
      },
      {
        id: "h9",
        titulo: "Acciones individuales que repercuten en la conservación y mejora de la salud.",
        pdas: [
          { 
            id: "h9-p1", 
            descripcion: "Reconoce la importancia de la higiene personal y la limpieza del entorno para la salud.",
            actividades: [
              "Taller de lavado de manos: practicar la técnica correcta con agua y jabón.",
              "Campaña de limpieza: organizar brigadas para recoger basura en el recreo.",
              "Kit de aseo: dibujar y nombrar los objetos necesarios para la higiene personal (peine, cepillo, etc.).",
              "Semáforo de higiene: identificar cuándo es necesario lavarse (antes de comer, después de jugar).",
              "Cuento de 'Los microbios': reflexionar sobre por qué debemos cubrirnos al estornudar."
            ]
          }
        ]
      },
      {
        id: "h10",
        titulo: "Sentido de comunidad y satisfacción de necesidades humanas.",
        pdas: [
          { 
            id: "h10-p1", 
            descripcion: "Identifica necesidades humanas básicas y la importancia de la colaboración en la comunidad.",
            actividades: [
              "Mural de colaboradores: dibujar a las personas que ayudan en la escuela (conserje, maestros).",
              "Campaña de donación: organizar una colecta de libros para la biblioteca del aula.",
              "Visita a la comunidad: identificar qué servicios hay cerca (tienda, parque, hospital).",
              "Cadena de favores: registrar en un dibujo un favor que hicieron a un compañero.",
              "Día del intercambio: compartir un juguete o libro con alguien con quien casi no hablan."
            ]
          }
        ]
      },
      {
        id: "h11",
        titulo: "Toma de decisiones y creatividad, ante problemas de la vida.",
        pdas: [
          { 
            id: "h11-p1", 
            descripcion: "Describe problemas de su vida cotidiana y propone soluciones creativas.",
            actividades: [
              "Caja de problemas: escribir o dibujar un problema común y buscar soluciones en grupo.",
              "Teatro de soluciones: representar cómo resolver un malentendido con un amigo.",
              "Inventos útiles: diseñar un objeto que ayude a mantener el salón más limpio.",
              "Menú escolar: proponer y elegir democráticamente qué fruta les gustaría comer en el convivio.",
              "Cuento de 'Yo puedo elegir': identificar momentos del día donde toman decisiones propias."
            ]
          }
        ]
      }
    ]
  }
];
