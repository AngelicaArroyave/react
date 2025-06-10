// Desestructuración de objetos

const person = {
    name: 'Juan',
    age: 30,
    job: 'Developer',
    hobbies: ['Programming', 'Sports'],
    address: {
        street: 'Calle de la Paz',
        number: 123,
        city: 'Madrid',
        country: 'Spain',
    }
}
console.log("🚀 ~ person:", person)
console.log("🚀 ~ person:", person.job)

// Uso 1
const { name, age, job, hobbies } = person
console.log("🚀 ~ name, age, job, hobbies:", name, age, job, hobbies)

// Uso 2
// const printPerson = ({ name, age, job, range = 'Leader' }) => {
//     console.log("🚀 ~ printPerson ~  name, age, job, hobbies, address:",  name, age, job, range)
// }

// printPerson(person)

// Uso 3
const printPerson = ({ name, age, address }) => {
    return {
        keyName: name,
        keyAge: age,
        address
    }
}

// const { keyName, keyAge, address: { street, country } } = printPerson(person)
// console.log("🚀 ~ keyName, keyAge, street, country:", keyName, keyAge, street, country)

// Uso 4
const { keyName, keyAge, address } = printPerson(person)
console.log("🚀 ~ keyName, keyAge, address:", keyName, keyAge, address)
const { street, country } = address
console.log("🚀 ~ street, country:", street, country)