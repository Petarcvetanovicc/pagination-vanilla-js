import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./pagination.js";
import displayButtons from "./displayButtons.js"

const btnContainer = document.querySelector('.btn-container')

let index = 0
let pages = []

const setupUI = () => {
    displayFollowers(pages[index])
    displayButtons(btnContainer, pages, index)
}

const init = async() => {
    const data = await fetchFollowers()
    pages = paginate(data)
    setupUI()
}

window.addEventListener('DOMContentLoaded', function(){
    init()
})

btnContainer.addEventListener('click', function(e){
    const element = e.target
    if(element.classList.contains('btn')){
        index = parseInt(element.dataset.id)
        setupUI()
    }
    if(element.classList.contains('prev')){
        if(index === 0) {
            return
        }
        index--
        setupUI()
    }
    if(element.classList.contains('next')){
        if(index === pages.length - 1){
            return
        }
        index++
        setupUI()
    }
})