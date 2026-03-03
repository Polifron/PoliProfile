import PageHeader from '@/components/PageHeader'
import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'

export default function AboutPageHeader() {
  const { language, theme, t } = useAppSettings()

  const headerGradientClassName =
    theme === 'dark'
      ? 'bg-[radial-gradient(120%_90%_at_88%_12%,rgba(45,212,191,0.22)_0%,rgba(14,165,233,0.12)_24%,rgba(0,0,0,0)_58%),linear-gradient(135deg,#042f2e_0%,#0f172a_48%,#1e1b4b_100%)]'
      : 'bg-[radial-gradient(120%_90%_at_88%_12%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.08)_28%,rgba(255,255,255,0)_60%),linear-gradient(135deg,#0f766e_0%,#0ea5e9_52%,#1d4ed8_100%)]'

  return (
    <div className="mx-[calc(50%-50vw)] w-screen">
      <PageHeader
        title={t.about.title}
        text={profile.summary[language]}
        backgroundClassName={headerGradientClassName}
        layout="split"
        textPosition="left"
        verticalAlign="center"
        showSideImage
        contentWrapperClassName="mx-auto md:justify-items-center md:gap-10"
        imageWrapperClassName="justify-self-center md:justify-self-center"
      />
    </div>
  )
}
