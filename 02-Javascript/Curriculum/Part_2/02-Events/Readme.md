# Javascript



## Events

Javascript zorgt voor de interactiviteit van je webpagina. Tot nu toe was onze Javascript code echter vrij passief. De interactie van de gebruiker ging niet veel verder dan het invullen van een input veld.

Tot nu!

## Werken met events

Een event wordt verzonden om je code op de hoogte te brengen dat een bepaalde actie op een webpagina heeft plaatsgevonden. 
Bijvoorbeeld wanneer een gebruiker op een knop geklikt heeft. 


### Luisteren naar events

Op een webpagina gebeuren voortdurend dingen zoals scrollen, klikken, slepen, etc. Al deze handelingen gebeuren ook op allerlei verschillende plaatsen.

> **If a tree falls in the forest and nobody's around to hear it, does it make a sound?**

Wanneer we niet luisteren naar deze events zal er helemaal niets gebeuren. Om te kunnen werken met een event moeten we in onze code duidelijk maken op welke **plaats** we naar welk **evenement** luisteren.

```
<button class="clickMe">click me</button>
```

Om naar bovenstaand element te luisteren maken we gebruike van de [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) functie. Met behulp van deze functie kunnnen we een actie uitvoeren wanneer op een bepaald DOM element een event gebeurt.
Een event listener gebruik je als volgt:

```
document.querySelector(".clickMe").addEventListener( 'click' , //actie)
```

Eerst selecteer je op welk DOM element je wil luisteren naar een event. Vervolgens gebruik je de functie `addEventListener` om op deze plaats te beginnen met luisteren.


De `addEventListener` functie krijgt twee argumenten. Het eerste argument is het event waar de functie naar moet luisteren. Het tweede argument is de functie die moet uitgevoerd worden wanneer het event heeft plaatsgevonden.


### Eventhandlers

De functie die wordt uitgevoerd wanneer een event plaats vindt waar naar geluisterd wordt, noemen we een **eventhandler**. 

Het is een goeie gewoonte om deze eventhandlers een duidelijke naam te geven. Een manier om dit te doen is om volgende naamgeving te gebruiken: `handle[Type][Element]`. 

Wanneer we dan bijvoorbeeld luisteren naar een **click** op een **button** zal de eventhandler er als volgt uit zien: `handleClickButton`. Deze functie is het tweede argument dat aan de event listener functie wordt meegegeven.

```
document.querySelector(".clickMe").addEventListener( 'click' , handleClickButton)
```


## Event object

De event handler functie zal altijd het event object ontvangen. Dit event object bevat extra informatie over het event. Er zijn verschillende soorten event objecten afhankelijk van het soort event waar naar geluisterd wordt.

### Type Events

Er is een hele lijst met alle events waar je kan naar luisteren. De volledige lijst vind je [hier](https://developer.mozilla.org/en-US/docs/Web/Events). 

#### MouseEvent

click ➔ Gebruiker klikt op een element

mousedown ➔ Knop van een aanwijsapparaat is ingedrukt op een element

mouseup ➔ Knop van een aanwijsapparaat is losgelaten op een element

#### FocusEvent

focus ➔ een element krijgt de focus
blur ➔ een element verliest de focus

#### KeyboardEvent

keydown ➔ Een toets is ingedrukt

keyup ➔ Een toets is losgelaten

keypress ➔ Een toets is ingedrukt - behalve Shift, CapsLock of Fn 

key ➔ Welke toets werd ingedrukt?

shift/ctrl/altKey ➔ Werd de shift/ctrl/alt toets ingedrukt?

repeat ➔ Blijft de toets ingehouden? (zie keypress event)

#### InputEvent

input ➔ Wanneer de waarde van een `<input>` of `<textarea>` is veranderd

change ➔ Wanneer een `<input>`, `<textarea>` of `<select>` een nieuwe waarde heeft gekregen.


#### Events op een form


submit ➔ Bij het submitten van een formulier

reset ➔ Bij het resetten van een formulier
 

## Oefeningen

* [Mouse](./exerciseMouse.md)
* [Keyboard](./exerciseKeyboard.md)







