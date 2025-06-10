import { getHeroByIdAsync } from '../../src/test-bases/10-promises'

describe('Test in 10-promises', () => {
    test('getHeroByIdAsync should return a hero', (done) => {
        const id = 1
        getHeroByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual(expect.any(Object))
                expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
                done()
            })
    })

    test('getHeroByIdAsync should return a message error if id is not exist', (done) => {
        const id = 20
        getHeroByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy()
                done()
            })
            .catch(error => {
                expect(error).toBe(`Error, not found hero with ID: ${id}`)
                done()
            })
    })
})