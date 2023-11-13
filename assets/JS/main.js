let products = document.getElementById("products")
let total = document.getElementById('total')
let pro
function api() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      pro = data.products
      pro.forEach(item => {
        let div = document.createElement("div")
        div.className = 'product'
        div.innerHTML = `
        <img src="${item.thumbnail}" alt="">
        <h3>${item.title}</h3>
        <p>${item.price} $</p>
        <button onclick='addToCard(${item.id})'>Add to basket</button>
        `
        products.appendChild(div)
      });

    })
    .catch((err) => console.log(err))
}
api()


function addToCard(itemIndex) {
  let card = JSON.parse(localStorage.getItem('card')) || [];
  card.push(pro.find(item => item.id === itemIndex));
  localStorage.setItem('card', JSON.stringify(card));
  displayCartCount()
}

function displayCartCount() {
  let card = JSON.parse(localStorage.getItem('card')) || []
  total.innerHTML = `${card.length}`
}