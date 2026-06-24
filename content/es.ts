import type { SiteContent } from './types'
import { experiencesEs } from './experiences.es'

const es: SiteContent = {
  locale: 'es',
  meta: {
    title: 'Matthias Flinterhoff | Gestor y Tecnólogo',
    description:
      'Operador y gestor que reestructura empresas, implementa sistemas y realiza migraciones. Estudio y diseño organizaciones que empoderan a las personas, en lugar de reemplazarlas.',
  },
  nav: [
    { key: 'vita', label: 'Biografía', href: '/vita', icon: 'vita' },
    { key: 'approach', label: 'Enfoque', href: '/approach', icon: 'approach' },
    { key: 'questions', label: 'Para líderes', href: '/questions', icon: 'questions' },
    { key: 'experiences', label: 'Experiencias', href: '/#experiences', icon: 'refining-business-models' },
    { key: 'inspiration', label: 'Inspiración', href: '/inspiration', icon: 'inspiration' },
  ],
  ui: {
    skipToContent: 'Saltar al contenido',
    home: 'Inicio',
    languageLabel: 'Idioma',
    toggleTheme: 'Cambiar tema',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    backToHome: 'Volver al inicio',
    backToExperiences: 'Volver a las experiencias',
    learnMore: 'Saber más',
    onThisPage: 'En esta página',
    contactCta: 'Hablemos',
    playbook: 'Guía',
    caseStudy: 'Caso práctico',
    caseStudies: 'Casos prácticos',
    moreExperiences: 'Más experiencias',
  },
  home: {
    quote: 'Construyo, cuido, conecto, aprendo y enseño.',
    heroLead:
      'Durante más de 9 años he sido la persona en quien las organizaciones confían cuando algo necesita comprenderse, reestructurarse y ser adoptado por personas que no pidieron el cambio.',
    eyebrow: 'Sobre mí',
    introTitle: 'Gestor y Tecnólogo',
    aboutTitle: 'El cambio es mi pan de cada día',
    intro: [
      'Soy un operador con amplia experiencia en la reestructuración de empresas, la implementación de sistemas, la ejecución de migraciones y la dirección de las funciones transversales de finanzas y marketing. Más recientemente, pasé 3,5 años como Director General antes de volver al trabajo de transformación empresarial a través de mi propia consultora. Antes de eso, lideré iniciativas como consultor interno durante más de 4 años.',
      'Proveniente de una familia de empresarios y voluntarios, me han fascinado las organizaciones desde mi juventud: grupos de personas que se reúnen para perseguir un objetivo común y benefician a la sociedad creando seguridad, prosperidad y continuidad.',
      'Son la columna vertebral de la civilización, si se hacen bien. [The Company of Strangers de Paul Seabright](https://www.amazon.com/Company-Strangers-Natural-History-Economic/dp/0691146462) ofrece una visión profunda sobre esto.',
      'Eso es precisamente por lo que estudio y diseño organizaciones que sea un placer dirigir, que ayuden a las personas a prosperar y que empoderen a la gente, en lugar de reemplazarla.',
    ],
    fresh: {
      label: 'Recién salido del horno',
      title: 'Monami AI',
      description:
        'Se acabaron las respuestas vagas de la IA, mirar fijamente un prompt en blanco y copiar y pegar skills de un proveedor a otro.',
      videoLabel: 'Monami AI en acción: seleccionar un skill y enviarlo a un proveedor de IA',
      restartLabel: 'Repetir',
      features: [
        {
          name: 'Skills listos para usar.',
          description:
            'Prompts bien estructurados para tu vida personal y laboral. Disfruta de una ventaja con la IA y no sufras la presión de la página en blanco.',
        },
        {
          name: 'Habla con leyendas.',
          description:
            'Comparte tus ideas con figuras como Steve Jobs, J.R.R. Tolkien, David Attenborough o Warren Buffett y míralas con sus ojos.',
        },
        {
          name: 'Teléfono u ordenador.',
          description:
            'Abre la app en el dispositivo que tengas más cerca y retoma justo donde lo dejaste.',
        },
        {
          name: 'Tu IA, tú eliges.',
          description:
            'Abre ChatGPT, Claude, Gemini, Perplexity o el proveedor que prefieras con un solo toque.',
        },
        {
          name: 'Entrelaza el texto copiado.',
          description:
            'Copia algo, elige un skill e insértalo en el chat. Añade tus ideas en bruto y envíalo.',
        },
        {
          name: 'Resultados que te gustan.',
          description:
            'Convierte ideas en bruto en resultados pulidos, sin alucinaciones ni bloqueo ante el prompt.',
        },
      ],
      cta: 'Visitar Monami AI',
      href: 'https://monamiai.com',
    },
    explore: {
      title: 'Conóceme',
      subtitle: 'Cuatro lecturas breves sobre cómo pienso, cómo trabajo y qué me mantiene curioso.',
      cards: [
        {
          key: 'vita',
          title: 'Biografía profesional',
          description: 'Experiencia profesional, formación, competencias, herramientas y un glosario de lo que hago.',
          href: '/vita',
          icon: 'vita',
        },
        {
          key: 'approach',
          title: 'Cómo consigo hacer las cosas',
          description: 'Una mentalidad abierta pero cuestionadora: primero entender, luego diseñar con alegría.',
          href: '/approach',
          icon: 'approach',
        },
        {
          key: 'questions',
          title: '8 preguntas críticas para los líderes',
          description: 'Las preguntas que aprendí a hacerme como director general durante años.',
          href: '/questions',
          icon: 'questions',
        },
        {
          key: 'inspiration',
          title: 'Lo que me inspira',
          description: 'Valencia, arte, libros, música y las ideas de las que no me canso.',
          href: '/inspiration',
          icon: 'inspiration',
        },
      ],
    },
    experiences: {
      title: 'Experiencias',
      subtitle: 'Dónde puedo ayudar, agrupado por área, cada uno con una guía y casos prácticos reales.',
      areaLabels: {
        corporate: 'Gestión empresarial',
        it: 'IT',
        marketing: 'Marketing',
      },
    },
    contact: {
      title: '¡Hablemos!',
      body: 'Conéctese con un líder comunicativo experto en diseño y tecnología que aborda rápidamente cuestiones complejas y proporciona estabilidad.',
      email: 'hi@mflinterhoff.com',
      phone: '+49 156 78402395',
      emailCta: 'Escríbeme',
      phoneCta: 'Llámame',
    },
  },
  inspiration: {
    title: 'Lo que me inspira',
    intro:
      'Vivo con mi mujer en Valencia, una ciudad llena de movimiento, luz y color. Tenemos obras [de Kassandra](https://kassandra.studio) como la portada de arriba colgadas en casa. Me recuerdan cada día que la complejidad no es nada amenazador, sino que contiene energía si te acercas a ella con estructura y curiosidad. Pero esto no acaba aquí.',
    lead: 'De esto tampoco me canso:',
    items: [
      'Construir software sin fricción para impulsar la alfabetización económica y en IA en personas con Claude Code. Es la primera herramienta que me hace sentir que puedo moldear software a la velocidad de mi pensamiento: concebir, construir, probar, iterar, lanzar. Nada me bloquea ya y, sinceramente, roza lo adictivo.',
      'Libros como Material World de Ed Conway, The Company of Strangers de Paul Seabright, The Inner Game of Tennis de W. Timothy Gallwey o The Century Trilogy de Ken Follett.',
      'Música como Maribou State, Khruangbin, Parcels. Me encanta seleccionar música que encaje con la atmósfera que quiero crear para los demás o para mí mismo.',
      'Aprender más sobre tendencias macroeconómicas, relaciones internacionales y economía del comportamiento, cómo la tecnología puede tener un impacto positivo duradero en nuestras sociedades y cómo puedo tomar decisiones financieras sostenibles basadas en principios de inversión en valor.',
      'Practicar deportes como el voley playa y el pádel.',
      'Alimentar mis relaciones con la familia y los amigos.',
    ],
  },
  approach: {
    title: 'Cómo consigo hacer las cosas',
    intro:
      'Abordo los problemas con una mentalidad abierta y cuestionadora. Luego exploro y evalúo las soluciones de forma sistemática para alcanzar resultados objetivos rápidamente.',
    quote: { text: 'Primero entender, luego ser entendido.', author: 'Stephen R. Covey' },
    quoteFollow: 'Hago todo lo posible por vivir según este principio cada día.',
    sections: [
      {
        title: '¿Y la alegría?',
        body: 'Al principio puede ser rápido y sucio, pero ¿debe seguir siendo así? Una vez encontrado el encaje producto-mercado o proceso-organización, es hora de **ocuparse**. Diseñemos experiencias fáciles de usar, orientadas al detalle, estéticamente agradables y, por tanto, inclusivas.',
        tagline: 'Centrarse en lo que **de verdad importa** es la clave.',
      },
      {
        title: 'Ir al grano.',
        body: 'Los resultados visibles, tanto positivos como negativos, crean claridad. **Esta claridad permite a la organización actuar**, lo que a su vez da el control para tomar decisiones bien meditadas. Eso es lo que busco.',
        tagline: '',
      },
      {
        title: 'Que sea agradable para todos.',
        body: 'Integrar un nuevo sistema, establecer nuevos procesos o lanzar un nuevo servicio sólo beneficia al usuario final si todos los interesados afectados participan. Los cambios sistemáticos causan fricción. **La fricción permanece a menos que nos abramos y mostremos curiosidad**.',
        tagline: 'La implementación puede resultar incómoda, pero es esencial intentarlo.',
      },
    ],
  },
  questions: {
    title: '8 preguntas críticas para los líderes',
    intro: [
      'Como director general de una GmbH con hasta 14 empleados, sé lo importante, y difícil, que es mantener el equilibrio entre las tareas estratégicas y la presión operativa.',
      '¿Qué he aprendido durante este tiempo? A ser honesto conmigo mismo, a reconocer lo que es verdaderamente importante para la organización y a actuar en consecuencia con disciplina. Todo empieza cuando nos planteamos periódicamente preguntas desafiantes sobre nuestro modelo de negocio.',
      'Pero no puede quedarse en el plano de las ideas. Al final, se trata de aplicar las medidas que se derivan de las respuestas. Esto requiere valentía, perseverancia y resiliencia.',
    ],
    items: [
      {
        q: '¿Hemos establecido una posición sólida y destacada para nuestra oferta en el mercado actual y frente a la competencia?',
        a: [
          'Si es así, ¿cómo podemos crecer o volvernos aún más eficientes?',
          'Si la respuesta es negativa, ¿qué podemos cambiar? ¿Estamos dialogando con nuestros clientes?',
        ],
      },
      {
        q: '¿Qué ofertas consumen demasiado tiempo y generan pocos ingresos?',
        a: [
          'Si esto persiste a largo plazo, ¿cómo podemos eliminar estas ofertas y comunicar la decisión de forma profesional?',
          'Si es una situación temporal, ¿bajo qué condiciones seguimos desarrollando la oferta?',
        ],
      },
      {
        q: '¿Tenemos a las personas adecuadas en los roles correctos?',
        a: [
          'Si es así, ¿quién cubre las tareas clave de cada empleado si alguien no está disponible?',
          'Si no, ¿cuáles son los cambios más importantes que debemos hacer?',
        ],
      },
      {
        q: '¿Tratamos a nuestros empleados con respeto?',
        a: [
          'Si es así, ¿cómo lo reconocemos y cómo lo hacemos visible para todos?',
          'Si no, ¿estamos agotando a empleados individuales o afecta a todo el equipo?',
        ],
      },
      {
        q: '¿Proporcionamos a nuestros empleados todo lo necesario para realizar sus tareas de forma sencilla, segura y eficaz?',
        a: [
          'Si es así, ¿cómo lo identificamos y qué resulta innecesario?',
          'Si no, ¿qué actividades podemos simplificar o hacer más específicas? ¿Qué peligros existen en relación con sus tareas?',
        ],
      },
      {
        q: '¿Respetamos a nuestros clientes, proveedores y otros socios lo suficiente como para generar confianza y crear relaciones fructíferas a largo plazo?',
        a: [
          'Si es así, ¿cómo lo reconocemos y cómo lo hacemos visible para todos?',
          'Si no, ¿en qué punto podemos mejorar nuestra comunicación?',
        ],
      },
      {
        q: '¿Nos hemos asegurado de que nuestros empleados comprenden los procesos establecidos?',
        a: [
          'Si es así, ¿cómo lo detectamos y qué procesos siguen siendo demasiado costosos?',
          'Si no, ¿qué procesos no funcionan bien pero carecen de alternativa?',
        ],
      },
      {
        q: '¿Dedicamos suficiente tiempo a revisar regularmente estas cuestiones?',
        a: [
          'Si es así, ¿se aplica esto también en situaciones de crisis o nos ponemos entonces anteojeras?',
          'Si no, ¿qué comportamientos nos impiden hacerlo?',
        ],
      },
    ],
  },
  vita: {
    title: 'Biografía profesional',
    experienceTitle: 'Experiencia profesional',
    positions: [
      {
        period: '06/2025 - ahora',
        role: 'Fundador',
        org: 'tahi.design, Valencia, España',
        description:
          'Consultoría de transformación de negocios que aporta estabilidad y claridad a sus clientes mediante la optimización de experiencias digitales de usuario y la mejora de sistemas para gestionar finanzas, marketing y RR. HH. sin fricciones. Desarrollando aplicaciones de productividad con Claude Code. Volví a fundarla después de mi etapa como director general.',
        note: {
          title: '01/2026 - 03/2026: Baja por paternidad',
          text: 'Mi esposa y yo dimos la bienvenida a nuestro primer hijo a este hermoso mundo. Durante este tiempo, estudié inversión en valor.',
        },
      },
      {
        period: '01/2022 - 06/2025',
        role: 'Director General',
        org: 'Flinterhoff GmbH, Kalkar, Alemania',
        description:
          'Empresa familiar con dos unidades de negocio diferenciadas: comercio minorista y construcción metálica. Me incorporé a la dirección en una fase de complejidad estructural y presión financiera y me centré en restablecer la claridad, la estabilidad y la viabilidad a largo plazo. Mis responsabilidades abarcaron la gestión financiera y las previsiones, el rediseño de sistemas y procesos, el comercio digital y la reestructuración estratégica, incluida una exitosa fase de cambio de rumbo y el cierre responsable del negocio minorista en 2024.',
      },
      {
        period: '01/2021 - 12/2021',
        role: 'Fundador',
        org: 'tahi.design, Kalkar, Alemania',
        description:
          'Consultoría de transformación de negocios que ha producido manuales de marketing claros, sistemas de diseño y experiencias digitales y procesos. Para Flinterhoff GmbH, creamos un sistema de diseño de marca para el reposicionamiento minorista y comenzamos a desarrollar un sistema de comercio electrónico personalizado. Para Kreishandwerkerschaft Kleve, una corporación pública que apoya a las empresas de comercio regional, realizamos una investigación de las partes interesadas y construimos un sitio web que sirve como punto de acceso central para documentos legales, contactos e información profesional para más de 4.100 empresas. Tahi.design cerró tras un año de éxitos para centrarse en Flinterhoff GmbH.',
      },
      {
        period: '09/2016 - 12/2020',
        role: 'Consultor Interno',
        org: 'Flinterhoff GmbH, Kalkar, Alemania',
        description:
          'Empresa familiar con dos unidades de negocio independientes: comercio minorista y construcción metálica. Diseñé e implanté sistemas operativos, digitales y financieros clave en ambas áreas, incluidos entornos de colaboración en la nube, sistemas ERP y POS, procesos de contabilidad lean y el rediseño de flujos de trabajo. Mi trabajo se centró en crear claridad y escalabilidad y en facilitar una colaboración eficaz entre personas, herramientas y modelos de negocio.',
      },
    ],
    experienceFootnote: 'Más detalles y experiencias en [LinkedIn](https://www.linkedin.com/in/mflinterhoff/).',
    educationTitle: 'Formación académica',
    education: [
      {
        degree: 'Máster en Artes (M.A.): Gestión de medios de comunicación y empresariado (2016), 1,2',
        focus:
          'Tesis: Business Model Innovation as an important value driver in corporations. A structured analysis and systematic evaluation of existing concepts.',
        activities:
          'Actividades: Profesor de transformación digital después de la graduación (09/2016-02/2017); viajes de estudio a Berlín, Silicon Valley y Tel Aviv; discurso como representante de clase en el día de graduación.',
        school: 'Hochschule Fresenius, Universidad de Ciencias Aplicadas, Colonia, GER',
      },
      {
        degree: 'Bachelor of Arts (B.A.): Estudios de Medios Aplicados (2014), 1,6',
        focus: 'Enfoque: Medios de comunicación, deportes y gestión de eventos',
        activities:
          'Actividades: Representante de clase; apoyo a la representación estudiantil en la organización de eventos y fines de semana de bienvenida.',
        school: 'Hochschule Mittweida & Hochschule Fresenius, Universidades de Ciencias Aplicadas, GER',
      },
    ],
    assetsTitle: 'Activos',
    skills: {
      title: 'Competencias clave',
      note: 'Ordenadas alfabéticamente.',
      items: 'Gestión empresarial, Transformación digital, Diseño de sistemas, Gestión de cambios, Marketing',
      footnote:
        'Encuentra más habilidades en [LinkedIn](https://www.linkedin.com/in/mflinterhoff/details/skills/) y cómo hago las cosas [aquí](/es/approach).',
    },
    languages: {
      title: 'Idiomas',
      items: ['Alemán: Lengua materna', 'Inglés: Profesional (C2)', 'Español: Fluido (B2, tomando clases)'],
    },
    tools: {
      title: 'Herramientas relevantes',
      note: 'Las herramientas utilizadas en mi día a día están resaltadas en color. Ordenadas alfabéticamente.',
      groups: [
        {
          label: 'IA',
          tools: [
            { name: 'Claude', href: 'https://claude.ai/', primary: true },
            { name: 'NotionAI', href: 'https://www.notion.com/product/ai' },
            { name: 'ChatGPT', href: 'https://chatgpt.com' },
            { name: 'Google Gemini', href: 'https://gemini.google.com/' },
            { name: 'NotebookLM', href: 'https://notebooklm.google/' },
          ],
        },
        {
          label: 'Colaboración',
          tools: [
            { name: 'Google Workspace', href: 'https://workspace.google.com/', primary: true },
            { name: 'Notion', href: 'https://notion.so' },
            { name: 'Asana', href: 'https://asana.com/' },
            { name: 'Microsoft 365', href: 'https://www.microsoft.com/microsoft-365' },
            { name: 'Miro', href: 'https://miro.com/' },
            { name: 'Slack', href: 'https://slack.com/' },
          ],
        },
        {
          label: 'Contenido, diseño, creación de prototipos',
          tools: [
            { name: 'Affinity Studio', href: 'https://www.affinity.studio/', primary: true },
            { name: 'Figma', href: 'https://figma.com/' },
            { name: 'Adobe Creative Cloud', href: 'https://www.adobe.com/creativecloud.html' },
            { name: 'DaVinci Resolve', href: 'https://www.blackmagicdesign.com/products/davinciresolve' },
            { name: 'Canva', href: 'https://canva.com' },
            { name: 'Whimsical', href: 'https://whimsical.com/home' },
          ],
        },
        {
          label: 'Programación / Hosting',
          tools: [
            { name: 'Claude Code', href: 'https://claude.com/product/claude-code', primary: true },
            { name: 'Cursor', href: 'https://cursor.com/' },
            { name: 'Cloudflare', href: 'https://cloudflare.com' },
            { name: 'Visual Studio Code', href: 'https://code.visualstudio.com/' },
          ],
        },
        {
          label: 'Sitio web sin código / eCommerce',
          tools: [
            { name: 'Shopify', href: 'https://shopify.com' },
            { name: 'Webflow', href: 'https://webflow.com/' },
            { name: 'WiX', href: 'https://www.wix.com/' },
            { name: 'WordPress / WooCommerce', href: 'https://wordpress.com/' },
          ],
        },
        {
          label: 'Productividad para Mac',
          tools: [
            { name: 'Alfred', href: 'https://www.alfredapp.com/', primary: true },
            { name: 'Magnet', href: 'https://magnet.crowdcafe.com/', primary: true },
            { name: 'Yoink', href: 'https://apps.apple.com/en/app/yoink-better-drag-and-drop/id457622435', primary: true },
            { name: 'HandBrake', href: 'https://handbrake.fr/' },
          ],
        },
      ],
    },
    connections: {
      title: 'Conexiones',
      note: 'Áreas de expertos autónomos, líderes y gestores de Europa y partes de Latinoamérica en mi red que podrían serle beneficiosas.',
      areas: 'IA, ciberseguridad, RRHH y Liderazgo, marketing, diseño (espacial), desarrollo de software',
      footnote: 'Conectemos en [LinkedIn](https://www.linkedin.com/in/mflinterhoff/).',
    },
    glossaryTitle: 'Glosario',
    glossary: [
      {
        term: '1. Gestión empresarial',
        definition:
          'Dirigir y supervisar todos los aspectos de las operaciones de una empresa para alcanzar sus objetivos estratégicos. Incluye la planificación estratégica, el diseño organizativo, la administración financiera, la excelencia operativa y la gestión de las partes interesadas.',
        sample:
          'Asumir la plena responsabilidad de pérdidas y ganancias, navegar situaciones complejas de cambio de rumbo, reestructurar unidades de negocio, implantar controles financieros y crear claridad organizativa durante fases de incertidumbre, equilibrando siempre las necesidades de empleados, clientes y propiedad.',
      },
      {
        term: '2. Transformación digital',
        definition:
          'La integración estratégica de tecnologías digitales en todas las áreas de una empresa para cambiar fundamentalmente su forma de operar y aportar valor. Va más allá de adoptar nuevas herramientas: implica repensar procesos, cultura y experiencias de cliente para aprovechar la tecnología como ventaja competitiva.',
        sample:
          'Implementé sistemas basados en la nube, rediseñé flujos de trabajo para operaciones digitales, creé capacidades de comercio electrónico, incorporé empleados y habilité la toma de decisiones basada en datos en funciones empresariales tradicionalmente analógicas.',
      },
      {
        term: '3. Diseño de sistemas',
        definition:
          'Crear marcos estructurados que conecten personas, procesos y herramientas para lograr resultados empresariales específicos. Incluye mapear flujos de trabajo, definir flujos de datos, seleccionar las tecnologías adecuadas y asegurar que los distintos componentes funcionen juntos sin fricciones.',
        sample:
          'Diseñé infraestructuras operativas, incluyendo sistemas ERP y contables, automatización de procesos y entornos de colaboración digital que aportan claridad, reducen fricciones y permiten el crecimiento.',
      },
      {
        term: '4. Gestión de cambios',
        definition:
          'La gestión del cambio es la disciplina de planificar, coordinar y guiar a las personas, los procesos y los sistemas a través de una transición para lograr un resultado deseado dentro de restricciones definidas de tiempo, presupuesto y alcance. Implica alinear a las partes interesadas, gestionar la comunicación y la adopción, mitigar riesgos y asegurar que los cambios se implementen de forma eficaz y se mantengan en el tiempo.',
        sample:
          'Lideré iniciativas interfuncionales como implementaciones de ERP, proyectos de reposicionamiento del comercio minorista, desarrollo de plataformas de comercio electrónico y reestructuraciones organizativas. Me enfoqué en mantener una comunicación clara, establecer plazos realistas y asegurar resultados mensurables alineados con los objetivos empresariales más amplios.',
      },
      {
        term: '5. Marketing',
        definition:
          'Crear, comunicar y ofrecer valor a los clientes mientras se construyen relaciones rentables y duraderas. Incluye comprender las necesidades del cliente, desarrollar propuestas de valor convincentes, posicionar productos o servicios en el mercado y ejecutar campañas integradas a través de múltiples canales.',
        sample:
          'Reposicioné unidades de negocio completas, desarrollé sistemas de marca, creé estrategias de comercio digital, diseñé marcos de comunicación con clientes e implementé procesos de investigación de mercado para fundamentar decisiones estratégicas durante fases de transformación.',
      },
    ],
  },
  legal: {
    notice: {
      title: 'Menciones legales',
      blocks: [
        { kind: 'paragraph', text: 'Matthias Flinterhoff' },
        { kind: 'paragraph', text: 'Paseo Serra D’Espada 8, Escalera 3 Planta 4 Puerta 25, 46120 Alboraya, España' },
        { kind: 'subheading', text: 'NIF' },
        { kind: 'paragraph', text: 'Z0118855L' },
        { kind: 'subheading', text: 'Contacto' },
        { kind: 'paragraph', text: 'Correo electrónico: [hi@mflinterhoff.com](mailto:hi@mflinterhoff.com) · Teléfono: +49 156 78402395' },
        { kind: 'subheading', text: 'Responsable del contenido' },
        { kind: 'paragraph', text: 'Matthias Flinterhoff' },
        { kind: 'subheading', text: 'Aviso conforme a la LSSI (Ley 34/2002)' },
        {
          kind: 'paragraph',
          text: 'Este sitio web cumple con los requisitos de la Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI).',
        },
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      blocks: [
        {
          kind: 'subheading',
          text: 'Consultas a través de formulario de contacto, teléfono, correo electrónico u otros canales de comunicación',
        },
        {
          kind: 'paragraph',
          text: 'Cuando nos envía consultas, su información, incluidos los datos de contacto que proporciona, será almacenada por nosotros con el fin de procesar la consulta y en caso de preguntas de seguimiento. No transmitimos estos datos a terceros sin su consentimiento. Si su consulta ha sido respondida, no se ha celebrado ningún contrato y no quedan preguntas de seguimiento abiertas, sus datos se eliminarán en un plazo máximo de 3 meses. Si de esta consulta ha resultado un contrato con un acuerdo de compra posterior, su información se almacenará hasta que expire el plazo de prescripción. La obligación legal de conservación de datos relacionados con la ejecución del contrato es generalmente de 10 años.',
        },
        { kind: 'subheading', text: 'Información, eliminación, bloqueo' },
        {
          kind: 'paragraph',
          text: 'Tiene derecho en cualquier momento a recibir información gratuita sobre sus datos personales almacenados, su origen y destinatarios y el propósito del procesamiento de datos, así como un derecho a la corrección, bloqueo o eliminación de estos datos. Se produce una excepción a la eliminación de datos si se aplica una obligación legal de conservación (por ejemplo, debido a un contrato). Los datos relevantes se almacenarán entonces de acuerdo con el período de conservación. Para esto, así como para otras preguntas sobre el tema de datos personales, puede contactarnos en cualquier momento en la dirección proporcionada en el aviso legal.',
        },
        { kind: 'paragraph', text: 'Fuente: [eRecht24](https://www.e-recht24.de/muster-datenschutzerklaerung.html)' },
      ],
    },
  },
  experiences: experiencesEs,
  footer: {
    tagline: 'Operador y gestor. Construyo, cuido, conecto, aprendo y enseño.',
    legalTitle: 'Legal',
    languagesTitle: 'Idiomas',
    exploreTitle: 'Explorar',
    contactTitle: 'Contacto',
    rights: 'Todos los derechos reservados.',
    linkedin: 'https://www.linkedin.com/in/mflinterhoff/',
  },
}

export default es
