// import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { GifList } from './gifs/components/GifList'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { SearchBar } from './shared/components/SearchBar'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {
    const { previousTerms, searchedGifs, handleTermClicked, handleSearch } = useGifs()

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