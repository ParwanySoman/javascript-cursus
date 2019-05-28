const inputName = window.prompt(`What is the name of your favorite TV Show?`)
const inputYear = window.prompt(`What is the production year of the TV Show?`)
const inputActors = window.prompt(`What are the names of the lead actors on the TV Show? (seperated by commas)`)
let tvSerie = {
  "name": "" ,
  "prodYear": "",
  "actors": ""
}
const askTvSerie = (n,y,a) => {
  tvSerie.name = n
  tvSerie.prodYear = y
  tvSerie.actors = a.split(", ")
  return tvSerie
}
console.log(askTvSerie(inputName, inputYear, inputActors))

let newSerie = {
  "name": "Chaudfontaine",
  "prodYear": "2019",
  "actors": ""
}
const randomizeCast = (object) => {
  newSerie.actors = object.actors.slice()
  let currentIndex = newSerie.actors.length, tempValue, randomIndex;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    tempValue = newSerie.actors[currentIndex]
    newSerie.actors[currentIndex] = newSerie.actors[randomIndex]
    newSerie.actors[randomIndex] = tempValue
  }
  return newSerie
}
console.log(randomizeCast(tvSerie));
