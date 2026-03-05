import { useMemo, useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'
import CertificationsCard from '@/pages/about/_components/interactive-resume/CertificationsCard'
import EmbeddedCvCard from '@/pages/about/_components/interactive-resume/EmbeddedCvCard'
import HeatmapAndBadgesCard from '@/pages/about/_components/interactive-resume/HeatmapAndBadgesCard'
import SkillProgressionCard from '@/pages/about/_components/interactive-resume/SkillProgressionCard'
import { certifications, getHeatCellClass, heatmapLevels, skillProgression } from '@/pages/about/_components/interactive-resume/data'
import { ExperienceItem, ResumeFilter } from '@/pages/about/_components/interactive-resume/types'

export default function InteractiveResumeSection() {
    const { t } = useAppSettings()

    const [searchTerm, setSearchTerm] = useState('')
    const [activeFilter, setActiveFilter] = useState<ResumeFilter>('all')

    const experience = profile.experience as ExperienceItem[]
    const skills = profile.skills as string[]

    const filteredExperience = useMemo(() => {
        const byTimeline =
            activeFilter === 'recent'
                ? experience.slice(0, 4)
                : activeFilter === 'early'
                    ? experience.slice(-4)
                    : experience

        if (!searchTerm.trim()) return byTimeline

        const query = searchTerm.toLowerCase()

        return byTimeline.filter((item) => {
            const content = [item.role, item.company, item.description, ...item.highlights].join(' ').toLowerCase()
            return content.includes(query)
        })
    }, [activeFilter, experience, searchTerm])

    return (
        <>
            <Separator />

            <section className="space-y-6 rounded-xl bg-muted/40 p-4 sm:p-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-tight">{t.about.interactiveResumeTitle}</h2>
                    <p className="content-readable max-w-[75ch] text-sm text-muted-foreground">{t.about.interactiveResumeSubtitle}</p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    <SkillProgressionCard
                        title={t.about.skillProgression}
                        description={t.about.skillProgressionDesc}
                        items={skillProgression}
                    />

                    <CertificationsCard
                        title={t.about.certifications}
                        description={t.about.certificationsDesc}
                        items={certifications}
                    />

                    <HeatmapAndBadgesCard
                        title={t.about.heatmapAndBadges}
                        description={t.about.heatmapAndBadgesDesc}
                        skills={skills}
                        levels={heatmapLevels}
                        getCellClass={getHeatCellClass}
                    />

                    <EmbeddedCvCard
                        title={t.about.embeddedCv}
                        description={t.about.embeddedCvDesc}
                        searchPlaceholder={t.about.cvSearchPlaceholder}
                        allLabel={t.about.filterAll}
                        recentLabel={t.about.filterRecent}
                        earlyLabel={t.about.filterEarly}
                        noMatchesLabel={t.about.noMatches}
                        searchTerm={searchTerm}
                        activeFilter={activeFilter}
                        items={filteredExperience}
                        onSearchChange={setSearchTerm}
                        onFilterChange={setActiveFilter}
                    />
                </div>
            </section>
        </>
    )
}
