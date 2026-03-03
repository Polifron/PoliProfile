import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import ui from '@/data/ui.json'

const AppSettingsContext = createContext(null)

export function AppSettingsProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  const t = useMemo(() => ui[language] ?? ui.en, [language])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const value = useMemo(
    () => ({ language, setLanguage, theme, setTheme, t }),
    [language, theme, t],
  )

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext)

  if (!context) {
    throw new Error('useAppSettings must be used within AppSettingsProvider')
  }

  return context
}
