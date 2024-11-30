const cards = document.querySelectorAll(".card")
const containerMove = document.querySelectorAll(".cards")
const add = document.querySelectorAll(".fa-plus")
const addColumns = document.querySelector("#addColumns")
const container = document.querySelector("#container")

addColumns.addEventListener("click", creatColumns)

function creatColumns(){
    const columnCard = document.createElement("div")
    columnCard.classList.add("columnCard","flex")

    const titleColumn = document.createElement("div")
    titleColumn.classList.add("title","flex")

    const title = document.createElement("span")
    title.classList.add("titleColumn")
    title.contentEditable = "true";
    title.addEventListener("focusout", ()=>{
        title.contentEditable = "false";
        if(title.innerText == ""){
            container.removeChild(columnCard)
        }
    })
    title.addEventListener('keypress', function(e) {
        const key = e.which || e.keyCode;
        if (key === 13) {
          e.preventDefault();
        }
      });

    titleColumn.appendChild(title)

    const icons = document.createElement("div")
    icons.classList.add("icons")

    const iconAdd = document.createElement("i")
    iconAdd.classList.add("fa-solid","fa-plus")
    iconAdd.addEventListener('click', (e)=>{
        editCard.classList.add("hide")
        creatCards(e)
    })
    icons.appendChild(iconAdd)

    const iconEdit = document.createElement("i")
    iconEdit.classList.add("fa-solid","fa-ellipsis-vertical")
    icons.appendChild(iconEdit)
    iconEdit.addEventListener("click", ()=>{
        editCard.classList.toggle("hide")
        })


    const cardsColumn = document.createElement("div")
    cardsColumn.classList.add("cards", "flex")
    cardsColumn.addEventListener('dragover', (e)=>{
        e.preventDefault()
    })

    cardsColumn.addEventListener('dragenter', (e)=>{
        if(e.target.classList.contains("cards")){
            e.target.classList.add("columnHover")
        }
    })

    cardsColumn.addEventListener('dragleave',(e)=>{
        e.target.classList.remove("columnHover")
    })

    cardsColumn.addEventListener('drop',(e)=>{
        if(e.target.classList.contains("cards")){
            e.target.classList.remove("columnHover")
            e.target.append(draggedCard)
        }
    })

    
    const editCard = document.createElement("div")
    editCard.classList.add("editCard", "hide")

    const edit = document.createElement("div")
    edit.classList.add("edit")

    editCard.appendChild(edit)

    const trash = document.createElement("div")
    trash.classList.add("trash")

    editCard.appendChild(trash)

    const iconPen = document.createElement("i")
    iconPen.classList.add("fa-solid", "fa-pen")
    edit.addEventListener("click", ()=>{
        title.contentEditable = "true";
        title.focus()
    })

    const iconTrash = document.createElement("i")
    iconTrash.classList.add("fa-solid", "fa-trash")
    trash.appendChild(iconTrash)

    trash.addEventListener("click", ()=>{
        container.removeChild(columnCard)
    })

    const spanTrash = document.createElement("span")
    spanTrash.innerText = "Apagar"
    trash.appendChild(spanTrash)

    edit.appendChild(iconPen)

    const spanEdit = document.createElement("span")
    spanEdit.innerText = "Editar Nome"
    edit.appendChild(spanEdit)

    iconEdit.appendChild(editCard)
    titleColumn.appendChild(icons)
    columnCard.appendChild(titleColumn)
    columnCard.appendChild(cardsColumn)
    container.appendChild(columnCard)
    

    title.focus()
}

let draggedCard;

function dragstart(e){ 
    draggedCard = e.target
    e.dataTransfer.effectAllowed = "move"
}


cards.forEach((card)=>{
    card.addEventListener('dragstart', dragstart)
})

function creatCards(e){
    const column = e.target.parentNode.parentNode.parentNode.lastChild

    const cardDiv = document.createElement("div")
    cardDiv.addEventListener("dragstart", dragstart)

    cardDiv.classList.add("card")
    cardDiv.setAttribute('draggable', 'true')
    

    const spanName = document.createElement("span")
    spanName.classList.add("nameCards")
    spanName.contentEditable = "true";
    spanName.addEventListener("focusout", ()=>{
        spanName.contentEditable = "false";
        if(spanName.innerText == ""){
            column.removeChild(cardDiv)
        }
    }
        
    )

   
    spanName.addEventListener('keypress', function(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      e.preventDefault();
    }
  });

    const dateDiv = document.createElement("span")
    dateDiv.classList.add("date")
    dateDiv.innerText = dateNow()

    /* Editar Cards */

    const icons = document.createElement("div")
    icons.classList.add("icons")
    icons.addEventListener("click", ()=>{
    editCard.classList.toggle("hide")
    })

    const editIcon = document.createElement("i")
    editIcon.classList.add("fa-solid", "fa-ellipsis-vertical")
    
    icons.appendChild(editIcon)
    
    /* Modal de editar */

    const editCard = document.createElement("div")
    editCard.classList.add("editCard", "hide")

    const edit = document.createElement("div")
    edit.classList.add("edit")

    editCard.appendChild(edit)

    const trash = document.createElement("div")
    trash.classList.add("trash")

    editCard.appendChild(trash)

    const iconPen = document.createElement("i")
    iconPen.classList.add("fa-solid", "fa-pen")
    edit.addEventListener("click", ()=>{
        spanName.contentEditable = "true";
        spanName.focus()
    })
    edit.appendChild(iconPen)

    const spanEdit = document.createElement("span")
    spanEdit.innerText = "Editar Nome"
    edit.appendChild(spanEdit)
    
    /* Excluir */
    

    const iconTrash = document.createElement("i")
    iconTrash.classList.add("fa-solid", "fa-trash")
    trash.appendChild(iconTrash)

    trash.addEventListener("click", ()=>{
        column.removeChild(cardDiv)
    })

    const spanTrash = document.createElement("span")
    spanTrash.innerText = "Apagar"
    trash.appendChild(spanTrash)

    icons.appendChild(editCard)

    cardDiv.appendChild(icons)
    cardDiv.appendChild(spanName)
    cardDiv.appendChild(dateDiv)
    column.appendChild(cardDiv)

    spanName.focus()
}



function dateNow(){
    const dateNow = new Date()
    const option = { 
        weekday: 'short',
        day: 'numeric',
        month: 'long' }
    const dateFomart = dateNow.toLocaleDateString('en-US', option)

    return dateFomart
}

