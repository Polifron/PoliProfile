import LanguageSelect from '@/components/navbar/_components/LanguageSelect'
import ThemeSelect from '@/components/navbar/_components/ThemeSelect'
import { MobileNavLinks } from '@/components/navbar/_components/NavLinks'
import { useAppSettings } from '@/context/AppSettingsContext'

export default function MobileMenuPanel({ navItems, onItemClick }) {
  const { language, setLanguage, theme, setTheme, t } = useAppSettings()

  return (
    <div className="border-t border-white/20 bg-background/95 px-4 py-3 backdrop-blur sm:px-6 md:hidden">
      <div className="flex w-full flex-col gap-3">
        <MobileNavLinks navItems={navItems} onItemClick={onItemClick} />

        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="text-muted-foreground">{t.language.label}</span>
          <LanguageSelect
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className="h-9 rounded-md border bg-background px-2 text-sm text-foreground"
          />
        </label>

        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="text-muted-foreground">{t.theme.label}</span>
          <ThemeSelect
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
            className="h-9 rounded-md border bg-background px-2 text-sm text-foreground"
          />
        </label>
      </div>
    </div>
  )
}
