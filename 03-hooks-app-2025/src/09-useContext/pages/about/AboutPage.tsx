import { use } from 'react'
import { Link } from 'react-router'

import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'

export const AboutPage = () => {
    const { isAuthenticated, logout } = use(UserContext)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">About Page</h1>
            <hr />

            <div className="flex flex-col gap-2 pt-4">
                {/* Perfil de usuario si tiene sesion */}
                {
                    isAuthenticated && (
                        <Link className="hover:text-blue-500 underline text-2xl" to="/Profile">Profile</Link>
                    )
                }

                {/* Login logout */}
                {
                    isAuthenticated ? (
                        <Button variant='destructive' onClick={logout}>Exit</Button>
                    ) : (
                        <Link className="hover:text-blue-500 underline text-2xl" to="/login">Login</Link>
                    )
                }
            </div>
        </div>
    )
}