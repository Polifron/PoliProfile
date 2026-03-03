import { useEffect, useState } from 'react'
import PageHeader from '@/components/PageHeader'
import TypewriterText from '@/components/TypewriterText'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'


export default function HomePageHeader() {
  const { language, theme } = useAppSettings()
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [showHeader, setShowHeader] = useState(false)

  const heroText = {
    ro: 'Creez experiențe digitale care contează. De la aplicații web la soluții mobile, pun accent pe performanță, arhitectură curată și un design centrat pe utilizator. Îmi place să construiesc software care este rapid, simplu și intuitiv.',
    en: 'I create digital experiences that matter. From web applications to mobile solutions, I focus on performance, clean architecture, and user-centered design. I enjoy building software that is fast, simple, and intuitive.',
  }
  const heroTitle = {
    ro: `Eu sunt ${profile.name}`,
    en: `I am ${profile.name}`,
  }

  const greetingPhrases = ['Hello', 'Bonjour', 'Bună', 'こんにちは', 'Hallo', 'Hola', 'Ciao', 'Olá', 'Hej']
  const heroLines = {
    ro: [
      'Construiesc aplicații rapide și intuitive.',
      'Arhitectură curată. Performanță. Simplitate.',
      'Transform idei în produse funcționale.',
    ],
    en: [
      'I build fast and intuitive applications.',
      'Clean architecture. Performance. Simplicity.',
      'I turn ideas into functional products.',
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
      }, 320)

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
        <section className={`-mt-24 relative h-[65vh] min-h-[430px] w-full md:h-[72vh] ${headerGradientClassName}`}>
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative flex h-full w-full items-center justify-center">
            <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{greetingPhrases[greetingIndex]}</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="mx-[calc(50%-50vw)] w-screen">
      <PageHeader
        title={heroTitle[language as 'ro' | 'en'] ?? heroTitle.en}
        text={heroText[language as 'ro' | 'en'] ?? heroText.en}
        backgroundClassName={headerGradientClassName}
        sectionClassName="h-[80vh] min-h-[600px] sm:h-[72vh] sm:min-h-[520px]"
        textPosition="center"
        verticalAlign="center"
        contentWrapperClassName="items-center gap-10 md:justify-items-center md:gap-6"
        textBlockClassName="pt-20 pb-44 text-left sm:pb-0 md:pt-0"
        imageWrapperClassName="absolute bottom-10 left-1/2 -translate-x-1/2 md:static md:bottom-auto md:left-auto md:translate-x-0 md:justify-self-center"
        autoText={
          <TypewriterText
            phrases={heroLines[language as 'ro' | 'en'] ?? heroLines.en}
            className="min-h-[3.5rem] break-normal text-lg font-semibold leading-relaxed tracking-tight text-white sm:min-h-[2rem] sm:text-xl"
          />
        }
      />

    </div>
  )
}
