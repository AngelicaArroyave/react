import { useContext, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link, useNavigate } from 'react-router'
import { UserContext } from '@/09-useContext/context/UserContext'
import { toast } from 'sonner'

export const LoginPage = () => {
    const { login } = useContext(UserContext)
    const [userId, setUserId] = useState('')

    const navigation = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const result = login(+userId)
        
        if (!result) toast.error('User not found')

        navigation('/profile')
    }

    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold">Login</h1>
            <hr />

            <form className="flex flex-col gap-2 my-10 items-center"
                    onSubmit={handleSubmit}>
                <Input type="number" placeholder="User ID" 
                        value={userId}
                        onChange={event => setUserId(event.target.value)} />

                <button type="submit">Logout</button>

                <Link to="/about">
                    <Button variant="ghost">Return to main page</Button>
                </Link>
            </form>
        </div>
    )
}