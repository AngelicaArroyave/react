import { Navigate, useLocation } from 'react-router'
import { useContext } from 'react'

import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)
    const { pathname, search } = useLocation()

    const lastPath = pathname + search

    localStorage.setItem('lastPath', lastPath)

    return (logged) ? children : <Navigate to="/login" />
}
