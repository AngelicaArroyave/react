// Promesas

import { getHeroById } from './08-import-export'

export const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroById(id)

            heroe ? resolve(heroe) : reject(`Error, not found hero with ID: ${id}`)
        }, 1000)
    })
}