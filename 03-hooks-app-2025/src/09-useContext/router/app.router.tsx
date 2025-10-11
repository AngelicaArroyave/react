import { createBrowserRouter, Navigate } from 'react-router';

import { AboutPage } from '../pages/about/AboutPage';
import { LoginPage } from '../pages/auth/LoginPage';
import { PrivateRouter } from './PrivateRouter';
import { ProfilePage } from '../pages/profile/ProfilePage';

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AboutPage />
    },
    {
        path: "/profile",
        element: <PrivateRouter element={ <ProfilePage /> } />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
]);