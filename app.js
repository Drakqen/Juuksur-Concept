fetch("/products.JSON")
.then(response => response.json())
.then(productsArray => renderAllProducts(productsArray))

function renderAllProducts(productsArray) {
    productsArray.forEach(product => renderOneProduct(product))
}


const findDiv = document.querySelector("#product-box")
function renderOneProduct(product){
    const newElement = document.createElement("div")
    newElement.className = "content"
    newElement.innerHTML = `
    <div class="item-card">
        <div class="center">
            <img src="${product.img_url}" class="image">
            <h2>${product.name}</h2>
            <p>Hind: ${product.hind}</p>
            <button data-product-sku class="add-item">Lisa Ostukorvi</button>
        </div>
    </div>
    `
    findDiv.append(newElement)
}

window.addEventListener("load", function(event) {
    //put for loop here men

const cart = [];
let buttons = document.getElementsByClassName("add-item");
console.log(buttons.length)
    for(var i=0; i<buttons.length; i++) {
        console.log(buttons.length)
        let button = buttons[i];
    console.log(button);
    button.addEventListener('click', function(event){
        console.clear();
        console.log(event.target);
        console.log(event.target.dataset.productSku);
        cart.push( event.target.dataset.productSku );
        console.log(cart);    
    });
    }
});