import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const MotionDiv = motion.div

export default function ExperienceTimeline({ experience }) {
  return (
    <div className="relative pl-8 md:pl-10">
      <div className="absolute left-2 top-0 h-full w-px bg-border md:left-3" />

      <div className="space-y-8">
        {experience.map((item, index) => (
          <MotionDiv
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-6 size-3 rounded-full bg-primary md:-left-[35px]" />

            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle>{item.role}</CardTitle>
                  <Badge variant="outline">{item.period}</Badge>
                </div>
                <CardDescription>{item.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </div>
    </div>
  )
}
