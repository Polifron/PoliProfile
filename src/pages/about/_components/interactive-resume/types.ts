export type ResumeFilter = 'all' | 'recent' | 'early'

export type ExperienceItem = {
    id: string
    role: string
    company: string
    period: string
    description: string
    highlights: string[]
}

export type SkillProgressItem = {
    name: string
    level: number
    years: number
}

export type CertificationItem = {
    id: string
    title: string
    issuer: string
    year: string
    status: string
}
