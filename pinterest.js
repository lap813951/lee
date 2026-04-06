const toggle = document.getElementById('menu-toggle');
const Menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    Menu.classList.toggle('active');
    toggle.textContent = Menu.classList.contains("active") ? "✖" : "☰";
} );
