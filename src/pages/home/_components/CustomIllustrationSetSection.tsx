import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAppSettings } from '@/context/AppSettingsContext'
import { LayersIcon, OrbitIcon, SparkleGridIcon } from '@/components/icons/StyleIcons'

const MotionDiv = motion.div

export default function CustomIllustrationSetSection() {
    const { language } = useAppSettings()

    const copy = {
        en: {
            title: 'Custom illustration + icon set',
            subtitle: 'A coherent visual language tailored to your portfolio style.',
            cards: [
                { title: 'System Thinking', desc: 'Layered architecture and clean boundaries.', badge: 'Design logic', icon: LayersIcon },
                { title: 'Interactive Motion', desc: 'Subtle depth and movement to guide attention.', badge: 'Animated UX', icon: OrbitIcon },
                { title: 'Crafted Details', desc: 'Iconography and accents with consistent rhythm.', badge: 'Brand style', icon: SparkleGridIcon },
            ],
        },
        ro: {
            title: 'Set personalizat de ilustrații + iconițe',
            subtitle: 'Un limbaj vizual coerent, adaptat stilului portofoliului tău.',
            cards: [
                { title: 'Gândire sistemică', desc: 'Arhitectură pe straturi și limite curate.', badge: 'Logică de design', icon: LayersIcon },
                { title: 'Mișcare interactivă', desc: 'Profunzime subtilă și animație pentru focus.', badge: 'UX animat', icon: OrbitIcon },
                { title: 'Detalii atent lucrate', desc: 'Iconografie și accente într-un ritm consistent.', badge: 'Stil de brand', icon: SparkleGridIcon },
            ],
        },
    }

    const content = copy[language as 'en' | 'ro'] ?? copy.en

    return (
        <section className="space-y-5 rounded-xl bg-muted/40 p-4 sm:p-6">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight">{content.title}</h3>
                <p className="text-sm text-muted-foreground">{content.subtitle}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {content.cards.map((item, index) => {
                    const Icon = item.icon

                    return (
                        <MotionDiv
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <Card className="h-full">
                                <CardHeader className="space-y-3">
                                    <div className="inline-flex size-11 items-center justify-center rounded-xl border bg-background">
                                        <Icon className="size-5" />
                                    </div>
                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    <Badge variant="outline">{item.badge}</Badge>
                                </CardContent>
                            </Card>
                        </MotionDiv>
                    )
                })}
            </div>
        </section>
    )
}
