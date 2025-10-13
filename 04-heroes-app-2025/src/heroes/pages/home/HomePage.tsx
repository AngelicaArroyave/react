import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs'
import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { CustomPagination } from '@/components/custom/CustomPagination'
import { HeroGrid } from '@/heroes/components/HeroGrid'
import { HeroStats } from '@/heroes/components/HeroStats'

export const HomePage = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all')

    return (
        <>
            {/* Header */}
            <CustomJumbotron title="Superhero Universe" description="Discover, explore and manage superheroes and villains" />

            <CustomBreadcrumbs currentPage='Super Heroes' />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Tabs */}
            <Tabs value={activeTab} className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
                    <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => setActiveTab('favorites')}>Favorites (3)</TabsTrigger>
                    <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
                    <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
                </TabsList>

                <TabsContent value='all'>
                    {/* Character Grid - Show all characters */}
                    <HeroGrid />
                </TabsContent>
                <TabsContent value='favorites'>
                    {/* Character Grid - Show all favorites characters */}
                    <HeroGrid />
                </TabsContent>
                <TabsContent value='heroes'>
                    {/* Character Grid - Show all heroes characters */}
                    <HeroGrid />
                </TabsContent>
                <TabsContent value='villains'>
                    {/* Character Grid - Show all villains characters */}
                    <HeroGrid />
                </TabsContent>
            </Tabs>

            {/* Pagination */}
            <CustomPagination totalPages={8} />
        </>
    )
}
