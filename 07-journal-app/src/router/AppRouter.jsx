import { Navigate, Route, Routes } from 'react-router'

import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useCheckAuth } from '../hooks/useCheckAuth'

export const AppRouter = () => {
    const status = useCheckAuth()

    if(status === 'checking') return <CheckingAuth />

    return (
        <Routes>
            {
                status === 'authenticated' ? <Route path="/*" element={ <JournalRoutes /> } /> : <Route path="/auth/*" element={ <AuthRoutes /> } />
            }

            <Route path="/*" element={ <Navigate to='/auth/login' /> } />
        </Routes>
    )
}
