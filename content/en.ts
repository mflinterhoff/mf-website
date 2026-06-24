import type { SiteContent } from './types'
import { experiencesEn } from './experiences.en'

const en: SiteContent = {
  locale: 'en',
  meta: {
    title: 'Matthias Flinterhoff | Operator & Technologist',
    description:
      'Operator and builder restructuring businesses, implementing systems and running migrations. I study and design organizations that empower people, rather than replace them.',
  },
  nav: [
    { key: 'vita', label: 'Vita', href: '/vita', icon: 'vita' },
    { key: 'approach', label: 'Approach', href: '/approach', icon: 'approach' },
    { key: 'questions', label: 'For leaders', href: '/questions', icon: 'questions' },
    { key: 'experiences', label: 'Experiences', href: '/#experiences', icon: 'refining-business-models' },
    { key: 'inspiration', label: 'Inspiration', href: '/inspiration', icon: 'inspiration' },
  ],
  ui: {
    skipToContent: 'Skip to content',
    home: 'Home',
    languageLabel: 'Language',
    toggleTheme: 'Toggle theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToHome: 'Back to home',
    backToExperiences: 'Back to experiences',
    learnMore: 'Learn more',
    onThisPage: 'On this page',
    contactCta: 'Get in touch',
    playbook: 'Playbook',
    caseStudy: 'Case study',
    caseStudies: 'Case studies',
    moreExperiences: 'More experiences',
  },
  home: {
    quote: 'I live to build, to care, to connect, to learn and to teach.',
    heroLead:
      'For 9+ years I’ve been the person organizations trust when something needs to be understood, restructured, and adopted by people who didn’t ask for the change.',
    eyebrow: 'About',
    introTitle: 'Operator & Technologist',
    aboutTitle: 'Change is my bread and butter',
    intro: [
      'I’m an operator with senior experience in restructuring businesses, implementing systems, running migrations, and leading the cross-divisional finance and marketing functions. Most recently, I spent 3.5 years as a Managing Director before returning to business transformation work through my own consulting firm. Before that, I led initiatives as an in-house consultant for 4+ years.',
      'Coming from a family of entrepreneurs and volunteers, I have been fascinated by organizations since my youth: groups of people who come together to pursue a common goal and benefit society by creating security, prosperity, and continuity.',
      'They are the backbone of civilization, if done right. [The Company of Strangers by Paul Seabright](https://www.amazon.com/Company-Strangers-Natural-History-Economic/dp/0691146462) offers deep insight into this.',
      'That’s why I study and design organizations that are fun to run, help employees thrive, and empower people, rather than replace them.',
    ],
    fresh: {
      label: 'Fresh out of the oven',
      title: 'Monami AI',
      description:
        'The days of vague AI answers, staring at a blank prompt and copy pasting skills from one provider to another are over.',
      videoLabel: 'Monami AI in action: selecting a skill and sending it to an AI provider',
      restartLabel: 'Replay',
      features: [
        {
          name: 'Ready-made skills.',
          description:
            'Well-structured prompts for your personal and work life. Enjoy an AI head start, do not suffer from blank page pressure.',
        },
        {
          name: 'Talk to legends.',
          description:
            'Bounce your ideas off the likes of Steve Jobs, J.R.R. Tolkien, David Attenborough or Warren Buffett, and see your work through their eyes.',
        },
        {
          name: 'Phone or computer.',
          description:
            'Fire up the app on whichever device is closest and pick up exactly where you left off.',
        },
        {
          name: 'Your AI, your choice.',
          description:
            'Open ChatGPT, Claude, Gemini, Perplexity or whichever provider you prefer in a single tap.',
        },
        {
          name: 'Weave in copied text.',
          description:
            'Copy something, select a skill and insert it into the chat. Add your raw thoughts and send it off.',
        },
        {
          name: 'Results you are happy about.',
          description:
            'Turn rough ideas into polished output, without the hallucinations or the prompt-writer’s block.',
        },
      ],
      cta: 'Visit Monami AI',
      href: 'https://monamiai.com',
    },
    explore: {
      title: 'Get to know me',
      subtitle: 'Four short reads into how I think, how I work, and what keeps me curious.',
      cards: [
        {
          key: 'vita',
          title: 'Vita',
          description: 'Professional experience, education, skills, tools and a glossary of what I do.',
          href: '/vita',
          icon: 'vita',
        },
        {
          key: 'approach',
          title: 'How I get things done',
          description: 'An open yet questioning mindset: seek first to understand, then design for joy.',
          href: '/approach',
          icon: 'approach',
        },
        {
          key: 'questions',
          title: '8 critical questions for leaders',
          description: 'The questions I learned to ask myself as a long-time managing director.',
          href: '/questions',
          icon: 'questions',
        },
        {
          key: 'inspiration',
          title: 'What inspires me',
          description: 'Valencia, art, books, music and the ideas I can’t get enough of.',
          href: '/inspiration',
          icon: 'inspiration',
        },
      ],
    },
    experiences: {
      title: 'Experiences',
      subtitle: 'Where I can help, grouped by area, each with a playbook and real case studies.',
      areaLabels: {
        corporate: 'Corporate Management',
        it: 'IT',
        marketing: 'Marketing',
      },
    },
    contact: {
      title: 'Let’s talk!',
      body: 'Connect with a communicative leader with design and technology expertise who enjoys getting to grips with complex issues quickly, providing stability.',
      email: 'hi@mflinterhoff.com',
      phone: '+49 156 78402395',
      emailCta: 'Email me',
      phoneCta: 'Call me',
    },
  },
  inspiration: {
    title: 'What inspires me',
    intro:
      'I live with my wife in Valencia, a city full of movement, light and color. We have [Kassandra’s](https://kassandra.studio) works like the cover above hanging in our home. They remind me every day that complexity is not threatening. It contains energy if you approach it with structure and curiosity. But it doesn’t stop there.',
    lead: 'This is what I also can’t get enough of:',
    items: [
      'Building effortless software to establish economic and AI literacy for individuals with Claude Code. It is the first tool that makes me feel I can shape software at the speed of my thinking: conceptualize, build, test, iterate, ship. Nothing blocks me anymore, and honestly it borders on addictive.',
      'Books like Material World by Ed Conway, The Company of Strangers by Paul Seabright, The Inner Game of Tennis by W. Timothy Gallwey or The Century Trilogy by Ken Follett.',
      'Music like Maribou State, Khruangbin, Parcels. I love selecting music that fits the atmosphere I’d like to create for others or myself.',
      'Learning more about macroeconomic trends, international relations and behavioral economics, how tech can have a lasting positive impact on our societies and how I can make sustainable financial decisions based on value investing principles.',
      'Playing sports like beach volleyball and padel.',
      'Nourishing my relationships with family and friends.',
    ],
  },
  approach: {
    title: 'How I get things done',
    intro:
      'I approach problems with an open, yet questioning mindset. Then it’s time to explore and evaluate solutions systematically to quickly achieve objective results.',
    quote: { text: 'Seek first to understand, then to be understood.', author: 'Stephen R. Covey' },
    quoteFollow: 'I do my best to live by that principle every day.',
    sections: [
      {
        title: 'What about joy?',
        body: 'It can be quick and dirty in the beginning, but does it need to stay like that? Once you’ve found product-market or process-organization fit, it is time to **take care**. Let’s design user-friendly, detail-oriented, aesthetically pleasing and therefore inclusive experiences.',
        tagline: 'Focusing on what **truly matters** is key.',
      },
      {
        title: 'Getting to the point.',
        body: 'Visible results, both positive and negative, create clarity. **This clarity enables the organization to act**, which then gives control to arrive at **well-considered decisions**. That’s what I strive for.',
        tagline: '',
      },
      {
        title: 'Let’s make it enjoyable for everyone.',
        body: 'Integrating a new system, setting up new processes or launching a new service can only be beneficial for the end user if all affected stakeholders are involved. Systematic changes cause friction. **Friction stays unless we open up and show curiosity**.',
        tagline: 'It’s hard to care, but it’s essential.',
      },
    ],
  },
  questions: {
    title: '8 critical questions for leaders',
    intro: [
      'As a long-time managing director of a GmbH with up to 14 employees, I know how important and simultaneously difficult it is to maintain the balance between strategic tasks and operational pressure.',
      'What have I learned during this time? To be honest with myself, to recognize what is truly important for the organization, and to act accordingly with discipline. It all begins with us as leaders regularly asking ourselves challenging but critical questions about our business model.',
      'But it cannot remain at the level of ideas and theory. In the end, it is exclusively about implementing the measures that can be derived from the answers. This requires courage, perseverance, and resilience.',
    ],
    items: [
      {
        q: 'Have we established an outstanding and stable position for our offering in relation to the current market and competitive situation?',
        a: [
          'If yes, how can we grow or become even more efficient?',
          'If no, what can I change? Are we talking with our customers?',
        ],
      },
      {
        q: 'Which offerings cost us too much time and generate too little revenue?',
        a: [
          'If this remains the case in the long term, how can we discontinue these offerings and communicate the decision professionally?',
          'If it is a temporary situation, under what conditions do we continue developing the offering?',
        ],
      },
      {
        q: 'Are the right people in the right roles?',
        a: [
          'If yes, who covers the key tasks of each employee if someone becomes unavailable?',
          'If no, what are the most important changes to make?',
        ],
      },
      {
        q: 'Do we treat our employees with respect?',
        a: [
          'If yes, how can we recognize this and how do we make it visible to everyone?',
          'If no, are we burning out individual employees or does this apply to the entire team?',
        ],
      },
      {
        q: 'Do we provide our employees with everything they need to carry out their tasks easily, safely, and effectively?',
        a: [
          'If yes, how can we identify this, and what is nevertheless unnecessary?',
          'If no, which activities can we make less tedious or more targeted? Which potential risks exist relating to their tasks?',
        ],
      },
      {
        q: 'Do we respect our customers, suppliers, and other partners enough to build trust and create long-term, fruitful relationships?',
        a: [
          'If yes, how can we recognize this and how do we make it visible to everyone?',
          'If no, at what point can we improve our communication?',
        ],
      },
      {
        q: 'Have we ensured that our employees understand the desired process flows?',
        a: [
          'If yes, how can we detect this and which processes cost too much despite this?',
          'If no, which processes do not run smoothly but have no alternative?',
        ],
      },
      {
        q: 'Do we spend enough time regularly reviewing these questions?',
        a: [
          'If yes, does this also apply in crisis situations or do we put on blinders then?',
          'If no, what behaviors prevent us from doing so?',
        ],
      },
    ],
  },
  vita: {
    title: 'Vita',
    experienceTitle: 'Professional experience',
    positions: [
      {
        period: '06/2025 - now',
        role: 'Founder',
        org: 'tahi.design, Valencia, Spain',
        description:
          'Business transformation studio providing clients with stability and clarity by streamlining digital user experiences and optimizing systems to manage finance, HR and marketing without friction. Building productivity apps with Claude Code. Relaunched after MD tenure at Flinterhoff GmbH.',
        note: {
          title: '01/2026 - 03/2026: Paternal leave',
          text: 'My wife and I welcomed our first child into this beautiful world.',
        },
      },
      {
        period: '01/2022 - 06/2025',
        role: 'Managing Director',
        org: 'Flinterhoff GmbH, Kalkar, Germany',
        description:
          'Family-owned company with two distinct business units: retail and metal construction. I joined the management in a phase of structural complexity and financial pressure and focused on restoring clarity, stability, and long-term viability. My responsibilities covered financial management and forecasting, system and process redesign, digital commerce, and strategic restructuring, including a successful turnaround phase and the responsible closure of the retail business in 2024.',
      },
      {
        period: '01/2021 - 12/2021',
        role: 'Founder & CEO',
        org: 'tahi.design, Kalkar, Germany',
        description:
          'Business transformation consultancy producing clear marketing manuals, design systems, and digital experiences. For Flinterhoff GmbH, we created a branding design system for retail repositioning and began developing a custom e-commerce system. For Kreishandwerkerschaft Kleve, a public corporation supporting regional trade businesses, we conducted stakeholder research and built a website serving as the central access point for legal documents, contacts, and vocational information for over 4,100 businesses. Tahi.design closed after a successful year to focus on Flinterhoff GmbH.',
      },
      {
        period: '09/2016 - 12/2020',
        role: 'In-house Consultant',
        org: 'Flinterhoff GmbH, Kalkar, Germany',
        description:
          'Family-owned company with two distinct business units: retail and metal construction. I designed and implemented core operational, digital, and financial systems across both units, including cloud collaboration, ERP and POS systems, lean accounting processes, and workflow redesign. My work focused on creating clarity, scalability, and effective collaboration between people, tools, and business models.',
      },
    ],
    experienceFootnote:
      'More details and experiences on [LinkedIn](https://www.linkedin.com/in/mflinterhoff/).',
    educationTitle: 'Education',
    education: [
      {
        degree: 'Master of Arts (M.A.): Media Management & Entrepreneurship (2016), 1.2',
        focus:
          'Thesis: Business Model Innovation as an important value driver in corporations. A structured analysis and systematic evaluation of existing concepts.',
        activities:
          'Activities: Lecturer for digital transformation after graduation (09/2016-02/2017); study trips to Berlin, Silicon Valley and Tel Aviv; speech as class representative on graduation day.',
        school: 'Hochschule Fresenius, University of Applied Sciences, Cologne, GER',
      },
      {
        degree: 'Bachelor of Arts (B.A.): Applied Media Studies (2014), 1.6',
        focus: 'Focus: Media, sports and events management',
        activities:
          'Activities: Class representative; supported the Students’ Association in organizing events and welcome weekends.',
        school: 'Hochschule Mittweida & Hochschule Fresenius, Universities of Applied Sciences, GER',
      },
    ],
    assetsTitle: 'Assets',
    skills: {
      title: 'Key Skills',
      note: 'Sorted alphabetically.',
      items: 'Corporate Management, Digital Transformation, Systems Design, Change Management, Marketing',
      footnote:
        'Find more skills on [LinkedIn](https://www.linkedin.com/in/mflinterhoff/details/skills/) and how I get things done [here](/en/approach).',
    },
    languages: {
      title: 'Languages',
      items: ['German: Native Language', 'English: Professional (C2)', 'Spanish: Fluent (B2, taking classes)'],
    },
    tools: {
      title: 'Relevant Tools',
      note: 'Tools used in my day-to-day are highlighted in colour. Sorted alphabetically.',
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
          label: 'Collaboration',
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
          label: 'Content, Design, Prototyping',
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
          label: 'Coding / Hosting',
          tools: [
            { name: 'Claude Code', href: 'https://claude.com/product/claude-code', primary: true },
            { name: 'Cursor', href: 'https://cursor.com/' },
            { name: 'Cloudflare', href: 'https://cloudflare.com' },
            { name: 'Visual Studio Code', href: 'https://code.visualstudio.com/' },
          ],
        },
        {
          label: 'No-Code Website / eCommerce',
          tools: [
            { name: 'Shopify', href: 'https://shopify.com' },
            { name: 'Webflow', href: 'https://webflow.com/' },
            { name: 'WiX', href: 'https://www.wix.com/' },
            { name: 'WordPress / WooCommerce', href: 'https://wordpress.com/' },
          ],
        },
        {
          label: 'Productivity for Mac',
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
      title: 'Connections',
      note: 'Areas of self-employed experts, leaders and operators from Europe and parts of Latin America in my network who might be beneficial to you.',
      areas: 'AI, cyber security, HR & Leadership, marketing, (space) design, software development',
      footnote: 'Let’s connect on [LinkedIn](https://www.linkedin.com/in/mflinterhoff/).',
    },
    glossaryTitle: 'Glossary',
    glossary: [
      {
        term: '1. Corporate Management',
        definition:
          'The practice of leading and overseeing all aspects of a company’s operations to achieve its strategic goals. It encompasses strategic planning, organizational design, financial stewardship, operational excellence, and stakeholder management.',
        sample:
          'Taking full P&L responsibility, navigating complex turnaround situations, restructuring business units, implementing financial controls, and building organizational clarity during phases of uncertainty, all while balancing the needs of employees, customers, and ownership.',
      },
      {
        term: '2. Digital Transformation',
        definition:
          'The strategic integration of digital technologies into all areas of a business to fundamentally change how it operates and delivers value. It goes beyond simply adopting new tools. It involves rethinking processes, culture, and customer experiences to leverage technology for competitive advantage.',
        sample:
          'Implementing cloud-based systems, redesigning workflows for digital-first operations, building e-commerce capabilities, onboarding employees and enabling data-driven decision-making across traditionally analog business functions.',
      },
      {
        term: '3. System Design',
        definition:
          'The practice of creating structured frameworks that connect people, processes, and tools to achieve specific business outcomes. It involves mapping workflows, defining data flows, selecting appropriate technologies, and ensuring that different components work together seamlessly.',
        sample:
          'Building operational infrastructures like ERP or accounting system implementations, process automation and digital collaboration environments that provide clarity, reduce friction, and enable growth.',
      },
      {
        term: '4. Change Management',
        definition:
          'Change management is the discipline of planning, coordinating, and guiding people, processes, and systems through a transition to achieve a desired outcome within defined constraints of time, budget, and scope. It involves aligning stakeholders, managing communication and adoption, mitigating risks, and ensuring changes are implemented effectively and sustained.',
        sample:
          'Leading change in organizations where new tools, systems, or workflows had to be adopted by people who didn’t ask for the shift. ERP and POS rollouts, cloud migrations from O365 to Google Workspace, retail repositioning, and the responsible wind-down of one business unit. All delivered with realistic timelines, clear communication, and measurable adoption outcomes.',
      },
      {
        term: '5. Marketing',
        definition:
          'The strategic practice of creating, communicating, and delivering value to customers while building and maintaining profitable relationships. It encompasses understanding customer needs, developing compelling value propositions, positioning products or services in the market, and executing integrated campaigns across multiple channels.',
        sample:
          'Repositioning entire business units, developing brand systems, building digital commerce strategies, creating customer-facing communication frameworks, and designing market research processes to inform strategic decisions during transformation phases.',
      },
    ],
  },
  legal: {
    notice: {
      title: 'Legal notice',
      blocks: [
        { kind: 'paragraph', text: 'Matthias Flinterhoff' },
        { kind: 'paragraph', text: 'Paseo Serra D’Espada 8, Escalera 3 Planta 4 Puerta 25, 46120 Alboraya, Spain' },
        { kind: 'subheading', text: 'VAT-ID (NIF)' },
        { kind: 'paragraph', text: 'Z0118855L' },
        { kind: 'subheading', text: 'Contact' },
        { kind: 'paragraph', text: 'Email: [hi@mflinterhoff.com](mailto:hi@mflinterhoff.com) · Phone: +49 156 78402395' },
        { kind: 'subheading', text: 'Responsible for content' },
        { kind: 'paragraph', text: 'Matthias Flinterhoff' },
        { kind: 'subheading', text: 'Notice pursuant to LSSI (Law 34/2002)' },
        {
          kind: 'paragraph',
          text: 'This website complies with the requirements of the Spanish Law on Information Society Services and Electronic Commerce (LSSI).',
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      blocks: [
        { kind: 'subheading', text: 'Inquiries via contact form, telephone, email or other communication channels' },
        {
          kind: 'paragraph',
          text: 'When you submit inquiries to us, your information including the contact details you provide will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass this data on to third parties without your consent. If your inquiry has been answered, no contract has been concluded and no follow-up questions remain open, your data will be deleted within 3 months at the latest. If a contract with a subsequent purchase agreement has resulted from this inquiry, your information will be stored until the statute of limitations expires. The statutory retention obligation for data related to contract execution is generally 10 years.',
        },
        { kind: 'subheading', text: 'Information, deletion, blocking' },
        {
          kind: 'paragraph',
          text: 'You have the right at any time to receive free information about your stored personal data, its origin and recipients and the purpose of data processing, as well as a right to correction, blocking or deletion of this data. An exception to the deletion of data occurs if a statutory retention obligation (e.g. due to a contract) applies. The relevant data will then be stored in accordance with the retention period. For this as well as for further questions on the subject of personal data, you can contact us at any time at the address provided in the imprint.',
        },
        { kind: 'paragraph', text: 'Source: [eRecht24](https://www.e-recht24.de/muster-datenschutzerklaerung.html)' },
      ],
    },
  },
  experiences: experiencesEn,
  footer: {
    tagline: 'Operator & builder. I live to build, to care, to connect, to learn and to teach.',
    legalTitle: 'Legal',
    languagesTitle: 'Languages',
    exploreTitle: 'Explore',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
    linkedin: 'https://www.linkedin.com/in/mflinterhoff/',
  },
}

export default en
