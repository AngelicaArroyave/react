// Import, export

import heroes, { owners } from '../data/heroes';

// console.log(heroes);
// console.log("🚀 ~ owners:", owners)

export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}

// console.log("🚀 ~ getHeroById ~ getHeroById:", getHeroById(3))

const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner);
}

// console.log("🚀 ~ getHeroesByOwner ~ getHeroesByOwner:", getHeroesByOwner('DC'))