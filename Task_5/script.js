const products = [
    { name: "Women Dress", category: "clothing" },
    { name: "Men T-shirt", category: "clothing" },
    { name: "Hair Dryer", category: "electronics" },
    { name: "Air Conditioner", category: "electronics" },
    { name: "Smartphone", category: "electronics" },
    { name: "History Book", category: "books" },
    { name: "Psychology Book", category: "books" },
    { name: "Physiology Book", category: "books" },
    { name: "Women Skirt", category: "clothing" },
    { name: "Laptop", category: "electronics" },
];

const productList = document.getElementById("productList");
const buttons = document.querySelectorAll(".controls button");
const searchBox = document.getElementById("searchBox");

function renderProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        productList.appendChild(li);
    });
}


renderProducts(products);


buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        let filtered = category === "all" ? products : products.filter(p => p.category === category);
        
        const searchTerm = searchBox.value.trim().toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
        }
        renderProducts(filtered);
    });
});


searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.trim().toLowerCase();
    const selectedCategory = document.querySelector(".controls button.active")?.getAttribute("data-category") || "all";
    let filtered = selectedCategory === "all" ? products : products.filter(p => p.category === selectedCategory);
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
    }
    renderProducts(filtered);
});


buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});
