//1-6
//Bekijk onderstaande methodes om (een) element(en) op te halen
//Onderzoek via de console wat ze terug geven
const pTags = document.getElementsByTagName(`p`);
console.log(1, pTags);

const $search = document.getElementById(`search`);
console.log(2, $search);

const divTagsByTagName = document.getElementsByTagName(`div`);
console.log(3, divTagsByTagName);

const $divTagQuerySelector = document.querySelector(`div`);
console.log(4, $divTagQuerySelector);

const divTagsquerySelectorAll = document.querySelectorAll(`div`);
console.log(5, divTagsquerySelectorAll);

const $subtitle = document.querySelector(`.subtitle`);
console.log(6, $subtitle);

//7
//Wat is het verschil in uitkomst van beide manieren om een element te selecteren?
const $button = document.querySelector(`header .button`);
console.log(`7a`, $button);

const $main = document.querySelector(`header`);
console.log(`7b`, $main);
const $button2 = $main.querySelector(`.button`);
console.log(`7b`, $button2);

//8-10
//Bekijk deze properties van het document object. Wat geven ze terug?
const links = document.links;
console.log(8, links);

const forms = document.forms;
console.log(9, forms);

const title = document.title;
console.log(10, title);

//11-13
//Er is een belangrijk verschil tussen childNodes en children.
//Onderzoek de uitkomst en leg uit wat we hieronder doen.
const $episodes = document.querySelector(`.episode-list`);
console.log(`11a`, $episodes.childNodes);
console.log(`11b`, $episodes.firstChild);

console.log(`12a`, $episodes.children);
console.log(`12b`, $episodes.firstElementChild);
console.log(`12c`, $episodes.childElementCount);

console.log(`13a`, $episodes.firstElementChild.nextSibling);
console.log(`13b`, $episodes.firstElementChild.nextElementSibling);

//14
//Hier wissen we een element.
//Welk element precies? Hoe selecteren we dit?
console.log(14, $episodes.children[3].children[2].lastElementChild.remove());

//15
//Bekijk de 2 verschillende outputs in de console
//Waarom staat er geen 'Episode: '?
const $episode5 = $episodes.children[4];
console.log(`15a`, $episode5.textContent);
console.log(`15b`, $episode5.innerHTML);

//16
//Wat doen we hier?
//Krijgen we hetzelde resultaat via innerHTML?
const $viewersEP5 = $episode5.children[2].lastElementChild;
$viewersEP5.innerText = `5.33`;

//17
//Wat doen we hier?
//Krijgen we hetzelde resultaat via innerText?
const $viewers = $episodes.children[4].children[2].firstElementChild;
$viewers.innerHTML = `<a href="#">${$viewers.innerText}</a>`;

//18
console.log(`18a`, $search.hasAttribute(`type`));
console.log(`18b`, $search.getAttribute(`type`));
$search.setAttribute(`type`, `search`);
console.log(`18c`, $search.getAttribute(`type`));

//19
// Waarom zien we hier niet het correcte achtergrondkleur van de knop?
console.log(19, $button.style.backgroundColor);
$button.style.textTransform = `uppercase`;

//20
//Beschrijf wat we hier doen
const $nav = document.querySelector(`.nav-link`);
$nav.classList.add(`active`);

//21
//Wat doen we hier?
//Waarom is de laatste lijn volledig grijs?
const spans = Array.from(document.getElementsByTagName(`span`));
spans.forEach($span => $span.classList.toggle(`fade`, $span.textContent.startsWith(`TB`)));
