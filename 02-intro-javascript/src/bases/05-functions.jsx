// Funciones

// Forma 1
// function greeting(name) {
//     return `Hello ${name}!`;
// }

// Forma 2
// const greeting = function (name) {
//     return `Hello ${name}!`;
// }

// Forma 3
// const greeting = (name) => {
//     return `Hello ${name}!`;
// }

// Forma 4
const greeting = (name) => `Hello ${name}!`;

console.log(greeting('John'));

// Forma 1
// const getUser = () => {
//     return {
//         uid: '123',
//         name: 'John Doe',
//         age: 30
//     }
// }

// Forma 2
const getUser = () => ({
    uid: '123',
    name: 'John Doe',
    age: 30
})

console.log(getUser());