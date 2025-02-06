// Desestructuración de arreglos

const characters = ['Vegeta', ' Goku', 'Isuku', 'Luffy']
console.log("🚀 ~ characters:", characters)
console.log("🚀 ~ characters:", characters[3])

// Uso 1
const [characterOne, , characterThree] = characters
console.log("🚀 ~ characterOne, characterThree:", characterOne, characterThree)

// Uso 2
const returnArray = () => {
    return ['ABC', 123]
}
const [letters, numbers] = returnArray()
console.log("🚀 ~ letters, numbers:", letters, numbers)

// Uso 3
const utilizeState = (value) => {
    return [value, () => {
        console.log('Hello world')
    }]
}
const arr = utilizeState('Isuku')
console.log("🚀 ~ arr:", arr)
arr[1]()

const [name, setName] = utilizeState('Isuku')
console.log("🚀 ~ name:", name)
setName()