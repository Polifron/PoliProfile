import { Separator } from '@/components/ui/separator'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'

export default function WorkExperienceSection() {
  const { t } = useAppSettings()

  return (
    <>
      <Separator />

      <section className="space-y-5 rounded-xl bg-muted/40 p-4 sm:p-6">
        <h2 className="text-2xl font-semibold tracking-tight">{t.about.workExperience}</h2>
        <p className="content-readable max-w-[75ch] text-sm text-muted-foreground">{t.about.timelineHint}</p>
        <ExperienceTimeline experience={profile.experience} />
      </section>
    </>
  )
}
