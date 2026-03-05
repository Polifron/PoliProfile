import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { LayersIcon, OrbitIcon, SparkleGridIcon } from '@/components/icons/StyleIcons'

export default function HeroVisual3D() {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const rotateXMotion = useMotionValue(0)
    const rotateYMotion = useMotionValue(0)

    const rotateX = useSpring(rotateXMotion, { stiffness: 160, damping: 18, mass: 0.35 })
    const rotateY = useSpring(rotateYMotion, { stiffness: 160, damping: 18, mass: 0.35 })

    const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const bounds = containerRef.current?.getBoundingClientRect()
        if (!bounds) return

        const relativeX = (event.clientX - bounds.left) / bounds.width
        const relativeY = (event.clientY - bounds.top) / bounds.height

        rotateYMotion.set((relativeX - 0.5) * 18)
        rotateXMotion.set((0.5 - relativeY) * 14)
    }

    const handleLeave = () => {
        rotateXMotion.set(0)
        rotateYMotion.set(0)
    }

    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
            <div className="absolute right-10 top-20 h-[320px] w-[320px]" style={{ perspective: 1000 }}>
                <motion.div
                    ref={containerRef}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                    className="pointer-events-auto relative h-full w-full"
                >
                    <motion.div
                        className="absolute inset-0 rounded-3xl border border-white/25 bg-white/10 backdrop-blur-md"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transform: 'translateZ(40px)' }}
                    />

                    <motion.div
                        className="absolute left-5 top-5 flex items-center gap-2 rounded-xl border border-white/20 bg-background/90 px-3 py-2 text-sm shadow-sm"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transform: 'translateZ(90px)' }}
                    >
                        <OrbitIcon className="size-4" />
                        3D interface
                    </motion.div>

                    <motion.div
                        className="absolute bottom-10 left-8 rounded-xl border border-white/20 bg-background/90 p-3 shadow-sm"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transform: 'translateZ(74px)' }}
                    >
                        <LayersIcon className="size-6" />
                    </motion.div>

                    <motion.div
                        className="absolute right-8 top-28 rounded-xl border border-white/20 bg-background/90 p-3 shadow-sm"
                        animate={{ y: [0, -7, 0] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transform: 'translateZ(74px)' }}
                    >
                        <SparkleGridIcon className="size-6" />
                    </motion.div>

                    <Badge className="absolute bottom-6 right-5" variant="secondary" style={{ transform: 'translateZ(110px)' }}>
                        Portfolio 3D
                    </Badge>
                </motion.div>
            </div>
        </div>
    )
}
