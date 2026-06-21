import type { Experience } from './types'

// Die "Erfahrungen"-Dienstleistungs-Datenbank auf Deutsch. Slugs sind über alle
// Sprachen hinweg stabil; die DE/ES-Dateien verwenden dieselben slug/area/icon und
// übersetzen den Text.
export const experiencesDe: Experience[] = [
  {
    slug: 'refining-business-models',
    area: 'corporate',
    icon: 'refining-business-models',
    name: 'Geschäftsmodelle schärfen und Betriebsabläufe vereinfachen',
    claim: 'Klarheit schaffen, Richtung geben, Entscheidungen ermöglichen.',
    description: [
      'Ich analysiere Geschäftsmodelle und Organisationsstrukturen, um Klarheit über Positionierung, Stärken und Schwächen zu schaffen.',
      'Mit Interviews, Workshops und erprobten Frameworks wie dem Business Model Canvas hinterfrage ich die aktuelle Situation kritisch, identifiziere Engpässe und formuliere daraus eine klare Strategie mit Zielen und Maßnahmen.',
      'So entsteht ein gemeinsames Verständnis im Unternehmen und eine klare Grundlage für Entscheidungen, die getragen werden.',
      'Nahbarkeit schafft Vertrauen. Sie beugt größeren Problemen vor.',
    ],
    note: 'Methodisch arbeite ich unter anderem mit Frameworks wie dem Business Model Canvas, PESTEL, SWOT, 5-Forces, 4P/3R-Marketing-Matrix, BCG-Matrix oder dem OS-Canvas von Aaron Dignan.',
    playbook: [
      {
        title: 'Analyse & Positionierung',
        items: [
          'Analyse der aktuellen Unternehmens- und Marktsituation',
          'Erarbeitung einer klaren Zielrichtung und Positionierung',
        ],
      },
      {
        title: 'Strategische Umsetzung',
        items: [
          'Definition von Maßnahmen, Verantwortlichkeiten und Zielen',
          'Strukturierung von Geschäftsbereichen und Entscheidungswegen',
        ],
      },
      {
        title: 'Kontrolle & Begleitung',
        items: [
          'Einführung von Kennzahlen zur Erfolgskontrolle',
          'Begleitung bei Umsetzung und Kommunikation der Strategie',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Turnaround der Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          { kind: 'paragraph', text: 'Kritische wirtschaftliche Situation (2015–2016).' },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Strategische Neuausrichtung beider Geschäftsbereiche',
              'Fokussierung auf profitablere Kundensegmente',
              'Optimierung von Prozessen und Lieferantenstruktur',
              'Modernisierung der digitalen Kommunikation',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Erfolgreiche Stabilisierung mit Entwicklung von belastetem zu freiem Eigenkapital.',
          },
          { kind: 'subheading', text: 'Strategische Entscheidung Ende 2024' },
          {
            kind: 'paragraph',
            text: 'Nach einer weiteren gründlichen Analyse wurde 2024 der Einzelhandel unseres traditionsreichen Familienunternehmens (Gründung 1798) geschlossen, um den Fokus auf den profitablen Metallbau zu legen. In diesem familiären Umfeld war die Entscheidung emotional und strukturell herausfordernd.',
          },
          {
            kind: 'paragraph',
            text: 'Als angestellter Geschäftsführer habe ich diesen Weg früh vorbereitet, Impulse für Alternativen gesetzt und schließlich die notwendigen Weichen gestellt. Ich blicke auf diese Phase mit Demut und vielen Erkenntnissen zurück: über das Zusammenspiel von Verantwortung, Einfluss und Grenzen in Familienunternehmen.',
          },
          {
            kind: 'note',
            text: '**Strategiepapier von 2022 auf Anfrage.** Im Rahmen der strategischen Neuausrichtung des Einzelhandels der Flinterhoff GmbH habe ich ein umfassendes Dokument entwickelt. Es zeigt beispielhaft, wie ich Geschäftsmodelle strukturiere und zu klaren Entscheidungen führe. Bei Interesse sende ich Ihnen gern eine anonymisierte Version.',
          },
        ],
      },
    ],
  },
  {
    slug: 'organizing-finances',
    area: 'corporate',
    icon: 'organizing-finances',
    name: 'Finanzen ordnen',
    claim: 'Deutliche Strukturen, verlässliche Zahlen, bessere Entscheidungen.',
    description: [
      'Ich sorge für Struktur und Klarheit in Finanzen, von der vorbereitenden Buchhaltung bis zum Cashflow-Plan. So können finanzielle Risiken frühzeitig erkannt werden und ich schaffe Entscheidungsgrundlagen, auf die man sich verlassen kann. Systeme wie Datev UnternehmenOnline, Lexoffice oder Candis sind mir vertraut, aber ich integriere mich auch schnell in bestehende Prozesse.',
    ],
    playbook: [
      {
        title: 'Finanz- & Lohnbuchhaltung vorbereiten',
        items: [
          'Abgleich von Arbeitsverträgen, Tarifen und Abrechnungen',
          'Ordnungsgemäße Buchung und Zuordnung von Belegen',
          'Einrichtung klarer Zahlungs- und Genehmigungsprozesse',
        ],
      },
      {
        title: 'Monats- & Jahresabschlüsse strukturieren',
        items: [
          'Bereitstellung aller Nachweise und Daten für die Steuerberatung',
          'Prüfung der offenen Posten, des Anlagevermögens, der Rückstellungen und der Inventur',
          'Vorbereitung von Abschlüssen zur steuerlichen und finanziellen Optimierung',
        ],
      },
      {
        title: 'Cashflow- & GuV-Planung',
        items: [
          'Aufbau nutzerfreundlicher Planungs-Tools und Übersichten',
          'Regelmäßige Abstimmungsgespräche zu Budgets, Investitionen und Liquidität',
          'Vorbereitung von Unterlagen für Darlehen und Kontokorrentlinien',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Digitalisierung und Optimierung der Finanzen als Geschäftsführer der Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Buchhaltungssystem mit hohem Papieranteil, getrennt vom Zahlungssystem.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Neue Software, zuletzt Datev UnternehmenOnline, integriert, um Buchhaltungs- und Zahlungssystem für beide Geschäftsbereiche zu vereinen.',
              'Zahlungsströme optimal auf den Cashflow abgestimmt',
              'Teilfertige Leistungen und Rückstellungen korrekt erfasst',
              'Steuerberatungskosten dauerhaft reduziert',
              'Monats- sowie Jahresabschlüsse schneller und präziser erstellt',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Klarheit, Handlungsfähigkeit und Kontrolle – und eine höhere Zufriedenheit sowie reibungslosere Zusammenarbeit mit der Steuerberatung.',
          },
        ],
      },
    ],
  },
  {
    slug: 'corporate-restructuring',
    area: 'corporate',
    icon: 'corporate-restructuring',
    name: 'Gesellschaftsrechtliche Umstrukturierungen begleiten',
    claim: 'Rechtlich sauber, strukturiert umgesetzt. Ohne Umwege.',
    description: [
      'Ich kann Umstrukturierungen von Unternehmens- oder Vermögensstruktur als verbindende Schnittstelle zwischen Steuerberatung, Notar und Bank begleiten.',
      'Dabei übersetze ich komplexe steuerliche und rechtliche Anforderungen in klare, umsetzbare Maßnahmen und übernehme die Abstimmung mit allen Beteiligten, strukturiere Aufgaben, bereite notwendige Unterlagen vor und sorge dafür, dass Entscheidungen konsequent umgesetzt werden.',
      'So bleibt Ihr Kopf frei für das Kerngeschäft, während ich für eine rechtlich und organisatorisch saubere Umsetzung sorge.',
    ],
    playbook: [
      {
        title: 'Strategische Vorbereitung',
        items: [
          'Konzeption: Lösungsoptionen mit Steuerberatung erarbeiten und auswählen',
          'Projektsteuerung: Schritte strukturieren, priorisieren und umsetzen',
        ],
      },
      {
        title: 'Abstimmung & Begleitung',
        items: [
          'Koordination: Kommunikation mit Steuerberatung und Notar führen',
          'Banking: Kontoeröffnung und Unterlagenvorbereitung begleiten',
          'Notarbegleitung: Termine wahrnehmen und auf Besonderheiten hinweisen',
          'Handelsregister: Kapitaleinzahlung durchführen und Anmeldeunterlagen prüfen',
        ],
      },
      {
        title: 'Operative Integration',
        items: [
          'Zahlungsumstellung: Regelmäßige Zahlungen migrieren',
          'Zahlungsklärung: Offene Positionen mit Steuerberatung zuordnen',
          'Lieferantenkommunikation: Neue Kontodaten mitteilen',
        ],
      },
      {
        title: 'Dokumentation',
        items: ['Jahresabschluss: Unterlagen der abgemeldeten Gesellschaft sammeln und übergeben'],
      },
    ],
    caseStudies: [
      {
        title: 'Restrukturierung von Beteiligungen',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Für den Gesellschafter musste ein Einzelunternehmen durch zwei neue Gesellschaften (Verwaltungs-UG und Vermögensverwaltungs-UG & Co. KG) ersetzt werden, um Vermögen zu sichern.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Koordination des gesamten Prozesses mit Steuerberatung und Notar',
              'Eröffnung neuer Bankkonten',
              'Vorbereitung der Kapitalnachweise',
              'Neustrukturierung der laufenden Zahlungen',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Die Umstrukturierung wurde ohne Verzögerung abgeschlossen, und der Mandant konnte sich vollständig auf das operative Geschäft konzentrieren.',
          },
        ],
      },
    ],
  },
  {
    slug: 'software-changes',
    area: 'it',
    icon: 'software-changes',
    name: 'Software-Wechsel begleiten',
    claim: 'Saubere Migration ohne Stillstand.',
    description: [
      'Ein Software-Wechsel gilt in vielen Unternehmen als notwendiges Übel: zeitaufwendig, riskant, unvorhersehbar. Ich begleite diese Prozesse mit Erfahrung, Ruhe und technologischem Weitblick: von der Analyse über die Umsetzung bis zur Kontrolle.',
      'Ich kenne die führenden Tools aus täglicher Praxis und arbeite mich schnell in neue Systeme ein. Daher wurde ich oft hinzugezogen, wenn Umstellungen zuverlässig und ohne Reibungsverluste gelingen müssen.',
      'Dabei wahre ich stets die Flexibilität und Souveränität der Daten, damit das Unternehmen anpassbar und unabhängig bleibt. Auch dann, wenn sich während eines Projekts zeigt, dass eine Software nicht hält, was sie verspricht.',
    ],
    playbook: [
      {
        title: 'Analyse & Planung',
        items: [
          'Bestehende Abläufe und Nutzerverhalten erfassen',
          'Anforderungen und Funktionswünsche des Teams priorisieren',
          'Passende Software-Optionen identifizieren und vergleichen (Kosten, Nutzen, Aufwand)',
        ],
      },
      {
        title: 'Umsetzung & Migration',
        items: [
          'Daten exportieren, aufbereiten und in neue Systeme importieren',
          'Strukturen, Vorlagen und Workflows vorbereiten und optimieren',
          'Schnittstellen, Plugins und Automationen einrichten',
        ],
      },
      {
        title: 'Einführung & Schulung',
        items: [
          'Testumgebungen prüfen, Go-Live begleiten',
          'Workshops und Tutorials zur sicheren Anwendung',
          'Teammitglieder zu internen Expert:innen ausbilden',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Wechsel von Asana zu Notion — Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Als Geschäftsführer suchte ich ein flexibleres Tool, das Projekte, Aufgaben und Wissen in einer Umgebung vereint. Wir wollten unsere Meeting-Notizen, Aufgaben, Projekte und Dokumente wie Leitfäden oder Berichte zentral pflegen – einfach, erweiterbar und schnell. Die Apps aus Google Workspace boten dafür zu wenig Verbindung und Kontext.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Anlegen der zentralen Datenbanken in Notion für Meetings, Aufgaben, Projekte, Content-Plan oder Dokumente',
              'Verbinden der verschiedenen Datenbanken, um Kontext zwischen Themen sicherzustellen',
              'Export der bestehenden Asana-Daten und Import dieser in Notion',
              'Erstellen von Vorlagen für wiederkehrende Abläufe wie tägliche Stand-Ups oder Monatsabschlüsse der Finanzbuchhaltung',
              'Individuelles Onboarding der Mitarbeiter, um nur die für die jeweilige Rolle relevanten Bereiche nahezubringen',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Die Zusammenarbeit wurde spürbar reibungsloser. Alle relevanten Informationen waren sofort auffindbar, die Recherchezeiten sanken deutlich. Dank klarer Vorlagen und einheitlicher Formatierungen konnten auch weniger technikaffine Teammitglieder schnell strukturierte, übersichtliche Dokumente erstellen. Das Team arbeitete spürbar produktiver.',
          },
        ],
      },
      {
        title: 'Wechsel von Microsoft Office 365 zu Google Workspace — Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Während meiner Zeit als Geschäftsführer wollten wir die Zusammenarbeit vereinfachen und von einer Hybrid-Lösung zu einer schlanken, nativen Cloud-Umgebung wechseln. Microsoft 365 war im Alltag zu träge und unübersichtlich – gesucht war mehr Tempo, Klarheit und Freude an der Nutzung.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Bestehende Datenlandschaft in OneDrive strukturiert',
              'Relevante Inhalte aus OneNote in Google Docs und Excel-Tabellen in Sheets überführt',
              'Begleitung der Migration gemeinsam mit der Agentur **Blackboat Internet GmbH**',
              'Einrichtung der Nutzerkonten, Signaturen, Kalender und Gruppen in Google Chat',
              'Durchführung eines Workshops zum effizienten Umgang mit der neuen Oberfläche',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Die Umstellung brachte spürbar mehr Leichtigkeit und Transparenz in die tägliche Arbeit. Dokumente werden heute zentral geteilt, nicht mehr lokal gespeichert, und der Austausch läuft schneller und klarer.',
          },
        ],
      },
      {
        title: 'Wechsel von WooCommerce zu Shopify — Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Wir suchten als Einzelhandelsunternehmen eine Omnichannel-Lösung, die Online-Shop, Warenwirtschaft, Point of Sale und Marktplätze wie Google Shopping und Idealo sauber miteinander verbindet. Der selbst entwickelte WooCommerce-Shop war trotz Optimierungen zu langsam, die Verbindung zur Warenwirtschaft kompliziert, die Pflege fehleranfällig.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Übertragung aller Kunden- und Produktdaten mithilfe des Shopify-Migrationstools',
              'Anpassung des Shopify-Themes an das bestehende Designsystem und Nachbau von Seitenstruktur und Navigation',
              'Erstellung von Vorlagen für Seiten, Kategorien, Produkte und Blogartikel',
              'Einrichtung des Point-of-Sale-Systems inkl. Hardware-Setup',
              'Konfiguration aller Domain-, Markt- und Versandoptionen sowie Begleitung des gesamten Go-Live-Prozesses',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Ein System aus einem Guss, das das Team vom ersten Tag an mit Freude genutzt hat. Alle Daten waren sauber übertragen, Prozesse liefen deutlich schneller, und der POS funktionierte ohne Reibungsverluste. Eine Lösung, die unserem Anspruch an ein persönliches, hochwertiges Einkaufserlebnis endlich gerecht wurde.',
          },
        ],
      },
      {
        title: 'Wechsel von ERP-System NetSoft zu SmartHandwerk — Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Gesucht wurde eine günstigere, schlankere Büro-Software mit flexibleren Kündigungsoptionen – ein System, das Buchhaltung, Projektverwaltung, OP-Verwaltung und Kundenkommunikation zuverlässig abbildet. NetSoft wirkte veraltet und war umständlich zu bedienen.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Export aller Kunden- und Artikeldaten aus NetSoft und Installation der neuen Software auf Server und Arbeitsplätzen',
              'Konfiguration aller Stammdaten wie Firmendaten, Bankverbindungen und Nummernkreise',
              'Erstellung aller notwendigen Vorlagen, inkl. spezifischer Vorlagen für Reparaturaufträge',
              'Ausführliches Onboarding mit Feedbackrunde und Optimierung der neuen Prozesse',
              'Begleitung des Go-Live inkl. Erstellung der ersten offiziellen Angebote, Auftragsbestätigungen und Rechnungen',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Das Büro-Team arbeitete deutlich schneller und entspannter. Die moderne, an Word erinnernde Oberfläche erleichterte die tägliche Verwaltung, reduzierte Rückfragen und schaffte mehr Raum für die präzise Planung und Steuerung der parallel laufenden Metallbauprojekte.',
          },
        ],
      },
      {
        title: 'Einrichtung des ersten Warenwirtschafts- & PoS-Systems — Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Der Einzelhandel suchte 2016 ein Warenwirtschaftssystem, das die alte Struktur aus Registrierkasse und Excel-Tabellen ablöst. Ziel war ein System, das Einkauf, Verkauf, Verwaltung und Auswertungen vereinfacht und zuverlässig abbildet.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Installation des Warenwirtschaftssystems Shopwin gemeinsam mit dem Anbieter EasySystems (EK Servicegroup)',
              'Einholung der Artikelstammdaten bei den Lieferanten und Import der Lieferanten- und Kundenstammdaten',
              'Einrichtung der Kassenoberfläche und relevanter Hardware (Bondrucker, Etikettendrucker, Kassen-PC, Backoffice-Arbeitsplätze)',
              'Workshops zur Festigung der Abläufe mit dem gesamten Team',
              'Begleitung des Go-Live inkl. Anwesenheit und Unterstützung in der ersten Betriebswoche und an verkaufsstarken Tagen',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Das Team fand sich überraschend schnell in der neuen Software zurecht. Das System brachte Sicherheit, Routine und Vertrauen – und legte damit die Grundlage für alle späteren Software-Wechsel im Unternehmen.',
          },
        ],
      },
    ],
  },
  {
    slug: 'tool-integration',
    area: 'it',
    icon: 'tool-integration',
    name: 'Abläufe durch intelligente Tool-Integration vereinfachen',
    claim: 'Systeme gerne nutzen. Wissen verankern und souverän teilen.',
    description: [
      'Digitale Systeme entwickeln sich rasant. KI, Automatisierung und neue Schnittstellen verändern, wie Unternehmen arbeiten. Ich helfe dabei, diese Dynamik zu nutzen: mit Tools, die flexibel, einfach und skalierbar sind. Komplexe, isolierte Software ist von gestern. Oft reichen moderne Cloud-Plattformen wie Google Workspace, Notion oder Airtable, um Abläufe intelligenter und kosteneffizienter zu verbinden.',
      'Ich bin ein erfahrener Tool-Builder, der betriebswirtschaftliches Denken mit technologischem Gespür vereint und Systeme gestaltet, die Prozesse vereinfachen und Wissen im Unternehmen verankern.',
    ],
    playbook: [
      {
        title: 'Analyse',
        items: [
          'Bestehende Tool-Landschaft bewerten und redundante Systeme identifizieren',
          'Integrationspotenziale zwischen Apps (z. B. CRM, Kommunikation, Projektmanagement) erkennen',
          'Abgestimmtes Konzept für einfachere, vernetzte Workflows entwickeln',
        ],
      },
      {
        title: 'Integration',
        items: [
          'Geeignete Tools auswählen',
          'Anwendungen einrichten und Daten übertragen',
          'Prozesse mit klaren Leitfäden und Verantwortlichkeiten dokumentieren',
        ],
      },
      {
        title: 'Schulung',
        items: [
          'Mitarbeitende während der Umstellung begleiten und einarbeiten',
          'Kultur des Wissenstransfers unter Mitarbeitern etablieren',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Notion als Betriebssystem für den Einzelhandel der Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Die Einzelhandelseinheit benötigte eine gemeinsame Umgebung, um einen individuellen E-Commerce-Launch zu planen, den täglichen Ladenbetrieb zu koordinieren und laufende Marketingkampagnen zu steuern. Aufgaben, Content-Briefs und Projektdokumentation waren über E-Mail, Tabellenkalkulationen und Chat verteilt.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Notion-Workspace aufgebaut, strukturiert um vier verknüpfte Datenbanken: Aufgaben, Projekte, Content und Dokumente/Meetingnotizen.',
              'Standardvorlagen für wiederkehrende Aufgaben erstellt: Monatsabschlüsse, Newsletter, Blogartikel, Anzeigen-Briefs, In-Store-Aktionen und Korrekturleserunden.',
              'Projekte, Aufgaben, Meetingnotizen und das Docs-Wiki verknüpft, damit alle Initiativen vom Brief bis zur Umsetzung nachverfolgbar sind.',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Der Workspace lief über vier Jahre durchgehend und steuerte E-Commerce, Ladenbetrieb und Marketing aus einer gemeinsamen Umgebung. Über 550 Content-Einträge in 2023–2024 wurden erfasst, mit automatisch berechneten Kosten pro Reichweite und pro Interaktion. Wissen und Geschichte blieben nach der Schließung der Einzelhandelseinheit Ende 2024 vollständig erhalten.',
          },
          {
            kind: 'note',
            text: '**Einblick auf Anfrage.** Auf Wunsch zeige ich Ihnen den Workspace – inklusive Erläuterung, wie Datenbankstruktur, Vorlagen und Auswertungen auf Ihr Unternehmen übertragbar wären.',
          },
        ],
      },
      {
        title: 'Notion als Kollaborations-Hub für tahi.design',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Eine Unternehmensberatung für Business Transformation arbeitet gleichzeitig an Recherche, Stakeholder-Management, Projektdurchführung und Kundenkommunikation. Für das Corporate-Website-Projekt der Kreishandwerkerschaft Kleve wurde eine gemeinsame Umgebung benötigt, die Forschungsdaten speichert, Workshops koordiniert, die Lieferung verfolgt und den Kunden informiert.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Notion-Workspace als Single Source of Truth aufgebaut: Aufgaben, eine Interview-Datenbank, Meetings & Workshops sowie einen Projektblog.',
              'Die Interview-Datenbank strukturierte interne und externe Fokusinterviews und ermöglichte die Mustererkennung über Stakeholder-Gruppen hinweg.',
              'Der Projektblog ersetzte Status-E-Mails durch eine transparente, stets aktuelle Sicht auf Fortschritt, Entscheidungen und nächste Schritte.',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Notion ersetzte, was üblicherweise ein Projektmanagement-Tool, ein Forschungs-Repository, einen Meeting-Tracker und eine Kunden-Reporting-Ebene erfordert. Das Projekt lieferte die neue kh-kleve.de, heute das zentrale Portal für 4.100 Handwerksbetriebe im Kreis Kleve, mit durchschnittlich ≈59.000 monatlichen Besuchen (2025).',
          },
        ],
      },
      {
        title: 'Individuelle Zeiterfassung und -auswertung für Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Erforderlich war eine flexible, eigenständig wartbare Lösung zur Erfassung und Auswertung von Arbeitszeiten, Abwesenheiten, Überstunden und Urlaubsansprüchen in zwei sehr unterschiedlichen Geschäftsbereichen: Metallbau und Einzelhandel. Die bestehende Lösung (Papershift) war zu unflexibel.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Entwicklung eines modularen Systems in Google Sheets und Formularen: Zeiterfassung & Schichtplanung, Urlaubsverwaltung und projektbezogene Stundenauswertungen.',
              'Einrichtung verknüpfter Auswertungsdatenbanken (Pivot) und automatisierte Mitarbeiterauswertungen per Query-Funktion.',
              'Schulung der Manager:innen und Erstellung eines Tutorials zur selbstständigen Anwendung.',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Ein klar strukturiertes Tool, das die individuellen Anforderungen erfüllt, keine zusätzlichen Kosten verursacht und in der vertrauten Umgebung von Google Workspace läuft. Die Frustration im Team sank; Eigenverantwortung und Zusammenarbeit im Umgang mit Arbeitszeitdaten wuchsen.',
          },
        ],
      },
      {
        title: 'Benutzerdefiniertes Cashflow-Planungstool für Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Benötigt wurde ein übersichtliches, anpassbares Planungstool zur Darstellung von Liquidität über mehrere Bankkonten hinweg – inklusive Kontokorrentlinien, Plan-/Ist-Vergleich und flexibler Zeitachsen-Auswertung – vollständig in Google Workspace umsetzbar.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Entwicklung eines modularen Google-Sheets-Systems mit Importstruktur für Ist-Transaktionen aller Bankkonten.',
              'Aufbau von Planungstabellen für wiederkehrende und einmalige Zahlungen sowie einer Monatsübersicht mit Anfangsbestand, Ein-/Auszahlungen, Endbestand und verfügbaren Mitteln je Bank.',
              'Ergänzung einer Stichtagsansicht mit Liquiditätsvorschau bis zu einem frei wählbaren Datum.',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Ein intuitives, zeitsparendes Tool, das vollständige Transparenz über künftige Ein- und Auszahlungen schafft – ohne manuelles, fehleranfälliges Zusammenrechnen oder parallele Systeme.',
          },
        ],
      },
    ],
  },
  {
    slug: 'generative-ai',
    area: 'it',
    icon: 'generative-ai',
    name: 'Generative Künstliche Intelligenz in Ihre Unternehmensprozesse integrieren',
    claim: 'Menschen stärken, nicht austauschen.',
    description: [
      'Generative KI ist kein Selbstzweck und kein Hype-Button, den man überall drückt. Richtig eingesetzt steigert sie die Leistungsfähigkeit von Menschen.',
      'Ich helfe Unternehmen, KI pragmatisch einzuführen: klein, sicher und nah an den tatsächlichen Herausforderungen. Mitarbeitende lernen die Technologie im Alltag kennen, dürfen damit spielen, Fehler machen und dadurch verstehen, wie generative KI am besten funktioniert.',
      'Erst wenn dieses Verständnis da ist, kann sie im Geschäftsmodell produktiv wirken: klar, kontrollierbar und mit echtem Nutzen.',
    ],
    playbook: [
      {
        title: 'Verstehen & Einschätzen',
        items: [
          'Interviews mit Geschäftsführung und Team, um Engpässe und relevante Anwendungsfälle zu identifizieren',
          'Analyse des Geschäftsmodells und Kennzeichnung der wirklichen Werttreiber',
          'Einschätzung des aktuellen Wissensstands und der KI-Reife des Unternehmens',
        ],
      },
      {
        title: 'Kontext schaffen & Kompetenz aufbauen',
        items: [
          'Vermittlung des richtigen Umgangs mit KI: klare Prompts, relevanter Kontext, Minimierung von Halluzinationen',
          'Erstellen erster kleiner Anwendungsbeispiele in einer sicheren Testumgebung',
          'Mitarbeitende befähigen, im Alltag mit der Technologie zu experimentieren und Routinen aufzubauen',
        ],
      },
      {
        title: 'Gestalten & Umsetzen',
        items: [
          'Entwicklung klarer Arbeitsanweisungen und Dokumente, die KI sinnvoll nutzen kann',
          'Auswahl und Einführung geeigneter KI-Tools oder Plattformen',
          'Einrichtung individueller Agenten, die verständlich antworten, sowie Varianten für unterschiedliche Aufgaben und Rollen',
        ],
      },
      {
        title: 'Sichern & Weiterentwickeln',
        items: [
          'Bewertung echter Verbesserungen im Prozess, nicht bloß Output',
          'Schrittweise Integration der erfolgreichsten KI-Lösungen in die tägliche Arbeit',
          'Etablierung einer Lernkultur, in der KI verantwortungsvoll, effizient und mit Freude genutzt wird',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Erstellung eines Beraters für betriebswirtschaftliche Fragen — Flinterhoff GmbH / KG',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'bullets',
            items: [
              'Ich habe das Unternehmen im Juni 2025 verlassen und bin seitdem nur noch an monatlichen Beratungstagen vor Ort.',
              'Für die betriebswirtschaftlichen Fragen, die im Alltag aufkommen, sollte eine wirkungsvolle Unterstützung für das Sekretariat und den Geschäftsführer gefunden werden – damit die Steuerberatung nicht ständig kontaktiert werden muss und die Kosten niedrig bleiben.',
            ],
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Einrichtung von Google Gemini und Erklärung der Funktionalität generativer KI anhand konkreter Beispiele.',
              'Anwendungsfälle: freundliche Absagen, Verständnis von Buchhaltungsregeln, Verträge oder Anfragen von Versicherungen sowie Vorbereitung von Meetings mit potenziellen Mietern.',
              'Besprechung der Ergebnisse und Empfehlungen zur Optimierung der Prompts während der monatlichen Beratungstage.',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Das Sekretariat fühlte sich sicherer bei der Bearbeitung der alltäglich anfallenden Aufgaben, da es einen kompetenten Partner an seiner Seite wusste. Meetings wurden strukturierter vorbereitet und alle Beteiligten kamen schneller zu konkreten Entscheidungen oder nächsten Schritten.',
          },
        ],
      },
    ],
  },
  {
    slug: 'websites-commerce',
    area: 'marketing',
    icon: 'websites-commerce',
    name: 'Websites und Online-Shops gestalten',
    claim: 'Ästhetische Designs, die funktionieren.',
    description: [
      'Ich kann Unternehmenswebsites, Landing Pages oder Online-Shops entwickeln, die klar strukturiert, ästhetisch präzise und einfach zu pflegen sind. Ziel ist ein Auftritt, der sowohl inhaltlich als auch visuell überzeugt – und dem Unternehmen Ausdruck und Richtung gibt.',
      'Ich arbeite mit Plattformen wie Webflow, Shopify und Figma und begleite den gesamten Prozess: von der Idee über Design und Umsetzung bis zur Schulung des Teams. Wenn hier Bedarf besteht, kann ich ebenso Warenwirtschaftssysteme oder Point-of-Sale-Anwendungen einrichten.',
      'So entsteht ein kraftvolles System, das nicht von mir abhängig ist, sondern das Team befähigt, den digitalen Auftritt mit Freude selbst weiterzuentwickeln. Auf Wunsch übernehme ich auch den Austausch bestehender Systeme – inklusive Datenmigration.',
    ],
    playbook: [
      {
        title: 'Entdeckung',
        intro:
          'In Workshops und Gesprächen analysiere ich, wie das Unternehmen kommuniziert – und was die Website wirklich leisten soll: Sichtbarkeit, Vertrauen oder Verkauf. Ich identifiziere Brüche im Design, in der Nutzerführung oder in Prozessen und entwickle daraus klare Handlungspunkte.',
      },
      {
        title: 'Ideengenerierung',
        intro:
          'Gemeinsam entwickeln wir Entwürfe, Prototypen und Inhalte, die die Marke klar transportieren. Ich nutze Tools wie Figma, um Wireframes und Designs zu erstellen, und teste früh, ob die Lösung markentreu und nutzerfreundlich ist.',
      },
      {
        title: 'Implementierung',
        intro:
          'Auf Basis der erarbeiteten Designs setze ich die Website oder den Shop in Webflow oder Shopify um – mit konsistentem Design, klarer Nutzerführung (max. drei Schritte bis zur Handlung) und einem sauberen responsiven Layout. Außerdem kann ich Vorlagen und Inhaltsstrukturen einrichten, damit neue Seiten, Produkte oder Beiträge ohne technische Hürden ergänzt werden können.',
      },
      {
        title: 'Überprüfung',
        intro:
          'Nach dem Launch überprüfe ich die Ergebnisse – von der Performance bis zur Pflegefreundlichkeit. In klaren, praxisnahen Workshops lernt das Team, Inhalte selbst zu pflegen und das Design konsistent fortzuführen.',
      },
    ],
    caseStudies: [
      {
        title: 'Online-Shop für Flinterhoff',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Ein Einzelhandelsgeschäft für hochwertige Einrichtungsgegenstände und Modeaccessoires, das seinen Marktzugang mit einem modernen Online-Shop erweitern wollte – um das besondere Einkaufserlebnis auch digital erfahrbar zu machen.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Entwicklung eines markenkonsistenten Designsystems und Erstellung von Wireframes in Figma',
              'Aufbau eines ersten WooCommerce-Shops, um das digitale Einkaufserlebnis zu testen',
              'Wechsel auf Shopify, um Prozesse, Warenwirtschaft und Point of Sale in einem System zu vereinen',
              'Integration von Multi-Channel-Vertrieb: Online-Shop, Google Shopping, Social Media, Newsletter und stationärer Verkauf',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Der Online-Shop war von August 2023 bis Dezember 2024 aktiv. Die Anbindung an Google Shopping und Preisvergleichsportale brachte rasch neue Kundenzugänge, und das Team gewann deutlich an Routine und Freude in der Abwicklung. Die Kundenzufriedenheit spiegelte sich in einer Trusted Shops Bewertung von 4,67 / 5 Sternen wider.',
          },
        ],
      },
      {
        title: 'Unternehmenswebsite für Kreishandwerkerschaft Kleve',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Körperschaft öffentlichen Rechts mit Bedarf an klarer Positionierung und einzigartiger, modernerer Außendarstellung. Sie wollte weg von einem Systemanbieter, der einfache, veraltete Website-Baukästen für Kreishandwerkerschaften angeboten hat. (2021)',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Durchführung interner und externer Fokus-Interviews',
              'Workshops zur Herausarbeitung von Nutzen und Kernleistungen',
              'Entwicklung und Launch der neuen Website [kh-kleve.de](https://kh-kleve.de)',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Die Website dient als zentrale Anlaufstelle für Handwerksbetriebe zu Themen wie Tarifauskünfte, Rechtsberatung und Ausbildungsorganisation. Durchschnittlich ≈59.000 monatliche Aufrufe (2025) bei 4.100 Handwerksbetrieben im Kreis Kleve. Ausschließlich 5-Sterne Google-Rezensionen seit Projektabschluss.',
          },
        ],
      },
      {
        title: 'Online-Shop für Malerin Kassandra Flinterhoff',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Eine aufstrebende Malerin wollte ihre Kunstprodukte, Kooperationen und Workshops in einem Online-Shop präsentieren – farblich abgestimmt auf ihre Werke, visuell ausdrucksstark und funktional.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Analyse ihrer Farbpalette zur Entwicklung eines konsistenten Designsystems',
              'Auswahl eines passenden Schriftbilds und Vektorisierung der Signatur als Logo',
              'Einrichtung des Shopify-Themes, der Navigation und der Templates (Produkte, Blog, Seiten)',
              'Einstellung von Märkten und Versandzonen für den weltweiten Versand; Anbindung von Point of Sale und Google Shopping',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Ein vielseitiger, schneller und mehrsprachiger [Online-Shop](https://kassandra.studio), der nicht nur überrascht, sondern in der Kunstszene heraussticht. Dank klarer Struktur und einfacher Pflege kann die Künstlerin ihre Werke selbstständig vermarkten – und sich weiterhin auf das konzentrieren, was zählt: das Schaffen.',
          },
        ],
      },
    ],
  },
  {
    slug: 'quality-usability',
    area: 'marketing',
    icon: 'quality-usability',
    name: 'Qualität & Nutzerfreundlichkeit Ihrer Website oder App sicherstellen',
    claim: 'Vertrauen schaffen, halten und zurückgewinnen.',
    description: [
      'Ich überprüfe Websites und Anwendungen mit dem Blick eines Geschäftsführers auf Klarheit, Konsistenz und Wirtschaftlichkeit. Ich klicke mich durch die Anwendung, prüfe Design, Nutzerführung und Darstellung auf allen Geräten und bewerte, ob die digitale Erfahrung dem Geschäftsmodell wirklich dient.',
      'Technische und gestalterische Schwachstellen halte ich präzise fest und formuliere fundierte Empfehlungen zur Optimierung von Aufbau, Sprache und Ablauf.',
      'Auf Wunsch setze ich diese direkt im Frontend um oder schule das Team darin, die Qualitätskontrolle regelmäßig, detailgenau und effizient selbst durchzuführen.',
    ],
    playbook: [
      {
        title: 'Benutzerfreundlichkeit prüfen',
        items: [
          'Analyse der Website oder App auf unterschiedlichen Geräten (Desktop, Tablet, Smartphone)',
          'Bewertung von Navigation, Lesbarkeit und Verständlichkeit der Inhalte',
          'Identifikation überflüssiger Klicks und unnötiger Schritte',
        ],
      },
      {
        title: 'Qualität & Konsistenz sichern',
        items: [
          'Prüfung von UI-Elementen auf korrekte Darstellung und Funktion',
          'Kontrolle von Responsivität, Farbkontrasten und Textskalierung',
          'Überprüfung und ggf. Lokalisierung von UI-Texten (DE/EN)',
        ],
      },
      {
        title: 'Empfehlungen & Umsetzung',
        items: [
          'Erstellung eines übersichtlichen Berichts mit Screenshots, Begründungen und Priorisierung',
          'Formulierung konkreter Vorschläge zur Optimierung von Design und Nutzerführung',
          'Umsetzung der wichtigsten Anpassungen direkt im Frontend',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'PacketSafari — Schnelleres Onboarding und mehr Abo-Abschlüsse',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: '[PacketSafari](https://www.packetsafari.com/) – ein Anbieter von Netzwerkverkehr-Analyse – wollte den Discovery-Prozess seiner Web-App optimieren, damit Nutzer das Produkt schneller testen, der Nutzen sofort deutlich wird und Abonnements zügiger abgeschlossen werden.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Redesign des Above-the-fold-Bereichs der Landing Page – mit klarer Nutzen-Kommunikation und deutlicher Handlungsaufforderung.',
              'Umgestaltung der App-UI, sodass Nutzer ihre Daten direkt hochladen und das erste Ergebnis im AI-Copilot kostenlos einsehen können.',
              'Integration einer Paywall, die alle weiteren Ergebnisse verdeckt: Das erste Ergebnis zeigt den Wert sofort – anschließend kann der Nutzer zu einem fairen Preis ein Abo abschließen.',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Die Nutzerzahl und Abo-Abschlüsse stiegen signifikant. Unternehmen fragten vermehrt nach einer kundenspezifischen Enterprise-Lösung, was den Kunden motivierte, sein Produkt weiterzuentwickeln.',
          },
        ],
      },
      {
        title: 'SiteWorks2 — Präzisere UI-Texte für deutsche Nutzer',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Der Gründer von [SiteWorks2](https://www.siteworks.io/en) – einer Planungs-App für Architekten und Projektleiter – suchte Unterstützung bei der Optimierung der deutschen Lokalisierung. Ein Teil der vorhandenen Übersetzungen war uneinheitlich oder im Anwendungskontext missverständlich.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Prüfung der bestehenden deutschen Übersetzungsdatei auf Vollständigkeit, Verständlichkeit und Tonalität',
              'Abgleich der UI-Texte direkt in der Anwendung, um sicherzustellen, dass Wortwahl, Länge und Platzierung zum Layout passen',
              'Korrektur unklarer Begriffe und Kennzeichnung von Anpassungen an fest im Code verankerten Begriffen',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Die überarbeitete deutsche Lokalisierung führte zu einer klareren Nutzerführung und einem konsistenteren Erscheinungsbild der App. Der Gründer hob hervor, dass die App durch die neue Sprachqualität „professioneller und vertrauenswürdiger“ wirke.',
          },
        ],
      },
    ],
  },
  {
    slug: 'branding-design-systems',
    area: 'marketing',
    icon: 'branding-design-systems',
    name: 'Branding & Design Systeme entwickeln',
    claim: 'Wiedererkennungswerte, die Vertrauen schaffen.',
    description: [
      'Ich entwickle Markenidentitäten, die klar und tragfähig sind. Identitäten, mit denen sich Unternehmen nach innen und außen mit Stolz zeigen können.',
      'Jede Marke entsteht in enger Zusammenarbeit: Die Geschäftsführung und das Team gestalten aktiv mit und werden gehört. Sollte ein Projekt schon bestehen oder ein bestimmter Designer beauftragt werden, kann ich die Gestaltungsprozesse entsprechend managen.',
      'In meinem Prozess verbinde ich strategisches Denken eines Geschäftsführers mit gestalterischem Gespür und technologischem Know-how. Künstliche Intelligenz nutze ich gezielt, um in der Entwurfsphase schneller Varianten zu entwickeln.',
      'Das Ergebnis ist nicht nur ein neues Design, sondern ein gemeinsames Verständnis dafür, wofür das Unternehmen steht.',
    ],
    playbook: [
      {
        title: 'Unternehmen verstehen',
        items: [
          'Interviews mit Geschäftsführung und Mitarbeitenden',
          'Analyse der bestehenden Kommunikation, Produkte und Gestaltungsmuster',
          'Zielgruppen- und Kundenfeedbackanalyse zur Schärfung der Markenperspektive',
        ],
      },
      {
        title: 'Ideen entwickeln',
        items: [
          'Branding: mindestens drei Varianten zu Markenname und Slogan, Markenwerten und Tonalität, Positionierung und Markenbotschaft',
          'Design System: mindestens drei Ansätze für Farbpaletten, Logos und Typografie',
          'Mockups für zentrale Anwendungsbeispiele (Website, Print, Social Media) mit gemeinsamen Feedback-Runden',
        ],
      },
      {
        title: 'Design umsetzen',
        items: [
          'Integration des Branding-Systems in alle Kommunikationskanäle (Website, Newsletter, Poster, Präsentationen)',
          'Erstellung eines visuellen Leitfadens mit Anwendungsbeispielen, damit interne Teams und externe Partner jederzeit konsistent gestalten können',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Neue Markenidentität für Flinterhoff — Für dich & mich',
        blocks: [
          { kind: 'subheading', text: 'Ausgangslage' },
          {
            kind: 'paragraph',
            text: 'Um die 2022 festgelegte Strategie mit Fokus auf hochwertige Geschenke zu unterstützen, gab es Bedarf an einem passenden Branding und Design System für das Einzelhandelsgeschäft Flinterhoff.',
          },
          { kind: 'subheading', text: 'Maßnahmen' },
          {
            kind: 'bullets',
            items: [
              'Ausführliche Analyse der bestehenden Marke und visuellen Identität',
              'Ableitung von Schlüsselelementen wie der Primärfarbe Violett, der Farbpalette und Typografie',
              'Gestaltung des Logos mit verschiedenen Varianten (Favicon, Wortmarke, Wort- & Bildmarke, Logo und Slogan)',
              'Formulierung eines Gestaltungsleitfadens, um ein reibungsloses Erlebnis über alle Kommunikations- und Vertriebskanäle hinweg sicherzustellen',
            ],
          },
          { kind: 'subheading', text: 'Ergebnis' },
          {
            kind: 'paragraph',
            text: 'Das neue Design traf den Kern der Marke: persönlich, hochwertig und vertrauensvoll. Das Team identifizierte sich mit der neuen Identität, und die Zielgruppe fühlte sich angesprochen. Öffnungsraten von 40–55 % und hohe Klickraten bestätigten die Relevanz der Kommunikation.',
          },
        ],
      },
    ],
  },
]

export default experiencesDe
