import PageHeader from '@/components/PageHeader'
import { useAppSettings } from '@/context/AppSettingsContext'

export default function ContactPageHeader() {
  const { t, theme } = useAppSettings()

  const headerGradientClassName =
    theme === 'dark'
      ? 'bg-[radial-gradient(120%_90%_at_88%_12%,rgba(45,212,191,0.22)_0%,rgba(14,165,233,0.12)_24%,rgba(0,0,0,0)_58%),linear-gradient(135deg,#042f2e_0%,#0f172a_48%,#1e1b4b_100%)]'
      : 'bg-[radial-gradient(120%_90%_at_88%_12%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.08)_28%,rgba(255,255,255,0)_60%),linear-gradient(135deg,#0f766e_0%,#0ea5e9_52%,#1d4ed8_100%)]'

  return (
    <div className="mx-[calc(50%-50vw)] w-screen">
      <PageHeader
        title={t.contact.title}
        text={t.contact.subtitle}
        backgroundClassName={headerGradientClassName}
        sectionClassName="h-[80vh] min-h-[600px] sm:h-[72vh] sm:min-h-[520px]"
        verticalAlign="center"
        textBlockClassName="pt-36 text-left sm:pt-32 md:pt-0"
      />
    </div>
  )
}
