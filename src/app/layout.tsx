import { useMemo, useState } from 'react'
import Footer from '@/components/Footer'
import MouseTrackingCanvas from '@/components/MouseTrackingCanvas'
import Navbar from '@/components/navbar/Navbar'
import { navigationConfig } from '@/config/navigation.config'
import { useAppSettings } from '@/context/AppSettingsContext'
import { useRoleContext } from '@/context/RoleContext'

export default function Layout({ children }: { children: React.ReactNode }) {
    const { t } = useAppSettings()
    const { role } = useRoleContext()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = useMemo(
        () =>
            navigationConfig.presentation
                .filter((item) => item.isImplemented !== false && !item.hide)
                .filter((item) => item.authority.length === 0 || item.authority.includes(role))
                .map((item) => ({
                    to: item.path,
                    label: item.translateKey === 'nav.home' ? t.nav.home : item.translateKey === 'nav.about' ? t.nav.about : t.nav.contact,
                })),
        [role, t],
    )

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-background">
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <MouseTrackingCanvas />
            <div className="relative z-10">
                <Navbar
                    navItems={navItems}
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <main id="main-content" className="w-full py-24" tabIndex={-1}>
                    <div className="content-container">{children}</div>
                </main>
                <Footer />
            </div>
        </div>
    )
}
