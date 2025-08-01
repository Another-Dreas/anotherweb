document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000); // Delay for animation

  const themeBtn = document.getElementById("toggleTheme");
  themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    themeBtn.textContent = newTheme === "light" ? "🌙" : "☀️";
  });
});
