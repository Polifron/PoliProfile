import { useAppSettings } from '@/context/AppSettingsContext'

export default function ThemeSelect({ value, onChange, className, ariaLabel }) {
  const { t } = useAppSettings()

  return (
    <select
      value={value}
      onChange={onChange}
      className={`${className} underline underline-offset-4`}
      aria-label={ariaLabel}
    >
      <option value="light" className="bg-background text-foreground">
        ☀️ {t.theme.light}
      </option>
      <option value="dark" className="bg-background text-foreground">
        🌙 {t.theme.dark}
      </option>
    </select>
  )
}
