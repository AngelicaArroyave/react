import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })
    const { username, email, password } = formState

    return (
        <>
            <h1> Simple Form with Custom Hook </h1>
            <hr />
            <input type="text" className="form-control" placeholder="Username" name="username" value={ username } onChange={ onInputChange } />
            <input type="email" className="form-control mt-2" placeholder="example@gmail.com" name="email" value={ email } onChange={ onInputChange } />
            <input type="password" className="form-control mt-2" placeholder="Password" name="password" value={ password } onChange={ onInputChange } />
            <hr />
            <button className='btn btn-outline-danger' onChange={ onResetForm }> Reset </button>
        </>
    )
}