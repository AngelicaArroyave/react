import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    const sprites = Object.values(data?.sprites || {}).filter(img => img !== null)
    console.log("🚀 ~ MultipleCustomHooks ~ data:", data)

    return (
        <>
            <h1> Pokemon information </h1>
            <hr />
            { isLoading ? <LoadingMessage /> : <PokemonCard id={ counter } name={ data?.name } sprites={ sprites.slice(0, sprites.length - 2) } /> }

            <button className='btn btn-primary mt-2' onClick={ () => decrement(1) } disabled={ counter <= 1 }> Previous </button>
            <button className='btn btn-primary mt-2' onClick={ () => increment(1) }> Next </button>
        </>
    )
}