import { Navigate } from 'react-router'
import { useContext } from 'react'

import { AuthContext } from '../auth'

export const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)

    const lastPath = localStorage.getItem('lastPath') || '/';

    return (logged) ? <Navigate to={lastPath} /> : children
}
