let inputAge = parseInt(window.prompt(`Please provide your age: `))
if (inputAge >= 18) {
  window.alert(`2.1: You are an adult!`)
} else {
  window.alert(`2.1: You are not yet an adult!`)
}

let inputMin = parseFloat(window.prompt(`Enter the minimum value for the range: `))
let inputMax = parseFloat(window.prompt(`Enter the maximum value for the range: `))
if (inputMin < inputMax) {
  let inputCurrent = parseFloat(window.prompt(`Enter a value to check if it is inside the specified range: `))
  if (inputMin <= inputCurrent && inputCurrent <= inputMax) {
    window.alert(`2.2: The provided value (${inputCurrent}) is in fact inside the range [${inputMin},${inputMax}]`)
  } else {
    window.alert(`2.2: The provided value (${inputCurrent}) is NOT inside the range [${inputMin},${inputMax}]`)
  }
} else {
  window.alert(`2.2: You kno nuthin' Jon Snow`)
}

let evenArray = []
for (var i = 1; i <= 100; i++) {
  if (i%2 == 0) {
    evenArray.push(i)
  }
}
console.log(`2.3: Array of even numbers from 1 to 100 (using for loop range 100 and modulus) ${evenArray}`);
evenArray = []
for (var i = 1; i <= 50; i++) {
  evenArray.push(i*2)
}
console.log(`2.3: Array of even numbers from 1 to 100 (using for loop range 50 and *2) ${evenArray}`);
evenArray = []
let n = 1
while (n<=100) {
  if (n%2 == 0) {
    evenArray.push(n)
  }
  n++
}
console.log(`2.3: Array of even numbers from 1 to 100 (using while loop range 100 and modulus) ${evenArray}`);

evenArray = []
let unevenArray = []
for (var i = 1; i <= 100; i++) {
  if (i%2 == 0) {
    evenArray.push(i/2)
  } else {
    unevenArray.push(i*3)
  }
}
console.log(`2.4: For numbers 1-100, \nall even numbers divided by 2: ${evenArray} \nall uneven numbers multiplied by 3: ${unevenArray}`);

let secretNumber = window.prompt(`What is your favorite number?`)
while (secretNumber !== `42`) {
  secretNumber = window.prompt(`Are you sure? Try again ;)`)
}
window.alert(`2.5: I always knew 42 was your favorite number. LUL`)

let inputDayNumber = parseInt(window.prompt(`Enter a number between 1-7: `))
if (1 <= inputDayNumber && inputDayNumber <= 7) {
  switch (inputDayNumber) {
    case 1:
      window.alert(`2.6: The first day of the week is: Monday`)
    break;
    case 2:
      window.alert(`2.6: The second day of the week is: Tuesday`)
    break;
    case 3:
      window.alert(`2.6: The third day of the week is: Wednesday`)
    break;
    case 4:
      window.alert(`2.6: The fourth day of the week is: Thursday`)
    break;
    case 5:
      window.alert(`2.6: The fifth day of the week is: Friday`)
    break;
    case 6:
      window.alert(`2.6: The sixth day of the week is: Saturday`)
    break;
    case 7:
      window.alert(`2.6: The seventh day of the week is: Sunday`)
    break;
  }
} else {
  window.alert(`2.6: You're an idiot, fak u!`)
}

let inputNumber = parseInt(window.prompt(`Provide an integer: `))
let sum = inputNumber
while (inputNumber-1 !== 0) {
  sum += parseInt(window.prompt(`Provide another integer: `))
  inputNumber--
}
window.alert(`2.7: The sum of all numbers provided is: ${sum}`)
