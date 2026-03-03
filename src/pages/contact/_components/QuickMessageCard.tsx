import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppSettings } from '@/context/AppSettingsContext'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export default function QuickMessageCard() {
  const { t } = useAppSettings()
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? ''
  // endpoint may point to third-party form service (e.g. Formspree) or internal API
  const contactEndpoint =
    import.meta.env.VITE_CONTACT_ENDPOINT || `${apiBaseUrl}/api/send-email`
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', text: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({
        type: 'error',
        text: t.contact.validation,
      })
      return
    }

    setIsSending(true)
    setFeedback({ type: '', text: '' })

    try {
      const isThirdParty = Boolean(import.meta.env.VITE_CONTACT_ENDPOINT)
      const headers = isThirdParty
        ? { 'Content-Type': 'application/x-www-form-urlencoded' }
        : { 'Content-Type': 'application/json' }
      const body = isThirdParty
        ? new URLSearchParams({ name, email, message })
        : JSON.stringify({ name, email, message })

      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers,
        body,
      })

      const rawResponse = await response.text()
      let data = null

      if (rawResponse) {
        try {
          data = JSON.parse(rawResponse)
        } catch {
          data = null
        }
      }

      if (!response.ok) {
        throw new Error(data?.error || t.contact.sendError)
      }

      setFeedback({ type: 'success', text: t.contact.sendSuccess })
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      setFeedback({
        type: 'error',
        text: error instanceof Error ? error.message : t.contact.sendError,
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.contact.quickMessage}</CardTitle>
        <CardDescription>{t.contact.quickMessageDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t.contact.namePlaceholder}
            name="name"
            autoComplete="name"
          />
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder={t.contact.emailPlaceholder}
            name="email"
            autoComplete="email"
          />
          <Textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={t.contact.messagePlaceholder}
            className="min-h-28"
            name="message"
          />
          {feedback.text ? (
            <p className={`text-sm ${feedback.type === 'error' ? 'text-destructive' : 'text-emerald-600 dark:text-emerald-400'}`}>
              {feedback.text}
            </p>
          ) : null}
          <Button type="submit" className="w-full" disabled={isSending}>
            {isSending ? t.contact.sending : t.contact.send}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
