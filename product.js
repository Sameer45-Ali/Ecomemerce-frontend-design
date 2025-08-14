// product.js
document.addEventListener("DOMContentLoaded", () => {

    // Change main image
    document.querySelectorAll(".thumb").forEach(img => {
        img.addEventListener("click", () => {
            const main = document.getElementById("current-img");
            if (main) main.src = img.dataset.src;
            document.querySelectorAll(".thumb").forEach(t => t.classList.remove("selected"));
            img.classList.add("selected");
        });
    });

    // Quantity buttons
    const qtyInput = document.getElementById("qty");
    document.getElementById("increase-qty")?.addEventListener("click", () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
    });
    document.getElementById("decrease-qty")?.addEventListener("click", () => {
        qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
    });

    // Add to cart
    document.getElementById("add-to-cart")?.addEventListener("click", () => {
        const product = {
            id: "product-1",
            title: document.querySelector(".product-title")?.textContent || "Product",
            price: parseFloat(document.querySelector(".price-current")?.textContent.replace("$", "")) || 0,
            image: document.getElementById("current-img")?.src || "",
            quantity: parseInt(qtyInput.value)
        };
        addToCart(product);
        showToast("Added to cart", "success");
    });

    // Tab switching
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
            document.getElementById(btn.dataset.target)?.classList.remove("hidden");
            btn.classList.add("active");
        });
    });
});
