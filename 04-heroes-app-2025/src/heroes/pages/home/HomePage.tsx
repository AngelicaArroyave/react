import { use, useMemo } from 'react'
import { useSearchParams } from 'react-router'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs'
import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { CustomPagination } from '@/components/custom/CustomPagination'
import { FavoriteHeroContext } from '@/heroes/context/FavoriteHeroContext'
import { HeroGrid } from '@/heroes/components/HeroGrid'
import { HeroStats } from '@/heroes/components/HeroStats'
import { useHeroSummary } from '@/heroes/hooks/useHeroSummary'
import { usePaginatedHero } from '@/heroes/hooks/usePaginatedHero'

export const HomePage = () => {
    const { favoriteCount, favorites } = use(FavoriteHeroContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const activeTab = searchParams.get('tab') ?? 'all'
    const page = searchParams.get('page') ?? '1'
    const limit = searchParams.get('limit') ?? '6'
    const category = searchParams.get('category') ?? 'all'

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains']

        return validTabs.includes(activeTab) ? activeTab : 'all'
    }, [activeTab])
    
    const { data: heroesResponse } = usePaginatedHero(+page, +limit, category)

    const { data: summary } = useHeroSummary()

    return (
        <>
            {/* Header */}
            <CustomJumbotron title="Superhero Universe" description="Discover, explore and manage superheroes and villains" />

            <CustomBreadcrumbs currentPage='Super heroes' />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Tabs */}
            <Tabs value={selectedTab} className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all" onClick={() => setSearchParams((prev) => {
                        prev.set('tab', 'all')
                        prev.set('category', 'all')
                        prev.set('page', '1')
                        return prev
                    })}>
                        All Characters ({summary?.totalHeroes})
                    </TabsTrigger>
                    <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => setSearchParams((prev) => {
                        prev.set('tab', 'favorites')
                        return prev
                    })}>
                        Favorites ({favoriteCount})
                    </TabsTrigger>
                    <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) => {
                        prev.set('tab', 'heroes')
                        prev.set('category', 'hero')
                        prev.set('page', '1')
                        return prev
                    })}>
                        Heroes ({summary?.heroCount})
                    </TabsTrigger>
                    <TabsTrigger value="villains" onClick={() => setSearchParams((prev) => {
                        prev.set('tab', 'villains')
                        prev.set('category', 'villain')
                        prev.set('page', '1')
                        return prev
                    })}>
                        Villains ({summary?.villainCount})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value='all'>
                    {/* Character Grid - Show all characters */}
                    <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                </TabsContent>
                <TabsContent value='favorites'>
                    {/* Character Grid - Show all favorites characters */}
                    <HeroGrid heroes={favorites} />
                </TabsContent>
                <TabsContent value='heroes'>
                    {/* Character Grid - Show all heroes characters */}
                    <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                </TabsContent>
                <TabsContent value='villains'>
                    {/* Character Grid - Show all villains characters */}
                    <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                </TabsContent>
            </Tabs>

            {/* Pagination */}
            {
                selectedTab !== 'favorites' && <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
            }
        </>
    )
}
