// Arreglos

// const arr = new Array(100); // Formaa 1
// const arr = [] // Forma 2
// arr.push(1)
// arr.push(2)
// arr.push(3)
const arr = [1, 2, 3, 4] // Forma 3
console.log("🚀 ~ arr:", arr)

let arr2 = arr
arr2.push(5)
console.log("🚀 ~ arr:", arr)
console.log("🚀 ~ arr2:", arr2)

let arr3 = [...arr, 6]
console.log("🚀 ~ arr3:", arr3)

const arr4 = arr2.map(x => x * 2)
console.log("🚀 ~ arr4:", arr4)
