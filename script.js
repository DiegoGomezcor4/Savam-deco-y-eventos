// Carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 5000);

// Menú Hamburguesa
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Formulario a WhatsApp
document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const evento = document.getElementById('evento').value;
    const mensaje = document.getElementById('mensaje').value;
    
    const numero = "5493794891317"; 
    const texto = `Hola Savam! Mi nombre es *${nombre}*. Me gustaría consultar por la decoración de un evento tipo: *${evento}*. %0A%0ADetalles: ${mensaje}`;
    
    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, '_blank');
});