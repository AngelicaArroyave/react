import { useContext } from 'react'

import { AuthContext, LoginPage } from '../auth'
import { Navigate } from 'react-router'

export const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)

    const lastPath = localStorage.getItem('lastPath') || '/';

    return (logged) ? <Navigate to={lastPath} /> : children
}
