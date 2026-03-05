import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import TypewriterText from '@/components/TypewriterText'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'


export default function HomePageHeader() {
  const { language, theme } = useAppSettings()
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [showHeader, setShowHeader] = useState(false)

  const heroText = {
    ro: 'Software developer crafting fast, clean, and intuitive digital experiences.',
    en: 'Software developer crafting fast, clean, and intuitive digital experiences.',
  }
  const heroTitle = {
    ro: `I am ${profile.name}`,
    en: `I am ${profile.name}`,
  }

  const greetingPhrases = ['Hello', 'Bonjour', 'Bună', 'こんにちは', 'Hallo', 'Hola', 'Ciao', 'Olá', 'Hej']
  const heroLines = {
    ro: [
      'Scalable apps',
      'Clean architecture',
      'Products that feel fast and intentional',
    ],
    en: [
      'Scalable apps',
      'Clean architecture',
      'Products that feel fast and intentional',
    ],
  }
  const headerGradientClassName =
    theme === 'dark'
      ? 'bg-[radial-gradient(120%_90%_at_88%_12%,rgba(45,212,191,0.22)_0%,rgba(14,165,233,0.12)_24%,rgba(0,0,0,0)_58%),linear-gradient(135deg,#042f2e_0%,#0f172a_48%,#1e1b4b_100%)]'
      : 'bg-[radial-gradient(120%_90%_at_88%_12%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.08)_28%,rgba(255,255,255,0)_60%),linear-gradient(135deg,#0f766e_0%,#0ea5e9_52%,#1d4ed8_100%)]'

  useEffect(() => {
    if (showHeader) return

    const isLastGreeting = greetingIndex >= greetingPhrases.length - 1

    if (!isLastGreeting) {
      const timeoutId = window.setTimeout(() => {
        setGreetingIndex((prev) => prev + 1)
      }, 250)

      return () => window.clearTimeout(timeoutId)
    }

    const finishId = window.setTimeout(() => {
      setShowHeader(true)
    }, 220)

    return () => window.clearTimeout(finishId)
  }, [greetingIndex, greetingPhrases.length, showHeader])

  if (!showHeader) {
    return (
      <div className="mx-[calc(50%-50vw)] w-screen">
        <section className={`-mt-24 relative h-[80vh] min-h-[600px] w-full sm:h-[72vh] sm:min-h-[520px] ${headerGradientClassName}`}>
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative flex h-full w-full items-center justify-center">
            <motion.p
              key={greetingPhrases[greetingIndex]}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              {greetingPhrases[greetingIndex]}
            </motion.p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="mx-[calc(50%-50vw)] w-screen">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-10">
          <motion.div
            className="absolute left-[9%] top-[20%] h-24 w-24 rounded-full bg-white/10 blur-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-[15%] top-[30%] h-28 w-28 rounded-full bg-white/10 blur-2xl"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <PageHeader
          title={heroTitle[language as 'ro' | 'en'] ?? heroTitle.en}
          text={heroText[language as 'ro' | 'en'] ?? heroText.en}
          backgroundClassName={headerGradientClassName}
          sectionClassName="h-[80vh] min-h-[600px] sm:h-[72vh] sm:min-h-[520px]"
          textPosition="center"
          verticalAlign="center"
          contentWrapperClassName="items-center gap-10 md:justify-items-center md:gap-6"
          textBlockClassName="header-enter-left pt-36 pb-4 text-left sm:pt-32 sm:pb-0 md:pt-0"
          imageWrapperClassName="header-enter-right mt-6 hidden justify-self-center md:mt-0 md:block md:static md:bottom-auto md:left-auto md:translate-x-0 md:justify-self-center"
          autoText={
            <TypewriterText
              phrases={heroLines[language as 'ro' | 'en'] ?? heroLines.en}
              className="min-h-[10.5rem] break-normal text-lg font-semibold leading-relaxed tracking-tight text-white sm:min-h-[7.5rem] sm:text-xl"
            />
          }
        />
      </div>
    </div>
  )
}
