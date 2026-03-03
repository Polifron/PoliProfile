import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'
import ImpactCardsSection from '@/pages/home/_components/ImpactCardsSection'
import SolutionTimelineSection from '@/pages/home/_components/SolutionTimelineSection'
import TechSkillsSection from '@/pages/home/_components/TechSkillsSection'
import LocationSection from '@/pages/home/_components/LocationSection'
import HobbiesSection from '@/pages/home/_components/HobbiesSection'

export default function HomePageBody() {
  const { language } = useAppSettings()

  const content = {
    ro: {
      leadTitle: 'Soluții construite pe nevoi reale',
      leadText:
        'Construiesc produse digitale cu accent pe claritate, performanță și impact. Fiecare proiect pornește de la nevoia concretă a utilizatorului și ajunge la un rezultat ușor de folosit și simplu de întreținut.',
      valueTitle: 'Împreună creăm potrivirea corectă',
      valueText:
        'De la idee la execuție, procesul meu pune accent pe livrare rapidă, calitate tehnică și comunicare constantă.',
      approachTitle: 'O abordare completă pentru produsul tău',
      approachText:
        'Combin arhitectură curată, practici moderne și focus pe experiența utilizatorului pentru a construi aplicații scalabile.',
      ctaTitle: 'Vrei să discutăm următorul tău proiect?',
      ctaText:
        'Dacă ai o idee pe care vrei să o transformi într-un produs funcțional, hai să vorbim.',
      ctaButton: 'Contactează-mă',
      hobbiesTitle: 'Dincolo de cod',
      hobbiesText: 'Pasiuni care îmi mențin creativitatea și energia.',
    },
    en: {
      leadTitle: 'Solutions built around real needs',
      leadText:
        'I build digital products focused on clarity, performance, and impact. Every project starts from a concrete user need and ends with an experience that is intuitive and maintainable.',
      valueTitle: 'Together, we create the right match',
      approachTitle: 'A complete approach for your product',
      ctaTitle: 'Want to discuss your next project?',
      ctaText:
        'If you have an idea you want to turn into a functional product, let’s connect.',
      ctaButton: 'Contact me',
      hobbiesTitle: 'Beyond coding',
      hobbiesText: 'Interests that keep my creativity and energy high.',
    },
  }

  const copy = content[language as 'ro' | 'en'] ?? content.en

  return (
    <div className="space-y-14 flex flex-col">
      {/* <section className="space-y-5">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.leadTitle}</h2>
          <p className="max-w-3xl text-muted-foreground">{copy.leadText}</p>
        </section> */}

      <section className="space-y-5 rounded-xl bg-muted/40 p-4 sm:p-6">
        <h3 className="text-2xl font-semibold tracking-tight">{copy.valueTitle}</h3>
        <ImpactCardsSection />
      </section>

      <section className="rounded-xl bg-muted/40 p-4 sm:p-6">
        <Card>
          <CardHeader>
            <CardTitle>{copy.ctaTitle}</CardTitle>
            <CardDescription>{copy.ctaText}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <a href={`mailto:${profile.email}`}>{copy.ctaButton}</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-5">
        <div className="space-y-4 rounded-xl bg-muted/40 p-4 sm:p-6 md:space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight">{copy.approachTitle}</h3>
          <SolutionTimelineSection />
        </div>
        <TechSkillsSection />
        <LocationSection />
      </section>

      <section className="space-y-5 rounded-xl bg-muted/40 p-4 sm:p-6">
        <h3 className="text-2xl font-semibold tracking-tight">{copy.hobbiesTitle}</h3>
        <p className="content-readable max-w-[75ch] text-muted-foreground">{copy.hobbiesText}</p>
        <HobbiesSection />
      </section>

    </div>
  )
}
