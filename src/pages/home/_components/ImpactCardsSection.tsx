import { Code2, Gauge, Layers, Rocket, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useAppSettings } from '@/context/AppSettingsContext'

const cardContent = {
    ro: [
        {
            text: 'Construiesc aplicații rapide și intuitive.',
            Icon: Rocket,
        },
        {
            text: 'Software bine gândit, construit cu pasiune.',
            Icon: Code2,
        },
        {
            text: 'Experiențe digitale cu impact real.',
            Icon: Sparkles,
        },
        {
            text: 'Arhitectură curată. Performanță. Simplitate.',
            Icon: Layers,
        },
        {
            text: 'Transform idei în produse funcționale.',
            Icon: Gauge,
        },
    ],
    en: [
        {
            text: 'I build fast and intuitive applications.',
            Icon: Rocket,
        },
        {
            text: 'Well-designed software, built with passion.',
            Icon: Code2,
        },
        {
            text: 'Digital experiences with real impact.',
            Icon: Sparkles,
        },
        {
            text: 'Clean architecture. Performance. Simplicity.',
            Icon: Layers,
        },
        {
            text: 'I turn ideas into functional products.',
            Icon: Gauge,
        },
    ],
}

export default function ImpactCardsSection() {
    const { language } = useAppSettings()
    const cards = cardContent[language as 'ro' | 'en'] ?? cardContent.en

    return (
        <section className="flex flex-wrap gap-4">
            {cards.map(({ text, Icon }) => (
                <Card
                    key={text}
                    className="group relative w-full overflow-hidden border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]"
                >
                    <div className="absolute inset-x-0 top-0 h-1 bg-primary/70" />
                    <CardContent className="flex h-full flex-col items-start gap-4 p-5 sm:p-6">
                        <div className="rounded-xl border border-border/70 bg-muted/60 p-3 text-primary">
                            <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-base font-semibold leading-relaxed tracking-tight">{text}</p>
                    </CardContent>
                </Card>
            ))}
        </section>
    )
}
