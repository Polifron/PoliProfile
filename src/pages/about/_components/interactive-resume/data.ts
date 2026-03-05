import { CertificationItem, SkillProgressItem } from '@/pages/about/_components/interactive-resume/types'

const FULL_CONFIDENCE_YEARS = 8

function getSkillLevelByYears(years: number) {
    const normalizedLevel = (years / FULL_CONFIDENCE_YEARS) * 100
    return Math.min(100, Math.round(normalizedLevel))
}

const skillYears = [
    { name: 'React', years: 4 },
    { name: 'TypeScript', years: 3 },
    { name: 'C# / .NET', years: 4 },
    { name: 'Testing (xUnit, Moq)', years: 2 },
    { name: 'SQL', years: 3 },
]

export const skillProgression: SkillProgressItem[] = skillYears.map((item) => ({
    name: item.name,
    years: item.years,
    level: getSkillLevelByYears(item.years),
}))

export const certifications: CertificationItem[] = [
    { id: 'cert-1', title: 'Scrum Fundamentals', issuer: 'ScrumStudy', year: '2023', status: 'Completed' },
    { id: 'cert-2', title: 'React Professional Path', issuer: 'Frontend Masters', year: '2024', status: 'Completed' },
    { id: 'cert-3', title: 'Azure Fundamentals Track', issuer: 'Microsoft Learn', year: 'In progress', status: 'In progress' },
]

export const heatmapLevels = Array.from({ length: 84 }, (_, index) => (index * 7 + (index % 4) * 3) % 5)

export function getHeatCellClass(level: number) {
    if (level === 0) return 'bg-muted'
    if (level === 1) return 'bg-primary/20'
    if (level === 2) return 'bg-primary/35'
    if (level === 3) return 'bg-primary/55'
    return 'bg-primary/80'
}
