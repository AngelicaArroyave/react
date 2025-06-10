import { useContext } from 'react'
import { useNavigate } from 'react-router'

import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/'

        login('Angie Arias')
        navigate(lastPath, { replace: true }) 
    }

    return (
        <div className="container">
            <h1 className="text-3xl m-8">Login</h1>
            <div className="divider divider-info"></div>

            <button className="btn btn-primary mt-10 mx-30" onClick={ onLogin }>Login</button>
        </div>
    )
}
