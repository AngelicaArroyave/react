// Promesas

import { getHeroById } from "./bases/09-multiple-default-exports";

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroById(2)
        console.log("🚀 ~ setTimeout ~ heroe:", heroe)
        resolve(heroe)
        // reject('Error, not found hero')
    }, 1000)
})

newPromise.then(heroes => {
    console.log("🚀 ~ heroes:", heroes)
}). catch(error => {
    console.warn("🚀 ~ error:", error)
})

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroById(id)
            console.log("🚀 ~ setTimeout ~ heroe:", heroe)

            heroe ? resolve(heroe) : reject('Error, not found hero')
        }, 2000)
    })
}

getHeroByIdAsync(3).then(heroes => {
    console.log("🚀 ~ heroes:", heroes)
}). catch(error => {
    console.warn("🚀 ~ error:", error)
})