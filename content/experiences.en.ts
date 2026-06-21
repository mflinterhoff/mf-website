import type { Experience } from './types'

// The "Experiences" services database, in English. Slugs are stable across all
// locales; the ES/DE files reuse the same slug/area/icon and translate the text.
export const experiencesEn: Experience[] = [
  {
    slug: 'refining-business-models',
    area: 'corporate',
    icon: 'refining-business-models',
    name: 'Refining business models and operational processes',
    claim: 'Providing clarity, setting direction, enabling decisions.',
    description: [
      'I analyze business models and organizational structures to create clarity about positioning, strengths, and weaknesses.',
      'Through interviews, workshops, and proven frameworks such as the Business Model Canvas, I critically examine the current situation, identify bottlenecks, and develop a clear strategy with goals and measures.',
      'This creates a shared understanding within the company — and a solid foundation for decisions that are supported.',
      'Approachability builds trust. It prevents bigger problems.',
    ],
    note: 'Methodologically, I work with frameworks such as the Business Model Canvas, PESTEL, SWOT, 5-Forces, 4P/3R Marketing Matrix, BCG Matrix, or Aaron Dignan’s OS Canvas.',
    playbook: [
      {
        title: 'Analysis & Positioning',
        items: ['Analysis of current situation', 'Development of a clear direction and positioning'],
      },
      {
        title: 'Strategic Implementation',
        items: [
          'Definition of measures, responsibilities, and objectives',
          'Structuring of business units and decision-making paths',
        ],
      },
      {
        title: 'Monitoring & Support',
        items: [
          'Introduction of key performance indicators for success monitoring',
          'Support during implementation and communication of the strategy',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Turnaround of Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          { kind: 'paragraph', text: 'Critical economic situation (2015–2016).' },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Strategic realignment of both business units',
              'Focus on more profitable customer segments',
              'Optimization of processes and supplier structure',
              'Modernization of digital communication',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          { kind: 'paragraph', text: 'Successful stabilization with development from burdened to free equity.' },
          { kind: 'subheading', text: 'Strategic Decision End of 2024' },
          {
            kind: 'paragraph',
            text: 'After another thorough analysis, we closed the retail division of our traditional family business (founded in 1798) in 2024 to focus on the profitable metal construction business. The decision was emotionally and structurally challenging in this family context.',
          },
          {
            kind: 'paragraph',
            text: 'As managing director, I prepared this path early, provided alternatives, and ultimately set the necessary course. I look back on this phase with humility and many insights: about the interplay of responsibility, influence, and limits in family businesses.',
          },
          {
            kind: 'note',
            text: '**Strategy Paper from 2022 available upon request.** As part of the strategic realignment of Flinterhoff GmbH’s retail division, I developed a comprehensive document. It exemplifies how I structure business models and lead to clear decisions. If you’re interested, I’m happy to send you an anonymized version.',
          },
        ],
      },
    ],
  },
  {
    slug: 'organizing-finances',
    area: 'corporate',
    icon: 'organizing-finances',
    name: 'Organizing finances',
    claim: 'Clear structures, reliable data, better decisions.',
    description: [
      'I bring structure and clarity to your finances — from preliminary bookkeeping to cash flow planning. This allows you to identify financial risks early and create a reliable foundation for decision-making. I am familiar with systems such as Datev UnternehmenOnline, Lexoffice, and Candis, and integrate quickly into existing processes.',
    ],
    playbook: [
      {
        title: 'Preparing Financial & Payroll Accounting',
        items: [
          'Reconciliation of employment contracts, pay scales, and payroll statements',
          'Proper booking and allocation of receipts',
          'Establishment of clear payment and approval processes',
        ],
      },
      {
        title: 'Structuring Monthly & Annual Financial Statements',
        items: [
          'Provision of all documentation and data for tax advisory services',
          'Review of outstanding items, fixed assets, provisions, and inventory',
          'Preparation of financial statements for tax and financial optimisation',
        ],
      },
      {
        title: 'Cash Flow & P&L Planning',
        items: [
          'Development of user-friendly planning tools and overviews',
          'Regular coordination meetings on budgets, investments, and liquidity',
          'Preparation of documents for loans and credit lines',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Digitalization and Optimization of Finances as Managing Director of Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'Accounting system with a high proportion of paper-based processes, separate from the payment system.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'New software, most recently Datev UnternehmenOnline, integrated to unite accounting and payment systems for both business units.',
              'Payment flows optimally aligned with cash flow',
              'Work in progress and provisions correctly recorded',
              'Tax advisory costs permanently reduced',
              'Monthly and annual financial statements prepared faster and more accurately',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'Clarity, ability to act, and control — along with greater satisfaction and smoother collaboration with tax advisory services.',
          },
        ],
      },
    ],
  },
  {
    slug: 'corporate-restructuring',
    area: 'corporate',
    icon: 'corporate-restructuring',
    name: 'Supporting corporate restructuring',
    claim: 'Legally sound, structured implementation.',
    description: [
      'I support the restructuring of your corporate or asset structure as a connecting interface between tax advisors, notaries, and banks.',
      'In doing so, I translate complex tax and legal requirements into clear, actionable measures and coordinate with all parties involved, structure tasks, prepare necessary documents, and ensure that decisions are consistently implemented.',
      'This keeps your mind free for the core business while I ensure legally and organizationally sound implementation.',
    ],
    playbook: [
      {
        title: 'Strategic Preparation',
        items: [
          'Conception: Develop and select solution options with tax advisors',
          'Project management: Structure, prioritise, and implement steps',
        ],
      },
      {
        title: 'Coordination & Support',
        items: [
          'Coordination: Lead communication with tax advisors and notaries',
          'Banking: Support account opening and document preparation',
          'Notary support: Attend appointments and point out special considerations',
          'Commercial register: Execute capital deposits and review registration documents',
        ],
      },
      {
        title: 'Operational Integration',
        items: [
          'Payment transition: Migrate recurring payments',
          'Payment reconciliation: Assign open items with tax advisors',
          'Supplier communication: Communicate new account details',
        ],
      },
      {
        title: 'Documentation',
        items: ['Annual financial statements: Collect and transfer documents from the deregistered entity'],
      },
    ],
    caseStudies: [
      {
        title: 'Restructuring business ownership',
        blocks: [
          { kind: 'subheading', text: 'Initial situation' },
          {
            kind: 'paragraph',
            text: 'For the shareholder, a sole proprietorship had to be replaced by two new entities (management UG and asset management UG & Co. KG) to secure assets.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Coordination of the entire process with tax advisors and notaries',
              'Opening of new bank accounts',
              'Preparation of capital verification documents',
              'Restructuring of ongoing payments',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'The restructuring was completed without delay, and the client was able to focus entirely on operational business.',
          },
        ],
      },
    ],
  },
  {
    slug: 'software-changes',
    area: 'it',
    icon: 'software-changes',
    name: 'Supporting software changes',
    claim: 'Clean migrations without downtime.',
    description: [
      'A software change is considered a necessary evil in many companies: time-consuming, risky, unpredictable. I support these processes with experience, composure and technological foresight: from analysis through implementation to control.',
      'I know the leading tools from daily practice and quickly familiarize myself with new systems. Therefore, I am often brought in when transitions must succeed reliably and without friction.',
      'In doing so, I always maintain the flexibility and sovereignty of the data so that the company remains adaptable and independent, even when a project reveals that software doesn’t deliver on its promises.',
    ],
    playbook: [
      {
        title: 'Analysis & Planning',
        items: [
          'Capture existing processes and user behavior',
          'Prioritize team requirements and feature requests',
          'Identify and compare suitable software options (cost, benefit, effort)',
        ],
      },
      {
        title: 'Implementation & Migration',
        items: [
          'Export, prepare and import data into new systems',
          'Prepare and optimize structures, templates and workflows',
          'Set up interfaces, plugins and automations',
        ],
      },
      {
        title: 'Introduction & Training',
        items: [
          'Test environments, accompany go-live',
          'Workshops and tutorials for confident application',
          'Train team members to become internal experts',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Switch from Asana to Notion — Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'As Managing Director, I was looking for a more flexible tool that unites projects, tasks and knowledge in one environment. We wanted to maintain our meeting notes, tasks, projects and documents like guidelines or reports centrally — simple, expandable and fast. The apps from Google Workspace offered too little connection and context for this.',
          },
          { kind: 'subheading', text: 'Actions' },
          {
            kind: 'bullets',
            items: [
              'Created central databases in Notion for meetings, tasks, projects, content plan or documents',
              'Connected the various databases to ensure context between topics',
              'Exported existing Asana data and imported it into Notion',
              'Created templates for recurring processes such as daily stand-ups or monthly financial closings',
              'Individual onboarding of employees to introduce only the areas relevant to each role',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'Collaboration became noticeably smoother. All relevant information was immediately findable, research times dropped significantly. Thanks to clear templates and consistent formatting, even less tech-savvy team members could quickly create structured, clear documents. It increased the productivity of the team meaningfully.',
          },
        ],
      },
      {
        title: 'Switch from Microsoft Office 365 to Google Workspace — Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'During my time as Managing Director, we wanted to simplify collaboration and switch from a hybrid solution to a lean, native cloud environment. Microsoft 365 was too sluggish and confusing in everyday use — we were looking for more speed, clarity and enjoyment in usage.',
          },
          { kind: 'subheading', text: 'Actions' },
          {
            kind: 'bullets',
            items: [
              'Structured existing data landscape in OneDrive',
              'Transferred relevant content from OneNote to Google Docs and Excel tables to Sheets',
              'Accompanied the migration together with the agency Blackboat Internet GmbH',
              'Set up user accounts, signatures, calendars and groups in Google Chat',
              'Conducted a workshop on efficient use of the new interface',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'The transition brought noticeably more ease and transparency to daily work. Documents are now shared centrally, no longer stored locally, and communication runs faster and clearer.',
          },
        ],
      },
      {
        title: 'Switch from WooCommerce to Shopify — Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'As a retail company, we were looking for an omni-channel solution that cleanly connects online shop, inventory management, point of sale and marketplaces like Google Shopping and Idealo. The self-developed WooCommerce shop was too slow despite optimizations, the connection to inventory management complicated, maintenance error-prone.',
          },
          { kind: 'subheading', text: 'Actions' },
          {
            kind: 'bullets',
            items: [
              'Transferred all customer and product data using the Shopify migration tool',
              'Adapted the Shopify theme to the existing design system and rebuilt page structure and navigation',
              'Created templates for pages, categories, products and blog articles',
              'Set up Point of Sale system including hardware setup',
              'Configured all domain, marketplace and shipping options and accompanied the entire go-live process',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'A seamless system that the team used with enthusiasm from day one. All data was cleanly transferred, processes ran significantly faster, and the POS functioned without friction. A solution that finally lived up to our standards for a personal, high-quality shopping experience.',
          },
        ],
      },
      {
        title: 'Switch from ERP System NetSoft to SmartHandwerk — Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'We were looking for a more affordable, leaner office software with more flexible cancellation options — a system that reliably handles accounting, project management, accounts payable management and customer communication. NetSoft seemed outdated and cumbersome to operate.',
          },
          { kind: 'subheading', text: 'Actions' },
          {
            kind: 'bullets',
            items: [
              'Exported all customer and article data from NetSoft and installed new software on server and workstations',
              'Configured all master data such as company data, bank connections and number ranges',
              'Created all necessary templates, including specific templates for repair orders',
              'Comprehensive onboarding with feedback round and optimization of new processes',
              'Accompanied go-live including creation of first official quotes, order confirmations and invoices',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'The office team worked significantly faster and more relaxed. The modern, Word-like interface facilitated daily administration, reduced inquiries and created more space for precise planning and control of parallel metal construction projects.',
          },
        ],
      },
      {
        title: 'Setup of First ERP & PoS System — Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'In 2016, the retail business was looking for an ERP system to replace the old structure of cash register and Excel spreadsheets. The goal was a system that simplifies and reliably handles purchasing, sales, administration and reporting.',
          },
          { kind: 'subheading', text: 'Actions' },
          {
            kind: 'bullets',
            items: [
              'Installed the ERP system Shopwin together with the provider EasySystems (EK Servicegroup)',
              'Obtained article master data from suppliers and imported supplier and customer master data',
              'Set up cash register interface and relevant hardware (receipt printer, label printer, cash register PC, back office workstations)',
              'Workshops to consolidate processes with the entire team',
              'Accompanied go-live including presence and support in the first operating week and on high-sales days',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'The team found its way around the new software surprisingly quickly. The system brought security, routine and trust — and thus laid the foundation for all subsequent software changes in the company.',
          },
        ],
      },
    ],
  },
  {
    slug: 'tool-integration',
    area: 'it',
    icon: 'tool-integration',
    name: 'Simplifying processes through intelligent tool integration',
    claim: 'Enjoy using systems. Consolidate knowledge and share it confidently.',
    description: [
      'Digital systems are evolving rapidly. AI, automation, and new interfaces are changing how companies work. I help you harness this momentum: with tools that are flexible, simple, and scalable. Complex, isolated software is a thing of the past. Often, modern cloud platforms like Google Workspace, Notion, or Airtable are enough to connect workflows more intelligently and cost-effectively.',
      'I’m an experienced tool builder who combines business acumen with technological intuition and designs systems that simplify processes and embed knowledge within the organization.',
    ],
    playbook: [
      {
        title: 'Analysis',
        items: [
          'Evaluate existing tool landscape and identify redundant systems',
          'Recognize integration potential between apps (e.g., CRM, communication, project management)',
          'Develop a coordinated concept for simpler, connected workflows',
        ],
      },
      {
        title: 'Integration',
        items: [
          'Select suitable tools',
          'Set up applications and migrate data',
          'Document processes with clear guidelines and responsibilities',
        ],
      },
      {
        title: 'Training',
        items: [
          'Support and onboard employees during the transition',
          'Establish a culture of knowledge transfer among employees',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Notion as the Operating System for Flinterhoff GmbH Retail',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'The retail unit needed a single environment to plan a custom e-commerce launch, run daily store operations, and coordinate ongoing marketing campaigns. Tasks, content briefs, and project documentation were scattered across email, spreadsheets, and chat.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Designed a Notion workspace structured around four connected databases: Tasks, Projects, Content, and Docs/meeting notes.',
              'Built standardized templates for recurring work: monthly closings, newsletters, blog posts, ad briefs, in-store actions, and proofreading rounds.',
              'Connected projects, tasks, meeting notes, and the docs wiki so all initiatives could be traced from brief to execution.',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'The workspace ran continuously for over four years, covering e-commerce, store operations, and marketing from one shared environment. Over 550 content entries were tracked across 2023–2024 with cost-per-reach and cost-per-interaction calculated automatically. Knowledge and history were preserved in full after the retail unit closed at the end of 2024.',
          },
          {
            kind: 'note',
            text: '**Preview Upon Request.** Upon request, I’d be happy to walk you through the workspace — including how the database structure, templates, and reporting could be adapted to your company.',
          },
        ],
      },
      {
        title: 'Notion as the Collaboration Hub for tahi.design',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'Running a business transformation consultancy means working simultaneously on research, stakeholder management, project delivery, and client communication. For the corporate website project with Kreishandwerkerschaft Kleve, a shared environment was needed that could hold research data, coordinate workshops, track delivery, and keep the client informed.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Built a Notion workspace as the single source of truth: Tasks, an interview database, meetings & workshops, and a project blog.',
              'The interview database structured internal and external focus interviews, enabling pattern recognition across stakeholder groups.',
              'The project blog replaced status emails with a transparent, always-current view of progress, decisions, and next steps.',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'Notion replaced what would typically require a project management tool, a research repository, a meeting tracker, and a client reporting layer. The project delivered the new kh-kleve.de, now the central hub for 4,100 craft businesses in the Kleve district, averaging ≈59,000 monthly visits in 2025.',
          },
        ],
      },
      {
        title: 'Custom Time Tracking and Evaluation for Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'A flexible, independently maintainable solution was required to track and evaluate working hours, absences, overtime, and vacation entitlements across two very different business areas: metal construction and retail. The existing solution (Papershift) was too inflexible.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Developed a modular system in Google Sheets and Forms: time tracking & shift planning, vacation management, and project-based hour evaluations.',
              'Set up linked evaluation databases (pivot) and automated employee evaluations via the Query function.',
              'Trained managers and created a tutorial for independent use.',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'A clearly structured tool that meets individual requirements, incurs no additional costs, and runs in the familiar Google Workspace environment. Team frustration decreased; personal responsibility and collaboration in handling work time data grew.',
          },
        ],
      },
      {
        title: 'Custom Cash Flow Planning Tool for Flinterhoff GmbH',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'A clear, customizable planning tool was needed to display liquidity across multiple bank accounts — including overdraft facilities, planned/actual comparison, and flexible timeline evaluation — fully implementable within Google Workspace.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Developed a modular Google Sheets system with an import structure for actual transactions across all bank accounts.',
              'Built planning tables for recurring and one-time payments and a monthly overview with opening balance, in/outflows, closing balance, and available funds per bank.',
              'Added a point-in-time view with liquidity forecast up to a freely selectable date.',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'An intuitive, time-saving tool that creates complete transparency over future inflows and outflows — without manual, error-prone calculations or parallel systems.',
          },
        ],
      },
    ],
  },
  {
    slug: 'generative-ai',
    area: 'it',
    icon: 'generative-ai',
    name: 'Integrating generative artificial intelligence into your business processes',
    claim: 'Empower people, don’t replace them.',
    description: [
      'Generative AI is not an end in itself and not a hype button to be pressed everywhere. Used correctly, it enhances human performance.',
      'I help companies introduce AI pragmatically: small, safe and close to actual challenges. Employees get to know the technology in everyday work, are allowed to play with it, make mistakes and thereby understand how generative AI works best.',
      'Only when this understanding is in place can it work productively in the business model: clearly, controllably and with real value.',
    ],
    playbook: [
      {
        title: 'Understanding & Assessment',
        items: [
          'Interviews with management and team to identify bottlenecks and relevant use cases',
          'Analysis of the business model and identification of real value drivers',
          'Assessment of the current level of knowledge and AI maturity of the company',
        ],
      },
      {
        title: 'Creating Context & Building Competence',
        items: [
          'Teaching proper use of AI: clear prompts, relevant context, minimizing hallucinations',
          'Creating initial small application examples in secure test environments',
          'Enabling employees to experiment with the technology in everyday work and build routines',
        ],
      },
      {
        title: 'Designing & Implementing',
        items: [
          'Development of clear work instructions and documents that AI can use effectively',
          'Selection and introduction of suitable AI tools or platforms',
          'Setup of individual agents that respond clearly, and variants for different tasks and roles',
        ],
      },
      {
        title: 'Securing & Advancing',
        items: [
          'Evaluation of genuine process improvements, not just output',
          'Gradual integration of the most successful AI solutions into daily work',
          'Establishment of a learning culture in which AI is used responsibly, efficiently and with enthusiasm',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Creating an Advisor for Business Management Questions — Flinterhoff GmbH / KG',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'bullets',
            items: [
              'I left the company in June 2025; since then, only monthly consulting days.',
              'For the business management questions arising in everyday work, effective support was needed for the secretariat and managing director — to avoid frequently consulting the tax advisor and driving up costs.',
            ],
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Setup of Google Gemini and explanation of generative AI functionality using concrete examples.',
              'Use cases: polite declinations, understanding of accounting rules, contracts or insurance inquiries, and preparation of meetings with potential tenants.',
              'Discussion of results and recommendations for optimizing prompts during the monthly consulting days.',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'The backoffice felt more confident handling everyday tasks, knowing they had a competent partner at their side. Meetings were prepared more systematically and participants reached concrete decisions or next steps more quickly.',
          },
        ],
      },
    ],
  },
  {
    slug: 'websites-commerce',
    area: 'marketing',
    icon: 'websites-commerce',
    name: 'Designing websites and commerce experiences',
    claim: 'Aesthetic designs that work.',
    description: [
      'I develop corporate websites, landing pages, and online shops that are clearly structured, aesthetically precise, and easy to maintain. The goal is a presence that convinces both visually and in content, giving the company expression and direction.',
      'I work with platforms like Webflow, Shopify, and Figma, and guide the entire process: from initial idea through design and implementation to team training. If needed, I also set up inventory management systems or point-of-sale applications.',
      'This creates a powerful system that empowers the team to develop the digital presence independently with confidence and joy. Upon request, I handle the replacement of existing systems — including data migration.',
    ],
    playbook: [
      {
        title: 'Discovery',
        intro:
          'Through workshops and conversations, I analyze how the company communicates and what the website must achieve: visibility, trust, or sales. I identify gaps in design, user guidance, or processes, then develop clear action points to address them.',
      },
      {
        title: 'Ideation',
        intro:
          'Together, we develop drafts, prototypes, and content that clearly convey the brand. I use tools like Figma to create wireframes and designs, testing early to ensure the solution stays true to the brand and works well for users.',
      },
      {
        title: 'Implementation',
        intro:
          'I build the website or shop in Webflow or Shopify based on the approved designs — with consistent styling, intuitive user guidance (maximum three steps to any action), and clean responsive layouts. I also set up templates and content structures so new pages, products, or posts can be added without technical barriers.',
      },
      {
        title: 'Review',
        intro:
          'After launch, I review the results — from performance to maintainability. Through clear, practical workshops, the team learns to manage content independently and maintain design consistency.',
      },
    ],
    caseStudies: [
      {
        title: 'Online Shop for Flinterhoff',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'A retail store for high-quality home furnishings and fashion accessories that wanted to expand its market reach with a modern online shop — to make the special shopping experience tangible digitally as well.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Development of a brand-consistent design system and creation of wireframes in Figma',
              'Setup of an initial WooCommerce shop to test the digital shopping experience',
              'Switch to Shopify to consolidate processes, inventory management, and point of sale in one system',
              'Integration of multi-channel sales: online shop, Google Shopping, social media, newsletter, and brick-and-mortar',
            ],
          },
          { kind: 'subheading', text: 'Outcome' },
          {
            kind: 'paragraph',
            text: 'The online shop was active from August 2023 to December 2024. The connection to Google Shopping and price comparison portals quickly brought new customer access, and the team gained significantly more confidence and joy in operations. Customer satisfaction was reflected in a Trusted Shops rating of 4.67 / 5 stars.',
          },
        ],
      },
      {
        title: 'Corporate Website for Kreishandwerkerschaft Kleve',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'A public-law corporation with a need for clear positioning and a unique, more modern external presentation. They wanted to move away from a system provider that offered simple, outdated website builders for regional craft chambers. (2021)',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Conducting internal and external focus interviews',
              'Workshops to identify benefits and core services',
              'Development and launch of the new website [kh-kleve.de](https://kh-kleve.de)',
            ],
          },
          { kind: 'subheading', text: 'Outcome' },
          {
            kind: 'paragraph',
            text: 'The website serves as the central hub for craft businesses on topics such as tariff information, legal advice, and training organisation. Averaging ≈59,000 monthly visits (2025) with 4,100 craft businesses in the Kleve district. Exclusively 5-star Google reviews since project completion.',
          },
        ],
      },
      {
        title: 'Online Shop for Painter Kassandra Flinterhoff',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'An emerging painter wanted to present her art products, collaborations, and workshops in an online shop — color-coordinated with her works, visually expressive, and functional.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Analysis of her color palette to develop a consistent design system',
              'Selection of suitable typography and vectorisation of the signature as logo',
              'Setup of the Shopify theme, navigation, and templates (products, blog, pages)',
              'Configuration of markets and shipping zones for worldwide shipping; integration of point of sale and Google Shopping',
            ],
          },
          { kind: 'subheading', text: 'Outcome' },
          {
            kind: 'paragraph',
            text: 'A versatile, fast, and multilingual [online shop](https://kassandra.studio) that not only surprises but stands out in the art scene. Thanks to clear structure and easy maintenance, the artist can market her works independently — and continue to focus on what matters: creating.',
          },
        ],
      },
    ],
  },
  {
    slug: 'quality-usability',
    area: 'marketing',
    icon: 'quality-usability',
    name: 'Ensuring the quality and user-friendliness of your website or app',
    claim: 'Build, maintain, and regain trust.',
    description: [
      'I review websites and applications with a business leader’s eye for clarity, consistency, and efficiency. I navigate through the application, evaluate design, user guidance, and presentation across all devices, and assess whether the digital experience truly serves the business model.',
      'I document technical and design weaknesses with precision and formulate well-founded recommendations for optimizing structure, language, and flow.',
      'If desired, I implement these directly in the frontend or train the team to conduct quality control regularly, thoroughly, and efficiently on their own.',
    ],
    playbook: [
      {
        title: 'Evaluating User-Friendliness',
        items: [
          'Analysis of the website or app across different devices (desktop, tablet, smartphone)',
          'Assessment of navigation, readability, and content comprehensibility',
          'Identification of unnecessary clicks and redundant steps',
        ],
      },
      {
        title: 'Ensuring Quality & Consistency',
        items: [
          'Review of UI elements for correct display and functionality',
          'Verification of responsiveness, color contrasts, and text scaling',
          'Review and, if necessary, localization of UI texts (DE/EN)',
        ],
      },
      {
        title: 'Recommendations & Implementation',
        items: [
          'Creation of a clear report with screenshots, justifications, and prioritization',
          'Formulation of concrete suggestions for optimizing design and user guidance',
          'Implementation of the most important adjustments directly in the frontend',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'PacketSafari — Faster Onboarding and More Subscription Conversions',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: '[PacketSafari](https://www.packetsafari.com/) — a network traffic analysis provider — wanted to optimize the discovery process of its web app, so users could test the product faster, the value would become immediately clear, and subscriptions would be completed more quickly.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Redesign of the above-the-fold landing page with clear value communication and a prominent call-to-action.',
              'Redesign of the app UI so users could upload data directly and view the first result in the AI copilot for free.',
              'Integration of a paywall that blocks additional results: the first result demonstrates value immediately, then users can subscribe at a fair price.',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'User numbers and subscription conversions increased significantly. Companies increasingly inquired about a customized enterprise solution, which motivated the client to further develop their product.',
          },
        ],
      },
      {
        title: 'SiteWorks2 — More Precise UI Texts for German Users',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'The founder of [SiteWorks2](https://www.siteworks.io/en) — a planning app for architects and project managers — sought support in optimizing the German localization. Some existing translations were inconsistent or ambiguous in the application context.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Review of the existing German translation file for completeness, comprehensibility, and tone',
              'Verification of UI texts directly in the application to ensure word choice, length, and placement fit the layout',
              'Correction of unclear terms and flagging of adjustments to terms hard-coded in the software',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'The revised German localization resulted in clearer user guidance and a more consistent app appearance. The founder emphasized that the new language quality made the app feel “more professional and trustworthy.”',
          },
        ],
      },
    ],
  },
  {
    slug: 'branding-design-systems',
    area: 'marketing',
    icon: 'branding-design-systems',
    name: 'Creating branding and design systems',
    claim: 'Recognizable features that inspire confidence.',
    description: [
      'I develop brand identities that are clear and sustainable. Identities that companies can proudly present both internally and externally.',
      'Every brand is created through close collaboration: leadership and the team actively participate and are heard. Should a project already exist or a specific designer be commissioned, I can manage the design processes accordingly.',
      'In my process, I combine the strategic thinking of a business leader with creative intuition and technological expertise. I use artificial intelligence strategically to develop variations more quickly during the design phase.',
      'The result is not just a new design, but a shared understanding of what the company stands for.',
    ],
    playbook: [
      {
        title: 'Understanding the Company',
        items: [
          'Interviews with leadership and employees',
          'Analysis of existing communication, products, and design patterns',
          'Target audience and customer feedback analysis to sharpen the brand perspective',
        ],
      },
      {
        title: 'Developing Ideas',
        items: [
          'Branding: at least three variations for brand name and tagline, brand values and tone of voice, positioning and message',
          'Design system: at least three approaches for color palettes, logos, and typography',
          'Mockups for key application examples (website, print, social media) with collaborative feedback rounds',
        ],
      },
      {
        title: 'Implementing the Design',
        items: [
          'Integration of the branding system into all communication channels (website, newsletter, posters, presentations)',
          'Creation of a visual guide with application examples so internal teams and external partners can always design consistently',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'New Brand Identity for Flinterhoff — Für dich & mich',
        blocks: [
          { kind: 'subheading', text: 'Initial Situation' },
          {
            kind: 'paragraph',
            text: 'To support the strategy established in 2022 with a focus on high-quality gifts, there was a need for appropriate branding and a design system for the retail store Flinterhoff.',
          },
          { kind: 'subheading', text: 'Measures' },
          {
            kind: 'bullets',
            items: [
              'Comprehensive analysis of the existing brand and visual identity',
              'Derivation of key elements such as the primary color violet, the color palette and typography',
              'Design of the logo with various variants (favicon, wordmark, word & image mark, logo and tagline)',
              'Formulation of a design guide to ensure a seamless experience across all communication and sales channels',
            ],
          },
          { kind: 'subheading', text: 'Result' },
          {
            kind: 'paragraph',
            text: 'The new design captured the essence of the brand: personal, high-quality, and trustworthy. The team identified with the new identity, and the target audience felt addressed. Open rates of 40–55% and high click-through rates confirmed the relevance of the communication.',
          },
        ],
      },
    ],
  },
]

export default experiencesEn
