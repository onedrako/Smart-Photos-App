//GENERAR LOS NODOS DE IMAGENES RANDOM

const numberOfCarousel = 3
const numberOfImages = 4

const carouselContainer = []
const imagesContainer = [[],[],[],[],[],[],[],[],[]]



const newSection = document.createElement("section")
newSection.className = "carousel-container"
const mainHTML = document.querySelector("main")
mainHTML.appendChild(newSection)
const newSectionNode = document.querySelector(".carousel-container")


 
const generateCarousel = (i) =>{
    const newCarousel = document.createElement("section")
    newCarousel.className = `images-carousel`
    newCarousel.setAttribute("id",`images-carousel-${i}`)

    // newSection.append(newCarousel)
    carouselContainer.push(newCarousel)
}

for(let i = 1; i < numberOfCarousel + 1; i++){
    generateCarousel(i)
}

const getImages = async (carousel) =>{
    try{
        for(let i = 1; i < numberOfImages; i++){
            let API = "https://picsum.photos/300"
            const response = await fetch(API)
            const url = response.url
            const newImage = document.createElement("img")
            newImage.className = "random-image"
            newImage.src = url
            imagesContainer[carousel].push(newImage)
            // carousel.append(newImage)
        } 
    }
    catch(error){
        console.error(error)
    }
}

newSection.append(...carouselContainer)

const getLibraryOfImages = async (i) =>{
    await getImages(i)
    document.querySelector(`#images-carousel-${i+1}`).append(...imagesContainer[i])
}
getLibraryOfImages(0)
getLibraryOfImages(1)
getLibraryOfImages(2)



const imagesCarousel1 = document.querySelector("#images-carousel-1")
const imagesCarousel2 = document.querySelector("#images-carousel-2")
const imagesCarousel3 = document.querySelector("#images-carousel-3")


imagesCarousel1.append(...imagesContainer[0])
imagesCarousel2.append(...imagesContainer[1])
imagesCarousel3.append(...imagesContainer[2])


//Generar mas images para media queries

setTimeout(() => {
    getLibraryOfImages(0)
    getLibraryOfImages(1)
    getLibraryOfImages(2)
}, 3000);