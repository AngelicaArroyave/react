import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async() => {
        const imgs = await getGifs(category)
        setImages(imgs)
        setIsLoading(false)
    }

    useEffect(() => {
        // Forma 1
        // getGifs(category).then(imgs => setImages(imgs))

        // Forma 2
        getImages()
    }, [])

    return {
        images,
        isLoading
    }
}