// All editable portfolio content lives here. Replace [PLACEHOLDER_*] URLs with real ones.
// Images: public/profile.jpg, public/projects/{terraops,strata,nexport}.png
export const profile = {
  name:'Budiawan Prasojo', program:'Computer Science — Software Engineering', school:'BINUS University', since:'2023',
  statement:'Building software systems for real-world operations.',
  support:'Computer Science student at BINUS University focused on software engineering, data analytics, and industrial digitalization.',
  aim:'Aspiring Industrial Software / Operations Technology Engineer',
  about:['I am a Computer Science — Software Engineering student at BINUS University. My interests span software engineering, industrial software, operations technology, data analytics, operational intelligence, and digital transformation.',
    'I am still a student, building experience through projects, event and technical operations work, and structured learning, with a clear direction toward an industrial technology career.'],
  connect:'Interested in software engineering, data, and technology for real-world operations.',
}
export const education = [{ title:'BINUS University', sub:'Computer Science — Software Engineering', period:'2023 — Present' }]
export const links = {
  cv: '[PLACEHOLDER_CV_URL]', linkedin: '[PLACEHOLDER_LINKEDIN_URL]',
  github: '[PLACEHOLDER_GITHUB_PROFILE_URL]', email: '[PLACEHOLDER_EMAIL_ADDRESS]',
}
export const nav = ['Home','About','Projects','Skills','Experience','Education','Contact']
export const direction = [
  ['Industrial Software','Software for plants, fleets, and sites where the data has physical consequences.'],
  ['Operations Technology','Understanding the equipment, processes, and constraints that software has to respect.'],
  ['Data Analytics','Turning operational records into measurements people can act on.'],
  ['Digital Transformation','Moving operational work from disconnected tools to connected systems.'],
]
export const chain = [
  ['Thunderstorm','Weather event enters the model','Storm'],
  ['Accessibility decreases','Site access and haul routes degrade','Access −'],
  ['Equipment availability decreases','Fewer units can operate safely','Availability −'],
  ['Operational efficiency decreases','Throughput falls below plan','Efficiency −'],
  ['Risk increases','Site risk score rises','Risk +'],
  ['National KPI changes','Roll-up metric reflects all sites','KPI Δ'],
]
// tier: 'featured' | 'selected' | 'additional'. Add a project by appending one object here
// (plus its image in public/projects/). Leave desc/tech empty until confirmed; the UI omits empty fields.
export const projects = [
  { id:'terraops', tier:'featured', name:'TerraOps', sub:'Industrial Operations Intelligence Platform', category:'Operations Intelligence',
    features:['Cause-and-effect simulation','Operational state across multiple sites','Environmental conditions and equipment availability','Risk intelligence and decision support'],
    note:'Conceptual portfolio system. It does not replace or represent any real industrial platform.',
    desc:'An enterprise operations intelligence concept designed to connect operational state, environmental conditions, equipment availability, risk intelligence, and decision support across multiple industrial sites. A conceptual portfolio project driven by a simulation model.',
    tech:['React','Vite','JavaScript','Leaflet','Operational Simulation','Data Visualization'],
    img:'/projects/terraops-dashboard.png', images:['/projects/terraops-site-monitoring.png','/projects/terraops-risk-intelligence.png'], demo:'https://terraops-command-center.vercel.app/', code:'https://github.com/BudiawanPrasojo/terraops-command-center.git' },
  { id:'strata', tier:'selected', name:'STRATA', sub:'Mining Operations Intelligence Platform', category:'Mining Operations',
    features:['Equipment and fleet monitoring','Operational KPIs','Fuel intelligence','Operational visibility'],
    desc:'A mining-oriented operations intelligence platform that brings equipment, fleet, operational KPIs, and fuel intelligence together for operational monitoring and data-driven decision support.',
    tech:['React','Supabase','JavaScript','Data-driven UI'],
    img:'/projects/strata-dashboard.png', images:['/projects/strata-fuel-intelligence.png','/projects/strata-equipment-monitor.png'], demo:'https://strata-operations-platfrom.vercel.app/', code:'https://github.com/BudiawanPrasojo/Strata-operations-platfrom.git' },
  { id:'nexport', tier:'selected', name:'NexPort Nexus', sub:'Smart Port & Logistics Operations Platform', category:'Port & Logistics',
    features:['Fleet monitoring','Container operations','Realtime operational intelligence','Analytics and notifications','Authentication and role management'],
    desc:'A port and logistics operations dashboard covering fleet monitoring, container operations, realtime operational intelligence, analytics, notifications, authentication, and role management.',
    tech:['HTML','CSS','JavaScript','Supabase','Realtime data'],
    img:'/projects/nexport-performance.png', images:['/projects/nexport-ai-insights.png','/projects/nexport-port-map.png','/projects/nexport-vehicle-management.png'], demo:'https://nex-port-nexus.vercel.app/', code:'https://github.com/BudiawanPrasojo/NexPort-Nexus.git' },
  { id:'gnosia', tier:'additional', name:'Gnosia', sub:'Health consultation / disease diagnosis web prototype', category:'Health Software',
    features:[],
    desc:'A web project exploring a health consultation and disease diagnosis experience built on a dataset. It is a software prototype, not a medical product: it has no clinical validation and is not a source of medical advice.',
    tech:['Web application','Dataset-based'],
    img:'/projects/gnosia-home.jpeg', images:[], demo:'[PLACEHOLDER_GNOSIA_URL]', code:'https://github.com/BudiawanPrasojo/Gnosia-AI-Health-Platform.git' },
  { id:'clash-of-bang', tier:'additional', name:'Clash of Bang', sub:'Game / software project', category:'Game / Software',
    features:[],
    desc:'An additional software project that shows the broader range of programming work behind this portfolio.',
    tech:[],
    img:'/projects/clash-of-bang-home.png', images:['/projects/clash-of-bang-gallery.png'], demo:'https://clash-of-bang.vercel.app/', code:'https://github.com/BudiawanPrasojo/Clash-Of-Bang.git' },
]
export const approach = [
  ['Problem','Start from an operational question, not a screen.'],
  ['Data','Decide which signals exist and how they relate.'],
  ['System','Model state and data flow before building UI.'],
  ['Business logic','Encode the rules that link cause to effect.'],
  ['Insight','Surface what changed and why.'],
  ['Decision','Support the action someone has to take.'],
]
export const skills = {
  Programming:['Python','JavaScript','Java','C++','SQL'],
  'Data & Analytics':['Excel','Pandas','Data Analytics','Data Visualization'],
  'Web & Software':['React','Vite','HTML','CSS','Supabase'],
  Tools:['Git','GitHub','VS Code'],
}


// Career pathway shown in About. A direction, not a list of roles held.
export const pathway = ['Computer Science','Software Engineering','Data & Analytics','Operational Systems','Industrial Technology','Digital Transformation']
// Curated from LinkedIn. detail/period/summary are optional; empty fields are omitted from the UI.
export const experience = [
  { org:'HIMTI', period:'', summary:'Technical operations and event-support roles across workshops and events.',
    roles:[{title:'Technical Operations Coordinator, Workshop'},{title:'Technical Support, Entry & Registration Operations'},{title:'Makrab 2026, Registration & Fundraising Committee'}] },
  { org:'HISHOT 2026', period:'', summary:'', roles:[{title:'Event Operations Staff'}] },
  { org:'TECHONO 2026', period:'', summary:'', roles:[{title:'Event Division Staff'}] },
  { org:'AIESEC Future Leaders', period:'', summary:'Leadership development program.', roles:[] },
]
// issuer/date/skills/link optional. Add them when confirmed.
export const certifications = [
  { name:'IBM Introduction to Data Analytics', issuer:'IBM', date:'', skills:'', link:'' },
  { name:'IBM Excel Basics for Data Analysis', issuer:'IBM', date:'', skills:'', link:'' },
  { name:'IBM Python for Data Science, AI & Development', issuer:'IBM', date:'', skills:'', link:'' },
  { name:'Python Project for Data Science', issuer:'', date:'', skills:'', link:'' },
  { name:'Certified Database Course', issuer:'DevHive', date:'', skills:'', link:'' },
  { name:'Data Analytics', issuer:'RevoU', date:'', skills:'', link:'' },
  { name:'English Independent User (CEFR B2.2)', issuer:'', date:'', skills:'', link:'' },
]
