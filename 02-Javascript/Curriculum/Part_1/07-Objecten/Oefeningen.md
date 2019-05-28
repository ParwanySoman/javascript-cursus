# Oefeningen: Objecten

## Index
 - [Non-player character](#non-player-character)
 - [Shop](#shop)
 - [Character](#character)
 - [BONUS](#bonus)

### Non-player character
 - Creëer een "character"-object dat de volgende informatie bevat: 
    * name (string) 
    * age (number) 
    * items_to_give (array)
 - Geef elke informatie op een aparte regel in de console weer
 - Maak een "giveItem"-functie waarmee de NPC een object willekeurig kan mee geven

### Shop
 - Creëer een array met *object* te koop (zwaard, bijl, scepter, enz.)
 - Kenmerkend voor dit object:
    * title (string) 
    * physic (int)
    * magic (int)
    * minLevel (int)
    * available (boolean)
 - Maak een functie om alle objecten weer te geven
 - Maak een functie om de beschikbare objecten weer te geven
 - Maak een functie om objecten met een minimumniveau van 10 weer te geven


### Character

 - Creëer een "mainCharacter" object dat de volgende eigenschappen heeft: 
    * name (string) 
    * level (int) 
    * life (int) 
    * weapon (object) 
    * attack (function) 

 - Creëer een "weapon"-object met de volgende eigenschappen:    
    * name (string) 
    * damage (int) 

- Creëer een "attack" functie van het personage
	* de functie moet terug geven:
		* (Name character) aanval met het wapen (weapon name) de schade is (level vermenigvuldigd met de schade van het wapen)



## BONUS :

### Tegenstander

 - Creëer een "character"-object dat de volgende eigenschappen heeft: 
    * name (string) 
    * level (int) 
    * life (int) 
    * weapon (object) 
    * attack (function)
    * receiveDamage (function)

 - Creëer een "weapon"-object dat de volgende eigenschappen:
    * name (string) 
    * damage (int) 

 - Creëer een "opponentCharacter" object in character
 - Creëer een "mainCharacter" object van character

 - Maak de "attack" functie van "mainCharacter" zo zodat het "opponentCharacter" aanvalt.
 - De functie moet worden weergegeven in de console (regel voor regel)
	* (character name) attacks (opponents name)
	* With the weapon (weapon name)
	* and inflicts damage on it (character level multiplied by weapon damage)
	* (opponent's name) a now (opponent's life) of life

&nbsp;

**Ga terug**: [Overzicht](../../)  
