import { useAppSettings } from '@/context/AppSettingsContext'
import profile from '@/data/profile.json'

export default function AboutSummarySection() {
    const { language } = useAppSettings()

    return (
        <section className="rounded-xl bg-muted/40 p-4 sm:p-6">
            <p className="content-readable max-w-[75ch] text-sm text-muted-foreground sm:text-base">
                {profile.summary[language]}
            </p>
        </section>
    )
}
