const numberOfCarousel = 3
const numberOfImages = 6

const newSection = document.createElement("section")
newSection.className = "carousel-container"
const mainHTML = document.querySelector("main")
mainHTML.appendChild(newSection)
const newSectionNode = document.querySelector(".carousel-container")



//poner el nodo bien 
const generateCarousel = (i) =>{
    const newCarousel = document.createElement("section")
    newCarousel.className = `images-carousel`
    newCarousel.setAttribute("id",`images-carousel-${i}`)

    newSection.append(newCarousel)
}

for(let i = 1; i < numberOfCarousel + 1; i++){
    generateCarousel(i)
}

const imagesCarousel1 = document.querySelector("#images-carousel-1")
const imagesCarousel2 = document.querySelector("#images-carousel-2")
const imagesCarousel3 = document.querySelector("#images-carousel-3")


const getImages = async (carousel) =>{
    try{
        for(let i = 0; i < numberOfImages; i++){
            let API = "https://picsum.photos/300"
            const response = await fetch(API)
            const url = response.url
            const newImage = document.createElement("img")
            newImage.className = "random-image"
            newImage.src = url
            carousel.append(newImage)
        } 
    }
    catch(error){
        console.error(error)
    }
}

const libraryOfImages1 = getImages(imagesCarousel1)
const libraryOfImages2 = getImages(imagesCarousel2)
const libraryOfImages3 = getImages(imagesCarousel3)


const IMG = "https://picsum.photos/300"
const IMG2 = "https://picsum.photos/300" 

