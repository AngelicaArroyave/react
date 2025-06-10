import { useLayoutEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export const PokemonCard = ({ id, name, sprites = [] }) => {
    const h2Ref = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, heigh: 0 })

    useLayoutEffect(() => {
        const { height, width } = h2Ref.current.getBoundingClientRect()

        setBoxSize({ height, width })
    }, [name])

    return (
        <section style={{ height: 150, display: 'flex', flexDirection: 'row' }}>
            <h2 className="text-capitalize" ref={ h2Ref } > #{ id } - { name } </h2>

            <div>
                { sprites.map(sprite => (
                    <img key={ sprite } src={ sprite } alt={ name } className="img-fluid" style={{ maxHeight: 200 }} />
                )) }
            </div>
            <pre> { JSON.stringify(boxSize) } </pre>
        </section>
    )
}

PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.array
}