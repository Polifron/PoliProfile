import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ExperienceItem, ResumeFilter } from '@/pages/about/_components/interactive-resume/types'

type EmbeddedCvCardProps = {
    title: string
    description: string
    searchPlaceholder: string
    allLabel: string
    recentLabel: string
    earlyLabel: string
    noMatchesLabel: string
    searchTerm: string
    activeFilter: ResumeFilter
    items: ExperienceItem[]
    onSearchChange: (value: string) => void
    onFilterChange: (filter: ResumeFilter) => void
}

export default function EmbeddedCvCard({
    title,
    description,
    searchPlaceholder,
    allLabel,
    recentLabel,
    earlyLabel,
    noMatchesLabel,
    searchTerm,
    activeFilter,
    items,
    onSearchChange,
    onFilterChange,
}: EmbeddedCvCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-2 sm:grid-cols-[1fr_auto_auto_auto]">
                    <Input
                        value={searchTerm}
                        onChange={(event) => onSearchChange(event.target.value)}
                        placeholder={searchPlaceholder}
                    />
                    <Button variant={activeFilter === 'all' ? 'default' : 'outline'} onClick={() => onFilterChange('all')}>
                        {allLabel}
                    </Button>
                    <Button
                        variant={activeFilter === 'recent' ? 'default' : 'outline'}
                        onClick={() => onFilterChange('recent')}
                    >
                        {recentLabel}
                    </Button>
                    <Button variant={activeFilter === 'early' ? 'default' : 'outline'} onClick={() => onFilterChange('early')}>
                        {earlyLabel}
                    </Button>
                </div>

                <div className="max-h-72 space-y-3 overflow-auto pr-1">
                    {items.map((item) => (
                        <div key={item.id} className="rounded-lg border bg-background/70 p-3">
                            <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                                <p className="text-sm font-semibold">{item.role}</p>
                                <Badge variant="outline">{item.period}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{item.company}</p>
                            <p className="mt-2 text-xs text-muted-foreground">{item.description}</p>
                        </div>
                    ))}

                    {items.length === 0 ? <p className="text-sm text-muted-foreground">{noMatchesLabel}</p> : null}
                </div>
            </CardContent>
        </Card>
    )
}
