import { useState } from 'react'

// import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action'
import { GifList } from './gifs/components/GifList'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { SearchBar } from './shared/components/SearchBar'
import type { Gif } from './gifs/interfaces/gif.interface'

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    const [searchedGifs, setSearchedGifs] = useState<Gif[]>([])

    const handleTermClicked = (term: string) => {
        console.log("🚀 ~ handleTermCliked ~ term:", term)
    }

    const handleSearch = async (query: string) => {
        query = query.toLowerCase().trim()

        if (!query) return

        if (previousTerms.includes(query)) return

        setPreviousTerms([query, ...previousTerms].slice(0, 8))

        const gifs = await getGifsByQuery(query)
        
        setSearchedGifs(gifs)
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title='Gifs Search' description='Discover and share the perfect Gif' />

            {/* Search */}
            <SearchBar placeholder="Search for whatever you want" onQuery={handleSearch} />

            {/* Previous searches */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={searchedGifs} />
        </>
    )
}