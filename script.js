document.addEventListener("DOMContentLoaded", () => {

  // Inquiry form
  const form = document.querySelector('.inquiry-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Inquiry submitted (simulated).', 'default');
  });

  // Cart count update
  if (typeof updateCartCount === "function") updateCartCount();

  // Place order button
  const placeOrderBtn = document.getElementById("place-order");
  placeOrderBtn?.addEventListener("click", () => {
    showToast('Order placed! (simulated)', 'success');
    localStorage.removeItem('ecom_cart_v1');
    if (typeof updateCartCount === "function") updateCartCount();
  });

  // Search button
  document.getElementById('searchBtn')?.addEventListener('click', () => {
    const q = document.getElementById('searchInput').value.trim();
    alert(q ? 'Search: ' + q : 'Please type a search query');
  });

  // Learn more button
  document.getElementById('learnMore')?.addEventListener('click', () => {
    alert('Learn more clicked — this is a static demo page.');
  });

  // Login redirect
  document.querySelector(".btn.outline.full")?.addEventListener("click", () => {
    window.location.href = "login.html"; 
  });

  // Get category from URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');

  // Update breadcrumb
  if (category) {
      document.querySelector('.breadcrumbs').innerHTML =
          `<a href="index.html">Home</a> &gt; ${category.charAt(0).toUpperCase() + category.slice(1)}`;
  }

  // Load products dynamically
  const productList = document.querySelector('.product-list');
  if (productList) {
    if (category === 'electronics') {
        productList.innerHTML = `
            <div class="product-card">
                <img src="images/tech/7.jpg" alt="Laptop">
                <h4>Laptop</h4>
                <p>$499</p>
            </div>
            <div class="product-card">
                <img src="images/tech/5.jpg" alt="Smart Watch">
                <h4>Smart Watch</h4>
                <p>$129</p>
            </div>
        `;
    } else if (category === 'home') {
        productList.innerHTML = `
            <div class="product-card">
                <img src="images/interior/1.jpg" alt="Sofa">
                <h4>Sofa</h4>
                <p>$299</p>
            </div>
            <div class="product-card">
                <img src="images/interior/2.jpg" alt="Chair">
                <h4>Chair</h4>
                <p>$99</p>
            </div>
        `;
    } else {
        productList.innerHTML = `<p>Select a category to view products.</p>`;
    }
  }

});

// Toast function stays outside — doesn’t need DOM ready
function showToast(message, type = "default", duration = 3000) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast " + (type === "success" ? "success" : type === "error" ? "error" : "");
  toast.innerHTML = `
    <div class="msg">${message}</div>
    <button class="close-btn" aria-label="Close">&times;</button>
  `;
  container.appendChild(toast);
  const remove = () => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 200);
  };
  toast.querySelector(".close-btn")?.addEventListener("click", remove);
  setTimeout(remove, duration);
}

// Sticky header scroll effect
(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (current > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });
})();
document.getElementById('categorySelect')?.addEventListener('change', function () {
  const selectedCategory = this.value;
  if (selectedCategory) {
    window.location.href = `category.html?category=${encodeURIComponent(selectedCategory)}`;
  } else {
    window.location.href = `category.html`;
  }
});

// Countdown timer
(function(){
  const end = new Date(Date.now() + 4*24*60*60*1000 + 13*60*60*1000 + 34*60*1000 + 56*1000);
  function tick(){
    const now = new Date();
    let diff = Math.max(0, Math.floor((end - now) / 1000));
    const d = Math.floor(diff / (3600*24)); diff -= d*3600*24;
    const h = Math.floor(diff / 3600); diff -= h*3600;
    const m = Math.floor(diff / 60); diff -= m*60;
    const s = diff;
    document.getElementById('days').textContent = String(d).padStart(2,'0');
    document.getElementById('hours').textContent = String(h).padStart(2,'0');
    document.getElementById('mins').textContent = String(m).padStart(2,'0');
    document.getElementById('secs').textContent = String(s).padStart(2,'0');
  }
  tick(); 
  setInterval(tick, 1000);
})();
