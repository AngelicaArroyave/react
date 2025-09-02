import { useRef, useState } from 'react'

import { getGifsByQuery } from '../actions/get-gifs-by-query.action'
import type { Gif } from '../interfaces/gif.interface'

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    const [searchedGifs, setSearchedGifs] = useState<Gif[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({})

    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setSearchedGifs(gifsCache.current[term])
            return
        }

        const gifs = await getGifsByQuery(term)

        setSearchedGifs(gifs)
    }

    const handleSearch = async (query: string) => {
        query = query.toLowerCase().trim()

        if (!query) return

        if (previousTerms.includes(query)) return

        setPreviousTerms([query, ...previousTerms].slice(0, 8))

        const gifs = await getGifsByQuery(query)

        setSearchedGifs(gifs)
        gifsCache.current[query] = gifs
    }

    return {
        // Values or Properties
        previousTerms,
        searchedGifs,
        // Methods or Actions
        handleTermClicked,
        handleSearch
    }
}