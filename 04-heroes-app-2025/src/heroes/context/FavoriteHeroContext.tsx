import { createContext, useEffect, useState, type PropsWithChildren } from 'react'

import type { Hero } from '../types/hero.interface'

interface FavoriteHeroProps {
    // States
    favorites: Hero[]
    favoriteCount: number

    // Methods
    isFavorite: (hero: Hero) => boolean
    toggleFavorite: (hero: Hero) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroProps)

const getFavoritesFromLocalStorage = (): Hero[] => {
    const favorites = localStorage.getItem('favorites')

    return favorites ? JSON.parse(favorites) : []
}

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])
    
    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find(h => h.id === hero.id)

        if (heroExist) {
            setFavorites(favorites.filter(h => h.id !== hero.id))
            return
        }

        setFavorites([...favorites, hero])
    }

    return (
        <FavoriteHeroContext value={{
            favoriteCount: favorites.length,
            favorites: favorites,
            isFavorite: (hero: Hero) => favorites.some(h => h.id === hero.id),
            toggleFavorite: toggleFavorite
        }}>
            { children }
        </FavoriteHeroContext>
    )
}