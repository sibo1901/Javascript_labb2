/**const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]*/

/** 
 * 
 * This is where you add code that will manipulate index.html!
 * 
 * When you open index.html in your browser, this javascript file will be run once. This javascript file is loaded via the script tag in index.html.
 * 
 * Most of what you need is in the lecture slides! For the stuff that isn't, there are very strong hints in the lecture slides at least. 
 * 
 * You can also figure most things out with the MDN docs. 
 * 
 * Or, by using chrome devtools and debugger statements. 
 * 
 * 
 * Good luck :) 
 */

 console.log('js loaded!')

 window.addEventListener("DOMContentLoaded", () => {})

 //EX01
document.querySelector('#ex01').textContent = 'done!'

//EX02
//BG
document.querySelector('.ex02').style.backgroundColor = 'red'
//Font - change style
//document.querySelector('.ex02').style.color = 'red'
//Font - add class .red
//document.querySelector('.ex02').className += ', red'

//EX03
document.querySelector('blockquote').textContent = 'Everything is not awesome'

//EX04
let li = document.createElement('li')
li.appendChild(document.createTextNode('Milk'))
document.querySelector('#shopping-list').appendChild(li)

//EX05
const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

let newsDiv = document.querySelector('#news')
news.forEach(element => {
    newsDiv.innerHTML += `<h2>${element.headline}</h2><a href=${element.href}>${element.href}</a><p>${element.summary}</p><h4 class="author-text">Text av: ${element.author}</h4>`
});
let authortexts = document.querySelectorAll('.author-text')
authortexts.forEach(element => {
    element.style.fontStyle = "italic"
});

//EX06
document.addEventListener('click', function(){
    let count = parseInt(document.querySelector('#click-counter').textContent) + 1
    document.querySelector('#click-counter').textContent = count
});

//EX07
const button = document.querySelector('button');
button.addEventListener('click', function(){
  button.disabled = true
});

//EX08
const svtlink = document.querySelector('#link-to-svt')
svtlink.addEventListener('click', function(event){
    event.preventDefault()
});

//EX09
document.querySelector('img').src = "img/photo01.jpg"