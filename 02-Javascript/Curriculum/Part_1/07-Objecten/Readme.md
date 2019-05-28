# Javascript

# Objecten

## Index
 1. [Introductie](#introductie)
 1. [Methodes](#methodes)
 1. [Literals & Constructors](#literals-constructors)
 1. [Voorbeeld](#voorbeeld)


### Introductie

Tot nu hebben we een verzameling van gegevens telkens opgeslaan in een array. Een array is zee handig om veel gelijkaardige gegevens (verschillende kleuren, films, plaatsen, ...) op te slaan. Wanneer er meer variatie in je gegevens zit kan je array er verwarrend uit zien. Willen we bijvoorbeeld de eigenschappen van een persoon opslaan in een array, dan zou dit er als volgt uit zijn: 

```
const persoon = ["Jommeke", "blond", 67, 175, "Pekkie", 72]
```

Je kan proberen te raden welke eigenschappen hier beschreven worden, maar het is niet duidelijk welk cijfer het gewicht van de persoon is en welk cijfer zijn persoonlijk record rozijnen eten is.

Met Javascript kan je gelukkig ook beroep doen op **objecten**. Een object is een verzameling van eigenschap: waarde die dit object beschrijven. Deze verzameling wordt tussen ``{}`` geplaatst en worden gescheiden door ``,``.

```
let mijnEersteObject = {
    eigenschap1: "Eerste eigenschap",
    eigenschap2: "Tweede eigenschap" 
};
```
De gegevens uit het eerste voorbeeld kunnen we nu veel duidelijker opslaan in een object:

```
let persoon = {
	naam: "Jommeke",
	haar: "Blond",
	gewicht: 67,
	lengte: 175,
	maxRozijnen: 72
}
```

Om specifieke gegevens in een object te gebruiken maken we gebruik van de **key** om de bijbehorende **value** te selecteren. 

```
let persoon = {
	naam: "Jommeke",
	haar: "Blond",
	gewicht: 67,
	lengte: 175,
	maxRozijnen: 72
}

console.log( persoon.naam ) //output: "Jommeke"

```


### Methodes
Zojuist hebben we het gehad over objecten. En hoe we eigenschappen aan objecten meegeven om zo onze gegevens in **key:value** paren op te delen. De value in dit key:value pair kan alle mogelijke datatypes zijn, zelfs een functie. Een functie in een object wordt ook wel een **method** van dit object genoemd.

```
let myFirstObject = {
    //add necessary properties
    exampleKey: exampleValue
 
    functionName: function(){
        //Function goes here
    }
};
```

Om de method te kunnen gebruiken, doen we het volgende:

```javascript
    myFirstObject.functionName();
```


### Literals & Constructors

Aangezien we nu weten hoe we objecten aanmaken, kunnen we het volgende gaan doen:


```
let myFirstObjectLiteral1 = {           
    exampleKey: exampleValue          
}; 
    
let myFirstObjectLiteral2 = {           
    exampleKey: exampleValue          
}; 
    
let myFirstObjectLiteral3 = {           
    exampleKey: exampleValue          
}; 
```

Dit is echter veel herhaling en we volgen in dit geval niet de **DRY** methode: **Dont Repeat Yourself**! Om dus te voorkomen dat we telkens het zelfde herhalen kunnen we gebruik maken van een Constructor. Een Constructor is een functie die dienst doet als template van een bepaald object. Je kan deze functie dan gebruiken om eenvoudig een nieuw object aan te maken. De Constructor van het persoon object uit eerdere voorbeeld ziet er als volgt uit:

```
function Persoon(naam, haar, gewicht, lengte, maxRozijnen) {
    this.naam = naam;      
    this.haar = haar;
    this.gewicht = gewicht;
    this.lengte = lengte;
    this.maxRozijnen = maxRozijnen
};
```

Een constructor-naam begint altijd met een **Hoofdletter**! Dit is om een duidelijk onderscheid te kunnen maken tussen functies en constructors. Tussen de () worden er een of meerdere parameterers meegegeven die in de constructor gebruikt kunnen worden.

Als we de constructor nu zouden gebruiken ziet dat er als volgt uit:

```
let p = new Persoon("Jommeke", "blond", 67, 175, 72);


console.log(p.naam); //Output: "Jommeke"
```

### Voorbeeld
Bekijk het volgende voorbeeld:

```
let table = new Object();               // Old way of declairing
let table = {};                         // New way of declairing

let main_color = "#FF0000";
let chair = {
    color : main_color,
    feet : 4,
    things : ["paper","remote control","USB stick"],
    knock : function(){
        console.log( "TAP TAP !");
        console.log( chair.things );    // ["paper",..] if reference is used 
        console.log( this.things );     // ["paper",...] if other instances are used
    };
};

console.log( chair[feet] );            // not good
console.log( chair.feet );             // -> 4
console.log( chair["feet"] );          // -> 4

chair.knock();                          // launches the knock method

for(let key in chair){                  // loop
    console.log( typeof key );          // displays the key type: String
    console.log( key );                 // displays each key of my object ("color", "feet"..)
    console.log( chair[key] );          // displays each value ("#FF0000", 4,...)
}
```

**Oefening**: [Objecten](./Oefeningen.md)
