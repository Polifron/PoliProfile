import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'
import { hobbyAnchorId } from '@/lib/hobbyAnchors'

export default function HobbiesDetailsSection() {
    const { language } = useAppSettings()

    const copy = {
        ro: {
            title: 'Dincolo de cod — în detaliu',
            subtitle: 'Alege o pasiune și descoperă contextul din spatele ei.',
        },
        en: {
            title: 'Beyond coding — in detail',
            subtitle: 'Choose an interest and explore the story behind it.',
        },
    }

    const localizedCopy = copy[language as 'ro' | 'en'] ?? copy.en

    return (
        <section className="space-y-5 rounded-xl bg-muted/40 p-4 sm:p-6">
            <h2 className="text-2xl font-semibold tracking-tight">{localizedCopy.title}</h2>
            <p className="content-readable max-w-[75ch] text-sm text-muted-foreground">{localizedCopy.subtitle}</p>

            <div className="space-y-4">
                {profile.hobbies.map((hobby, index) => (
                    <article id={hobbyAnchorId(hobby.en)} key={hobby.en} className="scroll-mt-28">
                        <Card className="group overflow-hidden bg-card p-0">
                            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:min-h-56`}>
                                <div className="overflow-hidden md:w-1/3">
                                    <img
                                        src={hobby.image}
                                        alt={hobby[language]}
                                        className="h-44 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 md:h-full"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="md:w-2/3">
                                    <CardHeader className="py-6">
                                        <CardTitle className="text-xl">{hobby[language]}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pb-6">
                                        <p className="content-readable max-w-[75ch] text-base leading-8 text-muted-foreground">{hobby.description[language]}</p>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </article>
                ))}
            </div>
        </section>
    )
}
