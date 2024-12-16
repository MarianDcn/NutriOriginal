let currentPage = "main";
let isMagazinOnline = true; // Variabilă pentru a urmări dacă suntem pe categoria "Magazin Online"
let currentProduct = null; // Variabilă pentru a stoca produsul curent
let limita = 12;

// Selectează elementul body pentru a adăuga/îndepărta clasa dark-mode
const body = document.body;

function goToCartPage() {
    window.location.href = 'cart.html';
}

// Funcția care comută între dark mode și light mode
function toggleDarkMode() {
    // Verifică dacă modul dark este activ
    if (body.classList.contains("dark-mode")) {
        // Dacă este activ modul dark, comută la light mode
        body.classList.remove("dark-mode");
        document.getElementById("dark-mode-icon").src = "day-and-night.png";  // Schimbă iconița la light mode
    } else {
        // Dacă este activ modul light, comută la dark mode
        body.classList.add("dark-mode");
        document.getElementById("dark-mode-icon").src = "day-and-night.png";  // Schimbă iconița la dark mode (poți folosi o iconiță diferită pentru fiecare mod)
    }
}

window.onload = function() {
    filterProducts("All"); // Afișează toate produsele atunci când se încarcă pagina

    // Adăugăm eveniment pentru căutare pe tasta Enter
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            searchProducts(); // Executăm căutarea
        }
    });

    // Verificăm istoricul pentru a întoarce utilizatorul la starea corectă
    if (window.history.state && window.history.state.page === "product") {
        openProductPage(window.history.state.product);
    }
};

window.onpopstate = function(event) {
    // Întotdeauna navighează înapoi la pagina principală, indiferent de locația curentă
    returnToMainPage();
};

function searchProducts() {
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    const errorMessageContainer = document.getElementById("error-message");
    const productList = document.getElementById("product-list");

    // Ascunde reclama când se face căutare
    document.getElementById("ad-space").style.display = "none";
    document.getElementById("ad-space-left").style.display = "none";

    // Verificăm dacă termenul de căutare este suficient de lung
    if (query.length < 3) {
        alert("Căutarea trebuie să conțină cel puțin 3 caractere.");
        return;
    }

    // Căutăm produsele care corespund termenului de căutare
    const filteredProducts = products.filter(product => {
        const productNameWords = product.name.toLowerCase().split(" ");
        return productNameWords.some(word => word === query);
    });

    // Dacă nu sunt produse găsite, afișăm mesajul de eroare
    if (filteredProducts.length === 0) {
        document.getElementById("search-input").value = '';
        errorMessageContainer.innerHTML = `<p>Din nefericire produsul "${query}" nu a fost găsit.</p>`;
        errorMessageContainer.style.display = 'block';
        productList.innerHTML = '';
        return;
    } else {
        errorMessageContainer.style.display = 'none';
    }
    document.getElementById("search-input").value = '';

    // Afișăm produsele găsite
    displayProducts(filteredProducts, isMagazinOnline ? null : null);
}

function openProductPage(product) {
    currentPage = "product";
    currentProduct = product; // Stocăm produsul curent
    const productList = document.getElementById("product-list");
    document.getElementById("ad-space").style.display = "none";
    document.getElementById("ad-space-left").style.display = "none";

    // Ascundem filtrul de preț atunci când suntem pe pagina unui produs
    document.getElementById("price-filter").style.display = "none";

    // Verificăm dacă produsul are arome și creăm dropdown-ul doar dacă există
    let flavorDropdown = '';
    if (product.flavors && product.flavors.length > 0) {
        flavorDropdown = `
            <label for="flavor-select">Alege aroma:</label>
            <select id="flavor-select">
                ${product.flavors.map(flavor => {
            return `<option value="${flavor}">${flavor}</option>`;
        }).join('')}
            </select>
        `;
    }

    // Verificăm dacă produsul are dimensiuni și creăm dropdown-ul doar dacă există
    let sizeDropdown = '';
    if (product.sizes && product.sizes.length > 0) {
        sizeDropdown = `
            <label for="size-select">Alege dimensiune:</label>
            <select id="size-select">
                ${product.sizes.map(size => {
            return `<option value="${size}">${size}</option>`;
        }).join('')}
            </select>
        `;
    }

    // Adăugăm câmpul numeric pentru numărul de produse
    const quantityField = `
        <label for="product-quantity" style="margin-left: 10px;">Cantitate:</label>
        <input type="number" id="product-quantity" value="1" min="1" style="width: 50px; margin-left: 5px;text-align: center;">
    `;

    productList.innerHTML = `
    <div class="product-page">
        <div class="product-details">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h1>${product.name}</h1>
                <p>${product.description}</p>
                <p>Preț: ${product.price} RON</p>
                <div style="display: flex; align-items: center;gap:5px;">
                    ${quantityField} <!-- Câmpul pentru cantitate -->
                    ${flavorDropdown} <!-- Dropdown-ul pentru arome, dacă există -->
                    ${sizeDropdown} <!-- Dropdown-ul pentru dimensiune, dacă există -->
                </div>
            </div>
        </div>
    </div>
    `;

    // Adăugăm produsul în istoricul browserului
    window.history.pushState({ page: "product", product: product }, product.name, `#${product.name}`);

    productList.innerHTML += `
    <button class="add-to-cart cart-button" onclick="addToCart()">Adaugă în coș 🛒</button>
    `;
}

function addToCart() {
    const quantity = parseInt(document.getElementById("product-quantity").value) || 1;
    const flavor = document.getElementById("flavor-select")?.value || null; // Preluăm aroma dacă există
    const size = document.getElementById("size-select")?.value || null; // Preluăm dimensiunea dacă există

    const productToAdd = {
        name: currentProduct.name,
        image: currentProduct.image,
        price: currentProduct.price,
        quantity: quantity,
        flavor: flavor, // Adăugăm aroma doar dacă există
        size: size // Adăugăm dimensiunea doar dacă există
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(item =>
        item.name === productToAdd.name &&
        item.flavor === productToAdd.flavor &&
        item.size === productToAdd.size
    );

    if (existingProduct) {
        existingProduct.quantity += productToAdd.quantity;
    } else {
        cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    // alert("Produsul a fost adăugat în coș!");
}

// Modificăm funcția pentru a reveni la pagina principală
function returnToMainPage() {
    currentPage = "main";
    filterProducts("All");
    document.getElementById("search-input").value = ''; // Golește câmpul de căutare
    hideErrorMessage();  // Ascunde mesajul de eroare la întoarcerea pe pagina principală

    // Afișează reclama doar pe pagina principală
    document.getElementById("ad-space").style.display = "block";
    document.getElementById("ad-space-left").style.display = "block";

    // Redirecționăm utilizatorul către pagina principală
    window.location.replace("#"); // Sau folosește `window.location.href = "/"` dacă vrei să încarci complet pagina
}

// Funcția pentru a ascunde mesajul de eroare
function hideErrorMessage() {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Funcția pentru a afișa produsele
function displayProducts(productsToDisplay, limit = limita) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (limit) {
        productsToDisplay.slice(0, limit).forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Preț: ${product.price} RON</p>
            `;
            // Adăugăm un eveniment de click pentru a deschide pagina produsului
            productCard.onclick = () => openProductPage(product);
            productList.appendChild(productCard);
        });
    } else {
        productsToDisplay.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Preț: ${product.price} RON</p>
            `;
            productCard.onclick = () => openProductPage(product);
            productList.appendChild(productCard);
        });
    }
}
function filterProducts(category) {
    const priceFilter = document.getElementById("price-filter");

    // Filtrăm produsele în funcție de categoria selectată
    let filteredProducts;
    if (category === "All") {
        filteredProducts = products;  // Arătăm toate produsele dacă categoria este "All"
    } else {
        filteredProducts = products.filter(product => product.category === category);
        document.getElementById("ad-space").style.display = "none";
        document.getElementById("ad-space-left").style.display = "none";
    }

    // Dacă nu am selectat "All", arătăm filtrul de preț
    if (category === "All") {
        priceFilter.style.display = "none";  // Ascundem filtrul de preț pe pagina principală
    } else {
        priceFilter.style.display = "block";  // Arătăm filtrul de preț când o categorie este selectată
    }

    // Filtrăm produsele în funcție de preț (min și max)
    const minPrice = parseInt(document.getElementById("min-price").value) || 0;
    const maxPrice = parseInt(document.getElementById("max-price").value) || Infinity;

    filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);

    // Afișăm produsele filtrate
    displayProducts(filteredProducts);
}




function applyPriceFilter() {
    const minPrice = parseInt(document.getElementById("min-price").value) || 0;
    const maxPrice = parseInt(document.getElementById("max-price").value) || Infinity;

    // Verificăm care este categoria curentă
    const currentCategory = document.querySelector("#categories button.selected");

    // Filtrăm produsele în funcție de preț și categoria selectată
    const filteredProducts = products.filter(product => {
        const isInCategory = product.category === currentCategory.textContent;
        const isInPriceRange = product.price >= minPrice && product.price <= maxPrice;
        return isInCategory && isInPriceRange;
    });

    // Afișăm produsele filtrate
    displayProducts(filteredProducts);
}

document.querySelectorAll("#categories button").forEach(button => {
    button.addEventListener('click', function() {
        // Eliminăm clasa 'selected' de la toate butoanele
        document.querySelectorAll("#categories button").forEach(b => b.classList.remove('selected'));

        // Adăugăm clasa 'selected' butonului apăsat
        button.classList.add('selected');

        // Apelăm funcția pentru a filtra produsele
        filterProducts(button.textContent);
    });
});


function resetFilters() {
    // Resetează filtrul de categorie (setăm la "All")
    const categoryButtons = document.querySelectorAll("#categories button");
    categoryButtons.forEach(button => button.classList.remove('selected'));
    document.querySelector("#categories button").classList.add('selected'); // Selectăm "All" din nou

    // Resetează filtrele de preț
    document.getElementById("min-price").value = ''; // Resetăm prețul minim
    document.getElementById("max-price").value = ''; // Resetăm prețul maxim

    // Apelăm funcția filterProducts pentru a aplica noile setări (toate produsele fără filtrare)
    filterProducts("All");
}



