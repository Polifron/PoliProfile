import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppSettings } from '@/context/AppSettingsContext'

type ProjectItem = {
    title: string
    description: string
    tags: string[]
    image: string
    url: string
}

export default function ProjectsShowcaseSection() {
    const { language } = useAppSettings()

    const copy = {
        en: {
            title: 'Selected Projects',
            subtitle: 'A few website products I build end-to-end for real business workflows.',
            cta: 'View Project',
            projects: [
                {
                    title: 'Human Resources Website',
                    description:
                        'Employee onboarding, leave requests, approvals, and people dashboards in one clear HR flow.',
                    tags: ['HR', 'People Ops', 'Dashboard'],
                    image:
                        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
                    url: 'https://www.bamboohr.com',
                },
                {
                    title: 'Payroll Website',
                    description:
                        'Salary calculations, monthly payroll runs, tax-ready exports, and employee payment summaries.',
                    tags: ['Payroll', 'Finance', 'Automation'],
                    image:
                        'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80',
                    url: 'https://www.adp.com',
                },
                {
                    title: 'eCommerce Website',
                    description:
                        'Catalog browsing, smart filtering, checkout flow, and order tracking for modern online stores.',
                    tags: ['eCommerce', 'Payments', 'Catalog'],
                    image:
                        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
                    url: 'https://www.shopify.com',
                },
                {
                    title: 'Booking Website',
                    description:
                        'Availability calendar, slot selection, confirmation flow, and reminder-ready booking journeys.',
                    tags: ['Booking', 'Scheduling', 'Service'],
                    image:
                        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
                    url: 'https://www.booking.com',
                },
            ] as ProjectItem[],
        },
        ro: {
            title: 'Proiecte Selectate',
            subtitle: 'Câteva produse web pe care le construiesc cap-coadă pentru fluxuri reale de business.',
            cta: 'Vezi proiectul',
            projects: [
                {
                    title: 'Website Resurse Umane',
                    description:
                        'Onboarding angajați, cereri de concediu, aprobări și dashboard-uri de people management.',
                    tags: ['HR', 'People Ops', 'Dashboard'],
                    image:
                        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
                    url: 'https://www.bamboohr.com',
                },
                {
                    title: 'Website Payroll',
                    description:
                        'Calcul salarial, rulări lunare de payroll, exporturi fiscale și sumar clar pentru angajați.',
                    tags: ['Payroll', 'Financiar', 'Automatizare'],
                    image:
                        'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80',
                    url: 'https://www.adp.com',
                },
                {
                    title: 'Website eCommerce',
                    description:
                        'Navigare catalog, filtrare inteligentă, checkout complet și urmărire comenzi pentru magazine online.',
                    tags: ['eCommerce', 'Plăți', 'Catalog'],
                    image:
                        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
                    url: 'https://www.shopify.com',
                },
                {
                    title: 'Website Booking',
                    description:
                        'Calendar disponibilitate, alegere intervale, confirmare rezervări și fluxuri automate de notificare.',
                    tags: ['Booking', 'Programări', 'Servicii'],
                    image:
                        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
                    url: 'https://www.booking.com',
                },
            ] as ProjectItem[],
        },
    }

    const localizedCopy = copy[language as 'ro' | 'en'] ?? copy.en

    return (
        <section className="space-y-5 rounded-xl bg-muted/40 p-4 sm:p-6">
            <h2 className="text-2xl font-semibold tracking-tight">{localizedCopy.title}</h2>
            <p className="content-readable max-w-[75ch] text-sm text-muted-foreground">{localizedCopy.subtitle}</p>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {localizedCopy.projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block h-full"
                    >
                        <Card className="h-full overflow-hidden bg-card p-0 transition-shadow hover:shadow-md">
                            <div className="h-52 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            <CardHeader className="space-y-3">
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4 pb-6">
                                <p className="line-clamp-3 text-sm text-muted-foreground">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <Button variant="outline" size="sm" className="pointer-events-none">
                                    {localizedCopy.cta}
                                    <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>
        </section>
    )
}
