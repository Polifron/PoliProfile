import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppSettings } from '@/context/AppSettingsContext'

export default function CorePrinciplesSection() {
  const { t, language } = useAppSettings()

  const principles = {
    en: [
      {
        title: 'OOP',
        fullName: 'Object-Oriented Programming',
        meaning: 'Organizes code around objects with clear responsibilities and reusable behaviors.',
        why: 'Helps keep large codebases easier to understand, extend, and test.',
      },
      {
        title: 'TDD',
        fullName: 'Test-Driven Development',
        meaning: 'Write tests first, then implement the feature to satisfy those tests.',
        why: 'Reduces regressions and improves confidence when refactoring.',
      },
      {
        title: 'SOLID',
        fullName: 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
        meaning: 'Five design principles that encourage modular, maintainable, and loosely coupled code.',
        why: 'Improves flexibility and keeps architecture clean as the app grows.',
      },
      {
        title: 'DRY',
        fullName: "Don't Repeat Yourself",
        meaning: 'Avoid duplicated logic by extracting shared behavior into reusable units.',
        why: 'Cuts maintenance cost and lowers risk of inconsistent fixes.',
      },
      {
        title: 'YAGNI',
        fullName: "You Aren't Gonna Need It",
        meaning: 'Implement what is needed now, not speculative features for the future.',
        why: 'Keeps delivery focused, faster, and easier to evolve incrementally.',
      },
      {
        title: 'CQRS',
        fullName: 'Command Query Responsibility Segregation',
        meaning: 'Separates read models from write operations to handle each concern independently.',
        why: 'Improves scalability, clarity of intent, and optimization of data flows.',
      },
      {
        title: 'DDD',
        fullName: 'Domain-Driven Design',
        meaning: 'Models software around domain language, business rules, and bounded contexts.',
        why: 'Creates solutions that better match real business needs and workflows.',
      },
    ],
    ro: [
      {
        title: 'OOP',
        fullName: 'Programare Orientată pe Obiecte',
        meaning: 'Organizează codul în jurul obiectelor, cu responsabilități clare și comportamente reutilizabile.',
        why: 'Face aplicațiile mari mai ușor de înțeles, extins și testat.',
      },
      {
        title: 'TDD',
        fullName: 'Dezvoltare Condusă de Teste',
        meaning: 'Scrii testele mai întâi, apoi implementezi funcționalitatea astfel încât testele să treacă.',
        why: 'Reduce regresiile și crește încrederea la refactorizare.',
      },
      {
        title: 'SOLID',
        fullName: 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
        meaning: 'Cinci principii de design care promovează cod modular, mentenabil și slab cuplat.',
        why: 'Îmbunătățește flexibilitatea și păstrează arhitectura curată pe măsură ce aplicația crește.',
      },
      {
        title: 'DRY',
        fullName: 'Nu Repeta Aceeași Logică',
        meaning: 'Evită duplicarea logicii prin extragerea comportamentelor comune în unități reutilizabile.',
        why: 'Scade costul de mentenanță și riscul de corecții neuniforme.',
      },
      {
        title: 'YAGNI',
        fullName: 'Nu Vei Avea Nevoie de Asta (încă)',
        meaning: 'Implementezi ce este necesar acum, nu funcții speculative pentru viitor.',
        why: 'Menține livrarea focusată, rapidă și ușor de evoluat incremental.',
      },
      {
        title: 'CQRS',
        fullName: 'Separarea Responsabilităților între Comenzi și Interogări',
        meaning: 'Separă modelele de citire de operațiile de scriere pentru a trata independent fiecare responsabilitate.',
        why: 'Îmbunătățește scalabilitatea, claritatea intenției și optimizarea fluxurilor de date.',
      },
      {
        title: 'DDD',
        fullName: 'Design Condus de Domeniu',
        meaning: 'Modelează software-ul în jurul limbajului domeniului, regulilor de business și contextelor delimitate.',
        why: 'Produce soluții mai bine aliniate la nevoile și procesele reale de business.',
      },
    ],
  }

  const localizedPrinciples = principles[language as 'ro' | 'en'] ?? principles.en

  const labels = {
    en: { meaning: 'Meaning', why: 'Why use it' },
    ro: { meaning: 'Ce înseamnă', why: 'De ce îl folosim' },
  }

  const localizedLabels = labels[language as 'ro' | 'en'] ?? labels.en

  return (
    <section className="space-y-4 rounded-xl bg-muted/40 p-4 sm:p-6">
      <h2 className="text-2xl font-semibold tracking-tight">{t.about.corePrinciples}</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {localizedPrinciples.map((principle) => (
          <Card key={principle.title} className="bg-card py-2">
            <CardHeader className="space-y-2 py-5 flex items-center">
              <CardTitle className="text-lg">{principle.title} - </CardTitle>
              <p className="text-sm font-medium text-muted-foreground mb-2"> {principle.fullName}</p>
            </CardHeader>
            <CardContent className="grid gap-3 pb-6 sm:grid-cols-2">
              <div className="space-y-2 rounded-lg bg-muted/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{localizedLabels.meaning}</p>
                <p className="text-sm text-muted-foreground">{principle.meaning}</p>
              </div>
              <div className="space-y-2 rounded-lg bg-muted/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{localizedLabels.why}</p>
                <p className="text-sm text-muted-foreground">{principle.why}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
