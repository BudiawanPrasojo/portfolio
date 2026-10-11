// All editable portfolio content lives here.
//
// Files you may want to replace later:
//   public/profile.jpg                      profile photo (4:5 portrait works best)
//   public/cv/Budiawan-Prasojo-CV.pdf       downloadable CV (path is set in `links.cv`)
//   public/projects/*.webp                  project screenshots
//
// Any URL that starts with "[" (for example "[PLACEHOLDER_GNOSIA_URL]") or is empty is treated as
// "not available yet": the button is hidden instead of linking to a dead page.

export const profile = {
  name: 'Budiawan Prasojo',
  program: 'Computer Science — Software Engineering',
  school: 'BINUS University',
  location: 'Bekasi Timur, West Java, Indonesia',
  seeking: 'Software Engineering, Data Engineering, or Data Analyst internship',
  statement: 'Building software systems for real-world operations.',
  support:
    'Computer Science student at BINUS University focused on software engineering, data analytics, and industrial digitalization.',
  aim: 'Aspiring Industrial Software / Operations Technology Engineer',
  about: [
    'I am a Computer Science — Software Engineering student at BINUS University. My interests span software engineering, industrial software, operations technology, data analytics, operational intelligence, and digital transformation.',
    'I am still a student, building experience through projects, event and technical operations work, and structured learning, with a clear direction toward an industrial technology career.',
  ],
  connect: 'Interested in software engineering, data, and technology for real-world operations.',
}

// Education period follows the CV (2024 – 2028). The earlier site text said "2023 — Present".
export const education = [
  { title: 'BINUS University', sub: 'Bachelor of Computer Science, Software Engineering', period: '2024 — 2028' },
  { title: 'SMA KORPRI Bekasi', sub: 'Senior high school', period: '' },
]

export const links = {
  cv: '/cv/Budiawan-Prasojo-CV.pdf', // file lives in public/cv/
  linkedin: 'https://www.linkedin.com/in/budiawan-prasojo-48a080379',
  github: 'https://github.com/BudiawanPrasojo',
  email: 'budiawan234111@gmail.com',
}

export const nav = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export const direction = [
  ['Industrial Software', 'Software for plants, fleets, and sites where the data has physical consequences.'],
  ['Operations Technology', 'Understanding the equipment, processes, and constraints that software has to respect.'],
  ['Data Analytics', 'Turning operational records into measurements people can act on.'],
  ['Digital Transformation', 'Moving operational work from disconnected tools to connected systems.'],
]

export const chain = [
  ['Thunderstorm', 'Weather event enters the model', 'Storm'],
  ['Accessibility decreases', 'Site access and haul routes degrade', 'Access −'],
  ['Equipment availability decreases', 'Fewer units can operate safely', 'Availability −'],
  ['Operational efficiency decreases', 'Throughput falls below plan', 'Efficiency −'],
  ['Risk increases', 'Site risk score rises', 'Risk +'],
  ['National KPI changes', 'Roll-up metric reflects all sites', 'KPI Δ'],
]

// tier: 'featured' | 'additional'. Add a project by appending one object here (plus images in public/projects/).
// Optional fields are omitted from the UI when empty: period, context, features, tech, note, images, demo.
// `features` shows the first four on the card and the full list in the details view.
export const projects = [
  {
    id: 'terraops', tier: 'featured', flagship: true, name: 'TerraOps', sub: 'Industrial Operations Intelligence Platform',
    category: 'Operations Intelligence',
    features: ['Cause-and-effect simulation', 'Operational state across multiple sites', 'Environmental conditions and equipment availability', 'Risk intelligence and decision support'],
    note: 'Conceptual portfolio system. It does not replace or represent any real industrial platform.',
    desc: 'An enterprise operations intelligence concept designed to connect operational state, environmental conditions, equipment availability, risk intelligence, and decision support across multiple industrial sites. A conceptual portfolio project driven by a simulation model.',
    tech: ['React', 'Vite', 'JavaScript', 'Leaflet', 'Operational Simulation', 'Data Visualization'],
    img: '/projects/terraops-dashboard.webp',
    images: ['/projects/terraops-site-monitoring.webp', '/projects/terraops-risk-intelligence.webp'],
    demo: 'https://terraops-command-center.vercel.app/',
    code: 'https://github.com/BudiawanPrasojo/terraops-command-center.git',
  },
  {
    id: 'strata', tier: 'featured', name: 'STRATA', sub: 'Mining Operations Intelligence Platform',
    category: 'Mining Operations', period: 'May 2026 – Jul 2026',
    features: ['Equipment and fleet monitoring', 'Operational KPIs', 'Fuel intelligence', 'Operational visibility', 'Tactical mapping', 'Shift handover logs', 'Safety monitoring'],
    desc: 'A mining-oriented operations intelligence platform that brings equipment, fleet, operational KPIs, and fuel intelligence together for operational monitoring and data-driven decision support.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Chart.js', 'Supabase', 'JavaScript', 'Data-driven UI'],
    img: '/projects/strata-dashboard.webp',
    images: ['/projects/strata-fuel-intelligence.webp', '/projects/strata-equipment-monitor.webp'],
    demo: 'https://strata-operations-platfrom.vercel.app/',
    code: 'https://github.com/BudiawanPrasojo/Strata-operations-platfrom.git',
  },
  {
    // Source of truth: the GitHub repository (README, notebook outputs, and the Excel workbook).
    // Every figure below was reproduced from the repo data; none is estimated.
    id: 'mining-block', tier: 'featured', name: 'Mining Block Profitability Analysis',
    sub: 'Block profitability and cut-off grade analysis with machine learning',
    category: 'Mining Analytics', period: 'Feb 2026', visual: 'analysis',
    desc: 'An end-to-end analysis of a 75,000-block mining block model. Python separates profitable blocks from waste with Logistic Regression and forecasts block profit with Linear Regression, while Excel pivot tables compare average profit by rock type and ore-grade band to examine cut-off grade.',
    features: [
      'Block feasibility classification with Logistic Regression',
      'Profit forecasting with Linear Regression, evaluated with MAE, RMSE, and R²',
      'Excel pivot analysis by rock type and ore-grade band',
      'Actual versus predicted profit plot',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Excel Pivot Tables', 'Google Colab'],
    metrics: [
      ['75,000', 'blocks in the dataset'],
      ['0.866', 'R² of profit regression'],
      ['¥80,258', 'mean absolute error'],
      ['¥100,550', 'root mean squared error'],
    ],
    metricsNote: 'Regression scores are from the notebook output: 80/20 train-test split (15,000 test blocks), features X, Y, Z, ore grade, and tonnage.',
    tables: [
      { title: 'Average profit per block by rock type', head: ['Rock type', 'Blocks', 'Avg profit (¥)'],
        rows: [['Magnetite', '29,983', '443,026'], ['Hematite', '29,995', '441,489'], ['Waste', '15,022', '−158,122']] },
      { title: 'Average profit per block by ore-grade band', head: ['Ore grade', 'Blocks', 'Avg profit (¥)'],
        rows: [['Below 40%', '15,022', '−158,122'], ['50 – 60%', '39,822', '441,748'], ['Above 60%', '20,156', '443,265']] },
    ],
    tablesNote: 'From the repository workbook (mining_block_model.xlsx). No block in the dataset has a grade between 0% and 50%: waste sits at 0% and profitable blocks start at 50%.',
    note: 'The Logistic Regression classifier scored 100% on the 15,000-block test set because ore grade fully separates the two classes in this dataset, so that score reflects the data rather than a hard prediction problem.',
    next: ['Try Random Forest and XGBoost', 'Add cross-validation', 'Build an interactive dashboard'],
    img: '/projects/mining-actual-vs-predicted.webp', images: [], demo: '',
    code: 'https://github.com/BudiawanPrasojo/Mining_Block_Profitability_Analysis.git',
  },
  {
    id: 'nexport', tier: 'featured', name: 'NexPort Nexus', sub: 'Smart Port & Logistics Operations Platform',
    category: 'Port & Logistics', period: 'May 2026 – Jun 2026',
    features: ['Fleet monitoring', 'Container operations', 'Realtime operational intelligence', 'Analytics and notifications', 'Authentication and role management', 'Shipment tracking', 'Congestion visualization', 'Vehicle and driver tracking'],
    desc: 'A port and logistics operations dashboard covering fleet monitoring, container operations, realtime operational intelligence, analytics, notifications, authentication, and role management.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'Supabase', 'Realtime data'],
    img: '/projects/nexport-performance.webp',
    images: ['/projects/nexport-ai-insights.webp', '/projects/nexport-port-map.webp', '/projects/nexport-vehicle-management.webp'],
    demo: 'https://nex-port-nexus.vercel.app/',
    code: 'https://github.com/BudiawanPrasojo/NexPort-Nexus.git',
  },
  {
    id: 'gnosia', tier: 'additional', name: 'Gnosia', sub: 'Health consultation / disease diagnosis web prototype',
    category: 'Health Software', period: 'Apr 2026 – Jun 2026', context: 'BINUS University',
    features: ['Responsive glassmorphism interface', 'Confidence score indicators for model output', 'Feature importance charts'],
    desc: 'A web project exploring a health consultation and disease diagnosis experience built on a dataset. It is a software prototype, not a medical product: it has no clinical validation and is not a source of medical advice.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Web application', 'Dataset-based'],
    img: '/projects/gnosia-home.webp', images: [], demo: '[PLACEHOLDER_GNOSIA_URL]',
    code: 'https://github.com/BudiawanPrasojo/Gnosia-AI-Health-Platform.git',
  },
  {
    id: 'clash-of-bang', tier: 'additional', name: 'Clash of Bang', sub: 'Game / software project',
    category: 'Game / Software', period: 'Mar 2026 – May 2026', context: 'BINUS University',
    features: ['Troop showcase', 'Gallery', 'Registration form', 'Responsive navigation', 'UI designed in Figma'],
    desc: 'An additional software project that shows the broader range of programming work behind this portfolio.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    img: '/projects/clash-of-bang-home.webp', images: ['/projects/clash-of-bang-gallery.webp'],
    demo: 'https://clash-of-bang.vercel.app/',
    code: 'https://github.com/BudiawanPrasojo/Clash-Of-Bang.git',
  },
]

export const approach = [
  ['Problem', 'Start from an operational question, not a screen.'],
  ['Data', 'Decide which signals exist and how they relate.'],
  ['System', 'Model state and data flow before building UI.'],
  ['Business logic', 'Encode the rules that link cause to effect.'],
  ['Insight', 'Surface what changed and why.'],
  ['Decision', 'Support the action someone has to take.'],
]

// `used` names the projects that demonstrate each group (ids from `projects`).
export const skills = [
  { group: 'Programming', items: ['JavaScript (ES6+)', 'Python', 'SQL', 'Java', 'C++'], used: ['terraops', 'mining-block'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Chart.js', 'HTML5', 'CSS3', 'Responsive Web Design'], used: ['terraops', 'strata', 'nexport'] },
  { group: 'Backend & Database', items: ['Supabase', 'PostgreSQL', 'REST API integration', 'Authentication & Role Management'], used: ['strata', 'nexport'] },
  { group: 'Data Analytics & ML', items: ['Exploratory Data Analysis', 'Logistic Regression', 'Linear Regression', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Data Visualization', 'Pivot Tables', 'Microsoft Excel'], used: ['mining-block'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'Figma', 'VS Code'], used: ['strata', 'nexport', 'clash-of-bang'] },
]

// Career pathway shown in About. A direction, not a list of roles held.
export const pathway = ['Computer Science', 'Software Engineering', 'Data & Analytics', 'Operational Systems', 'Industrial Technology', 'Digital Transformation']

// Student organisation and program activities. period/type/detail are optional.
export const experience = [
  {
    org: 'HIMTI BINUS University',
    summary: 'Technical operations and event-support roles across workshops and events.',
    roles: [
      { title: 'Event Division Staff (Rundown Subdivision), TECHNO 2026', period: 'May 2026 — Present',
        detail: 'Authored event rundowns covering both ideal and contingency scenarios for a large-scale university event, coordinating across multiple teams.' },
      { title: 'Event Operations Staff, HISHOT 2026', period: 'Mar 2026 — Present', type: 'Part-time',
        detail: 'Supported technical operations and logistics for seminars and workshops, ensuring smooth on-the-ground execution.' },
      { title: 'Registration & Fundraising Committee Staff, HIMTI Makrab 2026', period: 'Mar 2026 — May 2026',
        detail: 'Coordinated participant registration and payment tracking end-to-end under deadline pressure.' },
      { title: 'Technical Support, Entry & Registration Operations (HIMTI KIT | HILET 2026)', period: 'Dec 2025', type: 'Part-time',
        detail: 'Managed and maintained participant registration data using Google Forms and Google Sheets.' },
      { title: 'Technical Operations Coordinator, Workshop' },
    ],
  },
  {
    org: 'AIESEC',
    summary: 'Leadership development program.',
    roles: [
      { title: 'Leadership Development Delegate, AIESEC Future Leader', period: 'Oct 2025 — Dec 2025',
        detail: 'Completed a 3-month youth leadership development program focused on leadership, teamwork, and cross-cultural collaboration.' },
    ],
  },
]

// issuer/date/link optional. `link` becomes a clickable title when set.
export const certifications = [
  { group: 'Data & software', name: 'Python Project for Data Science', issuer: 'Coursera / IBM', date: 'Feb 2026', link: '' },
  { group: 'Data & software', name: 'Python for Data Science, AI & Development', issuer: 'Coursera / IBM', date: 'Feb 2026', link: '' },
  { group: 'Data & software', name: 'Excel Visualization (Data Visualization, Pivot Tables)', issuer: 'Coursera / IBM', date: 'Feb 2026', link: '' },
  { group: 'Data & software', name: 'Excel Basics for Data Analysis', issuer: 'Coursera / IBM', date: 'Oct 2025', link: '' },
  { group: 'Data & software', name: 'Introduction to Data Analytics', issuer: 'Coursera / IBM', date: 'Aug 2025', link: '' },
  { group: 'Data & software', name: 'Certified Database Course', issuer: 'DevHive Bootcamp', date: 'Aug 2025', link: '' },
  { group: 'Data & software', name: 'Mini Course: Data Analytics', issuer: 'RevoU', date: 'Aug 2025', link: '' },
  { group: 'Leadership', name: 'HILET 2026: Interstellar Leadership Mission', issuer: 'HIMTI BINUS University', date: 'Dec 2025', link: '' },
  { group: 'Leadership', name: 'AIESEC Future Leaders (AFL), Delegate', issuer: 'AIESEC in Indonesia', date: 'Oct 2025', link: '' },
  { group: 'Language', name: 'English Independent User (CEFR B2.2)', issuer: '', date: '', link: '' },
]
