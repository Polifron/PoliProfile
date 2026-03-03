import HomePage from '@/pages/home/Page'
import { getRolesAtOrAbove, GUEST, type Role } from '@/roles/roles'

export const isImplemented = true
export const authority: Role[] = getRolesAtOrAbove(GUEST)

export default function HomeRoutePage() {
    return <HomePage />
}
