// Template Strings

const name = 'John';
const lastName = 'Doe';
// const fullName = name + ' ' + lastName; // Forma 1
// const fullName = `${name} ${lastName}`; // Forma 2
const fullName = `
    ${name}
    ${lastName}
    ${1 + 1}
`; // Forma 3
console.log("🚀 ~ fullName:", fullName)

function getGreeting(name, lastName) {
    return `Hello ${name} ${lastName}!`;
}

console.log(`Saludos: ${ getGreeting(name, lastName) }`);
