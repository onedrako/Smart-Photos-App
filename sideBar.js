const modal = document.querySelector(".side-bar--container")  

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

