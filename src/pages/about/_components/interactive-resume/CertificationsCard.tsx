import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CertificationItem } from '@/pages/about/_components/interactive-resume/types'

type CertificationsCardProps = {
    title: string
    description: string
    items: CertificationItem[]
}

export default function CertificationsCard({ title, description, items }: CertificationsCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
                {items.map((cert) => (
                    <div key={cert.id} className="rounded-lg border bg-background/70 p-3">
                        <div className="mb-2 flex items-start justify-between gap-3">
                            <p className="text-sm font-medium leading-tight">{cert.title}</p>
                            <Badge variant="outline">{cert.year}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                        <Badge className="mt-2" variant={cert.status === 'Completed' ? 'secondary' : 'outline'}>
                            {cert.status}
                        </Badge>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
