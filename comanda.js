// Funcția pentru afișarea sumarului comenzii
window.onload = function () {
    const summaryItemsContainer = document.getElementById("summary-items");
    const summaryTotal = document.getElementById("summary-total");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        summaryItemsContainer.innerHTML = "<p>Nu ai produse în coș.</p>";
        summaryTotal.textContent = "Total: 0 RON";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "summary-item";

        // Formatarea sumarului pentru fiecare produs
        itemElement.innerHTML = `
            <p><strong>${item.name}</strong> x ${item.quantity} - ${item.price * item.quantity} RON</p>
        `;
        summaryItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    // Afișăm totalul final al comenzii
    summaryTotal.textContent = `Total: ${total} RON`;
};

// Procesarea formularului
document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Preluăm datele din formular
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const county = document.getElementById("county").value;
    const address = document.getElementById("address").value;

    // Validăm completarea câmpurilor
    if (!firstName || !lastName || !email || !city || !county || !address) {
        alert("Te rugăm să completezi toate câmpurile!");
        return;
    }

    // Creăm un obiect cu datele comenzii
    const orderData = {
        firstName,
        lastName,
        email,
        city,
        county,
        address,
        cart: JSON.parse(localStorage.getItem("cart"))
    };

    // Salvăm datele comenzii (poate fi trimis la un server aici)
    localStorage.setItem("orderDetails", JSON.stringify(orderData));

    // Afișăm un mesaj de succes
    alert("Comanda ta a fost plasată cu succes!");

    // Golim coșul și redirecționăm către pagina de mulțumire
    localStorage.removeItem("cart");
    window.location.href = 'index.html';
});
