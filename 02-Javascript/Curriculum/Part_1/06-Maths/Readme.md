# Javascript

## Math object

## Index
 - [Inleiding](#inleiding)
 - [Math Object Methodes](#math-object-methodes)
 - [Tranformation](#tranformation)

## Inleiding
Het wiskunde-object is een standaardobject waarvan de methoden en eigenschappen het gebruik van wiskundige constanten en functies mogelijk maken. Dit object is geen functie.

In tegenstelling tot andere globale objecten is Math geen constructeur. 
Alle eigenschappen en methoden van Math zijn statisch.

Om toegang te krijgen tot de PI-constante gebruiken we Math.PI. Om toegang te krijgen tot de sinus functie gebruiken we Math.sin(x), waarbij x het argument is voor deze methode.

Constanten worden gedefinieerd met de precisie van reële getallen in JavaScript.


Syntax:
```javascript
let x = Math.PI;            // Returns PI
let y = Math.sqrt(16);      // Returns the square root of 16
```

## Math Object Methodes
Methode Beschrijving:
```javascript
Math.ceil(x)	            //Returns the value of x rounded up to its nearest integer
Math.floor(x)	            //Returns the value of x rounded down to its nearest integer
Math.max(x, y, z, ...)	    //Returns the number with the highest value
Math.min(x, y, z, ...)	    //Returns the number with the lowest value
Math.random()	            //Returns a random number between 0 and 1
Math.round(x)	            //Returns the value of x rounded to its nearest integer
```

## Transformation
Functie beschrijving
```javascript
parseFloat();               //parseFloat() parses a string and returns a floating point number.
parseInt();                 //parseInt() parses a string and returns an integer.
```
&nbsp;

**Oefening**: [Math object](./Oefeningen.md)