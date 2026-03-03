import { Button } from '@/components/ui/button'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'

export default function IntroSection() {
  const { language, t } = useAppSettings()

  return (
    <section className="space-y-4">
      <p className="text-sm text-muted-foreground">{t.home.welcome}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{profile.name}</h2>
      <p className="text-xl text-muted-foreground">{profile.headline[language]}</p>
      <p className="max-w-2xl text-muted-foreground">{profile.summary[language]}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild>
          <a href={`mailto:${profile.email}`}>{t.home.contactMe}</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#skills">{t.home.viewSkills}</a>
        </Button>
      </div>
    </section>
  )
}
