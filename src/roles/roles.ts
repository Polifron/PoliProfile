export const ROLES = {
    GUEST: 'GUEST',
    USER: 'USER',
    ADMIN: 'ADMIN',
    SUPERADMIN: 'SUPERADMIN',
} as const

export type Role = (typeof ROLES)[keyof typeof ROLES]

export const GUEST: Role = ROLES.GUEST

const roleHierarchy: Role[] = [ROLES.GUEST, ROLES.USER, ROLES.ADMIN, ROLES.SUPERADMIN]

export function getRolesAtOrAbove(minRole: Role): Role[] {
    const startIndex = roleHierarchy.indexOf(minRole)
    if (startIndex < 0) {
        return [ROLES.GUEST]
    }
    return roleHierarchy.slice(startIndex)
}
