const cards = document.querySelectorAll("[draggable='true']")
const containerMove = document.querySelectorAll(".cards")


function move(){
    this.classList.add("moving")
}

function receiver(){
    this.classList.add('columnHover')
    const elemtMoving = document.querySelector(".moving")
    this.appendChild(elemtMoving)

}

cards.forEach((card)=>{
    card.addEventListener('dragstart', move)
})

containerMove.forEach((container)=>{
    container.addEventListener('dragover', receiver)
})

