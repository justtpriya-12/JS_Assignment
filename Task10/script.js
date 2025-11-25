const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

let products = [];


async function fetchProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        products = await res.json();
        displayProducts(products);
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
}


function displayProducts(productList) {
    productGrid.innerHTML = "";

    productList.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
        `;

        productGrid.appendChild(card);
    });
}


function debounce(func, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), delay);
    };
}


function filterProducts() {
    const query = searchInput.value.toLowerCase();

    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(query)
    );

    displayProducts(filtered);
}


searchInput.addEventListener("input", debounce(filterProducts, 300));


fetchProducts();
