import { useEffect, useMemo, useState } from 'react'

type TypewriterTextProps = {
    phrases: string[]
    className?: string
}

export default function TypewriterText({ phrases, className }: TypewriterTextProps) {
    const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases])
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [cursorVisible, setCursorVisible] = useState(true)
    const currentPhrase = safePhrases[phraseIndex % Math.max(1, safePhrases.length)] ?? ''
    const currentPhraseChars = Array.from(currentPhrase)

    useEffect(() => {
        if (safePhrases.length === 0) return

        const nextLength = isDeleting ? text.length - 1 : text.length + 1
        const nextText = currentPhrase.slice(0, Math.max(0, nextLength))

        const typingSpeed = isDeleting ? 36 : 62
        const isPhraseComplete = !isDeleting && nextText === currentPhrase
        const isPhraseCleared = isDeleting && nextText.length === 0
        const delay = isPhraseComplete ? 1100 : isPhraseCleared ? 260 : typingSpeed

        const timeoutId = window.setTimeout(() => {
            setText(nextText)

            if (isPhraseComplete) {
                setIsDeleting(true)
                return
            }

            if (isPhraseCleared) {
                setIsDeleting(false)
                setPhraseIndex((prev) => (prev + 1) % safePhrases.length)
            }
        }, delay)

        return () => window.clearTimeout(timeoutId)
    }, [isDeleting, phraseIndex, safePhrases, text])

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setCursorVisible((prev) => !prev)
        }, 480)

        return () => window.clearInterval(intervalId)
    }, [])

    return (
        <p className={className}>
            {text.length === 0 ? (
                <span className={`inline-block transition-opacity ${cursorVisible ? 'opacity-100' : 'opacity-20'}`}>
                    |
                </span>
            ) : null}

            {currentPhraseChars.map((char, index) => {
                const isTyped = index < text.length
                const isCursorPosition = text.length > 0 && index === text.length - 1

                return (
                    <span key={`${char}-${index}`} className={isTyped ? 'opacity-100' : 'opacity-0'}>
                        {char}
                        {isCursorPosition ? (
                            <span className={`ml-1 inline-block transition-opacity ${cursorVisible ? 'opacity-100' : 'opacity-20'}`}>
                                |
                            </span>
                        ) : null}
                    </span>
                )
            })}
        </p>
    )
}
