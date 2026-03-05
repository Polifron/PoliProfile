import { useEffect, useMemo, useState } from 'react'

type TypewriterTextProps = {
    phrases: string[]
    className?: string
}

export default function TypewriterText({ phrases, className }: TypewriterTextProps) {
    const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases])
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [typedText, setTypedText] = useState('')
    const [completedLines, setCompletedLines] = useState<string[]>([])
    const [cursorVisible, setCursorVisible] = useState(true)
    const currentPhrase = safePhrases[phraseIndex] ?? ''

    useEffect(() => {
        if (safePhrases.length === 0) return
        if (phraseIndex >= safePhrases.length) return

        if (typedText.length < currentPhrase.length) {
            const timeoutId = window.setTimeout(() => {
                setTypedText(currentPhrase.slice(0, typedText.length + 1))
            }, 58)

            return () => window.clearTimeout(timeoutId)
        }

        const timeoutId = window.setTimeout(() => {
            setCompletedLines((prev) => [...prev, currentPhrase])
            setTypedText('')
            setPhraseIndex((prev) => prev + 1)
        }, 720)

        return () => window.clearTimeout(timeoutId)
    }, [currentPhrase, phraseIndex, safePhrases, typedText])

    useEffect(() => {
        setPhraseIndex(0)
        setTypedText('')
        setCompletedLines([])
    }, [safePhrases])

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setCursorVisible((prev) => !prev)
        }, 480)

        return () => window.clearInterval(intervalId)
    }, [])

    const isTypingFinished = phraseIndex >= safePhrases.length

    return (
        <ul className={`m-0 list-none space-y-1 p-0 ${className ?? ''}`}>
            {completedLines.map((line, index) => (
                <li key={`${line}-${index}`} className="flex items-start gap-2">
                    <span aria-hidden="true">{'\u2B25'}</span>
                    <span>{line}</span>
                </li>
            ))}

            {!isTypingFinished ? (
                <li className="flex items-start gap-2">
                    <span aria-hidden="true">{'\u2B25'}</span>
                    <span>
                        {typedText}
                        <span className={`ml-1 inline-block transition-opacity ${cursorVisible ? 'opacity-100' : 'opacity-20'}`}>
                            |
                        </span>
                    </span>
                </li>
            ) : null}
        </ul>
    )
}
