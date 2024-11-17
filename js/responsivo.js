const menu = document.querySelector(".menu");
const icon = document.querySelector(".hamb");
const direitos = document.querySelector(".ano");
const lateral = document.querySelector(".lateral");

console.log(icon.textContent);

menu.addEventListener("click", () => {
    if (icon.textContent === "☰") {
        icon.innerHTML = "&times;";
        lateral.classList.add("activo");
    } else {
        icon.innerHTML = "&#9776;";
        lateral.classList.remove("activo");
    }
});

const now = new Date();
direitos.innerText = now.getFullYear();
