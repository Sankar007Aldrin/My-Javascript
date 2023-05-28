//Create Elements for Links & PHOTOS ADD Dom
const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')
const content = document.getElementById('content')

// Check if all images were loaded
function imageLoaded () {

    imagesLoaded++
    console.log(imagesLoaded)
    if(imagesLoaded === totalImages){
        ready = true
        loader.hidden = true
        
    }
}

//Helper Function to set Attributes on DOM elements

const setAttributes = (element, attributes) => {
    for (const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

const displayPhotos = () =>{
    imagesLoaded = 0
    totalImages = photosArray.length
    
    photosArray.forEach((photo) => {
    //   Create <a> to link Unsplash

    const item = document.createElement('a')     //it gonna create blank <a> element
    setAttributes(item, {
        href: photo.links.html,
        target: '_blank'
    })

    const img = document.createElement('img') 
     setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description 
     })
      
    //Event listener, check when each is finished loading

    img.addEventListener('load', imageLoaded)

    item.appendChild(img)
    imageContainer.appendChild(item)


    })
   
}

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = []

// Unsplash API 
const count = 30;
const apiKey = `sKRGJ7q3yQxCurbvtDY9-eOVrheQDn5d0ue5zfeRDrM`;
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count} `

// Get Photos from Unsplash API

async function getPhotos(){
    try{
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
        // console.log(photosArray)

    } catch (error){
    //   catch Error here
    }
}


//Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => { 
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false
        getPhotos()
        

    }
   
})                           // window is a parent of the document and grandparent of our body
// On load
getPhotos()



