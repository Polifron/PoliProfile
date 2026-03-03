import ContactInfoCard from '@/pages/contact/_components/ContactInfoCard'
import QuickMessageCard from '@/pages/contact/_components/QuickMessageCard'

export default function ContactPageBody() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ContactInfoCard />
      <QuickMessageCard />
    </div>
  )
}
