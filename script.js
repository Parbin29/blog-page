// Theme toggle
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

// Button to switch themes
document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.innerText = "Toggle Dark Mode";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.onclick = toggleTheme;
    document.body.appendChild(button);
});
