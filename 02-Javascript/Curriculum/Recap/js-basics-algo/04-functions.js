const calcSurface = (a, b) => {
  return a*b
}
let inputLength = window.prompt(`Provide the length of the rectangle: `)
let inputHeight = window.prompt(`Provide the height of the rectangle: `)
window.alert(`4.1: The area of the rectangle equals: ${calcSurface(inputLength, inputHeight)}`)

const rand10 = () => {
  return Math.floor(Math.random() * 10 + 1)
}
console.log(`4.2: A random number between 1 and 10: ${rand10()}`);

let inputArrayLength = window.prompt(`How many random numbers should the array contain?`)
const multiRand = (n) => {
  let arrayOfRng = []
  for (let i = 0; i < n ; i++) {
    arrayOfRng.push(rand10())
  }
  return arrayOfRng
}
console.log(`4.3: An array of ${inputArrayLength} random numbers between 1-10: ${multiRand(inputArrayLength)}`);

let testArray = multiRand(inputArrayLength)
const average = (arr) => {
  let sum = 0;
  arr.forEach(element => {
    sum += element
  })
  return sum/arr.length
}
const min = (arr) => {
  return Math.min.apply(null, arr)
}
const max = (arr) => {
  return Math.max.apply(null, arr)
}
console.log(`4.4: An array of ${inputArrayLength} random numbers between 1-10: ${testArray} \nThe average of all elemnts in the array: ${average(testArray)} \nThe minimum of all elements in the array: ${min(testArray)} \nThe maximum of all elements in the array: ${max(testArray)}`);

const calcDistance = (a,b) => {
  let base = Math.abs(b[0] - a[0])
  let height = Math.abs(b[1] - a[1])
  return Math.hypot(base, height)
}
let coordsA = window.prompt(`Provide the coordinates of point A (in format: (x,y) ):`).slice(1,-1).split(`,`)
let coordsB = window.prompt(`Provide the coordinates of point B (in format: (x,y) ):`).slice(1,-1).split(`,`)
window.alert(`4.5: The disctance between A and B is: ${calcDistance(coordsA,coordsB)}`)

let factorialReq = window.prompt(`Of which number should we calculate the factorial?`)
const factorial = (n) => {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}
console.log(`4.6: The factorial of ${factorialReq} is: ${factorial(factorialReq)}`);
