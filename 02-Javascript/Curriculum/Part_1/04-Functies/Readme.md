# Functies

Functies zijn herbruikbare code blokken die een specifieke taak uitvoeren. Om de code in een functie uit te voeren, noemt u hem gewoon bij zijn naam. Een functie kan parameters ontvangen, en een functie kan een waarde teruggeven. 

Wanneer je een functie aangemaakt hebt kan je deze aanroepen met behulp van de naam van de functie gevolgd door ``()``.

```
findAnInterestingThing();
```

## Functies tot ES6

Tot de invoering van ES6 werden functies aangemaakt met behulp van het trefwoord ``function`` deze verouderde manier van het aanmaken van een functie vind je nog vaak terug.

Om een functie te creëren op de oude manier, gebruikt je dus het trefwoord ``function`` gevolgd door de parameters tussen haakjes. Schrijf tenslotte een blok met de code die door de functie uitgevoerd moet worden. 
Hier is een functie die twee getallen optelt:
```
var add = function(a, b) {
    return a + b;
}
```

"a" en "b" zijn de parameters van de functie, en de waarde die de functie terug geeft wordt aangegeven door het sleutelwoord ``return``. 
Het return keyword stopt ook de uitvoering van de code in de functie. 
Na de ``return`` wordt er dus niets meer uitgevoerd.

```
var result = add(1, 2); 
console.log(result) //output: 3
```

## Arrow functies

Sinds de invoering van ES6 beschikken we over een andere manier om functies te declareren, de arrow functies.
Deze maken niet langer gebruik van het woord ``function``. 

Een arrow functie bestaat uit een reeks parameters die tussen ``()`` geplaatste worden, gevolgd door een arrow ``=>`` en de uit te voeren code tussen ``{}``.

```
(param1, param2, ..., paramN) => { 
  // hier komt je code
 };
```

Uiteraard kan je een arrow functie ook opslaan in een variabele om deze ergens anders in je code te gebruiken:

```
const myFunction = (param1, param2) => {
  // je code
};

myFunction(param1, param2);
```

Met een arrow functie kan je ook beroep doen op een automatische return. Hiervoor plaats je je arrow functie op 1 lijn en laat je de ``{}`` achterwege.

```
// Automatische return
const add = (getal1, getal2) => getal1 + getal2;

// Gewone arrow functie
const add =  (getal1, getal2) => {
  return getal1 + getal2;
}

```



**Oefening**: [Functies](./Oefeningen.md)