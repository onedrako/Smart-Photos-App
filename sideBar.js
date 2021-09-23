const modal = document.querySelector(".side-bar--container")  
const sideBarForMediaQuery = document.querySelector(".side-bar--container-laptop")
const modalSideBar = document.querySelector(".side-bar--laptop")
const googlePhotosLogo = document.querySelector(".google__header-logo")
const header = document.querySelector("header")


const openSideBar = () =>{
    sideBarForMediaQuery.classList.add("visible-side-bar")
    modalSideBar.classList.add("side-bar--laptop-as-modal")
}

const closeSideBar = () => {
    sideBarForMediaQuery.classList.remove("visible-side-bar")
    modalSideBar.classList.remove("side-bar--laptop-as-modal")
}


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

document.addEventListener("keyup", KeyboardEvent => verifyToCloseSideBar(KeyboardEvent))
document.addEventListener("click", clickEvent => verifyToCloseSideBar(clickEvent))



function verifyToCloseModal(Event) {
    // console.log(Event)
    if(Event.target.className === "side-bar--container visible" || Event.keyCode === 27 ){
        closeModal()
    } 
}

function verifyToCloseSideBar(Event) {
    // console.log(Event)
    if(Event.keyCode === 27 || Event.target.className === "side-bar--laptop side-bar--laptop-as-modal" ){
        closeSideBar()
    } 
}

const mediaQuery950px = window.matchMedia("(min-<width: 950px)")
const maxMediaQuery950px = window.matchMedia("(max-width: 950px)")

const desktopMediaQuey =  window.matchMedia("(min-<width: 950px)")


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

if(desktopMediaQuey.matches){
    modal.classList.remove("hidden")
    modal.classList.add("visible")
}
