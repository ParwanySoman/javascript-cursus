const vari = `Hello World!`
console.log(`1.1: ${vari}`);

const name = `Mariën`
const firstName = `Alexander`
const city = `Antwerp`
console.log(`1.2: Your name is ${firstName} ${name} and you live in ${city}`);

let inputName = window.prompt(`Please enter your name: `)
window.alert(`1.3: Hello ${inputName}`)

let inputFirstName = window.prompt(`Please enter your first name: `)
let inputLastName = window.prompt(`Please enter your last name: `)
let inputCity = window.prompt(`Please enter your city: `)
window.alert(`1.4: Your name is ${inputFirstName} ${inputLastName} and you live in ${inputCity}`)

let inputFloat1 = parseInt(window.prompt(`Please provide the first number for multiplication (in decimals): `))
let inputFloat2 = parseFloat(window.prompt(`Please provide the final number for multiplication (in decimals): `))
window.alert(`1.5: The result of the multiplciation is: ${inputFloat1*inputFloat2}`)

let inputInt1 = parseInt(window.prompt(`Please provide the first number for division (an integer): `))
let inputInt2 = parseInt(window.prompt(`Please provide the final number for division (in integer): `))
window.alert(`1.6: The result of the division is: ${inputInt1/inputInt2}, the modulus is: ${inputInt1%inputInt2}.`)

let inputShoeSize = parseFloat(window.prompt(`Please provide your shoe size: `))
let inputBirthYear = parseInt(window.prompt(`Please provide your birth year: `))
window.alert(`1.7: Your shoe size and your age concatenated is: ${((inputShoeSize*2)+5)*50-inputBirthYear+1768}`)

window.alert(`1.8: Fuck making stories...`)
