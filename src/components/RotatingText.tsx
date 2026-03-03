import { useEffect, useMemo, useState } from 'react'

type RotatingTextProps = {
    phrases: string[]
    className?: string
    intervalMs?: number
}

export default function RotatingText({ phrases, className, intervalMs = 1400 }: RotatingTextProps) {
    const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases])
    const [phraseIndex, setPhraseIndex] = useState(0)

    useEffect(() => {
        if (safePhrases.length <= 1) return

        const intervalId = window.setInterval(() => {
            setPhraseIndex((prev) => (prev + 1) % safePhrases.length)
        }, intervalMs)

        return () => window.clearInterval(intervalId)
    }, [intervalMs, safePhrases])

    if (safePhrases.length === 0) return null

    return <p className={className}>{safePhrases[phraseIndex]}</p>
}
