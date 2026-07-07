const productContainer = document.querySelector(".product-container");
const cartCount = document.querySelector("#cart-count");
function updateCartCount(){

    let totalItems = 0;
            cart.forEach((item) => {
                totalItems += item.quantity;
            })
            cartCount.textContent = totalItems;

}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

products.forEach((product) => {
    const card = `

    <div class= "product-card">

        <img src = "${product.image}" alt = ${product.name}>

        <h3>${product.name}</h3>

        <p>₹${product.price}</p>

        <button class = "add-to-cart" data-id = "${product.id}">Add to cart</button>

    </div>
    `;
    productContainer.innerHTML += card;

    const buttons = document.querySelectorAll(".add-to-cart")

    buttons.forEach((button) => {

        button.addEventListener("click", () => {
            const clickedId = Number(button.dataset.id);

            const selectedProduct = products.find((product) => {
                return product.id === clickedId;
            })

            const existingProduct = cart.find((item) => {
                return item.id === selectedProduct.id;
            })
            if(existingProduct){
                existingProduct.quantity++;
            }
            else{
                cart.push({
                    ...selectedProduct,
                    quantity: 1
                })
            }
            updateCartCount();
            localStorage.setItem("cart", JSON.stringify(cart));
        })
    })
})

