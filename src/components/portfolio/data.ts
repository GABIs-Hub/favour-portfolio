export interface ExperienceItem {
  date: string
  role: string
  company: string
  location: string
  current?: boolean
}

export interface Project {
  tag: string
  name: string
  location: string
  featured?: boolean
}

export interface Certification {
  number: string
  name: string
  org: string
}

export const EXPERIENCE: ExperienceItem[] = [
  { date: 'Sep 2020 – Present', role: 'Architect', company: 'Advanced Engineering Consultants', location: 'Lagos, Nigeria', current: true },
  { date: 'May 2017 – Jul 2017', role: 'Architectural Intern', company: 'Desired Choice Step', location: 'Ibadan, Nigeria' },
  { date: 'May 2016 – Jul 2016', role: 'Student Architect', company: 'OAC Architects', location: 'Lagos, Nigeria' },
  { date: 'Jul 2015', role: 'Student Architect', company: 'Doro Associates', location: 'Ibadan, Nigeria' },
  { date: 'May 2015 – Jun 2015', role: 'Student Architect', company: 'Prime Taad Construction', location: 'Ibadan, Nigeria' },
]

export const PROJECTS: Project[] = [
  { tag: 'Residential · Featured', name: 'Urban Dwelling Series', location: 'Lagos, Nigeria', featured: true },
  { tag: 'Commercial', name: 'Corporate Hub Design', location: 'Lagos, Nigeria' },
  { tag: 'Mixed-Use', name: 'Community Complex', location: 'Ibadan, Nigeria' },
]

export const CERTIFICATIONS: Certification[] = [
  { number: '01', name: 'National Youth Service Corps', org: 'NYSC · Nigeria' },
  { number: '02', name: 'Fusion Design Competition', org: 'Architecture & Design' },
  { number: '03', name: 'Young Architects Day', org: 'WW2BAA3 · International' },
]

export const SKILLS: string[] = [
  'Architectural Design', 'Attention to Detail', 'Relationship Building',
  'Project Management', 'Organization Skills', 'Team Collaboration',
  'Deadline Delivery', 'Space Planning', 'Construction Documentation', 'Client Communication',
]

export const NAV_LINKS = ['About', 'Experience', 'Projects', 'Contact'] as const
