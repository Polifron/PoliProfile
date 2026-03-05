import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function OrbitIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="2.6" />
            <path d="M4 12c0-2.6 3.6-4.8 8-4.8s8 2.2 8 4.8-3.6 4.8-8 4.8-8-2.2-8-4.8Z" />
            <path d="M7.3 6.9c1.8-1.8 5.7-.8 8.8 2.3s4.1 7 2.3 8.8c-1.8 1.8-5.7.8-8.8-2.3s-4.1-7-2.3-8.8Z" />
        </svg>
    )
}

export function LayersIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="m12 3 9 4.8-9 4.8L3 7.8 12 3Z" />
            <path d="m3 12.2 9 4.8 9-4.8" />
            <path d="m3 16.6 9 4.8 9-4.8" />
        </svg>
    )
}

export function SparkleGridIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <path d="m16.5 14.4.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8.8-1.8Z" />
        </svg>
    )
}
