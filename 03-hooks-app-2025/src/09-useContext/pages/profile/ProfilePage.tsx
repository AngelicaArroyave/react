import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'
import { use, useContext } from 'react'
import { useNavigate } from 'react-router'

export const ProfilePage = () => {
    // Forma 1
    // const { user } = useContext(UserContext)

    // Forma 2
    const { user, logout } = use(UserContext)

    const navigation = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl">User profile</h1>
            <hr />

            <pre className="my-4 w-[80%] overflow-x-auto">{ JSON.stringify(user, null, 2) }</pre>

            <Button variant="destructive" onClick={logout}>Exit</Button>
        </div>
    )
}