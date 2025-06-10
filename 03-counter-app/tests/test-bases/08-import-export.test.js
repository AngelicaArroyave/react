import { getHeroById, getHeroesByOwner } from '../../src/test-bases/08-import-export'

describe('Test in 08-import-export', () => {
    test('getHeroById should return a hero by id', () => {
        const id = 1
        const hero = getHeroById(id)
        
        expect(hero).toEqual(expect.any(Object))
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroById should return undefined if id is not exist', () => {
        const id = 20
        const hero = getHeroById(id)
        
        expect(hero).toBeUndefined()
        expect(hero).toBeFalsy()
    })

    test('getHeroesByOwner should return a array of heroes by DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        console.log("🚀 ~ test ~ heroes:", heroes)
        
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])
    })

    test('getHeroesByOwner should return a array of heroes by Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        
        expect(heroes.length).toBe(2)
        expect(heroes).toEqual(heroes.filter(hero => hero.owner === owner))
    })
})