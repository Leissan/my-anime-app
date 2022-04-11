/*
Write out pseudo code in steps:

Create a DOMContentLoaded event to get all anime 

Create a fetch request to json provided 
add each anime object from json to the DOM as li with links inside
make each link live (clickable) by adding event listener

add event listener to a like button which creates a pop-up with a reminder to watch it

add event listener to all anime button which loads all anime 


*/
//declare a global variable so i dont have to fetch it every time
let anime

window.addEventListener('DOMContentLoaded', ()=> {
    getAnimes()
})

function getAnimes() {
    fetch ('https://api.jikan.moe/v3/search/anime?q=naruto')
    .then (res => res.json())
    .then (data => {
        animes = data
        console.log(data.results)
        loadAnimes()
    })
}

function loadAnimes() {

    const ul = document.getElementById('anime-list')
    animes.results.forEach(anime => {
        const li = document.createElement('li')
        ul.appendChild(li)
        const a = document.createElement('a')
        a.innerText = anime.title
        a.id = anime.mal_id
        a.href = '#'
        li.appendChild(a)


    })
    ul.addEventListener('click', getEachInfo)
}

function getEachInfo() {
    console.log('ive been clicked!')
}