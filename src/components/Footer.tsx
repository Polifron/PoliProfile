import { Link } from 'react-router-dom'
import profile from '@/data/profile.json'
import logo from '@/assets/big_avatar.png'
import { useAppSettings } from '@/context/AppSettingsContext'

export default function Footer() {
    const { language } = useAppSettings()
    const currentYear = new Date().getFullYear()

    const labels = {
        en: {
            follow: 'Follow',
            website: 'Website',
            rights: 'All rights reserved.',
        },
        ro: {
            follow: 'Urmărește',
            website: 'Website',
            rights: 'Toate drepturile rezervate.',
        },
    }

    const copy = labels[language as 'ro' | 'en'] ?? labels.en

    return (
        <footer className="border-t border-border/70 bg-background/90 backdrop-blur-sm">
            <div className="content-container py-6 sm:py-7">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt={`${profile.name} logo`}
                            className="h-10 w-10 rounded-full object-cover ring-1 ring-border/70"
                            loading="lazy"
                        />
                        <div>
                            <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
                            <p className="text-xs text-muted-foreground">
                                © {currentYear} · {copy.rights}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{copy.follow}</span>
                        {profile.socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/90 transition-colors hover:text-primary"
                            >
                                {social.label}
                            </a>
                        ))}
                        <Link to="/" className="text-foreground/90 transition-colors hover:text-primary">
                            {copy.website}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
