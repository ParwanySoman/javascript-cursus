# Javascript

## Index
 - [Operatoren](#Operatoren)
 - [Soorten operatoren](#soorten-operatoren)
   * [Vergelijkende operatoren](#Vergelijkende-operatoren)
   * [Rekenkundige operatoren](#Rekenkundige-operatoren)
   * [Logische operatoren](#Logische-operatoren)
   * [Overige operatoren](#Overige-operatoren)

## Operatoren

Nu we weten hoe we gegevens kunnen opslaan in variabelen is het tijd om deze variabelen ook effectief te gebruiken. Om bepaalde handelingen (operations) met onze variabelen te verrichten, kunnen we gebruik maken van operatoren. Een operator is een symbool dat een bepaalde handeling representeert.

<br>

## Soorten operatoren

### Vergelijkende operatoren

Een van de meest voorkomende handelingen is het vergelijken van gegevens. Dit wordt gedaan met behulp van [vergelijkende operatoren](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators). Wanneer je vergelijkende operatoren gebruikt krijg je ``true`` of ``false`` als waarde terug.

<br>

De operator ``===`` laat ons toe te controlleren als twee waarden **gelijk** zijn.

```
console.log(123 === 123) //output: true

console.log(123 === 456) //output: false
```

------

Met de operator ``!==`` kunnen we nagaan of twee waarden **niet gelijk** zijn.

```
console.log(123 !== 123) //output: false

console.log(123 !== 456) //output: true
```

------

De operatoren ``>`` en ``<`` controleren of de linker waarde **groter of kleiner** is dan de rechter waarde.

```
console.log(1 > 2) //output: false

console.log(1 < 2) //output: true
```

------

Indien we willen controleren als een waarde **groter of gelijk** of **kleiner of gelijk** gebruiken we respectievelijk ``>=``of ``<=``

```
console.log(3 >= 2) //output: true

console.log(2 >= 2) //output: true

console.log(1 >= 2) //output: false
```

### Rekenkundige operatoren

Uiteraard kan je met Javascript niet enkel zaken met elkaar vergelijken. Met behulp van de [rekenkundige operatoren](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators) ``+``, ``-``, ``*`` en ``/`` kunnen we getallen optellen, aftrekken, vermenigvuldigen en delen.

Twee andere veel gebruikte rekenkundige operatoren zijn ``++`` en ``--``. Kan je uit onderstaand voorbeeld afleiden wat deze doen?

```
let x = 1
let y = 1

console.log(x) //output: 1
console.log(y) //output: 1

x++
console.log(x) //output: 2

y--
console.log(y) //output: 0

```

### Logische operatoren

Er zijn drie soorten logische operatoren: ``&&``(EN), ``||``(OF), ``!`` (NIET).

De ``&&`` operator zal in de waarde ``true`` resulteren als het linker **EN** rechter statement ``true`` zijn.

De ``||`` operator zal in de waarde ``true`` resulteren als het linker **OF** rechter statement ``true`` zijn.

De ``!`` operator zal een omgekeerde waarde geven.

```
let honger = true
let dorst = false

console.log( honger && dorst ) 	//output: false
console.log( honger || dorst ) 	//output: true
console.log( !dorst ) 			//output: true

```

### Overige operatoren

Voor een volledige lijst met alle operatoren in Javascript kan je terecht op [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

 **Oefening**: [Oefeningen](oefeningen.md)
