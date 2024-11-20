const cards = document.querySelectorAll(".card")
const containerMove = document.querySelectorAll(".cards")
const add = document.querySelectorAll(".add")
let draggedCard;

cards.forEach((card)=>{
    card.addEventListener('dragstart', (e)=>{
        draggedCard = e.target
        e.dataTransfer.effectAllowed = "move"
    })
})

containerMove.forEach((column)=>{
    column.addEventListener('dragover', (e)=>{
        e.preventDefault()
    })

    column.addEventListener('dragenter', (e)=>{
        if(e.target.classList.contains("cards")){
            e.target.classList.add("columnHover")
        }
    })

    column.addEventListener('dragleave',(e)=>{
        e.target.classList.remove("columnHover")
    })

    column.addEventListener('drop',(e)=>{
        if(e.target.classList.contains("cards")){
            e.target.classList.remove("columnHover")
            e.target.append(draggedCard)
        }
    })

})

add.forEach((item)=>{
    item.addEventListener('click', (e)=>{

        creatCards(e)

    })
})

function creatCards(e){
    const column = e.target.parentNode.parentNode

    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card")
    cardDiv.setAttribute('draggable', 'true')

    const spanName = document.createElement("span")
    spanName.classList.add("nameCards")
    
    const tagsDiv = document.createElement("div")
    tagsDiv.classList.add("tags")
    const tags = document.createElement("span")
    tagsDiv.appendChild(tags)

    const dateDiv = document.createElement("span")
    
    cardDiv.appendChild(spanName)
    cardDiv.appendChild(tagsDiv)
    cardDiv.appendChild(dateDiv)

    column.appendChild(cardDiv)
    
}