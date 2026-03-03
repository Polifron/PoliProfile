import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'

export default function LocationSection() {
  const { language, t } = useAppSettings()

  return (
    <section className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{t.home.locationTitle}</CardTitle>
          <CardDescription>{t.home.locationDesc}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{profile.location[language]}</p>
        </CardContent>
      </Card>
    </section>
  )
}
