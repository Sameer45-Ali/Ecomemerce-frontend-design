// filters.js
const PRODUCTS = [
  { id: "p1", title: "Canon Camera EOS 2000, Black 10x zoom", category: "Mobile accessory", price: 998.0, oldPrice: 1128.0, shipping: "Free Shipping", rating: 7.5, orders: 154, image: "assets/images/phone_red.png" },
  { id: "p2", title: "GoPro HERO6 4K Action Camera - Black", category: "Mobile accessory", price: 998.0, oldPrice: 1128.0, shipping: "Free Shipping", rating: 7.5, orders: 154, image: "assets/images/phone_gradient.png" },
];
function renderFilteredProducts({ sort = "Featured", verifiedOnly = false } = {}) {
  const container = document.querySelector(".product-list");
  if (!container) return;
  let filtered = [...PRODUCTS];
  if (sort === "Price: Low to High") filtered.sort((a,b)=>a.price-b.price);
  else if (sort === "Price: High to Low") filtered.sort((a,b)=>b.price-a.price);
  container.innerHTML = "";
  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `
      <div class="thumb">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="details">
        <div class="title">${item.title}</div>
        <div class="pricing">
          <span class="old-price">$${item.oldPrice.toFixed(2)}</span>
          <span class="current-price">$${item.price.toFixed(2)}</span>
          <span class="shipping">${item.shipping}</span>
        </div>
        <div class="meta">${item.rating} ★ • ${item.orders} orders</div>
        <div class="description">
          Short description placeholder for ${item.title}.
        </div>
        <div class="link-row">
          <a href="product.html" class="detail-link">View details</a>
        </div>
      </div>
      <div class="action">
        <div class="heart">♡</div>
      </div>
    `;
    container.appendChild(div);
  });
}
function setupFilters() {
  const sortSelect = document.querySelector(".sort-select");
  const verifiedCheckbox = document.querySelector('.verified-checkbox input');
  const viewToggleBtns = document.querySelectorAll(".view-toggle .toggle-btn");
  function apply() {
    const sort = sortSelect?.value || "Featured";
    const verifiedOnly = verifiedCheckbox?.checked || false;
    renderFilteredProducts({ sort, verifiedOnly });
  }
  sortSelect?.addEventListener("change", apply);
  verifiedCheckbox?.addEventListener("change", apply);
  viewToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      viewToggleBtns.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
  apply();
}
document.addEventListener("DOMContentLoaded", () => { setupFilters(); });