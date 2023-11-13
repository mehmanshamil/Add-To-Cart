let total = document.getElementById('total')
let main = document.getElementById('products')
let remAll = document.getElementById('removeAll')

function myfnc() {
    let storage = JSON.parse(localStorage.getItem('card')) || []
    main.innerHTML = ''
    storage.forEach((item, index) => {
        let div = document.createElement("div")
        div.className = 'product'
        div.innerHTML = `
        <img src="${item.thumbnail}" alt="">
        <h3>${item.title}</h3>
        <p>${item.price} $</p>
        <button onclick='removeCard(${index})'>remove from list</button>`
        main.appendChild(div)
    });
}

myfnc()
function removeCard(index) {
    let card = JSON.parse(localStorage.getItem('card')) || []
    card.splice(index, 1)
    localStorage.setItem('card', JSON.stringify(card))
    myfnc()
    displayTotal()
}

function displayTotal() {
    let storage = JSON.parse(localStorage.getItem('card')) || []
    total.innerHTML = storage.length
}
displayTotal()
remAll.addEventListener('click', remmoveAll)
function remmoveAll() {
    localStorage.removeItem('card')
    myfnc()
    displayTotal()
}