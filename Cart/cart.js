let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.querySelector(".cart-container");

function renderCart(){

    cartContainer.innerHTML = `<h2>Your Cart</h2>`;

    const total = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    cart.forEach((item) => {
    const card = 
    `
    <div class = "cart-item">

        <img src = "../${item.image}" alt = "${item.name}">

        <div class = "cart-info">

            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <div class = "quantity-controls">
                <button class= "decrease-btn" data-id = "${item.id}">-</button>
                <p>${item.quantity}</p>
                <button class= "increase-btn" data-id = "${item.id}">+</button>
            </div>

        </div>

        <button class = "remove-btn" data-id = "${item.id}">Remove</button>

    </div>`

        cartContainer.innerHTML += card;
})
        cartContainer.innerHTML += `
            <div class = "cart-total">
                <h3>Total: ₹${total}</h3>
                <button class = "checkout-btn">Proceed to Checkout</button>
            </div>`;

    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);

            const updatedCart = cart.filter((item) => {
                return item.id !== id;
            })
            cart = updatedCart;
            localStorage.setItem("cart",JSON.stringify(cart));
            renderCart();
        })
    })
    const increaseButtons = document.querySelectorAll(".increase-btn");
    increaseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id)

            const existingProduct = cart.find((item) => {
                return item.id === id;
            })
            existingProduct.quantity++;
            localStorage.setItem("cart", JSON.stringify(cart))
            renderCart();
        })
    })
    const decreaseButtons = document.querySelectorAll(".decrease-btn");
    decreaseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id)

            const existingProduct = cart.find((item) => {
                return item.id === id;
            })
            if(existingProduct.quantity > 1){
                existingProduct.quantity--;
            }
            else{
                const updatedCart = cart.filter((item) => {
                return item.id !== id;
            })
            cart = updatedCart;
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart()
        })
    })
}
renderCart();
