const displayButtons = (container, pages, activeIndex) => {
    let btns = pages.map(function(_, index){
        return `<button class="btn ${activeIndex === index ? 'active-btn' : null}" data-id="${index}">${index + 1}</button>`
    })
    btns.unshift('<button class="prev">prev</button>')
    btns.push('<button class="next">next</button>')
    container.innerHTML = btns.join(' ')
}

export default displayButtons