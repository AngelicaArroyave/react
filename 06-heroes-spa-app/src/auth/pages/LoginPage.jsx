import { useNavigate } from 'react-router'

export const LoginPage = () => {
    const navigate = useNavigate()
    const onLogin = () => {
        navigate('/', { replace: true }) 
    }

    return (
        <div className="container">
            <h1 className="text-3xl mx-20">Login</h1>
            <hr />

            <button className="btn btn-primary mt-10 mx-30" onClick={ onLogin }>Login</button>
        </div>
    )
}
