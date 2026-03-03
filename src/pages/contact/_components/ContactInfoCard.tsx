import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'

export default function ContactInfoCard() {
  const { language, t } = useAppSettings()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.contact.title}</CardTitle>
        <CardDescription>{t.contact.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">{t.contact.email}:</span> {profile.email}
        </p>
        <p>
          <span className="font-medium text-foreground">{t.contact.phone}:</span> {profile.phone}
        </p>
        <p>
          <span className="font-medium text-foreground">{t.contact.location}:</span> {profile.location[language]}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {profile.socialLinks.map((link) => (
            <Button key={link.label} variant="outline" size="sm" asChild>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
