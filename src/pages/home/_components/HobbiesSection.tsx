import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'
import { hobbyAnchorId } from '@/lib/hobbyAnchors'
import { Link } from 'react-router-dom'

export default function HobbiesSection() {
  const { language } = useAppSettings()
  const currentLanguage = (language as 'ro' | 'en') ?? 'en'
  const labels = {
    ro: 'Citește mai mult',
    en: 'Read more',
  }
  const readMore = labels[currentLanguage] ?? labels.en

  const getShortPreview = (text: string, maxWords = 7) => {
    const words = text.trim().split(/\s+/)
    if (words.length <= maxWords) {
      return text
    }

    return `${words.slice(0, maxWords).join(' ')}...`
  }

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profile.hobbies.map((hobby) => (
          <Card key={hobby.en} className="group overflow-hidden bg-card p-0 transition-colors hover:bg-card">
            <div className="overflow-hidden">
              <img
                src={hobby.image}
                alt={hobby[currentLanguage]}
                className="h-28 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 p-3">
              <h4 className="text-sm font-semibold tracking-tight">{hobby[currentLanguage]}</h4>
              <p className="text-xs text-muted-foreground">
                {getShortPreview(hobby.description[currentLanguage])}
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to={`/about#${hobbyAnchorId(hobby.en)}`}>{readMore}</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
