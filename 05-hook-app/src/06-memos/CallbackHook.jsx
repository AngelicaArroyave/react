import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(2)

    const increment = useCallback(incrementNumber => {
        setCounter(value => value + incrementNumber)
    }, [])

    return (
        <>
            <h1> Callback Hook: { counter } </h1>
            <hr />
            <ShowIncrement increment={ increment } />
        </>
    )
}