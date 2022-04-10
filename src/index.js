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


