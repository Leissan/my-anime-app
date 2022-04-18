/*
Write out pseudo code in steps:

Create a DOMContentLoaded event 

Create a fetch request to json provided to get all anime objects
add each anime object from json to the DOM as li with links inside
make each link live (clickable) by adding event listener; this will load the infor page for each show

add event listener to a like button which creates a pop-up with a reminder to watch it

add event listener to all anime button which loads all anime while erasing info about a single show


*/
//declare a global variable so i dont have to fetch it every time and store it
let anime

window.addEventListener('DOMContentLoaded', ()=> {
    getAnimes()
    document.getElementById('animes').addEventListener('click', getAnimes)
})

function getAnimes() {
    
    fetch ('https://api.jikan.moe/v3/search/anime?q=naruto')
    .then (res => res.json())
    .then (data => {
        animes = data.results
        console.log(data)
        console.log(data.results)
        loadAnimes()
    })
}

function loadAnimes() {

    const info = document.getElementById('anime-info')
    info.innerHTML = ''
    const ul = document.getElementById('anime-list')
    ul.innerHTML=''
    animes.forEach(anime => {
        const li = document.createElement('li')
        ul.appendChild(li)
        const a = document.createElement('a')
        a.innerText = anime.title
        a.id = anime.mal_id
        a.addEventListener('click', event => event.preventDefault())
        
        li.appendChild(a)


    })
    ul.addEventListener('click', getEachInfo)
}

function getEachInfo() {
    const ul = document.getElementById('anime-list')
    const info = document.getElementById('anime-info')
    ul.innerHTML=''
    const anime = animes.find( an => an.mal_id===parseInt(event.target.id))
    info.innerHTML=`
    <h1>${anime.title}</h1>
    <img src=${anime.image_url} alt="i heart anime" >
    <div></div>
    <a href = ${anime.url} >Full information here:</a>
    <h3>Storyline:</h3>
    <p>${anime.synopsis}</p>
    <h3>Score:</h3>
    <p>${anime.score}</p>
    <h3>Number of Episodes:</h3>
    <p>${anime.episodes}</p>
    <h3>Rated:</h3>
    <p>${anime.rated}</p>
    
    <button class='btn-success'>I want to watch this!: </button> 
    `
    const button = document.querySelector('.btn-success')
    button.addEventListener('click', displayMessage)
}

function displayMessage () {
    let modal =document.getElementById('modal')
    let modalMessage=document.getElementById('modal-message')
    modal.classList.remove('hidden')
    modalMessage.innerText = "Let's put this on my to-watch list!"
    modalMessage.style.backgroundColor = "red"
    modalMessage.style.fontSize = "large"
    modalMessage.style.boxShadow = "10px 20px 30px blue";
    setTimeout(()=> {
        modal.classList.add('hidden')
        modalMessage.innerText=""
       }, 3000)
}





