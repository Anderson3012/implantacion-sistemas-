// Mostrar menu al hacer clic en el icono 
document.getElementById('menu-toggle').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('show'); // Alternar la clase 'show'
});

// Cerrar el menú al hacer clic fuera de él
window.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuToggle = document.getElementById('menu-toggle');

    // Verificar si el clic fue fuera del menú y del ícono del menú
    if (!dropdownMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        dropdownMenu.classList.remove('show'); // Cerrar el menú
    }
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 80);
});

//ScrollReveal
const sr = ScrollReveal({
    origin:'top',
    distance: '85px',
    duration:2500,
    reset:false
});

sr.reveal('.home-text',{delay:300});
sr.reveal('.home-img',{delay:400});
sr.reveal('.container',{delay:400});

sr.reveal('.about-img',{});
sr.reveal('.about-text',{delay:300});

sr.reveal('.middle-text',{});
sr.reveal('.row-btn,.shop-content',{delay:300});