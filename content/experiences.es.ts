import type { Experience } from './types'

// The "Experiences" services database, in Spanish. Slugs/area/icon mirror the
// English file (content/experiences.en.ts); only the human-readable text is
// translated, using the original Spanish content from Notion.
export const experiencesEs: Experience[] = [
  {
    slug: 'refining-business-models',
    area: 'corporate',
    icon: 'refining-business-models',
    name: 'Perfeccionamiento de los modelos de negocio y los procesos operativos',
    claim: 'Aportar claridad, marcar el rumbo, facilitar la toma de decisiones.',
    description: [
      'Analizo modelos de negocio y estructuras organizativas para crear claridad sobre el posicionamiento, las fortalezas y las debilidades.',
      'A través de entrevistas, talleres y marcos probados como el Business Model Canvas, examino críticamente la situación actual, identifico cuellos de botella y desarrollo una estrategia clara con objetivos y medidas.',
      'Esto crea un entendimiento compartido dentro de la empresa, y una base sólida para decisiones que cuentan con respaldo.',
      'La accesibilidad genera confianza. Previene problemas mayores.',
    ],
    note: 'Metodológicamente, trabajo con marcos como el Business Model Canvas, PESTEL, SWOT, 5-Forces, Matriz de Marketing 4P/3R, Matriz BCG o el OS Canvas de Aaron Dignan.',
    playbook: [
      {
        title: 'Análisis y Posicionamiento',
        items: ['Análisis de la situación actual', 'Desarrollo de una dirección y posicionamiento claros'],
      },
      {
        title: 'Implementación Estratégica',
        items: [
          'Definición de medidas, responsabilidades y objetivos',
          'Estructuración de unidades de negocio y vías de toma de decisiones',
        ],
      },
      {
        title: 'Seguimiento y Apoyo',
        items: [
          'Introducción de indicadores clave de rendimiento para el seguimiento del éxito',
          'Apoyo durante la implementación y comunicación de la estrategia',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Transformación de Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Situación Inicial' },
          { kind: 'paragraph', text: 'Situación económica crítica (2015-2016).' },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Reorientación estratégica de ambas unidades de negocio',
              'Enfoque en segmentos de clientes más rentables',
              'Optimización de procesos y estructura de proveedores',
              'Modernización de la comunicación digital',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          { kind: 'paragraph', text: 'Estabilización exitosa con desarrollo de patrimonio gravado a patrimonio libre.' },
          { kind: 'subheading', text: 'Decisión Estratégica a Finales de 2024' },
          {
            kind: 'paragraph',
            text: 'Tras un análisis exhaustivo en 2024, cerramos la división minorista de nuestra empresa familiar de larga tradición (fundada en 1798) para enfocarnos en la rentable construcción metálica. En este entorno familiar, la decisión fue tanto emocional como estructuralmente desafiante.',
          },
          {
            kind: 'paragraph',
            text: 'Como director general empleado, preparé este camino desde el principio, aporté ideas sobre alternativas y establecí las bases necesarias. Reflexiono sobre esta fase con humildad y muchas lecciones aprendidas: sobre la interacción entre responsabilidad, influencia y límites en empresas familiares.',
          },
          {
            kind: 'note',
            text: '**Documento Estratégico de 2022 Disponible a Solicitud.** Como parte de la reorientación estratégica de la división minorista de Flinterhoff GmbH, desarrollé un documento integral. Ejemplifica cómo estructuro modelos de negocio y conduzco a decisiones claras. Si te interesa, con gusto te envío una versión anonimizada.',
          },
        ],
      },
    ],
  },
  {
    slug: 'organizing-finances',
    area: 'corporate',
    icon: 'organizing-finances',
    name: 'Organizar las finanzas',
    claim: 'Estructuras claras, datos fiables, mejores decisiones.',
    description: [
      'Aporto estructura y claridad a tus finanzas, desde la contabilidad preliminar hasta la planificación del flujo de caja. Esto te permite identificar riesgos financieros de forma temprana y crear una base fiable para la toma de decisiones. Conozco sistemas como Datev UnternehmenOnline, Lexoffice y Candis, y me integro rápidamente en los procesos existentes.',
    ],
    playbook: [
      {
        title: 'Preparación de la Contabilidad Financiera y de Nóminas',
        items: [
          'Conciliación de contratos laborales, escalas salariales y nóminas',
          'Registro y asignación correcta de recibos',
          'Establecimiento de procesos claros de pago y aprobación',
        ],
      },
      {
        title: 'Estructuración de Estados Financieros Mensuales y Anuales',
        items: [
          'Provisión de toda la documentación y datos para servicios de asesoría fiscal',
          'Revisión de partidas pendientes, activos fijos, provisiones e inventario',
          'Preparación de estados financieros para optimización fiscal y financiera',
        ],
      },
      {
        title: 'Planificación de Flujo de Caja y Pérdidas y Ganancias',
        items: [
          'Desarrollo de herramientas de planificación y resúmenes fáciles de usar',
          'Reuniones periódicas de coordinación sobre presupuestos, inversiones y liquidez',
          'Preparación de documentos para préstamos y líneas de crédito',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Digitalización y Optimización de Finanzas como Director General de Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Situación Inicial' },
          {
            kind: 'paragraph',
            text: 'Sistema contable con una alta proporción de procesos en papel, separado del sistema de pagos.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Nuevo software, más recientemente Datev UnternehmenOnline, integrado para unificar los sistemas de contabilidad y pagos de ambas unidades de negocio.',
              'Flujos de pago alineados de forma óptima con el flujo de caja',
              'Trabajos en curso y provisiones registrados correctamente',
              'Costos de asesoría fiscal reducidos de forma permanente',
              'Estados financieros mensuales y anuales preparados de forma más rápida y precisa',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'Claridad, capacidad de acción y control, junto con mayor satisfacción y colaboración más fluida con los servicios de asesoría fiscal.',
          },
        ],
      },
    ],
  },
  {
    slug: 'corporate-restructuring',
    area: 'corporate',
    icon: 'corporate-restructuring',
    name: 'Apoyo a la reestructuración empresarial',
    claim: 'Implementación legalmente sólida y estructurada.',
    description: [
      'Apoyo la reestructuración de su estructura empresarial o patrimonial como interfaz de conexión entre asesores fiscales, notarios y bancos.',
      'En este proceso, traduzco requisitos fiscales y legales complejos en medidas claras y ejecutables, coordino con todas las partes involucradas, estructuro tareas, preparo los documentos necesarios y garantizo que las decisiones se implementen de manera coherente.',
      'Esto le permite mantener la mente libre para el negocio principal mientras yo aseguro una implementación legal y organizativamente sólida.',
    ],
    playbook: [
      {
        title: 'Preparación estratégica',
        items: [
          'Concepción: Desarrollar y seleccionar opciones de solución con asesores fiscales',
          'Gestión de proyectos: Estructurar, priorizar e implementar pasos',
        ],
      },
      {
        title: 'Coordinación y apoyo',
        items: [
          'Coordinación: Dirigir la comunicación con asesores fiscales y notarios',
          'Banca: Apoyar la apertura de cuentas y la preparación de documentos',
          'Apoyo notarial: Asistir a citas y señalar consideraciones especiales',
          'Registro mercantil: Ejecutar depósitos de capital y revisar documentos de inscripción',
        ],
      },
      {
        title: 'Integración operativa',
        items: [
          'Transición de pagos: Migrar pagos recurrentes',
          'Conciliación de pagos: Asignar partidas abiertas con asesores fiscales',
          'Comunicación con proveedores: Comunicar nuevos datos de cuenta',
        ],
      },
      {
        title: 'Documentación',
        items: ['Cierres anuales: Recopilar y transferir documentos de la entidad dada de baja'],
      },
    ],
    caseStudies: [
      {
        title: 'Reestructuración de participaciones',
        blocks: [
          { kind: 'subheading', text: 'Situación inicial' },
          {
            kind: 'paragraph',
            text: 'Para el accionista, una empresa unipersonal tuvo que ser reemplazada por dos nuevas entidades (UG de gestión y UG & Co. KG de administración patrimonial) para asegurar el patrimonio.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Coordinación de todo el proceso con asesores fiscales y notarios',
              'Apertura de nuevas cuentas bancarias',
              'Preparación de documentos de verificación de capital',
              'Reestructuración de pagos en curso',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'La reestructuración se completó sin demoras y el cliente pudo concentrarse completamente en el negocio operativo.',
          },
        ],
      },
    ],
  },
  {
    slug: 'software-changes',
    area: 'it',
    icon: 'software-changes',
    name: 'Apoyo a los cambios de software',
    claim: 'Migraciones limpias sin tiempo de inactividad.',
    description: [
      'Un cambio de software se considera un mal necesario en muchas empresas: consume tiempo, es arriesgado e impredecible. Acompaño estos procesos con experiencia, serenidad y visión tecnológica: desde el análisis, pasando por la implementación, hasta el control.',
      'Conozco las herramientas líderes por la práctica diaria y me familiarizo rápidamente con nuevos sistemas. Por eso, a menudo me solicitan cuando las transiciones deben tener éxito de manera confiable y sin fricciones.',
      'Al hacerlo, siempre mantengo la flexibilidad y soberanía de sus datos, para que su empresa permanezca adaptable e independiente, incluso cuando un proyecto revela que un software no cumple sus promesas.',
    ],
    playbook: [
      {
        title: 'Análisis y planificación',
        items: [
          'Captar procesos existentes y comportamiento de usuarios',
          'Priorizar requisitos del equipo y solicitudes de funciones',
          'Identificar y comparar opciones de software adecuadas (costo, beneficio, esfuerzo)',
        ],
      },
      {
        title: 'Implementación y migración',
        items: [
          'Exportar, preparar e importar datos a nuevos sistemas',
          'Preparar y optimizar estructuras, plantillas y flujos de trabajo',
          'Configurar interfaces, plugins y automatizaciones',
        ],
      },
      {
        title: 'Introducción y capacitación',
        items: [
          'Entornos de prueba, acompañar el lanzamiento',
          'Talleres y tutoriales para una aplicación segura',
          'Capacitar a miembros del equipo para convertirse en expertos internos',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Cambio de Asana a Notion, Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Situación inicial' },
          {
            kind: 'paragraph',
            text: 'Como Director General, buscaba una herramienta más flexible que uniera proyectos, tareas y conocimiento en un solo entorno. Queríamos mantener nuestras notas de reuniones, tareas, proyectos y documentos como directrices o informes de forma central: simple, ampliable y rápida. Las aplicaciones de Google Workspace ofrecían muy poca conexión y contexto para esto.',
          },
          { kind: 'subheading', text: 'Acciones' },
          {
            kind: 'bullets',
            items: [
              'Creé bases de datos centrales en Notion para reuniones, tareas, proyectos, plan de contenidos o documentos',
              'Conecté las diversas bases de datos para asegurar el contexto entre temas',
              'Exporté datos existentes de Asana y los importé en Notion',
              'Creé plantillas para procesos recurrentes como reuniones diarias o cierres contables mensuales',
              'Incorporación individual de empleados para introducir solo las áreas relevantes para cada rol',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'La colaboración se volvió notablemente más fluida. Toda la información relevante era inmediatamente localizable, los tiempos de investigación cayeron significativamente. Gracias a plantillas claras y formato consistente, incluso los miembros del equipo menos expertos en tecnología podían crear rápidamente documentos estructurados y claros. El equipo trabajaba de forma significativamente más productiva.',
          },
        ],
      },
      {
        title: 'Cambio de Microsoft Office 365 a Google Workspace, Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Situación inicial' },
          {
            kind: 'paragraph',
            text: 'Durante mi tiempo como Director General, queríamos simplificar la colaboración y cambiar de una solución híbrida a un entorno nativo en la nube ágil. Microsoft 365 era demasiado lento y confuso en el uso diario: buscábamos más velocidad, claridad y disfrute en el uso.',
          },
          { kind: 'subheading', text: 'Acciones' },
          {
            kind: 'bullets',
            items: [
              'Estructuré el panorama de datos existente en OneDrive',
              'Transferí contenido relevante de OneNote a Google Docs y tablas de Excel a Sheets',
              'Acompañé la migración junto con la agencia Blackboat Internet GmbH',
              'Configuré cuentas de usuario, firmas, calendarios y grupos en Google Chat',
              'Realicé un taller sobre el uso eficiente de la nueva interfaz',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'La transición aportó notablemente más facilidad y transparencia al trabajo diario. Los documentos ahora se comparten centralmente, ya no se almacenan localmente, y la comunicación fluye más rápido y con mayor claridad.',
          },
        ],
      },
      {
        title: 'Cambio de WooCommerce a Shopify, Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Situación inicial' },
          {
            kind: 'paragraph',
            text: 'Como empresa minorista, buscábamos una solución omnicanal que conectara limpiamente la tienda online, gestión de inventario, punto de venta y mercados como Google Shopping e Idealo. La tienda WooCommerce de desarrollo propio era demasiado lenta a pesar de las optimizaciones, la conexión con la gestión de inventario era complicada, el mantenimiento propenso a errores.',
          },
          { kind: 'subheading', text: 'Acciones' },
          {
            kind: 'bullets',
            items: [
              'Transferí todos los datos de clientes y productos usando la herramienta de migración de Shopify',
              'Adapté el tema de Shopify al sistema de diseño existente y reconstruí la estructura de páginas y navegación',
              'Creé plantillas para páginas, categorías, productos y artículos de blog',
              'Configuré el sistema Point of Sale incluyendo configuración de hardware',
              'Configuré todas las opciones de dominio, mercado y envío, y acompañé todo el proceso de lanzamiento',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'Un sistema sin fisuras que el equipo utilizó con entusiasmo desde el primer día. Todos los datos se transfirieron limpiamente, los procesos funcionaron significativamente más rápido, y el POS funcionó sin fricciones. Una solución que finalmente estuvo a la altura de nuestros estándares para una experiencia de compra personal y de alta calidad.',
          },
        ],
      },
      {
        title: 'Cambio del sistema ERP NetSoft a SmartHandwerk, Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Situación inicial' },
          {
            kind: 'paragraph',
            text: 'Buscábamos un software de oficina más asequible y ágil con opciones de cancelación más flexibles: un sistema que manejara de manera confiable la contabilidad, gestión de proyectos, gestión de cuentas por pagar y comunicación con clientes. NetSoft parecía anticuado y era engorroso de operar.',
          },
          { kind: 'subheading', text: 'Acciones' },
          {
            kind: 'bullets',
            items: [
              'Exporté todos los datos de clientes y artículos desde NetSoft e instalé nuevo software en el servidor y estaciones de trabajo',
              'Configuré todos los datos maestros como datos de empresa, conexiones bancarias y rangos de números',
              'Creé todas las plantillas necesarias, incluidas plantillas específicas para órdenes de reparación',
              'Incorporación integral con ronda de retroalimentación y optimización de nuevos procesos',
              'Acompañé el proceso de lanzamiento incluyendo la creación de los primeros presupuestos, confirmaciones de pedido y facturas oficiales',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'El equipo de oficina trabajó significativamente más rápido y relajado. La interfaz moderna, similar a Word, facilitó la administración diaria, redujo las consultas y creó más espacio para la planificación precisa y el control de proyectos paralelos de construcción metálica.',
          },
        ],
      },
      {
        title: 'Configuración del primer sistema ERP y PoS, Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Situación inicial' },
          {
            kind: 'paragraph',
            text: 'En 2016, el negocio minorista buscaba un sistema de gestión de inventario para reemplazar la antigua estructura de caja registradora y hojas de cálculo Excel. El objetivo era un sistema que simplificara y manejara de manera confiable las compras, ventas, administración e informes.',
          },
          { kind: 'subheading', text: 'Acciones' },
          {
            kind: 'bullets',
            items: [
              'Instalé el sistema de gestión de inventario Shopwin junto con el proveedor EasySystems (EK Servicegroup)',
              'Obtuve los datos maestros de artículos de los proveedores e importé los datos maestros de proveedores y clientes',
              'Configuré la interfaz de caja registradora y el hardware relevante (impresora de recibos, impresora de etiquetas, PC de caja registradora, estaciones de back office)',
              'Talleres para consolidar procesos con todo el equipo',
              'Acompañé el proceso de lanzamiento incluyendo presencia y apoyo en la primera semana operativa y en días de altas ventas',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'El equipo se familiarizó con el nuevo software sorprendentemente rápido. El sistema trajo seguridad, rutina y confianza, y así sentó las bases para todos los cambios de software posteriores en la empresa.',
          },
        ],
      },
    ],
  },
  {
    slug: 'tool-integration',
    area: 'it',
    icon: 'tool-integration',
    name: 'Simplificación de procesos mediante la integración inteligente de herramientas',
    claim: 'Disfruta utilizando los sistemas. Consolida tus conocimientos y compártelos con confianza.',
    description: [
      'Los sistemas digitales evolucionan rápidamente. La IA, la automatización y las nuevas interfaces están cambiando la forma en que trabajan las empresas. Te ayudo a aprovechar este impulso: con herramientas que son flexibles, simples y escalables. El software complejo y aislado es cosa del pasado. A menudo, las plataformas modernas en la nube como Google Workspace, Notion o Airtable son suficientes para conectar los flujos de trabajo de manera más inteligente y rentable.',
      'Conmigo, obtienes un constructor de herramientas experimentado que combina visión empresarial con intuición tecnológica y diseña sistemas que simplifican procesos e integran el conocimiento dentro de la organización.',
    ],
    playbook: [
      {
        title: 'Análisis',
        items: [
          'Evaluar el panorama de herramientas existente e identificar sistemas redundantes',
          'Reconocer el potencial de integración entre aplicaciones (p. ej., CRM, comunicación, gestión de proyectos)',
          'Desarrollar un concepto coordinado para flujos de trabajo más simples y conectados',
        ],
      },
      {
        title: 'Integración',
        items: [
          'Seleccionar herramientas adecuadas',
          'Configurar aplicaciones y migrar datos',
          'Documentar procesos con directrices claras y responsabilidades',
        ],
      },
      {
        title: 'Formación',
        items: [
          'Apoyar e incorporar a los empleados durante la transición',
          'Establecer una cultura de transferencia de conocimientos entre empleados',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Notion como Sistema Operativo para el Comercio Minorista de Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Situación Inicial' },
          {
            kind: 'paragraph',
            text: 'La unidad minorista necesitaba un entorno único para planificar el lanzamiento de un e-commerce personalizado, gestionar las operaciones diarias de la tienda y coordinar campañas de marketing continuas. Las tareas, los briefings de contenido y la documentación del proyecto estaban dispersos entre correos electrónicos, hojas de cálculo y chat.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Diseño de un workspace de Notion estructurado en torno a cuatro bases de datos conectadas: Tareas, Proyectos, Contenido y Documentos/notas de reuniones.',
              'Creación de plantillas estandarizadas para el trabajo recurrente: cierres mensuales, newsletters, artículos de blog, briefs de anuncios, acciones en tienda y rondas de corrección.',
              'Conexión de proyectos, tareas, notas de reuniones y el wiki de documentación para que todas las iniciativas fueran trazables desde el brief hasta la ejecución.',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'El workspace funcionó de forma continua durante más de cuatro años, cubriendo e-commerce, operaciones de tienda y marketing desde un entorno compartido. Más de 550 entradas de contenido registradas en 2023-2024, con coste por alcance y coste por interacción calculados automáticamente. El conocimiento y el historial se preservaron íntegramente tras el cierre de la unidad minorista a finales de 2024.',
          },
          {
            kind: 'note',
            text: '**Vista Previa a Solicitud.** A solicitud, estaré encantado de mostrarte el workspace, incluyendo cómo la estructura de bases de datos, las plantillas y los informes podrían adaptarse a tu empresa.',
          },
        ],
      },
      {
        title: 'Notion como Hub de Colaboración para tahi.design',
        blocks: [
          { kind: 'subheading', text: 'Situación Inicial' },
          {
            kind: 'paragraph',
            text: 'Dirigir una consultoría de transformación empresarial implica trabajar simultáneamente en investigación, gestión de stakeholders, entrega de proyectos y comunicación con clientes. Para el proyecto de web corporativa de la Kreishandwerkerschaft Kleve, se necesitaba un entorno compartido que pudiera almacenar datos de investigación, coordinar talleres, hacer seguimiento de la entrega e informar al cliente.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Construcción de un workspace de Notion como única fuente de verdad: Tareas, una base de datos de entrevistas, reuniones y talleres, y un blog de proyecto.',
              'La base de datos de entrevistas estructuró las entrevistas de enfoque internas y externas, permitiendo identificar patrones entre grupos de stakeholders.',
              'El blog de proyecto reemplazó los correos de estado por una vista transparente y siempre actualizada del progreso, las decisiones y los próximos pasos.',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'Notion reemplazó lo que normalmente requeriría una herramienta de gestión de proyectos, un repositorio de investigación, un gestor de reuniones y una capa de reporting para el cliente. El proyecto entregó la nueva kh-kleve.de, ahora el portal central para 4.100 empresas artesanales en el distrito de Kleve, con una media de ≈59.000 visitas mensuales en 2025.',
          },
        ],
      },
      {
        title: 'Sistema Personalizado de Registro y Evaluación de Tiempos para Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Situación Inicial' },
          {
            kind: 'paragraph',
            text: 'Se requería una solución flexible y mantenible de forma independiente para registrar y evaluar las horas de trabajo, ausencias, horas extras y derecho a vacaciones en dos áreas de negocio muy diferentes: construcción metálica y comercio minorista. La solución existente (Papershift) era demasiado inflexible.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Desarrollo de un sistema modular en Google Sheets y Forms: registro de tiempos y planificación de turnos, gestión de vacaciones, y evaluaciones de horas por proyecto.',
              'Configuración de bases de datos de evaluación vinculadas (Pivot) y evaluaciones automatizadas de empleados mediante la función Query.',
              'Formación de gerentes y creación de un tutorial para uso independiente.',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'Una herramienta claramente estructurada que cumple con los requisitos individuales, no genera costos adicionales y funciona en el entorno familiar de Google Workspace. La frustración del equipo disminuyó; en su lugar, creció la responsabilidad personal y la colaboración en el manejo de los datos de tiempo de trabajo.',
          },
        ],
      },
      {
        title: 'Herramienta Personalizada de Planificación de Flujo de Caja para Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Situación Inicial' },
          {
            kind: 'paragraph',
            text: 'Se necesitaba una herramienta de planificación clara y personalizable para mostrar la liquidez en múltiples cuentas bancarias, incluyendo líneas de crédito, comparación planificada/real y evaluación de cronograma flexible, completamente implementable dentro de Google Workspace.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Desarrollo de un sistema modular en Google Sheets con una estructura de importación para transacciones reales en todas las cuentas bancarias.',
              'Tablas de planificación para pagos recurrentes y únicos, y una vista mensual con saldo inicial, entradas/salidas, saldo final y fondos disponibles por banco.',
              'Vista de punto en el tiempo con previsión de liquidez hasta una fecha seleccionable libremente.',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'Una herramienta intuitiva que ahorra tiempo y crea transparencia completa sobre las entradas y salidas futuras, sin cálculos manuales propensos a errores ni sistemas paralelos.',
          },
        ],
      },
    ],
  },
  {
    slug: 'generative-ai',
    area: 'it',
    icon: 'generative-ai',
    name: 'Integración de la inteligencia artificial generativa en los procesos empresariales',
    claim: 'Empodera a las personas, no las reemplaces.',
    description: [
      'La IA generativa no es un fin en sí misma ni un botón de moda que deba presionarse en todas partes. Usada correctamente, potencia el rendimiento humano.',
      'Ayudo a las empresas a introducir la IA de forma pragmática: pequeña, segura y cercana a los desafíos reales. Los empleados conocen la tecnología en el trabajo cotidiano, pueden jugar con ella, cometer errores y así comprender cómo funciona mejor la IA generativa.',
      'Solo cuando esta comprensión está en su lugar puede funcionar productivamente en el modelo de negocio: con claridad, de forma controlable y con valor real.',
    ],
    playbook: [
      {
        title: 'Comprensión y Evaluación',
        items: [
          'Entrevistas con la dirección y el equipo para identificar cuellos de botella y casos de uso relevantes',
          'Análisis del modelo de negocio e identificación de los verdaderos generadores de valor',
          'Evaluación del nivel actual de conocimiento y madurez en IA de la empresa',
        ],
      },
      {
        title: 'Crear Contexto y Desarrollar Competencias',
        items: [
          'Enseñanza del uso adecuado de la IA: instrucciones claras, contexto relevante, minimización de alucinaciones',
          'Creación de primeros ejemplos de aplicación pequeños en entornos de prueba seguros',
          'Permitir a los empleados experimentar con la tecnología en el trabajo cotidiano y construir rutinas',
        ],
      },
      {
        title: 'Diseñar e Implementar',
        items: [
          'Desarrollo de instrucciones de trabajo y documentos claros que la IA pueda usar eficazmente',
          'Selección e introducción de herramientas o plataformas de IA adecuadas',
          'Configuración de agentes individuales que responden con claridad, y variantes para diferentes tareas y roles',
        ],
      },
      {
        title: 'Asegurar y Avanzar',
        items: [
          'Evaluación de mejoras genuinas en los procesos, no solo en la producción',
          'Integración gradual de las soluciones de IA más exitosas en el trabajo diario',
          'Establecimiento de una cultura de aprendizaje en la que la IA se usa de forma responsable, eficiente y con entusiasmo',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Creación de un Asesor para Preguntas de Gestión Empresarial, Flinterhoff GmbH / KG',
        blocks: [
          { kind: 'subheading', text: 'Situación Inicial' },
          {
            kind: 'bullets',
            items: [
              'Dejé la empresa en junio de 2025; desde entonces, solo jornadas de consultoría mensuales.',
              'Para las preguntas de gestión empresarial que surgían en el trabajo cotidiano, era necesario un apoyo efectivo para la secretaría y el director gerente, para evitar consultar frecuentemente al asesor fiscal y aumentar así los costos.',
            ],
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Configuración de Google Gemini y explicación de la funcionalidad de la IA generativa mediante ejemplos concretos.',
              'Casos de uso: corteses declinaciones, comprensión de normas contables, contratos o consultas de seguros, y preparación de reuniones con posibles inquilinos.',
              'Discusión de resultados y recomendaciones para optimizar instrucciones durante las jornadas de consultoría mensuales.',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'La secretaría se sintió más segura al manejar las tareas cotidianas, sabiendo que tenían un socio competente a su lado. Las reuniones se preparaban de forma más sistemática y los participantes alcanzaban decisiones concretas o próximos pasos más rápidamente.',
          },
        ],
      },
    ],
  },
  {
    slug: 'websites-commerce',
    area: 'marketing',
    icon: 'websites-commerce',
    name: 'Diseño de sitios web y tiendas online',
    claim: 'Diseños estéticos que funcionan.',
    description: [
      'Desarrollo sitios web corporativos, páginas de destino y tiendas online con estructura clara, diseño estético y fácil mantenimiento. El objetivo: una presencia que convenza en contenido y forma, dándole a la empresa expresión y dirección.',
      'Trabajo con Webflow, Shopify y Figma, acompañando todo el proceso: desde la idea hasta la capacitación del equipo. Si es necesario, también configuro sistemas de gestión de inventario o aplicaciones de punto de venta.',
      'El resultado es un sistema potente que no depende de mí, sino que capacita al equipo para desarrollar su presencia digital con autonomía y alegría. Bajo petición, reemplazo sistemas existentes, incluida la migración de datos.',
    ],
    playbook: [
      {
        title: 'Descubrimiento',
        intro:
          'A través de talleres y conversaciones, analizo cómo se comunica la empresa y qué debe lograr realmente el sitio web: visibilidad, confianza o ventas. Identifico interrupciones en el diseño, la experiencia del usuario y los procesos, y desarrollo puntos de acción claros.',
      },
      {
        title: 'Ideación',
        intro:
          'Juntos desarrollamos borradores, prototipos y contenido que transmiten la marca con claridad. Uso Figma para crear wireframes y diseños, probando desde el inicio si la solución es fiel a la marca y fácil de usar.',
      },
      {
        title: 'Implementación',
        intro:
          'Con base en los diseños aprobados, implemento el sitio web o la tienda en Webflow o Shopify, con un diseño consistente, una navegación clara para el usuario (máximo tres pasos hasta la acción) y una disposición responsive limpia. También configuro plantillas y estructuras de contenido para que se puedan añadir nuevas páginas, productos o entradas sin barreras técnicas.',
      },
      {
        title: 'Revisión',
        intro:
          'Tras el lanzamiento, evalúo los resultados, desde el rendimiento hasta la facilidad de mantenimiento. A través de talleres claros y prácticos, el equipo aprende a gestionar el contenido de forma independiente y a mantener el diseño de manera consistente.',
      },
    ],
    caseStudies: [
      {
        title: 'Tienda online para Flinterhoff',
        blocks: [
          { kind: 'subheading', text: 'Situación inicial' },
          {
            kind: 'paragraph',
            text: 'Una tienda minorista de artículos de decoración para el hogar y accesorios de moda de alta calidad que quería expandir su alcance de mercado con una tienda online moderna, para hacer tangible digitalmente también la experiencia de compra especial.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Desarrollo de un sistema de diseño coherente con la marca y creación de wireframes en Figma',
              'Configuración de una tienda WooCommerce inicial para probar la experiencia de compra digital',
              'Cambio a Shopify para consolidar procesos, gestión de inventario y punto de venta en un solo sistema',
              'Integración de ventas multicanal: tienda online, Google Shopping, redes sociales, newsletter y ventas físicas',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'La tienda online estuvo activa desde agosto de 2023 hasta diciembre de 2024. La conexión a Google Shopping y portales de comparación de precios trajo rápidamente nuevo acceso de clientes, y el equipo ganó significativamente más confianza y alegría en las operaciones. La satisfacción del cliente se reflejó en una valoración de Trusted Shops de 4,67 / 5 estrellas.',
          },
        ],
      },
      {
        title: 'Sitio web corporativo para Kreishandwerkerschaft Kleve',
        blocks: [
          { kind: 'subheading', text: 'Situación inicial' },
          {
            kind: 'paragraph',
            text: 'Una corporación de derecho público con necesidad de un posicionamiento claro y una presentación externa única y más moderna. Querían alejarse de un proveedor de sistemas que ofrecía constructores de sitios web simples y obsoletos para cámaras de artesanía regionales. (2021)',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Realización de entrevistas de enfoque internas y externas',
              'Talleres para identificar beneficios y servicios principales',
              'Desarrollo y lanzamiento del nuevo sitio web [kh-kleve.de](https://kh-kleve.de)',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'El sitio web sirve como centro principal para empresas artesanales en temas como información tarifaria, asesoramiento legal y organización de capacitaciones. Con un promedio de ≈59.000 visitas mensuales (2025) y 4.100 empresas artesanales en el distrito de Kleve. Exclusivamente reseñas de 5 estrellas en Google desde la finalización del proyecto.',
          },
        ],
      },
      {
        title: 'Tienda online para la pintora Kassandra Flinterhoff',
        blocks: [
          { kind: 'subheading', text: 'Situación inicial' },
          {
            kind: 'paragraph',
            text: 'Una pintora emergente quería presentar sus productos de arte, colaboraciones y talleres en una tienda online, coordinada cromáticamente con sus obras, visualmente expresiva y funcional.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Análisis de su paleta de colores para desarrollar un sistema de diseño consistente',
              'Selección de tipografía adecuada y vectorización de la firma como logotipo',
              'Configuración del tema de Shopify, navegación y plantillas (productos, blog, páginas)',
              'Configuración de mercados y zonas de envío para envíos a nivel mundial; integración de punto de venta y Google Shopping',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'Una [tienda online](https://kassandra.studio) versátil, rápida y multilingüe que no solo sorprende sino que destaca en la escena artística. Gracias a la estructura clara y el mantenimiento sencillo, la artista puede comercializar sus obras de forma independiente y continuar enfocándose en lo que importa: crear.',
          },
        ],
      },
    ],
  },
  {
    slug: 'quality-usability',
    area: 'marketing',
    icon: 'quality-usability',
    name: 'Garantizar la calidad y la facilidad de uso de su sitio web o aplicación',
    claim: 'Generar, mantener y recuperar la confianza.',
    description: [
      'Reviso sitios web y aplicaciones con la mirada de un líder empresarial, enfocándome en la claridad, coherencia y eficiencia. Navego por la aplicación, evalúo el diseño, la orientación del usuario y la presentación en todos los dispositivos, y valoro si la experiencia digital realmente sirve al modelo de negocio.',
      'Documento las debilidades técnicas y de diseño con precisión y formulo recomendaciones fundamentadas para optimizar la estructura, el lenguaje y el flujo.',
      'Si se desea, implemento estas mejoras directamente en el frontend o capacito a su equipo para que realice el control de calidad de forma regular, exhaustiva y eficiente por su cuenta.',
    ],
    playbook: [
      {
        title: 'Evaluación de la Usabilidad',
        items: [
          'Análisis del sitio web o aplicación en diferentes dispositivos (escritorio, tableta, smartphone)',
          'Evaluación de la navegación, legibilidad y comprensibilidad del contenido',
          'Identificación de clics innecesarios y pasos redundantes',
        ],
      },
      {
        title: 'Garantía de Calidad y Coherencia',
        items: [
          'Revisión de los elementos de la interfaz para verificar su correcta visualización y funcionalidad',
          'Verificación de la responsividad, contrastes de color y escalado de texto',
          'Revisión y, si es necesario, localización de los textos de la interfaz (DE/EN)',
        ],
      },
      {
        title: 'Recomendaciones e Implementación',
        items: [
          'Creación de un informe claro con capturas de pantalla, justificaciones y priorización',
          'Formulación de sugerencias concretas para optimizar el diseño y la orientación del usuario',
          'Implementación de los ajustes más importantes directamente en el frontend',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'PacketSafari: Onboarding Más Rápido y Más Conversiones de Suscripciones',
        blocks: [
          { kind: 'subheading', text: 'Situación Inicial' },
          {
            kind: 'paragraph',
            text: '[PacketSafari](https://www.packetsafari.com/), un proveedor de análisis de tráfico de red, quería optimizar el proceso de descubrimiento de su aplicación web, para que los usuarios pudieran probar el producto más rápido, el valor quedara inmediatamente claro y las suscripciones se completaran con mayor rapidez.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Rediseño de la primera sección (above-the-fold) de la página de inicio, con una comunicación clara del valor y un llamado a la acción destacado.',
              'Rediseño de la interfaz de la aplicación para que los usuarios pudieran cargar sus datos directamente y ver el primer resultado en el copiloto de IA de forma gratuita.',
              'Integración de un muro de pago que bloquea los resultados adicionales: el primer resultado demuestra el valor de inmediato, y luego los usuarios pueden suscribirse a un precio justo.',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'El número de usuarios y las conversiones de suscripciones aumentaron significativamente. Las empresas consultaban cada vez más sobre una solución empresarial personalizada, lo que motivó al cliente a desarrollar aún más su producto.',
          },
        ],
      },
      {
        title: 'SiteWorks2: Textos de Interfaz Más Precisos para Usuarios Alemanes',
        blocks: [
          { kind: 'subheading', text: 'Situación Inicial' },
          {
            kind: 'paragraph',
            text: 'El fundador de [SiteWorks2](https://www.siteworks.io/en), una aplicación de planificación para arquitectos y jefes de proyecto, buscaba apoyo para optimizar la localización alemana. Algunas de las traducciones existentes eran inconsistentes o ambiguas en el contexto de la aplicación.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Revisión del archivo de traducción alemán existente en cuanto a completitud, comprensibilidad y tono',
              'Verificación de los textos de la interfaz directamente en la aplicación para asegurar que la elección de palabras, longitud y ubicación se ajustaran al diseño',
              'Corrección de términos poco claros y señalización de ajustes en términos codificados directamente en el software',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'La localización alemana revisada resultó en una orientación del usuario más clara y una apariencia más coherente de la aplicación. El fundador destacó que la nueva calidad del lenguaje hacía que la aplicación se sintiera "más profesional y confiable".',
          },
        ],
      },
    ],
  },
  {
    slug: 'branding-design-systems',
    area: 'marketing',
    icon: 'branding-design-systems',
    name: 'Creación de sistemas de marca y diseño',
    claim: 'Características reconocibles que inspiran confianza.',
    description: [
      'Desarrollo identidades de marca claras y sostenibles. Identidades que las empresas pueden presentar con orgullo tanto interna como externamente.',
      'Cada marca se crea mediante una estrecha colaboración: la dirección y el equipo participan activamente y son escuchados. Si ya existe un proyecto o se ha encargado a un diseñador específico, puedo gestionar los procesos de diseño en consecuencia.',
      'En mi proceso, combino el pensamiento estratégico de un líder empresarial con la intuición creativa y la experiencia tecnológica. Utilizo la inteligencia artificial de forma estratégica para desarrollar variaciones más rápidamente durante la fase de diseño.',
      'El resultado no es solo un nuevo diseño, sino una comprensión compartida de lo que representa la empresa.',
    ],
    playbook: [
      {
        title: 'Comprender la empresa',
        items: [
          'Entrevistas con la dirección y los empleados',
          'Análisis de la comunicación, productos y patrones de diseño existentes',
          'Análisis del público objetivo y feedback de los clientes para afinar la perspectiva de la marca',
        ],
      },
      {
        title: 'Desarrollo de ideas',
        items: [
          'Branding: al menos tres variaciones para nombre de marca y eslogan, valores de marca y tono de voz, posicionamiento y mensaje',
          'Sistema de diseño: al menos tres enfoques para paletas de colores, logotipos y tipografía',
          'Maquetas para ejemplos de aplicación clave (sitio web, impresión, redes sociales) con rondas colaborativas de feedback',
        ],
      },
      {
        title: 'Implementación del diseño',
        items: [
          'Integración del sistema de branding en todos los canales de comunicación (sitio web, newsletter, carteles, presentaciones)',
          'Creación de una guía visual con ejemplos de aplicación para que los equipos internos y los socios externos puedan diseñar siempre de forma coherente',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Nueva identidad de marca para Flinterhoff: Für dich & mich',
        blocks: [
          { kind: 'subheading', text: 'Situación inicial' },
          {
            kind: 'paragraph',
            text: 'Para apoyar la estrategia establecida en 2022 con enfoque en regalos de alta calidad, era necesario un branding apropiado y un sistema de diseño para la tienda Flinterhoff.',
          },
          { kind: 'subheading', text: 'Medidas' },
          {
            kind: 'bullets',
            items: [
              'Análisis exhaustivo de la marca e identidad visual existentes',
              'Derivación de elementos clave como el color primario violeta, la paleta de colores y la tipografía',
              'Diseño del logotipo con diversas variantes (favicon, logotipo de texto, logotipo de texto e imagen, logotipo y eslogan)',
              'Formulación de una guía de diseño para garantizar una experiencia fluida en todos los canales de comunicación y venta',
            ],
          },
          { kind: 'subheading', text: 'Resultado' },
          {
            kind: 'paragraph',
            text: 'El nuevo diseño capturó la esencia de la marca: personal, de alta calidad y confiable. El equipo se identificó con la nueva identidad y el público objetivo se sintió interpelado. Tasas de apertura del 40-55% y altas tasas de clics confirmaron la relevancia de la comunicación.',
          },
        ],
      },
    ],
  },
]

export default experiencesEs
