import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type ParallaxSectionProps = {
    children: ReactNode
    offset?: number
    className?: string
}

export default function ParallaxSection({ children, offset = 36, className }: ParallaxSectionProps) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
    const translateY = useTransform(scrollYProgress, [0, 1], [offset, -offset])

    return (
        <motion.div ref={sectionRef} style={{ y: translateY }} className={className}>
            {children}
        </motion.div>
    )
}
