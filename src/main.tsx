import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppSettingsProvider } from '@/context/AppSettingsContext'
import { RoleProvider } from '@/context/RoleContext'
import App from '@/App'
import '@/index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RoleProvider>
            <AppSettingsProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AppSettingsProvider>
        </RoleProvider>
    </StrictMode>,
)
