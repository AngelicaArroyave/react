import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'

import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs'
import { SearchControls } from './ui/SearchControls'

const SearchPage = () => {
    return (
        <>
            {/* Header */}
            <CustomJumbotron title="Search superheroes" description="Discover, explore and manage superheroes and villains" />

            <CustomBreadcrumbs currentPage='Search heroes'
                                // breadcrumbs={
                                //     [
                                //         { label: 'Home', to: '/' },
                                //         { label: 'Home1', to: '/' },
                                //         { label: 'Home2', to: '/' },
                                //     ]
                                // } 
            />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and Searches */}
            <SearchControls />
        </>
    )
}

export default SearchPage