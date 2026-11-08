export const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: "Who It's For", href: '#audience' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
];

export const heroStats = [
  {
    id: 'reported',
    label: 'Reported Issues',
    value: '1,428',
    delta: '+42 this week',
    tone: 'primary',
    description: 'Active logs across 12 municipal wards',
  },
  {
    id: 'inspection',
    label: 'Awaiting Inspection',
    value: '314',
    delta: '86 high priority',
    tone: 'amber',
    description: 'Queued for field engineer verification',
  },
  {
    id: 'maintenance',
    label: 'Under Maintenance',
    value: '192',
    delta: '14 crews active',
    tone: 'electric',
    description: 'Assigned to public works & contractors',
  },
  {
    id: 'resolved',
    label: 'Resolved Reports',
    value: '922',
    delta: '64.5% resolution rate',
    tone: 'teal',
    description: 'Verified with post-work photo log',
  },
];

export const heroMapMarkers = [
  {
    id: 'CS-2049',
    category: 'Road damage',
    type: 'road',
    title: 'Deep carriageway pothole cluster',
    location: 'Sample Location — Sector 4 Arterial Rd',
    coordinates: '06°27′14″N 03°23′41″E',
    status: 'Awaiting review',
    confidence: '94% visual match',
    timestamp: '14 mins ago',
    x: 44,
    y: 48,
    priority: 'High Priority',
  },
  {
    id: 'CS-2044',
    category: 'Blocked drainage',
    type: 'drainage',
    title: 'Silt & debris obstructing culvert',
    location: 'Sample Location — Central Market Canal',
    coordinates: '06°26′52″N 03°24′12″E',
    status: 'Awaiting inspection',
    confidence: '91% visual match',
    timestamp: '1 hr ago',
    x: 68,
    y: 34,
    priority: 'Priority Review',
  },
  {
    id: 'CS-2038',
    category: 'Streetlight outage',
    type: 'streetlight',
    title: '3 consecutive corridor luminaires dark',
    location: 'Sample Location — Ring Road Flyover N',
    coordinates: '06°28′03″N 03°22′19″E',
    status: 'Under maintenance',
    confidence: '89% visual match',
    timestamp: '3 hrs ago',
    x: 28,
    y: 29,
    priority: 'Scheduled',
  },
  {
    id: 'CS-2031',
    category: 'Waste accumulation',
    type: 'waste',
    title: 'Roadside overflow near transit stop',
    location: 'Sample Location — East Terminal Junction',
    coordinates: '06°26′18″N 03°25′04″E',
    status: 'Awaiting inspection',
    confidence: '96% visual match',
    timestamp: '5 hrs ago',
    x: 74,
    y: 66,
    priority: 'Routine',
  },
  {
    id: 'CS-2025',
    category: 'Road damage',
    type: 'road',
    title: 'Asphalt edge subsidence & cracking',
    location: 'Sample Location — Industrial Link Ave',
    coordinates: '06°25′49″N 03°21′55″E',
    status: 'Resolved',
    confidence: '92% visual match',
    timestamp: '1 day ago',
    x: 24,
    y: 72,
    priority: 'Verified',
  },
];

export const problemItems = [
  {
    number: '01',
    title: 'Problems Go Unnoticed',
    description:
      'Small infrastructure issues can develop into larger problems before they receive attention.',
    metricLabel: 'Observation Gap',
    metricDetail: 'Surface defects often compound across rainy seasons before formal logging.',
    iconName: 'EyeOff',
  },
  {
    number: '02',
    title: 'Fragmented Reporting',
    description:
      'Reports may arrive through phone calls, paper records, social media, or separate complaint systems.',
    metricLabel: 'Channel Silos',
    metricDetail: 'Unstructured complaints lack standardized geolocation or visual evidence.',
    iconName: 'Split',
  },
  {
    number: '03',
    title: 'Limited Infrastructure Visibility',
    description:
      'Local authorities may lack a unified view of reported problems, their locations, and their current status.',
    metricLabel: 'Spatial Blindspots',
    metricDetail: 'Without unified mapping, recurring neighborhood clusters remain hidden.',
    iconName: 'MapPinOff',
  },
  {
    number: '04',
    title: 'Reactive Maintenance',
    description:
      'Without reliable historical information and prioritization, maintenance teams can spend resources responding to emergencies instead of planning ahead.',
    metricLabel: 'Operational Drag',
    metricDetail: 'Ad-hoc dispatching increases field travel time and emergency repair costs.',
    iconName: 'AlertTriangle',
  },
];

export const workflowStages = [
  {
    number: '01',
    stage: 'Report',
    title: 'Structured Field & Citizen Capture',
    description:
      'Citizens and authorized field personnel submit infrastructure reports using photographs, descriptions, and location information.',
    journeyStep: '1. Photograph submitted & 2. Location identified',
    statusBadge: 'INGESTED · GEO-TAGGED',
    sampleData: {
      reportId: 'REP-2026-0892',
      stepTitle: 'Photograph Submitted & Location Identified',
      timestamp: '09:14 UTC · GPS Lock (±3.2m)',
      location: 'Sample Corridor — Ward 07 Arterial Crossroad',
      coordinates: 'Lat 6.4541° N, Lon 3.3947° E',
      details: 'Citizen mobile submission with high-resolution street-level photograph and automatic EXIF coordinate extraction.',
      checkItems: [
        'Original image hash recorded for audit trail',
        'Administrative ward & road segment matched',
        'Timestamp & reporter channel logged',
      ],
    },
  },
  {
    number: '02',
    stage: 'Analyze',
    title: 'AI-Assisted Triage & Deduplication',
    description:
      'AI assists with categorizing reports, analyzing submitted images, identifying possible duplicates, and organizing relevant information.',
    journeyStep: '3. Issue classified',
    statusBadge: 'AI CLASSIFIED · DUPLICATE CHECKED',
    sampleData: {
      reportId: 'REP-2026-0892',
      stepTitle: 'Visual Assessment & Duplicate Clustering',
      timestamp: '09:14 UTC · +1.8s Processing',
      location: 'Cluster #14 — Ward 07 Arterial Crossroad',
      coordinates: 'Merged with 2 nearby observations (within 18m)',
      details: 'Vision model identifies visible asphalt surface failure and cross-references active reports within a 25-meter radius.',
      checkItems: [
        'Primary classification: Road Surface Damage',
        'Secondary flag: Roadside drainage edge wear',
        'Linked 2 duplicate reports into unified incident #INC-409',
      ],
    },
  },
  {
    number: '03',
    stage: 'Prioritize',
    title: 'Context-Aware Operational Queuing',
    description:
      'Reports are organized by category, location, severity indicators, and operational review requirements to help teams decide what needs attention first.',
    journeyStep: '4. Inspection assigned',
    statusBadge: 'QUEUED FOR ENGINEERING REVIEW',
    sampleData: {
      reportId: 'INC-409 (3 Linked Reports)',
      stepTitle: 'Priority Scoring & Engineering Dispatch',
      timestamp: '10:02 UTC · Reviewed by Duty Engineer',
      location: 'Primary Transit Corridor · High Traffic Proximity',
      coordinates: 'Assigned to: District 04 Civil Inspection Unit',
      details: 'Combined severity indicators and corridor criticality surface the report for human review and physical inspection scheduling.',
      checkItems: [
        'Severity indicator: High (Arterial transit route)',
        'Human verification required prior to works order',
        'Inspection assigned to Field Team B',
      ],
    },
  },
  {
    number: '04',
    stage: 'Resolve & Monitor',
    title: 'Verified Maintenance & Longitudinal Tracking',
    description:
      'Authorities assign inspections or maintenance tasks, update report statuses, and track the progress of reported issues.',
    journeyStep: '5. Resolution documented',
    statusBadge: 'RESOLVED · VERIFIED ON SITE',
    sampleData: {
      reportId: 'WO-8812 / INC-409',
      stepTitle: 'Maintenance Completed & Outcome Logged',
      timestamp: 'Day 3 · 16:40 UTC · Field Sign-Off',
      location: 'Ward 07 Arterial Crossroad · Segment B4',
      coordinates: 'Verified by Inspector K. Mensah',
      details: 'Maintenance crew completes asphalt patching and uploads post-repair verification imagery to close the incident loop.',
      checkItems: [
        'Before & after visual documentation archived',
        'Status updated from Under Maintenance to Resolved',
        'Location scheduled for 90-day condition monitoring',
      ],
    },
  },
];

export const capabilitiesList = [
  {
    number: '01',
    title: 'AI-Powered Image Assessment',
    description:
      'Analyze submitted infrastructure photographs to help identify and classify visible issues such as road damage, blocked drainage, damaged streetlights, and waste accumulation.',
    iconName: 'ScanEye',
    span: 'large',
    previewType: 'vision',
  },
  {
    number: '02',
    title: 'Geospatial Issue Mapping',
    description:
      'Display reported infrastructure problems on an interactive map, making it easier to understand where issues are concentrated.',
    iconName: 'Map',
    span: 'large',
    previewType: 'map',
  },
  {
    number: '03',
    title: 'Intelligent Report Classification',
    description:
      'Automatically organize incoming reports into relevant infrastructure categories and help identify potential duplicate submissions.',
    iconName: 'Layers',
    span: 'small',
    previewType: 'classification',
  },
  {
    number: '04',
    title: 'Infrastructure Priority Management',
    description:
      'Help authorities organize reports using configurable priority indicators, location context, and human review.',
    iconName: 'SlidersHorizontal',
    span: 'small',
    previewType: 'priority',
  },
  {
    number: '05',
    title: 'Maintenance Tracking',
    description:
      'Track infrastructure reports from submission through inspection, assignment, maintenance, and resolution.',
    iconName: 'ClipboardCheck',
    span: 'large',
    previewType: 'dashboard',
  },
  {
    number: '06',
    title: 'City Infrastructure Insights',
    description:
      'Analyze accumulated reports to identify recurring problems, infrastructure hotspots, and areas that may require additional inspection.',
    iconName: 'BarChart3',
    span: 'small',
    previewType: 'insights',
  },
];

export const intelligenceLoopStages = [
  {
    number: '01',
    title: 'Observe',
    description:
      'Collect infrastructure observations from citizens, field teams, and authorized sources.',
    position: 'top',
    metric: 'Multi-channel geo-tagged intake',
  },
  {
    number: '02',
    title: 'Understand',
    description:
      'Use AI to organize reports, classify visible problems, and identify geographic patterns.',
    position: 'right',
    metric: 'Automated clustering & classification',
  },
  {
    number: '03',
    title: 'Act',
    description:
      'Support inspection planning, maintenance prioritization, and assignment of responsible teams.',
    position: 'bottom',
    metric: 'Coordinated field dispatch workflows',
  },
  {
    number: '04',
    title: 'Learn',
    description:
      'Record inspection findings and maintenance outcomes to improve the quality of future infrastructure assessments.',
    position: 'left',
    metric: 'Verified historical condition records',
  },
];

export const audiencesList = [
  {
    id: 'local-gov',
    title: 'Local Governments',
    roleTag: 'MUNICIPAL EXECUTIVE & ADMINISTRATION',
    description:
      'Gain a more organized view of infrastructure issues across communities and administrative areas.',
    iconName: 'Building2',
    featured: true,
    operationalFocus: 'Ward-by-ward visibility, resource allocation, and transparent service delivery tracking.',
  },
  {
    id: 'maintenance-teams',
    title: 'Municipal Maintenance Teams',
    roleTag: 'FIELD OPERATIONS & PUBLIC WORKS',
    description:
      'Manage reported issues, inspections, assignments, and maintenance progress.',
    iconName: 'Wrench',
    featured: true,
    operationalFocus: 'Structured work queues, precise GPS locations, and field inspection sign-offs.',
  },
  {
    id: 'urban-planning',
    title: 'Urban Planning Agencies',
    roleTag: 'CAPITAL PLANNING & RESILIENCE',
    description:
      'Use accumulated infrastructure observations to understand recurring problems and areas requiring attention.',
    iconName: 'Compass',
    featured: false,
    operationalFocus: 'Longitudinal spatial patterns to inform drainage, corridor, and streetscape upgrades.',
  },
  {
    id: 'service-providers',
    title: 'Infrastructure Service Providers',
    roleTag: 'CONTRACTORS & UTILITY OPERATORS',
    description:
      'Coordinate maintenance activities and document work carried out across assigned locations.',
    iconName: 'HardHat',
    featured: false,
    operationalFocus: 'Clear task handoffs, SLA status tracking, and photographic proof of completion.',
  },
  {
    id: 'community-orgs',
    title: 'Community Organizations',
    roleTag: 'CIVIC ASSOCIATIONS & ADVOCACY',
    description:
      'Help communities document infrastructure challenges and communicate them through structured reporting channels.',
    iconName: 'Users',
    featured: false,
    operationalFocus: 'Evidence-backed neighborhood reporting that translates directly into municipal categories.',
  },
  {
    id: 'citizens',
    title: 'Citizens',
    roleTag: 'PUBLIC REPORTING INTERFACE',
    description:
      'Provide accessible ways to report visible infrastructure problems and follow the status of submitted reports where supported.',
    iconName: 'Smartphone',
    featured: false,
    operationalFocus: 'Mobile-friendly photo and location submission without complex technical forms.',
  },
];

export const cityIntelligenceAreas = [
  {
    id: 'hotspots',
    title: 'Infrastructure Hotspot Detection',
    description:
      'Identify locations with recurring reports or concentrations of similar infrastructure problems.',
    iconName: 'Radar',
  },
  {
    id: 'trends',
    title: 'Infrastructure Condition Trends',
    description:
      'Monitor how reported infrastructure conditions change over time using available observations and inspection records.',
    iconName: 'TrendingUp',
  },
  {
    id: 'planning',
    title: 'Maintenance Planning Insights',
    description:
      'Help authorities understand where inspection and maintenance resources may be needed, using historical patterns and operational context.',
    iconName: 'CalendarClock',
  },
];

export const trustPrinciples = [
  {
    number: '01',
    title: 'Human Verification',
    description:
      'AI-generated classifications and priority indicators should be reviewed by authorized personnel. Physical inspections remain necessary where appropriate.',
    iconName: 'UserCheck',
    protocolTag: 'HUMAN-IN-THE-LOOP GATE',
  },
  {
    number: '02',
    title: 'Transparent Reporting',
    description:
      'Reports should retain their original descriptions, images, timestamps, and locations so decisions can be traced back to their source.',
    iconName: 'FileSearch',
    protocolTag: 'IMMUTABLE SOURCE RECORD',
  },
  {
    number: '03',
    title: 'Responsible Data Collection',
    description:
      'Collect only the information needed for infrastructure reporting and protect personal information submitted through reporting channels.',
    iconName: 'ShieldCheck',
    protocolTag: 'DATA MINIMIZATION',
  },
  {
    number: '04',
    title: 'Accountable Resolution',
    description:
      'Track the status of reports, inspection decisions, assigned responsibilities, and documented outcomes.',
    iconName: 'CheckCircle2',
    protocolTag: 'VERIFIED AUDIT TRAIL',
  },
];

export const pilotAreas = [
  'Road surface defect & pothole mapping across primary transit corridors',
  'Stormwater drainage & culvert blockage reporting ahead of seasonal rainfall',
  'Public streetlighting outage tracking and corridor maintenance coordination',
  'Illegal dumping & solid waste accumulation monitoring across municipal districts',
  'Field inspector mobile reporting and maintenance contractor verification workflows',
];

export const faqItems = [
  {
    id: 'faq-1',
    question: 'What is CivicScan?',
    answer:
      'CivicScan is an AI-powered civic infrastructure platform designed to help cities identify, map, organize, and monitor infrastructure problems.',
  },
  {
    id: 'faq-2',
    question: 'How does the AI work?',
    answer:
      'AI can help analyze submitted photographs, classify infrastructure reports, identify possible duplicate reports, and organize observations for review.',
  },
  {
    id: 'faq-3',
    question: 'Can citizens report infrastructure problems?',
    answer:
      'The proposed platform includes citizen reporting through a mobile-friendly interface. The exact reporting channels will depend on the pilot deployment.',
  },
  {
    id: 'faq-4',
    question: 'Does CivicScan automatically repair infrastructure?',
    answer:
      'No. CivicScan helps organize and coordinate reporting, inspection, and maintenance workflows. Physical repairs remain the responsibility of the appropriate authorities or service providers.',
  },
  {
    id: 'faq-5',
    question: 'Can it identify potholes and blocked drainage?',
    answer:
      'These are examples of visible infrastructure issues the platform could be designed to classify. The accuracy of each category must be evaluated using real local images and field verification.',
  },
  {
    id: 'faq-6',
    question: 'Does CivicScan replace municipal infrastructure management systems?',
    answer:
      "The initial goal is to complement existing reporting and maintenance workflows. Integration options will depend on the organization's existing systems.",
  },
  {
    id: 'faq-7',
    question: 'Can our organization participate in a pilot?',
    answer:
      'Yes. Organizations interested in evaluating CivicScan can register their interest through the pilot programme form.',
  },
];

import damilolaImg from '../assets/images/team/damilola-olatunji.jpg';
import kelechiImg from '../assets/images/team/kelechi-nwachukwu.jpg';
import folashadeImg from '../assets/images/team/folashade-balogun.jpg';
import ibrahimImg from '../assets/images/team/ibrahim-sanusi.jpg';
import nnekaImg from '../assets/images/team/nneka-eze.jpg';
import tundeImg from '../assets/images/team/tunde-adebayo.jpg';

import babatundeImg from '../assets/images/testimonials/babatunde-adeleke.jpg';
import aminaImg from '../assets/images/testimonials/amina-bello.jpg';
import chineduImg from '../assets/images/testimonials/chinedu-okonkwo.jpg';

export const testimonialsList = [
  {
    id: 'test-1',
    author: 'Engr. Babatunde Adeleke, FNSE',
    role: 'Director of Civil Infrastructure Maintenance',
    organization: 'Lagos State Infrastructure Agency',
    location: 'Lagos, Nigeria',
    tag: 'MUNICIPAL ENGINEERING',
    avatarInitials: 'BA',
    image: babatundeImg,
    quote:
      'Before CivicScan, defect reporting arrived scattered through unverified social posts and informal calls. Having geo-tagged visual evidence and automated duplicate clustering cuts our inspection triage time in half.',
  },
  {
    id: 'test-2',
    author: 'Dr. Amina Bello',
    role: 'Senior Urban Planning & Policy Advisor',
    organization: 'Abuja Metropolitan Advisory Council',
    location: 'Abuja, FCT',
    tag: 'URBAN PLANNING',
    avatarInitials: 'AB',
    image: aminaImg,
    quote:
      'The spatial hotspot detection allows our municipal maintenance units to address drainage siltation and road pavement wear before the rainy season triggers severe structural failures and costly reconstruction.',
  },
  {
    id: 'test-3',
    author: 'Chinedu Okonkwo',
    role: 'Operations & Maintenance Lead',
    organization: 'Niger Delta Public Works Contractors Consortium',
    location: 'Port Harcourt, Rivers',
    tag: 'FIELD OPERATIONS',
    avatarInitials: 'CO',
    image: chineduImg,
    quote:
      'CivicScan closes the accountability loop between community reports and field contractors. Crews can upload geo-verified post-repair photographs that provide an auditable record of completed work.',
  },
];

export const teamMembers = [
  {
    id: 'damilola',
    name: 'Engr. Damilola Olatunji',
    role: 'Co-Founder & Chief Executive Officer',
    credentials: 'B.Eng Civil Engineering (Unilag) · MSc Urban Systems (Imperial)',
    bio: '12+ years directing municipal infrastructure evaluations, public works contracts, and urban asset rehabilitation across Lagos and southwestern Nigeria.',
    location: 'Lagos, Nigeria',
    avatarInitials: 'DO',
    image: damilolaImg,
    tags: ['Urban Governance', 'Infrastructure Policy', 'Civil Engineering'],
  },
  {
    id: 'kelechi',
    name: 'Kelechi Nwachukwu',
    role: 'Co-Founder & Chief Technology Officer',
    credentials: 'B.Sc Computer Science (UNN) · Ex-Senior Computer Vision Lead',
    bio: 'Machine learning architect specializing in edge computer vision models, automated defect localization, and spatial deduplication for African road conditions.',
    location: 'Enugu / Lagos, Nigeria',
    avatarInitials: 'KN',
    image: kelechiImg,
    tags: ['Computer Vision', 'Deep Learning', 'Distributed Systems'],
  },
  {
    id: 'folashade',
    name: 'Folashade Balogun',
    role: 'Head of Product & Municipal Operations',
    credentials: 'B.Sc Systems Engineering (FUTA) · PMP Certified',
    bio: 'Seasoned civic-tech operator who has deployed field reporting systems and operational dispatch workflows for public agencies and urban service providers.',
    location: 'Abuja, Nigeria',
    avatarInitials: 'FB',
    image: folashadeImg,
    tags: ['GovTech', 'Product Operations', 'Field Workflows'],
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim Sanusi',
    role: 'Head of Geospatial Data & Intelligence',
    credentials: 'B.Sc Surveying & Geoinformatics (ABU Zaria) · Fellow NIS',
    bio: '10+ years in GIS spatial clustering, corridor degradation modeling, and municipal ward-level asset lifecycle mapping across northern and central Nigeria.',
    location: 'Kaduna / Abuja, Nigeria',
    avatarInitials: 'IS',
    image: ibrahimImg,
    tags: ['GIS & Spatial Analytics', 'Remote Sensing', 'Asset Mapping'],
  },
  {
    id: 'nneka',
    name: 'Dr. Nneka Eze',
    role: 'Head of Urban Resilience & Climate Analytics',
    credentials: 'Ph.D Urban Hydrology (Uniport) · B.Eng Civil Engineering (UNN)',
    bio: 'Specialist in stormwater infrastructure resilience, watershed modeling, and seasonal drainage failure forecasting across coastal and riverine Nigerian cities.',
    location: 'Port Harcourt, Nigeria',
    avatarInitials: 'NE',
    image: nnekaImg,
    tags: ['Flood Resilience', 'Stormwater Systems', 'Climate Analytics'],
  },
  {
    id: 'tunde',
    name: 'Engr. Tunde Adebayo',
    role: 'Lead Infrastructure & Field Systems Engineer',
    credentials: 'B.Sc Electrical Engineering (UI) · Certified IoT Systems Architect',
    bio: 'Oversees field inspector mobile reporting telemetry, rugged street-asset sensor integration, and offline-first edge synchronization in low-connectivity zones.',
    location: 'Ibadan / Lagos, Nigeria',
    avatarInitials: 'TA',
    image: tundeImg,
    tags: ['Edge Telemetry', 'Field Systems', 'IoT Infrastructure'],
  },
];

