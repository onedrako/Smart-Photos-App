const modal = document.querySelector(".side-bar--container")  
const sideBarForMediaQuery = document.querySelector(".side-bar--container-laptop")
const googlePhotosLogo = document.querySelector(".google__header-logo")
const header = document.querySelector("header")


const visibleModal = () =>{
    modal.classList.remove("hidden")
    modal.classList.add("visible")
}

const closeModal = () =>{
    modal.classList.remove("visible")
    modal.classList.add("hidden")
}

document.addEventListener("keyup", KeyboardEvent => verifyToCloseModal(KeyboardEvent))
document.addEventListener("click", clickEvent => verifyToCloseModal(clickEvent))

function verifyToCloseModal(Event) {
    // console.log(Event)
    if(Event.target.className === "side-bar--container visible" || Event.keyCode === 27 ){
        closeModal()
    } 
}

const mediaQuery950px = window.matchMedia("(min-<width: 950px)")
const maxMediaQuery950px = window.matchMedia("(max-width: 950px)")



mediaQuery950px.onchange = (e) => {
    if(mediaQuery950px.matches){
        sideBarForMediaQuery.classList.add("visible")

    }
    if(!mediaQuery950px.matches){
        sideBarForMediaQuery.classList.remove("visible")
    }
} 

// if(!mediaQuery950px.matches){
//     sideBarForMediaQuery.classList.add("hidden")
// }

