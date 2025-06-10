import { useMemo } from 'react'

import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                {
                    heroes.map(hero => (
                        <HeroCard key={ hero.id } hero={ hero } />
                    ))
                }
            </div>
        </>
    )
}
