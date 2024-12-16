// Afișăm produsele din coș
window.onload = function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Coșul de cumpărături este gol.</p>";
        document.getElementById("cart-summary").style.display = "none";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Marime: ${item.size}</p>
                <p>Aromă: ${item.flavor}</p>
                <p>Preț: ${item.price} RON</p>
                <p>Cantitate: ${item.quantity}</p>
                <button onclick="removeFromCart(${index})">Șterge</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: ${total} RON`;
};

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

// Funcția pentru a șterge un produs din coș
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
}

// Funcția pentru a plasa comanda
function placeOrder() {
    //alert("Comanda a fost plasată cu succes!");
    // localStorage.removeItem("cart");
    window.location.href = 'comanda.html';
    //window.location.reload();
}

// Redirecționare la pagina principală
function returnToMainPage() {
    window.location.href = 'index.html';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Activează dark mode dacă este setat în localStorage
window.onload = function () {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Restul codului pentru afișarea coșului de cumpărături
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Coșul de cumpărături este gol.</p>";
        document.getElementById("cart-summary").style.display = "none";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                ${item.flavor ? `<p>Aromă: ${item.flavor}</p>` : ''} <!-- Afișează doar dacă există -->
                ${item.size ? `<p>Marime: ${item.size}</p>` : ''} <!-- Afișează doar dacă există -->
                <p>Preț: ${item.price} RON</p>
                <p>Cantitate: ${item.quantity}</p>
                <button onclick="removeFromCart(${index})">Șterge</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: ${total} RON`;
};

