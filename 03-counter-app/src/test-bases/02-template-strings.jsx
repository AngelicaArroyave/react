// Template Strings

export function getGreeting(name, lastName) {
    return `Hello ${name} ${lastName}!`;
}

console.log(`Saludos: ${ getGreeting('Angie', 'Arias') }`);