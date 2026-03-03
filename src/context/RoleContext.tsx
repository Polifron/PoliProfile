import { createContext, useContext, useMemo, useState } from 'react'
import type { Role } from '@/roles/roles'
import { GUEST } from '@/roles/roles'

type RoleContextValue = {
    role: Role
    setRole: (role: Role) => void
}

const RoleContext = createContext<RoleContextValue | null>(null)

export function RoleProvider({ children }: { children: React.ReactNode }) {
    const [role, setRole] = useState<Role>(GUEST)

    const value = useMemo(() => ({ role, setRole }), [role])

    return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
}

export function useRoleContext() {
    const context = useContext(RoleContext)

    if (!context) {
        throw new Error('useRoleContext must be used within RoleProvider')
    }

    return context
}
