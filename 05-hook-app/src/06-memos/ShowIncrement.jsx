import { memo } from 'react'
import PropTypes from 'prop-types'

export const ShowIncrement = memo(({ increment }) => {
    console.log('Rendering ShowIncrement')

    return (
        <>
            <button className="btn btn-primary" onClick={ () => increment(5) }> Increment </button>
        </>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.isRequired
}