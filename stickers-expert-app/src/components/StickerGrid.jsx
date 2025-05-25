import { StickerItem } from './StickerItem'
import { useFetchStickers } from '../hooks/useFetchStickers'
import { SkeletonCard } from './SkeletonCard'

export const StickerGrid = ({ category }) => {
    const { images, isLoading } = useFetchStickers(category)
    const numberOfSkeletons = 12

    return (
        <>
            <div className='grid grid-cols-3 justify-items-center'>
                {
                    isLoading && (
                        Array.from({ length: numberOfSkeletons }).map((_, i) => (
                            <SkeletonCard key={ i } />
                        ))
                    )
                }

                {
                    images.map((image) => (
                        <StickerItem key={ image.id } { ...image } />
                    ))
                }
            </div>
        </>
    )
}
