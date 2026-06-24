import type { SiteContent } from './types'
import { experiencesDe } from './experiences.de'

const de: SiteContent = {
  locale: 'de',
  meta: {
    title: 'Matthias Flinterhoff | Macher & Technologe',
    description:
      'Praktiker und Gestalter, der Unternehmen umstrukturiert, Systeme einführt und Migrationen durchführt. Ich untersuche und gestalte Organisationen, die Menschen befähigen, statt sie zu ersetzen.',
  },
  nav: [
    { key: 'vita', label: 'Lebenslauf', href: '/vita', icon: 'vita' },
    { key: 'approach', label: 'Arbeitsweise', href: '/approach', icon: 'approach' },
    { key: 'questions', label: 'Für Führungskräfte', href: '/questions', icon: 'questions' },
    { key: 'experiences', label: 'Erfahrungen', href: '/#experiences', icon: 'refining-business-models' },
    { key: 'inspiration', label: 'Inspiration', href: '/inspiration', icon: 'inspiration' },
  ],
  ui: {
    skipToContent: 'Zum Inhalt springen',
    home: 'Start',
    languageLabel: 'Sprache',
    toggleTheme: 'Thema wechseln',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    backToHome: 'Zurück zur Startseite',
    backToExperiences: 'Zurück zu den Erfahrungen',
    learnMore: 'Mehr erfahren',
    onThisPage: 'Auf dieser Seite',
    contactCta: 'Kontakt aufnehmen',
    playbook: 'Playbook',
    caseStudy: 'Fallstudie',
    caseStudies: 'Fallstudien',
    moreExperiences: 'Weitere Erfahrungen',
  },
  home: {
    quote: 'Ich lebe, um zu gestalten, sorgfältig dabei zu sein, zu verbinden, zu lernen und zu lehren.',
    heroLead:
      'Seit über 9 Jahren bin ich die Person, der Organisationen vertrauen, wenn etwas verstanden, umstrukturiert und von Menschen angenommen werden muss, die diese Veränderung nicht eingefordert haben.',
    eyebrow: 'Über mich',
    introTitle: 'Macher & Technologe',
    aboutTitle: 'Veränderung ist mein tägliches Brot',
    intro: [
      'Ich bin ein Praktiker mit Führungserfahrung in der Umstrukturierung von Unternehmen, der Einführung von Systemen, der Durchführung von Migrationen und der Verantwortung für die Querschnittsfunktionen Finanzen und Marketing. Zuletzt war ich 3,5 Jahre als Geschäftsführer tätig, bevor ich über meine eigene Beratung wieder in die Unternehmenstransformation zurückgekehrt bin. Davor leitete ich über 4 Jahre lang Initiativen als interner Berater.',
      'Aus einer Familie von Unternehmern und ehrenamtlich Engagierten kommend, faszinieren mich Organisationen seit meiner Jugend: Gruppen von Menschen, die zusammenkommen, um ein gemeinsames Ziel zu verfolgen und der Gesellschaft zugutekommen, indem sie Sicherheit, Wohlstand und Kontinuität schaffen.',
      'Sie sind das Rückgrat der Zivilisation, wenn sie richtig geformt werden. [The Company of Strangers von Paul Seabright](https://www.amazon.com/Company-Strangers-Natural-History-Economic/dp/0691146462) bietet hierzu tiefe Einblicke.',
      'Das ist der Grund, warum ich Organisationen untersuche und gestalte, die Freude machen zu führen, Mitarbeiter:innen aufblühen lassen und Menschen befähigen, statt sie zu ersetzen.',
    ],
    fresh: {
      label: 'Frisch aus dem Ofen',
      title: 'Monami AI',
      description:
        'Schluss mit vagen KI-Antworten, dem Starren auf ein leeres Prompt-Feld und dem Kopieren von Skills von einem Anbieter zum nächsten.',
      videoLabel: 'Monami AI in Aktion: einen Skill auswählen und an einen KI-Anbieter senden',
      restartLabel: 'Erneut abspielen',
      features: [
        {
          name: 'Fertige Skills.',
          description:
            'Gut strukturierte Prompts für dein Privat- und Berufsleben. Genieße einen KI-Vorsprung und leide nicht unter dem Druck eines leeren Textfelds.',
        },
        {
          name: 'Mit Legenden sprechen.',
          description:
            'Hol dir Rückmeldung von Größen wie Steve Jobs, J.R.R. Tolkien, David Attenborough oder Warren Buffett und betrachte deine Arbeit mit ihren Augen.',
        },
        {
          name: 'Smartphone oder Computer.',
          description:
            'Starte die App auf dem Gerät, das gerade am nächsten ist, und mach genau dort weiter, wo du aufgehört hast.',
        },
        {
          name: 'Deine KI, deine Wahl.',
          description:
            'Öffne ChatGPT, Claude, Gemini, Perplexity oder den Anbieter deiner Wahl mit einem einzigen Tipp.',
        },
        {
          name: 'Kopierten Text einflechten.',
          description:
            'Kopiere etwas, wähle einen Skill und füge ihn in den Chat ein. Ergänze deine ungefilterten Gedanken und schick es ab.',
        },
        {
          name: 'Ergebnisse, über die du dich freust.',
          description:
            'Mach aus groben Ideen ausgefeilte Ergebnisse – ohne Halluzinationen und ohne Schreibblockade beim Prompten.',
        },
      ],
      cta: 'Monami AI besuchen',
      href: 'https://monamiai.com',
    },
    explore: {
      title: 'Lernen Sie mich kennen',
      subtitle: 'Vier kurze Einblicke, wie ich denke, wie ich arbeite und was mich neugierig hält.',
      cards: [
        {
          key: 'vita',
          title: 'Lebenslauf',
          description: 'Berufliche Erfahrung, Ausbildung, Qualifikationen, Tools und ein Glossar meiner Arbeit.',
          href: '/vita',
          icon: 'vita',
        },
        {
          key: 'approach',
          title: 'Wie ich die Aufgaben erledige',
          description: 'Eine offene, aber hinterfragende Haltung: erst verstehen, dann mit Freude gestalten.',
          href: '/approach',
          icon: 'approach',
        },
        {
          key: 'questions',
          title: '8 kritische Fragen für Führungskräfte',
          description: 'Die Fragen, die ich als langjähriger Geschäftsführer gelernt habe, mir zu stellen.',
          href: '/questions',
          icon: 'questions',
        },
        {
          key: 'inspiration',
          title: 'Was mich inspiriert',
          description: 'Valencia, Kunst, Bücher, Musik und die Ideen, von denen ich nicht genug bekomme.',
          href: '/inspiration',
          icon: 'inspiration',
        },
      ],
    },
    experiences: {
      title: 'Erfahrungen',
      subtitle: 'Wo ich helfen kann, nach Bereichen gruppiert, jeweils mit Playbook und echten Fallstudien.',
      areaLabels: {
        corporate: 'Unternehmensführung',
        it: 'IT',
        marketing: 'Marketing',
      },
    },
    contact: {
      title: 'Let’s talk!',
      body: 'Arbeiten Sie mit einer kommunikativen Führungskraft zusammen, die Expertise in Design und Technologie mitbringt, sich schnell in komplexe Themen einarbeitet und Stabilität schafft.',
      email: 'hi@mflinterhoff.com',
      phone: '+49 156 78402395',
      emailCta: 'Schreiben Sie mir',
      phoneCta: 'Rufen Sie an',
    },
  },
  inspiration: {
    title: 'Was mich inspiriert',
    intro:
      'Ich lebe mit meiner Frau in Valencia, einer Stadt voller Bewegung, Licht und Farbe. Wir haben [Kassandras](https://kassandra.studio) Werke wie das Titelbild oben in unserem Haus hängen. Sie erinnern mich jeden Tag daran, dass Komplexität nichts Bedrohliches ist, sondern Energie enthält, wenn man sich ihr mit Struktur und Neugier nähert. Aber hier hört es nicht auf.',
    lead: 'Auch hiervon kann ich nicht genug bekommen:',
    items: [
      'Mit Claude Code reibungslose Software entwickeln, um die wirtschaftliche Kompetenz und KI-Fähigkeiten von Einzelpersonen zu stärken. Es ist das erste Tool, das mir das Gefühl gibt, Software in der Geschwindigkeit meiner Gedanken gestalten zu können: konzipieren, entwickeln, testen, iterieren, veröffentlichen. Nichts hält mich mehr auf, und ehrlich gesagt: es macht nahezu süchtig.',
      'Bücher wie Material World von Ed Conway, The Company of Strangers von Paul Seabright, The Inner Game of Tennis von W. Timothy Gallwey oder The Century Trilogy von Ken Follett.',
      'Musik wie Maribou State, Khruangbin, Parcels. Ich wähle gerne Musik aus, die zu der Atmosphäre passt, die ich für andere oder für mich selbst schaffen möchte.',
      'Mehr über makroökonomische Trends, internationale Beziehungen und Verhaltensökonomie zu lernen, wie Technologie unsere Gesellschaft nachhaltig positiv beeinflussen kann und wie ich nachhaltige Finanzentscheidungen auf der Grundlage von Value-Investing-Prinzipien treffen kann.',
      'Sportarten wie Beachvolleyball und Padel spielen.',
      'Beziehungen zu Familie und Freunden pflegen.',
    ],
  },
  approach: {
    title: 'Wie ich die Aufgaben erledige',
    intro:
      'Ich gehe an Probleme mit einer offenen, aber hinterfragenden Einstellung heran. Danach ist es an der Zeit, Lösungen systematisch zu untersuchen und zu bewerten, um schnell objektive Ergebnisse zu erzielen.',
    quote: { text: 'Erst verstehen, dann verstanden werden.', author: 'Stephen R. Covey' },
    quoteFollow: 'Ich gebe mein Bestes, um diesen Grundsatz jeden Tag zu befolgen.',
    sections: [
      {
        title: 'Wie steht es mit der Freude?',
        body: 'Am Anfang kann es „quick and dirty“ sein, aber muss es so bleiben? Sobald der Produkt-Markt-Fit oder Prozess-Organisation-Fit gefunden wurde, ist es an der Zeit, **sich Mühe zu geben**: benutzerfreundliche, detailorientierte, ästhetisch ansprechende und damit integrative Erfahrungen zu gestalten.',
        tagline: 'Die Konzentration auf das, was **wirklich wichtig** ist, ist der Schlüssel.',
      },
      {
        title: 'Ich komme gerne zum Punkt.',
        body: 'Sichtbare Ergebnisse, sowohl positive als auch negative, schaffen Klarheit. **Diese Klarheit befähigt die Organisation zum Handeln**, was wiederum die Kontrolle gibt, um zu **wohlüberlegten Entscheidungen** zu gelangen. Das ist es, was ich anstrebe.',
        tagline: '',
      },
      {
        title: 'Es soll für alle angenehm sein.',
        body: 'Die Integration eines neuen Systems, die Einrichtung neuer Prozesse oder die Einführung eines neuen Dienstes kann für den Endnutzer nur dann von Vorteil sein, wenn alle betroffenen Akteure einbezogen werden. Systematische Veränderungen verursachen Reibung. **Reibung bleibt, wenn wir uns nicht öffnen und Neugierde zeigen**.',
        tagline: 'Die Umsetzung dessen kann weh tun. Aber es ist unerlässlich, es zu versuchen.',
      },
    ],
  },
  questions: {
    title: '8 kritische Fragen für Führungskräfte',
    intro: [
      'Als langjähriger Geschäftsführer einer GmbH mit bis zu 14 Mitarbeitern weiß ich, wie wichtig und gleichzeitig schwierig es ist, die Balance zwischen strategischen Aufgaben und operativem Druck zu halten.',
      'Was habe ich in dieser Zeit gelernt? Als Führungskraft ehrlich zu sich selbst zu sein, zu erkennen, welche Informationen wirklich relevant für die Organisation sind und entsprechend diszipliniert zu handeln. Das beginnt damit, dass wir uns als Führungskräfte regelmäßig anspruchsvolle, aber kritische Fragen zu unserem Geschäftsmodell stellen.',
      'Aber es darf nicht auf der Ebene von Ideen und Theorie bleiben. Letztlich geht es ausschließlich um die Umsetzung der Maßnahmen, die sich aus den Antworten ableiten lassen. Das erfordert Mut, Beharrlichkeit und Durchhaltevermögen.',
    ],
    items: [
      {
        q: 'Haben wir eine stabile, herausragende Positionierung für unser Angebot in Bezug auf die aktuelle Markt- und Wettbewerbssituation?',
        a: [
          'Wenn ja, wie können wir wachsen oder noch effizienter werden?',
          'Wenn nein, was kann ich ändern? Sind wir im Gespräch mit unseren Kunden?',
        ],
      },
      {
        q: 'Welche Angebote kosten uns zu viel Zeit und bringen zu wenig Ertrag?',
        a: [
          'Wenn dies langfristig der Fall ist, wie können wir diese Angebote einstellen und die Entscheidung professionell kommunizieren?',
          'Wenn es sich um eine vorübergehende Situation handelt, unter welchen Bedingungen entwickeln wir das Angebot weiter?',
        ],
      },
      {
        q: 'Haben wir die richtigen Leute in den richtigen Rollen?',
        a: [
          'Wenn ja, wer übernimmt die Schlüsselaufgaben jedes Mitarbeitenden, wenn jemand ausfällt?',
          'Wenn nein, welche sind die wichtigsten Änderungen, die vorgenommen werden müssen?',
        ],
      },
      {
        q: 'Behandeln wir unsere Mitarbeitenden mit Respekt?',
        a: [
          'Wenn ja, woran erkennen wir dies und wie machen wir es für alle sichtbar?',
          'Wenn nein, brennen wir einzelne Mitarbeiter aus oder gilt dies für das gesamte Team?',
        ],
      },
      {
        q: 'Stellen wir unseren Mitarbeitenden alles zur Verfügung, was sie benötigen, um ihre Aufgaben einfach, sicher und wirkungsvoll zu erledigen?',
        a: [
          'Wenn ja, wie können wir dies erkennen und was ist trotzdem unnötig?',
          'Wenn nein, welche Tätigkeiten können wir müheloser oder gezielter gestalten? Welche Gefahren gibt es im Zusammenhang mit ihren Aufgaben?',
        ],
      },
      {
        q: 'Respektieren wir unsere Kunden, Lieferanten und andere Partner genug, um Vertrauen aufzubauen und langfristige, fruchtbare Beziehungen zu schaffen?',
        a: [
          'Wenn ja, wie können wir dies erkennen und wie machen wir es für alle sichtbar?',
          'Wenn nein, an welcher Stelle können wir unsere Kommunikation verbessern?',
        ],
      },
      {
        q: 'Haben wir sichergestellt, dass unsere Mitarbeiter die gewünschten Prozessabläufe verstehen?',
        a: [
          'Wenn ja, wie kann ich das erkennen und welche Prozesse kosten trotzdem zu viel?',
          'Wenn nein, welche Prozesse laufen nicht reibungslos, sind aber alternativlos?',
        ],
      },
      {
        q: 'Nehmen wir uns genügend Zeit, um diese Fragen regelmäßig zu überprüfen?',
        a: [
          'Wenn ja, gilt dies auch in Krisensituationen oder setzen wir dann Scheuklappen auf?',
          'Wenn nein, welche Verhaltensweisen hindern uns daran, dies zu tun?',
        ],
      },
    ],
  },
  vita: {
    title: 'Lebenslauf',
    experienceTitle: 'Berufliche Erfahrung',
    positions: [
      {
        period: '06/2025 - heute',
        role: 'Gründer',
        org: 'tahi.design, Valencia, Spanien',
        description:
          'Studio für Unternehmenstransformationen. Wir verschaffen unseren Kunden Stabilität und Klarheit, indem wir digitale Nutzererlebnisse vereinfachen und Systeme optimieren, damit Finanzen, HR und Marketing reibungslos laufen. Außerdem entwickeln wir Produktivitäts-Apps mit Claude Code. Wieder gegründet nach meiner Zeit als Geschäftsführer.',
        note: {
          title: '01/2026 - 03/2026: Elternzeit',
          text: 'Meine Frau und ich heißen unser erstes Kind in dieser wunderschönen Welt willkommen. Während dieser Zeit habe ich Value Investing studiert.',
        },
      },
      {
        period: '01/2022 - 06/2025',
        role: 'Geschäftsführer',
        org: 'Flinterhoff GmbH, Kalkar, Deutschland',
        description:
          'Familienunternehmen mit zwei unterschiedlichen Geschäftsbereichen: Einzelhandel und Metallbau. Ich trat in einer Phase struktureller Komplexität und finanziellen Drucks in die Geschäftsführung ein und konzentrierte mich auf die Wiederherstellung von Klarheit, Stabilität und langfristiger Überlebensfähigkeit. Mein Verantwortungsbereich umfasste Finanzmanagement, System- und Prozess-Design, E-Commerce und strategische Restrukturierung, einschließlich einer erfolgreichen Turnaround-Phase und der verantwortlichen Schließung des Einzelhandelsgeschäfts im Jahr 2024.',
      },
      {
        period: '01/2021 - 12/2021',
        role: 'Gründer',
        org: 'tahi.design, Kalkar, Deutschland',
        description:
          'Beratung für Unternehmenstransformationen, die klare Marketing-Strategiedokumente, Designsysteme und digitale Erlebnisse sowie Prozesse gestaltet hat. Für die Flinterhoff GmbH haben wir ein Designsystem für die Neupositionierung des Einzelhandels erstellt und mit der Entwicklung eines individuellen E-Commerce-Systems begonnen. Für die Kreishandwerkerschaft Kleve, eine Körperschaft des öffentlichen Rechts, die regionale Handwerksbetriebe unterstützt, führten wir explorative Interviews mit Stakeholdern durch und erstellten daraufhin eine Website, die als zentraler Zugangspunkt für rechtliche Dokumente, Kontakte und berufliche Informationen für über 4.100 Unternehmen dient. Tahi.design wurde nach einem erfolgreichen Jahr geschlossen, um sich auf die Flinterhoff GmbH zu konzentrieren.',
      },
      {
        period: '09/2016 - 12/2020',
        role: 'Inhouse Consultant',
        org: 'Flinterhoff GmbH, Kalkar, Deutschland',
        description:
          'Familienunternehmen mit zwei eigenständigen Geschäftsbereichen: Einzelhandel und Metallbau. Ich habe zentrale operative, digitale und finanzielle Systeme in beiden Bereichen konzipiert und implementiert, darunter Cloud-Zusammenarbeit, ERP- und POS-Systeme, schlanke Buchhaltungsprozesse sowie die Neugestaltung von Workflows. Meine Arbeit zielte darauf ab, Klarheit und Skalierbarkeit zu schaffen und eine effektive Zusammenarbeit zwischen Menschen, Tools und Geschäftsmodellen zu ermöglichen.',
      },
    ],
    experienceFootnote: 'Weitere Details und Erfahrungen auf [LinkedIn](https://www.linkedin.com/in/mflinterhoff/).',
    educationTitle: 'Ausbildung',
    education: [
      {
        degree: 'Master of Arts (M.A.): Medienmanagement & Unternehmertum (2016), 1,2',
        focus:
          'Abschlussarbeit: Business Model Innovation als wichtiger Werttreiber in Unternehmen. Eine strukturierte Analyse und systematische Bewertung bestehender Konzepte.',
        activities:
          'Aktivitäten: Dozent für digitale Transformation nach dem Abschluss (09/2016-02/2017); Studienreisen nach Berlin, Silicon Valley und Tel Aviv; Rede als Jahrgangssprecher am Abschlusstag.',
        school: 'Hochschule Fresenius, University of Applied Sciences, Köln, DE',
      },
      {
        degree: 'Bachelor of Arts (B.A.): Angewandte Medienwissenschaft (2014), 1,6',
        focus: 'Schwerpunkte: Medien-, Sport- und Eventmanagement',
        activities:
          'Aktivitäten: Klassensprecher; Unterstützung der Studierendenvertretung bei der Organisation von Veranstaltungen und Begrüßungswochenenden.',
        school: 'Hochschule Mittweida & Hochschule Fresenius, Universities of Applied Sciences, DE',
      },
    ],
    assetsTitle: 'Ressourcen',
    skills: {
      title: 'Schlüsselqualifikationen',
      note: 'Alphabetisch sortiert.',
      items: 'Unternehmensführung, Digitale Transformation, System-Design, Change-Management, Marketing',
      footnote:
        'Weitere Fähigkeiten finden Sie auf [LinkedIn](https://www.linkedin.com/in/mflinterhoff/details/skills/) und wie ich arbeite [hier](/de/approach).',
    },
    languages: {
      title: 'Sprachen',
      items: ['Deutsch: Muttersprache', 'Englisch: Verhandlungssicher (C2)', 'Spanisch: Fließend (B2, nehme Unterricht)'],
    },
    tools: {
      title: 'Relevante Tools',
      note: 'Die in meinem Arbeitsalltag verwendeten Tools sind hervorgehoben. Alphabetisch sortiert.',
      groups: [
        {
          label: 'AI',
          tools: [
            { name: 'Claude', href: 'https://claude.ai/', primary: true },
            { name: 'NotionAI', href: 'https://www.notion.com/product/ai' },
            { name: 'ChatGPT', href: 'https://chatgpt.com' },
            { name: 'Google Gemini', href: 'https://gemini.google.com/' },
            { name: 'NotebookLM', href: 'https://notebooklm.google/' },
          ],
        },
        {
          label: 'Zusammenarbeit',
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
          label: 'Inhalte, Entwürfe, Prototyping',
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
          label: 'Programmierung / Hosting',
          tools: [
            { name: 'Claude Code', href: 'https://claude.com/product/claude-code', primary: true },
            { name: 'Cursor', href: 'https://cursor.com/' },
            { name: 'Cloudflare', href: 'https://cloudflare.com' },
            { name: 'Visual Studio Code', href: 'https://code.visualstudio.com/' },
          ],
        },
        {
          label: 'No-Code Websites / E-Commerce',
          tools: [
            { name: 'Shopify', href: 'https://shopify.com' },
            { name: 'Webflow', href: 'https://webflow.com/' },
            { name: 'WiX', href: 'https://www.wix.com/' },
            { name: 'WordPress / WooCommerce', href: 'https://wordpress.com/' },
          ],
        },
        {
          label: 'Produktivität für Mac',
          tools: [
            { name: 'Arc Browser', href: 'https://arc.net/', primary: true },
            { name: 'Alfred', href: 'https://www.alfredapp.com/', primary: true },
            { name: 'Magnet', href: 'https://magnet.crowdcafe.com/', primary: true },
            { name: 'Yoink', href: 'https://apps.apple.com/en/app/yoink-better-drag-and-drop/id457622435', primary: true },
            { name: 'HandBrake', href: 'https://handbrake.fr/' },
          ],
        },
      ],
    },
    connections: {
      title: 'Kontakte',
      note: 'Bereiche von selbständigen Experten, Leadern oder Geschäftsführern aus Europa und Lateinamerika in meinem Netzwerk, die nützlich sein könnten.',
      areas: 'KI, Cyber-Sicherheit, HR & Leadership, Marketing, (Raum-)Design, Softwareentwicklung',
      footnote: 'Lassen Sie uns auf [LinkedIn](https://www.linkedin.com/in/mflinterhoff/) vernetzen.',
    },
    glossaryTitle: 'Glossar',
    glossary: [
      {
        term: '1. Unternehmensführung',
        definition:
          'Die Praxis der Führung und Beaufsichtigung aller Aspekte der Geschäftstätigkeit eines Unternehmens, um dessen strategische Ziele zu erreichen. Sie umfasst die strategische Planung, die organisatorische Gestaltung, die finanzielle Steuerung, die operative Exzellenz und das Stakeholder-Management.',
        sample:
          'Übernahme der vollen Verantwortung für die Gewinn- und Verlustrechnung, Bewältigung komplexer Turnaround-Situationen, Umstrukturierung von Geschäftsbereichen, Implementierung von Finanz-Controlling und Schaffung organisatorischer Klarheit in Phasen der Ungewissheit bei gleichzeitiger Berücksichtigung der Bedürfnisse von Mitarbeitern, Kunden und Eigentümern.',
      },
      {
        term: '2. Digitale Transformation',
        definition:
          'Die strategische Integration digitaler Technologien in alle Bereiche eines Unternehmens, um dessen Arbeitsweise und Wertschöpfung grundlegend zu verändern. Sie geht über die einfache Einführung neuer Tools hinaus. Es geht darum, Prozesse, Kultur und Kundenerfahrungen zu überdenken, um die Technologie als Wettbewerbsvorteil zu nutzen.',
        sample:
          'Implementierung von Cloud-basierten Systemen, Neugestaltung von Arbeitsabläufen für Digital-First-Operationen, Aufbau von E-Commerce-Funktionen, Onboarding von Mitarbeitern und Ermöglichung einer datengesteuerten Entscheidungsfindung in traditionell analogen Geschäftsfunktionen.',
      },
      {
        term: '3. System-Design',
        definition:
          'Die Praxis der Schaffung strukturierter Rahmenbedingungen, die Menschen, Prozesse und Werkzeuge miteinander verbinden, um bestimmte Geschäftsergebnisse zu erzielen. Dazu gehören die Abbildung von Arbeitsabläufen, die Definition von Datenflüssen, die Auswahl geeigneter Technologien und die Sicherstellung, dass verschiedene Komponenten nahtlos zusammenarbeiten.',
        sample:
          'Aufbau betrieblicher Infrastrukturen wie ERP- oder Buchhaltungssystem-Implementierungen, Prozessautomatisierung und Umgebungen für die digitale Zusammenarbeit, die für Klarheit sorgen, Reibungsverluste reduzieren und Wachstum ermöglichen.',
      },
      {
        term: '4. Change-Management',
        definition:
          'Change Management ist die Disziplin, den Wandel von Menschen, Prozessen und Systemen zu planen, zu koordinieren und zu begleiten, um ein gewünschtes Ergebnis innerhalb definierter Rahmenbedingungen in Bezug auf Zeit, Budget und Umfang zu erreichen. Es umfasst die Ausrichtung von Stakeholdern, das Management von Kommunikation und Adoption, die Risikominimierung sowie die Sicherstellung, dass Veränderungen wirksam umgesetzt und nachhaltig verankert werden.',
        sample:
          'Leitung funktionsübergreifender Initiativen wie ERP-Implementierungen, Projekte zur Neupositionierung des Einzelhandels, Entwicklung von E-Commerce-Plattformen und organisatorische Umstrukturierungsmaßnahmen. Die Herausforderung bestand darin, sich auf eine klare Kommunikation, realistische Zeitpläne und messbare Ergebnisse zu konzentrieren.',
      },
      {
        term: '5. Marketing',
        definition:
          'Die strategische Praxis, Werte für Kunden zu schaffen, zu kommunizieren und zu liefern, während profitable Beziehungen aufgebaut und gepflegt werden. Es umfasst das Verständnis der Kundenbedürfnisse, die Entwicklung überzeugender Wertangebote, die Positionierung von Produkten oder Dienstleistungen auf dem Markt und die Durchführung integrierter Kampagnen über mehrere Kanäle.',
        sample:
          'Neupositionierung ganzer Geschäftsbereiche, Entwicklung von Markensystemen, Aufbau von E-Commerce-Strategien, Schaffung einer kundenorientierten Kommunikationspolitik und Gestaltung von Marktforschungsprozessen als Grundlage für strategische Entscheidungen in Phasen des Wandels.',
      },
    ],
  },
  legal: {
    notice: {
      title: 'Impressum',
      blocks: [
        { kind: 'paragraph', text: 'Matthias Flinterhoff' },
        { kind: 'paragraph', text: 'Paseo Serra D’Espada 8, Escalera 3 Planta 4 Puerta 25, 46120 Alboraya, Spanien' },
        { kind: 'subheading', text: 'USt-IdNr. (NIF)' },
        { kind: 'paragraph', text: 'Z0118855L' },
        { kind: 'subheading', text: 'Kontakt' },
        { kind: 'paragraph', text: 'E-Mail: [hi@mflinterhoff.com](mailto:hi@mflinterhoff.com) · Telefon: +49 156 78402395' },
        { kind: 'subheading', text: 'Verantwortlich für den Inhalt' },
        { kind: 'paragraph', text: 'Matthias Flinterhoff' },
        { kind: 'subheading', text: 'Hinweis gemäß LSSI (Ley 34/2002)' },
        {
          kind: 'paragraph',
          text: 'Diese Website entspricht den Anforderungen des spanischen Gesetzes über Dienstleistungen der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSI).',
        },
      ],
    },
    privacy: {
      title: 'Datenschutz',
      blocks: [
        { kind: 'subheading', text: 'Anfragen per Kontaktformular, Telefon, Mail oder sonstige Kommunikationswege' },
        {
          kind: 'paragraph',
          text: 'Wenn Sie uns Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir an Dritte nicht ohne Ihre Einwilligung weiter. Falls Ihre Anfrage beantwortet worden ist, kein Auftrag zu Stande gekommen ist und keine Anschlussfragen offen sind, werden Ihre Daten spätestens innerhalb von 3 Monaten gelöscht. Ist aus dieser Anfrage ein Auftrag mit anschließendem Kaufvertrag entstanden, so werden Ihre Angaben bis zur Verjährung gespeichert. Die gesetzliche Aufbewahrungspflicht von Daten, die zu Vertragsdurchführungen gehören, beträgt in der Regel 10 Jahre.',
        },
        { kind: 'subheading', text: 'Auskunft, Löschung, Sperrung' },
        {
          kind: 'paragraph',
          text: 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Eine Ausnahme bei der Löschung der Daten tritt ein, wenn eine gesetzliche Aufbewahrungspflicht (z. B. durch einen Auftrag) eintritt. Die relevanten Daten werden dann gem. der Aufbewahrungsdauer gespeichert. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',
        },
        { kind: 'paragraph', text: 'Quellenangabe: [eRecht24](https://www.e-recht24.de/muster-datenschutzerklaerung.html)' },
      ],
    },
  },
  experiences: experiencesDe,
  footer: {
    tagline: 'Macher & Gestalter. Ich lebe, um zu gestalten, zu verbinden, zu lernen und zu lehren.',
    legalTitle: 'Rechtliches',
    languagesTitle: 'Sprachen',
    exploreTitle: 'Entdecken',
    contactTitle: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.',
    linkedin: 'https://www.linkedin.com/in/mflinterhoff/',
  },
}

export default de
