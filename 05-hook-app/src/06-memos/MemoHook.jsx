import { useCounter } from '../hooks/useCounter'
import { useMemo, useState } from 'react'

const heavyStuff = (iterationNumber = 100) => {
    for(let i = 0; i <= iterationNumber; i++) {
        console.log('Iteration')        
    }

    return `${ iterationNumber } iterations realized`
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(2000)
    const [show, setShow] = useState(true)

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1> Counter: <small> { counter } </small> </h1>
            <hr />
            <h4> { memorizeValue } </h4>
            <button className="btn btn-primary" onClick={ () => increment(1) }> +1 </button>
            <button className='btn btn-outline-dark' onClick={ () => setShow(!show) }> Show/Hide { JSON.stringify(show) } </button>
        </>
    )
}