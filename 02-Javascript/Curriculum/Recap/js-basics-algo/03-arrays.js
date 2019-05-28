const array1 = [1, 2, 3, 4, 5]
const array2 = [100, 101, 102]
const sumOfElements = (array) => {
  let sum = 0;
  array.forEach(element => {
    sum += element
  })
  return sum
}
console.log(`3.1: The sum of the elements in ${array1} is equal to: ${sumOfElements(array1)}`);
console.log(`3.1: The sum of the elements in ${array2} is equal to: ${sumOfElements(array2)}`);

const avgOfElements = (array) => {
  let sum = 0;
  array.forEach(element => {
    sum += element
  })
  return sum/array.length
}
console.log(`3.2: The average of the elements in ${array1} is equal to: ${avgOfElements(array1)}`);
console.log(`3.2: The average of the elements in ${array2} is equal to: ${avgOfElements(array2)}`);

const dupeArray = (array) => {
  let newArray = []
  array.forEach(element => newArray.push(element))
  return newArray
}
console.log(`3.3a: The duped array using own function (includes ForEach): ${dupeArray(array1)}`);
const dupeArray2 = (array) => {
  return array.map(element => element)
}
console.log(`3.3b: The duped array using the map method: ${dupeArray2(array1)}`);

const minMaxArray = (array) => {
  let minArray = Math.min.apply(null, array)
  let maxArray = Math.max.apply(null, array)
  return [minArray, maxArray]
}
console.log(`3.4: The (min,max) of ${array2} is: (${minMaxArray(array2)})`);
