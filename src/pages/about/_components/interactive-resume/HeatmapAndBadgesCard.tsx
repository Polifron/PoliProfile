import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type HeatmapAndBadgesCardProps = {
    title: string
    description: string
    skills: string[]
    levels: number[]
    getCellClass: (level: number) => string
}

export default function HeatmapAndBadgesCard({
    title,
    description,
    skills,
    levels,
    getCellClass,
}: HeatmapAndBadgesCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                    <div className="grid grid-cols-12 gap-1">
                        {levels.map((level, index) => (
                            <div key={`heat-${index}`} className={`h-3 w-3 rounded-[3px] ${getCellClass(level)}`} />
                        ))}
                    </div>
                    <div className="mt-3 border-t border-border/70 pt-3">
                        <div className="flex flex-wrap gap-2">
                            {skills.slice(0, 12).map((skill) => (
                                <Badge key={skill} variant="outline">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
