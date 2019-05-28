# Leerdoelen

- Hoe gebruik je JavaScript met je HTML document ?
- Wat is de JavaScript console ? 
- Hoe print je iets in de console ?

# JavaScript en HTML

Om een JavaScript programma uit te voeren in een HTML document maken we gebruik van de `<script>` tag. Tussen de opening en closing tag kan JavaScript code geplaatst worden die zal uitgevoerd worden.  


```html
<script>
  // Je JavaScript code
</script>
```

In praktijk zal je JavaScript code in een apart bestand terecht komen. Dit bestand wordt gelinkt aan je HTML document met behulp van dezelfde `<script>` tag.

```html 
<script src='pad/naar/script.js'></script>
```

# Hello World ! 

Tijd voor een eerste webpagina met JavaScript. We maken een HTML document aan en plaatsen een `<script>` tag in de body van het document.  
Vervolgens zullen we de boodschap 'Hello World' in de console printen.  

De JavaScript console in de browser vinden we terug onder de developer tools.  
Met behulp van [console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) functie kunnen we een boodschap in deze console printen. We plaatsen deze functie tussen de script tags en geven als boodschap 'Hello World' op.  

Wanneer we vervolgens het html document opslaan en openen in de browser zullen we niets te zijn krijgen. Open nu de developer tools en bekijk de output in de console. Wat zie je in de console? Kan je uitleggen hoe dit gebeurt?

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
</head>
<body>
    <script>
      console.log('Hello World');
    </script>
</body>
</html>
```

 **Ga terug**:  [Overzicht](../)  


