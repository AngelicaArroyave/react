// Operador condicional ternario

const active = true

// Forma 1
const message = active ? 'Active' : 'Inactive'
console.log("🚀 ~ message:", message)

// Forma 2
const message2 = !active && 'Active'
console.log("🚀 ~ message2:", message2)

// Forma 3
const message3 = (active === true) && 'Active'
console.log("🚀 ~ message3:", message3)