// write your code here - RAMEN RATER

//Variables
url='http://localhost:3000/ramens'
let ramens=[]

//Dom Selectors
const divRamenMenu = document.getElementById('ramen-menu')
const imgDetail = document.querySelector('.detail-image')
const nameDetail = document.querySelector('.name')
const restDetail = document.querySelector('.restaurant')
const ratingDetail = document.getElementById('rating-display')
const commentDetail = document.getElementById('comment-display')
const newRamenForm = document.getElementById('new-ramen')
const newRamenName = document.getElementById('new-name')
const newRamenRest =document.getElementById('new-restaurant')
const newRamenImage =document.getElementById('new-image')
const newRamenRating =document.getElementById('new-rating')
const newRamenComment =document.getElementById('new-comment')


//Function Invocations
fetchAll()


//Fetch
function fetchAll(){
    fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            ramens=data
            //console.log(ramens)
            renderRamenDetails(ramens[0])
            ramens.forEach(ramen=>renderRamens(ramen))
        })
        .catch(e=>console.error(e))
}


//Event Listeners
divRamenMenu.addEventListener('click',e=>{
    console.log(e.target)
    renderRamenDetails(ramens[e.target.id-1])
})

newRamenForm.addEventListener('submit',e=>{
    e.preventDefault()
    postNewRamen()
    //console.log(e)
})


//Render Functions
function renderRamens(ramen){
    //console.log(ramen)
    let img = document.createElement('img')
    img.src=ramen.image
    img.id=ramen.id
    divRamenMenu.append(img)    
    }

function renderRamenDetails(ramen){
    //console.log(ramen.restaurant)
    imgDetail.src=ramen.image
    nameDetail.textContent=ramen.name
    restDetail.textContent=ramen.restaurant
    ratingDetail.textContent=ramen.rating
    commentDetail.textContent=ramen.comment
    }


// Call Back Functions
function postNewRamen(){

    let newRamen ={
        name:newRamenName.value,
        restaurant:newRamenRest.value,
        image:newRamenImage.value,
        rating:newRamenRating.value,
        comment:newRamenComment.value,
        id:ramens.length+1
    }

    ramens.push(newRamen)

    fetch(url,{
        method:'POST',
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(newRamen)})
        .then(resp=>resp.json())
        .then(data=>{})
        .catch(e=>console.error(e))

        divRamenMenu.replaceChildren()

    console.log(ramens)
    ramens.forEach(ramen=>renderRamens(ramen))
    renderRamenDetails(newRamen)
    }
