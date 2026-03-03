import { getRolesAtOrAbove, GUEST, type Role } from '@/roles/roles'

const NAV_ITEM_TYPE_ITEM = 'item' as const

type NavItemType = 'collapse' | 'item'

export interface NavItem {
    key: string
    path: string
    title: string
    translateKey: string
    icon: string
    type: NavItemType
    authority: Role[]
    expanded?: boolean
    subMenu?: NavItem[]
    isImplemented?: boolean
    hide?: boolean
}

const PRESENTATION: NavItem[] = [
    {
        key: 'nav.presentation.home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: getRolesAtOrAbove(GUEST),
        isImplemented: true,
    },
    {
        key: 'nav.presentation.contact',
        path: '/contact',
        title: 'Contact',
        translateKey: 'nav.contact',
        icon: 'contact',
        type: NAV_ITEM_TYPE_ITEM,
        authority: getRolesAtOrAbove(GUEST),
        isImplemented: true,
    },
    {
        key: 'nav.presentation.about',
        path: '/about',
        title: 'About',
        translateKey: 'nav.about',
        icon: 'about',
        type: NAV_ITEM_TYPE_ITEM,
        authority: getRolesAtOrAbove(GUEST),
        isImplemented: true,
    },
]

export const navigationConfig = {
    presentation: PRESENTATION,
}
