async function Products() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    products.forEach(function(product) {
        render(product);
    });
    let mainApp =
    function render(product) {
        let card = document.createElement('div');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="card-body">
                <h2 class="card-title">${product.title}</h2>
                <p class="card-text">${product.description}</p>
                <p class="card-text price">$${product.price}</p>
                <a href="#" class="btn">Add to Cart</a>
            </div>
        `;
        document.getElementById("products-container").appendChild(card);
    }
}
Products();




mainApp.Update = Products
mainApp.Delete =Products