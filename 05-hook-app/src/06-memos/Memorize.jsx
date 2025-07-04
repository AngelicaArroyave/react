import { Small } from './Small'
import { useCounter } from '../hooks/useCounter'
import { useState } from 'react'

export const Memorize = () => {
    const { counter, increment } = useCounter(1)
    const [show, setShow] = useState(true)

    return (
        <>
            <h1> Counter: <Small value={ counter } /> </h1>
            <hr />
            <button className="btn btn-primary" onClick={ () => increment(1) }> +1 </button>
            <button className='btn btn-outline-dark' onClick={ () => setShow(!show) }> Show/Hide { JSON.stringify(show) } </button>
        </>
    )
}