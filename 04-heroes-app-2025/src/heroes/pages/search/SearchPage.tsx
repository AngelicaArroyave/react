import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs'
import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroGrid } from '@/heroes/components/HeroGrid'
import { HeroStats } from '@/heroes/components/HeroStats'
import { SearchControls } from './ui/SearchControls'
import { searchHeroesAction } from '@/heroes/actions/search-heroes.action'

const SearchPage = () => {
    const [searchParams] = useSearchParams()
    const name = searchParams.get('name') ?? undefined
    const strength = searchParams.get('strength') ?? undefined

    const { data: searchedHero = [] } = useQuery({
        queryKey: ['search-hero', { name, strength }],
        queryFn: () => searchHeroesAction({ name, strength }),
        staleTime: 1000 * 60 * 5
    })

    if (!searchedHero) return <div>Loading...</div>

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

            {/* Heroes */}
            <HeroGrid heroes={searchedHero} />
        </>
    )
}

export default SearchPage