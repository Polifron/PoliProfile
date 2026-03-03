import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/app/layout'
import { useRoleContext } from '@/context/RoleContext'
import type { Role } from '@/roles/roles'

type PageModule = {
    default: React.FC
    isImplemented?: boolean
    authority?: Role[]
}

type RouteDefinition = {
    path: string
    element: React.ReactElement
}

export default function AppRoutes() {
    const { role } = useRoleContext()

    const pages = import.meta.glob('/src/app/**/page.tsx', { eager: true }) as Record<string, PageModule>

    const routes: RouteDefinition[] = Object.entries(pages)
        .map(([path, module]): RouteDefinition | null => {
            const { default: Component, isImplemented = true, authority = [] } = module

            if (!isImplemented || (authority.length > 0 && !authority.includes(role))) {
                return null
            }

            const routePath = path
                .replace('/src/app', '')
                .replace(/\/page\.tsx$/, '')
                .replace(/\.tsx$/, '')
                .replace(/\/index$/, '')
                .replace(/\[(\w+)\]/g, ':$1') || '/'

            return {
                path: routePath,
                element: <Component />,
            }
        })
        .filter((route): route is RouteDefinition => route !== null)

    return (
        <Layout>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </Layout>
    )
}
