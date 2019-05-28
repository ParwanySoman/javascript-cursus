# Javascript

## Arrays

Een array is een geordende verzameling van gegevens. Arrays worden gebruikt om meerdere waarden op te slaan in 1 variabele.
Omdat een array een geordende verzameling is heeft elk element in de array zijn eigen index. Met behulp van deze index kunnen we 1 specifiek element uit de array opvragen.
De telling in een array begint bij `0`, dit wil zeggen dat het eerste element van een array de index `0` heeft. 
Voor de volgende elementen wordt de index stapsgewijs verhoogd, zodat het laatste element van de array een index heeft die 1 lager is dan de lengte van de array.


In JavaScript kan een array op 3 verschillende manieren aangemaakt worden.
```
const arr1 = [element0, element1, ..., elementN]; // Maakt een array aan met de opgegeven elementen, kan ook leeg zijn
const arr2 = new Array(element0, element1, ..., elementN); // Oude methode
const arr3 = new Array(arrayLength) // Maakt een array aan met de opgegeven lengte
```

Je selecteert een specifiek element uit een array met behulp van de index tussen ``[]`` haakjes:
```
const shoppingList = ['Milk', 'Bread', 'Beans'];

console.log(shoppingList[0]); // Output: 'Milk'
```

Met behulp van dezelfde syntax kan je ook een specifieke positie in je array aanpassen door deze een nieuwe waarde te geven:
```
shoppingList[1] = 'Cookies';
// shoppingList is now: ['Milk', 'Cookies', 'Beans']
```

Je kan het aantal elementen in de array opvragen door gebruik te maken van de `length` eigenschap:

```
console.log(shoppingList.length); // Output: 3
```

De `push` en `pop` methodes worden gebruikt om een element toe te voegen of te verwijderen aan het einde van de array:
```
shoppingList.push('New car');
// shoppingList is now: ['Milk', 'Bread', 'Beans', 'New car']
shoppingList.pop();
// shoppingList is now: ['Milk', 'Bread', 'Beans']
```

Javascript beschikt over een hele verzameling handige functies om met arrays te werken.

In het onderstaand voorbeeld maken we gebruik van de [``for each``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) functie om op elk element in de array een functie toe te passen.

```
const sayHello = (name) => {
    console.log("Hello from " + name);         // deze functie ontvangt een naam als parameter en print een zin in de console.
};

const persons = ["Tom", "Yoda", "Ron"];  // Maakt een array aan met de opgegeven namen die wordt opgeslaan in de variabele 'persons'

persons.forEach(person => sayHello(person));
```
&nbsp;

**Oefening**: [Arrays](./Oefeningen.md)