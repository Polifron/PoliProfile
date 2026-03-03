import ContactPage from '@/pages/contact/Page'
import { getRolesAtOrAbove, GUEST, type Role } from '@/roles/roles'

export const isImplemented = true
export const authority: Role[] = getRolesAtOrAbove(GUEST)

export default function ContactRoutePage() {
    return <ContactPage />
}
