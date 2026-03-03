import { useRef } from 'react'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAppSettings } from '@/context/AppSettingsContext'

type TechStack = {
  name: string
  logo: string
  url: string
}

function TechStackItem({ stack, t }: { stack: TechStack; t: any }) {
  return (
    <a
      href={stack.url}
      target="_blank"
      rel="noreferrer"
      className="flex min-w-36 flex-col items-center gap-2 rounded-xl bg-card/70 px-4 py-4 text-center text-sm shadow-sm transition-colors hover:bg-accent"
      aria-label={`${t.carousel.open} ${stack.name}`}
    >
      <img src={stack.logo} alt={`${stack.name} logo`} className="size-12 object-contain md:size-14" loading="lazy" />
      <span className="font-medium leading-tight">{stack.name}</span>
    </a>
  )
}

export default function TechStackCarousel({ techStacks }: { techStacks: TechStack[] }) {
  const { t } = useAppSettings()
  const carouselStacks = [...techStacks, ...techStacks]

  const autoScroll = useRef(
    AutoScroll({
      speed: 0.8,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    }),
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      dragFree: true,
      containScroll: false,
      slidesToScroll: 1,
    },
    [autoScroll.current],
  )

  const handlePrev = () => {
    emblaApi?.scrollPrev()
    autoScroll.current.play()
  }

  const handleNext = () => {
    emblaApi?.scrollNext()
    autoScroll.current.play()
  }

  return (
    <div>
      <div className="relative overflow-hidden py-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 py-3">
            {carouselStacks.map((stack, index) => (
              <div key={`${stack.name}-${index}`} className="min-w-0 flex-[0_0_auto]">
                <TechStackItem stack={stack} t={t} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
