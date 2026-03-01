const menuData = [
    {
        id: 1,
        cat: "Porciones",
        nom: "OREO",
        desc: "Galletas oreo trituradas, crema dulce y trozos de galleta, su sabor combina el cacao intenso con la suavidad de la crema.",
        precio: 7.50,
        img: "images/m1.webp",
    },
    {
        id: 2,
        cat: "Porciones",
        nom: "BESO DE ÁNGEL",
        desc: "Un postre ligero y celestial, con capas de merengue crujiente, crema suave y frutas frescas.",
        precio: 12,
        img: "images/m2.webp",
    },
    {
        id: 3,
        cat: "Porciones",
        nom: "ECLAIR",
        desc: "Delicado pastel francés en forma alargada, relleno de suave crema y cubierto con un glaseado de chocolate por encima.",
        precio: 7.50,
        img: "images/m3.webp",
    },
    {
        id: 4,
        cat: "Porciones",
        nom: "ROSA NEGRA",
        desc: "Elegante y deliciosa, esta torta combina bizcochuelo de chocolate intenso con capas de crema suave y un toque frutal.",
        precio: 8.50,
        img: "images/m4.webp",
    },
    {
        id: 5,
        cat: "Porciones",
        nom: "PIE DE LIMÓN",
        desc: "Base crocante, relleno cremoso y el toque justo de acidez. ¡Fresco, suave y simplemente irresistible!",
        precio: 8,
        img: "images/m5.webp",
    },
    {
        id: 6,
        cat: "Porciones",
        nom: "MATILDA",
        desc: " Intensamente chocolatosa, húmeda y suave, con capas que se derriten en la boca. ¡Un placer puro para los amantes del chocolate!",
        precio: 15,
        img: "images/m6.webp",
    },
    {
        id: 7,
        cat: "Porciones",
        nom: "SELVA NEGRA",
        desc: "Clásica y tentadora, con bizcochuelo de chocolate, crema chantilly y cerezas. ¡Un sabor que nunca pasa de moda!",
        precio: 9,
        img: "images/m7.webp",
    },
    {
        id: 8,
        cat: "Porciones",
        nom: "MOKA",
        desc: "El equilibrio perfecto entre café y chocolate en un bizcochuelo suave con crema delicada. ¡Energía y dulzura en cada bocado!.",
        precio: 9,
        img: "images/m8.webp",
    },
    {
        id: 9,
        cat: "Porciones",
        nom: "RED VELVET",
        desc: "Suave, esponjosa y con un color rojo vibrante, combinada con crema de queso. ¡Elegancia y sabor en cada porción!.",
        precio: 8,
        img: "images/m9.webp",
    },
    {
        id: 10,
        cat: "Porciones",
        nom: "CHOCO FLAN",
        desc: "Pique de res, milanesa de pollo, mozzarella, huevo y papas fritas.",
        precio: 7.50,
        img: "images/m10.webp",
    },
    {
        id: 11,
        cat: "Porciones",
        nom: "TIRAMISÚ",
        desc: "Postre italiano cremoso con capas de café, bizcocho y cacao. ¡Delicado, elegante y lleno de sabor!.",
        precio: 8,
        img: "images/m11.webp",
    },
    {
        id: 12,
        cat: "Porciones",
        nom: "TRES LECHES",
        desc: "Esponjosa, húmeda y dulce, bañada en una mezcla de leches que la hace irresistible. ¡Un clásico que conquista paladares!.",
        precio: 8,
        img: "images/m12.webp",
    },
    {
        id: 13,
        cat: "Porciones",
        nom: "MIL HOJAS",
        desc: "Capas crujientes de hojaldre con suave crema pastelera. ¡Un clásico dorado que se deshace en la boca!.",
        precio: 9,
        img: "images/m13.webp",
    },
    {
        id: 14,
        cat: "Porciones",
        nom: "CHOCO MARACUYÁ",
        desc: "Delicioso contraste entre chocolate intenso y el toque fresco y ácido del maracuyá. ¡Exótica y tentadora en cada bocado!.",
        precio: 8,
        img: "images/m14.webp",
    },
    {
        id: 15,
        cat: "Porciones",
        nom: "BROWNIE",
        desc: "Súper chocolatoso, húmedo y con textura perfecta. ¡Un bocado irresistible para los amantes del chocolate!.",
        precio: 5,
        img: "images/m15.webp",
    },
    {
        id: 16,
        cat: "Cafes",
        nom: "LATTE",
        desc: "Es una bebida suave y cremosa hecha con espresso y leche vaporizada, con sabor equilibrado y aterciopelado.",
        precio: 15,
        img: "images/m16.webp",
    },
    {
        id: 17,
        cat: "Cafes",
        nom: "CORTADO",
        desc: "Es un espresso con un toque de leche caliente, perfecto para quienes prefieren un sabor intenso pero más suave que el espresso solo.",
        precio: 12,
        img: "images/m17.webp",
    },
    {
        id: 18,
        cat: "Cafes",
        nom: "FLAT LG WHITTE",
        desc: ": Es un café con espresso y leche suavemente espumada, de sabor intenso y textura cremosa.",
        precio: 15,
        img: "images/m18.webp",
    },
    {
        id: 19,
        cat: "Cafes",
        nom: "CAFÉ BOMBÓN",
        desc: "Es un espresso mezclado con leche condensada, dulce y cremoso, ideal para los amantes del café con un toque goloso.",
        precio: 14,
        img: "images/m19.webp",
    },
    {
        id: 20,
        cat: "Cafes",
        nom: "MOKACCINO",
        desc: "Es una mezcla de espresso, leche y chocolate, con un sabor dulce y cremoso, perfecta para los amantes del cacao.",
        precio: 16,
        img: "images/m20.webp",
    },
    {
        id: 21,
        cat: "Cafes",
        nom: "LATTE SABORIZADO",
        desc: "Es un espresso con leche vaporizada y un toque de sabor (como vainilla, caramelo o avellana), suave y aromático..",
        precio: 16,
        img: "images/m21.webp",
    },
    {
        id: 22,
        cat: "Cafes",
        nom: "MOKA BLANCO",
        desc: "Es una combinación de espresso, leche vaporizada y chocolate blanco, con un sabor dulce y cremoso.",
        precio: 16,
        img: "images/m22.webp",
    },
    {
        id: 23,
        cat: "Bebidas frias",
        nom: "LATTE FRIO",
        desc: "Es una mezcla refrescante de espresso y leche con hielo, suave y cremosa.",
        precio: 15,
        img: "images/m23.webp",
    },
    {
        id: 24,
        cat: "Bebidas frias",
        nom: "LATTE SABORIZADO FRIO",
        desc: "Es una bebida refrescante de espresso, leche y hielo con un toque de sabor, suave y deliciosa.",
        precio: 16,
        img: "images/m24.webp",
    },
    {
        id: 25,
        cat: "Bebidas frias",
        nom: "FREDDO",
        desc: "Es un espresso batido con hielo, de sabor intenso y refrescante.",
        precio: 14,
        img: "images/m25.webp",
    },
    {
        id: 26,
        cat: "Bebidas chocolatadas",
        nom: "CHOCOLATE SIMPLE",
        desc: "Es una bebida caliente de cacao y leche, dulce y reconfortante.",
        precio: 12,
        img: "images/m26.webp",
    },
    {
        id: 27,
        cat: "Bebidas chocolatadas",
        nom: "CHOCOLATE CON LECHE SIMPLE",
        desc: "Es una bebida caliente y cremosa de cacao y leche, dulce y reconfortante.",
        precio: 13,
        img: "images/m27.webp",
    },
    {
        id: 28,
        cat: "Bebidas frias",
        nom: "AFFOGATO",
        desc: "Es un postre-café que combina helado de vainilla con un espresso caliente, dulce y delicioso.",
        precio: 20,
        img: "images/m28.webp",
    },
    {
        id: 29,
        cat: "Bebidas chocolatadas",
        nom: "SUBMARINO",
        desc: "Es una bebida caliente de leche con chocolate derretido, dulce y reconfortante.",
        precio: 14,
        img: "images/m29.webp",
    },
    {
        id: 30,
        cat: "Bebidas chocolatadas",
        nom: "CHOCOBOMBA",
        desc: "Es una bebida caliente de chocolate intenso, crema y dulce.",
        precio: 15,
        img: "images/m30.webp",
    },
    {
        id: 31,
        cat: "Cafes",
        nom: "MANJARITO",
        desc: "Es un café especial con sabor suave y equilibrada, ideal para disfrutar con dulzura y cremosidad.",
        precio: 16,
        img: "images/m31.webp",
    },
    {
        id: 32,
        cat: "Bebidas chocolatadas",
        nom: "CHOCOMANÍ",
        desc: "Es una bebida dulce y cremosa de chocolate con un toque de mantequilla de maní, deliciosa.",
        precio: 16,
        img: "images/m32.webp",
    },
    {
        id: 33,
        cat: "Cafe",
        nom: "MACHA",
        desc: "Es una bebida de té verde en polvo con leche, suave, cremosa y llena de antioxidantes.",
        precio: 15,
        img: "images/m33.webp",
    },
    {
        id: 34,
        cat: "Cafe",
        nom: "CAPPUCCINO CON CREMA",
        desc: "Es un café espresso con leche espumosa y una capa de crema, suave y deliciosa.",
        precio: 18,
        img: "images/m34.webp",
    },
    {
        id: 35,
        cat: "Cafe",
        nom: "DOPPIO",
        desc: "Es un café espresso doble, intenso y lleno de sabor para los amantes del café fuerte.",
        precio: 12,
        img: "images/m35.webp",
    },
    {
        id: 36,
        cat: "Tortas",
        nom: "CHOCO MARACUYÁ",
        desc: "Delicioso contraste entre chocolate intenso y el toque fresco y ácido del maracuyá. ¡Exótica y tentadora en cada bocado!.",
        precio: 75,
        img: "images/m36.webp",
    },
    {
        id: 37,
        cat: "Tortas",
        nom: "RED VELVET",
        desc: "Suave, esponjosa y con un color rojo vibrante, combinada con crema de queso. ¡Elegancia y sabor en cada porción!.",
        precio: 75,
        img: "images/m37.webp",
    },
    {
        id: 38,
        cat: "Tortas",
        nom: "ROSA NEGRA",
        desc: "Elegante y deliciosa, esta torta combina bizcochuelo de chocolate intenso con capas de crema suave y un toque frutal.",
        precio: 85,
        img: "images/m38.webp",
    },
    {
        id: 39,
        cat: "Tortas",
        nom: "OREO",
        desc: "Galletas oreo trituradas, crema dulce y trozos de galleta, su sabor combina el cacao intenso con la suavidad de la crema.",
        precio: 75,
        img: "images/m39.webp",
    },
    {
        id: 40,
        cat: "Tortas",
        nom: "TRES LECHES",
        desc: "Esponjosa, húmeda y dulce, bañada en una mezcla de leches que la hace irresistible. ¡Un clásico que conquista paladares!.",
        precio: 75,
        img: "images/m40.webp",
    },
    {
        id: 41,
        cat: "Ensaladas",
        nom: "ENSALADA",
        desc: "Fruta de la temporada, con galleta (tamaño pequeño).",
        precio: 6,
        img: "images/m41.webp",
    },
    {
        id: 42,
        cat: "Ensaladas",
        nom: "ENSALADA DE FRUTAS",
        desc: "Es una bebida dulce y cremosa de chocolate con un toque de mantequilla de maní, deliciosa.",
        precio: 12,
        img: "images/m42.webp",
    },
    {
        id: 43,
        cat: "Ensaladas",
        nom: "ENSALADA DE FRUTAS",
        desc: "Es una bebida dulce y cremosa de chocolate con un toque de mantequilla de maní, deliciosa.",
        precio: 16.50,
        img: "images/m43.webp",
    },
    {
        id: 44,
        cat: "Malteadas",
        nom: "MALTEADA DE FRUTILLA",
        desc: "Es una bebida fría y cremosa hecha con leche, dulce y fruta que refresca el paladar.",
        precio: 12,
        img: "images/m44.webp",
    },
    {
        id: 45,
        cat: "Malteadas",
        nom: "MALTEADA DE CHOCOLATE",
        desc: "Es una bebida fría y cremosa hecha con chocolate, leche, dulce y fruta que refresca el paladar.",
        precio: 12,
        img: "images/m45.webp",
    },
    {
        id: 46,
        cat: "Especiales",
        nom: "CHOCOFRESAS",
        desc: "Son apreciadas por la combinación del sabor dulce y ligeramente ácido de la fresa con la riqueza del chocolate.",
        precio: 18,
        img: "images/m46.webp",
    },
];
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    renderMenu("Porciones");
    setupCategoryTabs();
    verificarHorario();
    
    const categorias = [...new Set(menuData.map(item => item.cat))];
    categorias.forEach(c => preloadImages(c));
});

function preloadImages(categoria) {
    const filtrados = menuData.filter(item => item.cat === categoria);
    filtrados.forEach(item => {
        const img = new Image();
        img.src = item.img;
    });
}

function renderMenu(categoria) {
    const container = document.getElementById("product-list");
    const title = document.querySelector(".category-title");
    if (title) title.innerText = categoria;
    
    container.innerHTML = "";

    const normalize = (text) => text.toLowerCase().trim().replace(/s$/, "");
    const filtrados = menuData.filter(
        (item) => normalize(item.cat) === normalize(categoria)
    );

    if (filtrados.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted);">Próximamente...</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();

    filtrados.forEach((item) => {
        const productCard = document.createElement("div");
        productCard.className = "product-item";
        productCard.innerHTML = `
            <div class="img-placeholder">
                <img src="${item.img}" 
                     class="prod-img" 
                     alt="${item.nom}" 
                     loading="lazy"
                     onload="this.parentElement.classList.add('loaded')"
                     onerror="this.src=''">
            </div>
            <div class="prod-info">
                <div>
                    <h3>${item.nom}</h3>
                    <p>${item.desc}</p>
                </div>
                <div class="prod-price-row">
                    <span class="price">Bs. ${item.precio.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">AGREGAR</button>
                </div>
            </div>
        `;
        fragment.appendChild(productCard);
    });
    
    container.appendChild(fragment);
}

function setupCategoryTabs() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            const nombreCategoria = tab.innerText.trim();
            renderMenu(nombreCategoria);
            window.scrollTo({ top: 150, behavior: "smooth" });
        });
    });
}

function addToCart(id) {
    const producto = menuData.find((p) => p.id === id);
    const itemEnCarrito = cart.find((item) => item.id === id);
    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        cart.push({ ...producto, cantidad: 1 });
    }
    actualizarBarraFlotante();
}

function actualizarBarraFlotante() {
    const totalQty = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
    const footer = document.getElementById("footer-cart");
    if (footer) {
        footer.style.display = totalQty > 0 ? "flex" : "none";
        document.getElementById("cart-qty").innerText = totalQty;
        document.getElementById("cart-total").innerText = totalPrice.toFixed(2);
    }
    animateCart();
}

function openOrderSummary() {
    const listContainer = document.getElementById("cart-items-list");
    const subtotalLabel = document.getElementById("subtotal-val");
    const totalLabel = document.getElementById("final-total-val");
    listContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
        const subtotalItem = item.cantidad * item.precio;
        total += subtotalItem;
        listContainer.innerHTML += `
            <tr>
                <td class="qty-cell">${item.cantidad}x</td>
                <td class="name-cell">${item.nom}</td>
                <td class="price-cell">Bs. ${subtotalItem.toFixed(2)}</td>
                <td class="action-cell">
                    <button class="btn-delete" onclick="removeItem(${item.id})">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            </tr>`;
    });
    subtotalLabel.innerText = total.toFixed(2);
    totalLabel.innerText = total.toFixed(2);
    document.getElementById("order-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("order-modal").style.display = "none";
}

function removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    if (cart.length === 0) {
        closeModal();
    } else {
        openOrderSummary();
    }
    actualizarBarraFlotante();
}

function irAFormulario() {
    closeModal();
    document.getElementById("data-modal").style.display = "block";
}

function closeDataModal() {
    document.getElementById("data-modal").style.display = "none";
}

function toggleDelivery(isDelivery) {
    document.getElementById("delivery-section").style.display = isDelivery ? "block" : "none";
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            document.getElementById("direccion").value = `https://www.google.com/maps?q=${lat},${lon}`;
            alert("Ubicación obtenida.");
        });
    }
}

function confirmarPedido() {
    const nombre = document.getElementById("nombre-cliente").value;
    const telf = document.getElementById("telefono-cliente").value;
    const entrega = document.querySelector('input[name="entrega"]:checked').value;
    const direccion = document.getElementById("direccion").value;
    const pago = document.getElementById("metodo-pago").value;
    if (!nombre || !telf) {
        alert("Por favor, completa tus datos.");
        return;
    }
    let mensaje = `*NUEVO PEDIDO - EL AMOR ES DULCE*\n\n`;
    mensaje += `*Cliente:* ${nombre}\n*Celular:* ${telf}\n*Tipo:* ${entrega}\n`;
    if (entrega === "Delivery") mensaje += `*Dirección:* ${direccion}\n`;
    mensaje += `*Pago:* ${pago}\n\n*PRODUCTOS:*\n`;
    let total = 0;
    cart.forEach((item) => {
        const sub = item.cantidad * item.precio;
        mensaje += `- ${item.cantidad}x ${item.nom} (Bs. ${sub.toFixed(2)})\n`;
        total += sub;
    });
    mensaje += `\n*TOTAL A PAGAR: Bs. ${total.toFixed(2)}*`;
    const numeroWhatsApp = "59178680095";
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

function verificarHorario() {
    const statusElement = document.getElementById("store-status");
    if (!statusElement) return;
    const ahora = new Date();
    const horaActual = ahora.getHours();
    const horaApertura = 9;
    const horaCierre = 15;
    if (horaActual >= horaApertura && horaActual < horaCierre) {
        statusElement.textContent = "Abierto";
        statusElement.className = "status-open";
    } else {
        statusElement.textContent = "Cerrado";
        statusElement.className = "status-closed";
    }
}

function animateCart() {
    const badge = document.querySelector(".cart-badge");
    if (badge) {
        badge.style.transform = "scale(1.2)";
        setTimeout(() => { badge.style.transform = "scale(1)"; }, 200);
    }
}

setInterval(verificarHorario, 60000);