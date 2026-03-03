import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Braces, Database, Server } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppSettings } from '@/context/AppSettingsContext'

const MotionDiv = motion.div

type SolutionStep = {
    title: string
    description: string
    Icon: typeof Braces
}

export default function SolutionTimelineSection() {
    const { language } = useAppSettings()
    const sectionRef = useRef<HTMLElement | null>(null)
    const [hasStarted, setHasStarted] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)
    const mobileRevealIntervalMs = 420

    const steps = useMemo<Record<'ro' | 'en', SolutionStep[]>>(
        () => ({
            ro: [
                {
                    title: 'SQL',
                    description: 'Modelare de date clară, interogări optimizate și persistență sigură a informațiilor.',
                    Icon: Database,
                },
                {
                    title: 'Back-end',
                    description: 'Logică de business stabilă, API-uri curate și arhitectură scalabilă pentru produs.',
                    Icon: Server,
                },
                {
                    title: 'Front-end',
                    description: 'Interfețe rapide, intuitive și responsive, orientate pe experiența utilizatorului.',
                    Icon: Braces,
                },
            ],
            en: [
                {
                    title: 'SQL',
                    description:
                        'Designing normalized schemas, implementing optimized queries, and ensuring secure data persistence. I focus on indexing strategies, query optimization, transaction reliability, and clean data architecture for scalable applications.',
                    Icon: Database,
                },
                {
                    title: 'Back-end',
                    description:
                        'Designing and implementing reliable business logic, maintainable APIs, and scalable back-end architectures. I focus on performance, data integrity, security best practices, and clean code structures that keep projects stable and easy to extend.',
                    Icon: Server,
                },
                {
                    title: 'Front-end',
                    description:
                        'Fast, intuitive, and fully responsive interfaces built with strong attention to UX/UI principles and pixel-perfect design. I focus on clarity, usability, and smooth interactions to deliver seamless user experiences across all devices.',
                    Icon: Braces,
                },
            ],
        }),
        [],
    )

    const localizedSteps = steps[language as 'ro' | 'en'] ?? steps.en

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)')

        const updateIsDesktop = () => {
            setIsDesktop(mediaQuery.matches)
        }

        updateIsDesktop()
        mediaQuery.addEventListener('change', updateIsDesktop)

        return () => mediaQuery.removeEventListener('change', updateIsDesktop)
    }, [])

    useEffect(() => {
        const element = sectionRef.current
        if (!element || hasStarted) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.35,
            },
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [hasStarted])

    useEffect(() => {
        if (!hasStarted) {
            setActiveIndex(-1)
            return
        }

        if (isDesktop) {
            setActiveIndex(localizedSteps.length - 1)
            return
        }

        setActiveIndex(-1)
        const intervalId = window.setInterval(() => {
            setActiveIndex((prev) => {
                if (prev >= localizedSteps.length - 1) {
                    window.clearInterval(intervalId)
                    return prev
                }

                return prev + 1
            })
        }, mobileRevealIntervalMs)

        return () => window.clearInterval(intervalId)
    }, [hasStarted, isDesktop, localizedSteps.length, mobileRevealIntervalMs])

    return (
        <section ref={sectionRef}>
            <div className="relative space-y-4 pl-12 md:hidden">
                <div className="absolute bottom-2 left-4 top-2 w-1 bg-foreground/60" />
                {localizedSteps.map(({ title, description, Icon }, index) => {
                    const isVisible = index <= activeIndex

                    return (
                        <div key={title} className="relative">
                            <div
                                className={`absolute -left-[2.25rem] top-7 z-10 h-3 w-3 rounded-full border-2 border-background transition-all duration-500 ${isVisible
                                    ? 'bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.2)]'
                                    : 'bg-muted-foreground/40'
                                    }`}
                            />
                            <Card className="overflow-hidden">
                                <MotionDiv
                                    initial={false}
                                    animate={
                                        isVisible
                                            ? { opacity: 1, y: 0, scale: 1 }
                                            : { opacity: 0.2, y: 12, scale: 0.985 }
                                    }
                                    transition={{ duration: 0.45, ease: 'easeOut' }}
                                >
                                    <CardHeader className="space-y-2">
                                        <div className="w-fit rounded-md bg-muted p-2 text-muted-foreground">
                                            <Icon className="size-5" />
                                        </div>
                                        <CardTitle>{title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
                                    </CardContent>
                                </MotionDiv>
                            </Card>
                        </div>
                    )
                })}
            </div>

            <div className="relative hidden md:block">
                <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-foreground/60" />
                <div className="grid min-h-[26rem] grid-cols-3 gap-4 lg:min-h-[30rem]">
                    {localizedSteps.map(({ title, description, Icon }, index) => {
                        const isVisible = index <= activeIndex
                        const isTop = index % 2 === 0

                        return (
                            <div key={title} className="grid grid-rows-[1fr_auto_1fr]">
                                <div className="flex flex-col items-center justify-end">
                                    {isTop ? (
                                        <>
                                            <Card className="w-full overflow-hidden">
                                                <MotionDiv
                                                    initial={false}
                                                    animate={
                                                        isVisible
                                                            ? { opacity: 1, y: 0, scale: 1 }
                                                            : { opacity: 0.2, y: -12, scale: 0.985 }
                                                    }
                                                    transition={{ duration: 0.45, ease: 'easeOut' }}
                                                >
                                                    <CardHeader className="space-y-2">
                                                        <div className="w-fit rounded-md bg-muted p-2 text-muted-foreground">
                                                            <Icon className="size-5" />
                                                        </div>
                                                        <CardTitle>{title}</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
                                                    </CardContent>
                                                </MotionDiv>
                                            </Card>
                                            <div className="h-8 w-0.5 bg-foreground/60" />
                                        </>
                                    ) : null}
                                </div>

                                <div className="relative flex items-center justify-center">
                                    <div
                                        className={`relative z-10 h-3 w-3 rounded-full border-2 border-background transition-all duration-500 ${isVisible
                                            ? 'bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.2)]'
                                            : 'bg-muted-foreground/40'
                                            }`}
                                    />
                                </div>

                                <div className="flex flex-col items-center">
                                    {!isTop ? (
                                        <>
                                            <div className="h-8 w-0.5 bg-foreground/60" />
                                            <Card className="w-full overflow-hidden">
                                                <MotionDiv
                                                    initial={false}
                                                    animate={
                                                        isVisible
                                                            ? { opacity: 1, y: 0, scale: 1 }
                                                            : { opacity: 0.2, y: 12, scale: 0.985 }
                                                    }
                                                    transition={{ duration: 0.45, ease: 'easeOut' }}
                                                >
                                                    <CardHeader className="space-y-2">
                                                        <div className="w-fit rounded-md bg-muted p-2 text-muted-foreground">
                                                            <Icon className="size-5" />
                                                        </div>
                                                        <CardTitle>{title}</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
                                                    </CardContent>
                                                </MotionDiv>
                                            </Card>
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
