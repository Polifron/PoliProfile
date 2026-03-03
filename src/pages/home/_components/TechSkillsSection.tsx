import { Badge } from '@/components/ui/badge'
import TechStackCarousel from '@/components/TechStackCarousel'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'

export default function TechSkillsSection() {
  const { t } = useAppSettings()

  return (
    <>
      <section id="skills" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">{t.home.techStackAndPractices}</h2>
        <div className="mx-[calc(50%-50vw)] w-screen">
          <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 lg:px-6">
            <TechStackCarousel techStacks={profile.techStacks} />
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-xl bg-muted/40 p-4 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight">{t.home.coreSkills}</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>
    </>
  )
}
