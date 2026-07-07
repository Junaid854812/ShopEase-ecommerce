const productContainer = document.querySelector(".product-container");

products.forEach((product) => {
    const card = `

    <div class= "product-card">

        <img src = "${product.image}" alt = ${product.name}>

        <h3>${product.name}</h3>

        <p>₹${product.price}</p>

        <button class = "add-to-cart">Add to cart</button>

    </div>
    `;
    productContainer.innerHTML += card;

    const buttons = document.querySelectorAll(".add-to-cart")
    console.log(buttons);
})