import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CorePrinciplesSection from '@/pages/about/_components/CorePrinciplesSection'
import HobbiesDetailsSection from '@/pages/about/_components/HobbiesDetailsSection'
import ProjectsShowcaseSection from '@/pages/about/_components/ProjectsShowcaseSection'
import WorkExperienceSection from '@/pages/about/_components/WorkExperienceSection'

export default function AboutPageBody() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const targetId = location.hash.replace('#', '')

    const timeoutId = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)

    return () => window.clearTimeout(timeoutId)
  }, [location.hash])

  return (
    <div className="space-y-8">
      <CorePrinciplesSection />
      <ProjectsShowcaseSection />
      <WorkExperienceSection />
      <HobbiesDetailsSection />
    </div>
  )
}
