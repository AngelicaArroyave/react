import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3> { category } </h3>
            { isLoading && <h2> Loading... </h2> }
            <div className='card-grid'>
                { images.map(image => (
                    <GifGridItem key={ image.id } {...image} />
                ) ) }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}