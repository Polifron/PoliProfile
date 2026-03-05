import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import LanguageSelect from '@/components/navbar/_components/LanguageSelect'
import ThemeSelect from '@/components/navbar/_components/ThemeSelect'
import { DesktopNavLinks } from '@/components/navbar/_components/NavLinks'
import MobileMenuPanel from '@/components/navbar/_components/MobileMenuPanel'
import { useAppSettings } from '@/context/AppSettingsContext'

export default function Navbar({ navItems, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const { t, language, setLanguage, theme, setTheme } = useAppSettings()

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav
        aria-label="Primary"
        className="flex w-full items-center justify-between border-b border-black/10 bg-white/45 px-3 py-3 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-black/45 sm:px-4"
      >
        <p className="text-sm font-semibold tracking-wide text-black dark:text-white">{t.appTitle}</p>
        <div className="hidden items-center gap-2 md:flex">
          <DesktopNavLinks navItems={navItems} />
          <label className="flex items-center gap-2 text-xs text-black/80 dark:text-white/90">
            <span className="sr-only">{t.language.label}</span>
            <LanguageSelect
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="h-9 rounded-md border border-border bg-background/80 px-2 text-sm text-foreground backdrop-blur"
              ariaLabel={t.language.label}
            />
          </label>

          <label className="flex items-center gap-2 text-xs text-black/80 dark:text-white/90">
            <span className="sr-only">{t.theme.label}</span>
            <ThemeSelect
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              className="h-9 rounded-md border border-border bg-background/80 px-2 text-sm text-foreground backdrop-blur"
              ariaLabel={t.theme.label}
            />
          </label>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="border-black/30 bg-white/45 text-black backdrop-blur dark:border-white/50 dark:bg-black/25 dark:text-white md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu-panel"
        >
          <Menu className="size-4" />
        </Button>
      </nav>

      {isMobileMenuOpen && (
        <MobileMenuPanel
          navItems={navItems}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}
