document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  // Login form submit
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Logged in successfully! (simulated)", "success");
  });

  // Signup form submit
  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Account created! (simulated)", "success");
  });
});

// Toast function
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
