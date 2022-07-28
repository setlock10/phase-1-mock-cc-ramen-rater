// write your code here

//Variables
const url='http://localhost:3000/ramens'


// Detail DOM Content
const divRamenImages=document.getElementById('ramen-menu')
const imgDetail=document.querySelector('.detail-image')
const nameDetail=document.querySelector('.name')
const restDetail=document.querySelector('.restaurant')
const commentDetail=document.querySelector('#comment-display')
const ratingDetail=document.querySelector('#rating-display')

// Form DOM Content
const newRamenForm=document.querySelector('#new-ramen')
const newRamenName=document.querySelector('#new-name')
const newRamenRest=document.querySelector('#new-restaurant')
const newRamenImage=document.querySelector('#new-image')
const newRamenRating=document.querySelector('#new-rating')
const newRamenComment=document.querySelector('#new-comment')



//Fetch
fetch(url)
    .then(res=>res.json())
    .then(ramens=>{
        renderDetail(ramens[0])
        ramens.forEach(ramen=>{
            //console.log(ramen)
            let img=document.createElement('img')
            img.src=ramen.image
            divRamenImages.append(img)
            img.addEventListener('click',()=>renderDetail(ramen))
        
        })
    })
    .catch(e=>console.error(e));




//Render Functions
function renderDetail(ramen){
    //console.log(imgDetail)
    imgDetail.src=ramen.image
    nameDetail.textContent=ramen.name
    restDetail.textContent=ramen.restaurant
    commentDetail.textContent=ramen.comment
    ratingDetail.textContent=ramen.rating
}

//Event Listeners
newRamenForm.addEventListener('submit',e=>{
    e.preventDefault()
    //console.log(e)
    let img=document.createElement('img')
    img.src=newRamenImage.value
    divRamenImages.append(img)
}) 




