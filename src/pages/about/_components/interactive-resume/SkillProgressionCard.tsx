import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SkillProgressItem } from '@/pages/about/_components/interactive-resume/types'

type SkillProgressionCardProps = {
    title: string
    description: string
    items: SkillProgressItem[]
}

const MotionDiv = motion.div

export default function SkillProgressionCard({ title, description, items }: SkillProgressionCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {items.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between gap-3 text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.years}y · {skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted">
                            <MotionDiv
                                className="h-2 rounded-full bg-primary"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                            />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
