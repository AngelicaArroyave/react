import { useEffect, useState } from 'react'
import { getStickers } from '../helpers/getStickers'

export const useFetchStickers = category => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getStickers(category)

        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        images,
        isLoading
    }
}
