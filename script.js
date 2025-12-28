// Carrusel Simple
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 5000);

// Formulario a WhatsApp actualizado
    document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const evento = document.getElementById('evento').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Tu número de Corrientes configurado
    const numero = "5493794891317"; 
    
    // Creamos un mensaje amigable para que sepas qué quiere el cliente
    const texto = `Hola Savam! Mi nombre es *${nombre}*. Me gustaría consultar por la decoración de un evento tipo: *${evento}*. %0A%0ADetalles: ${mensaje}`;
    
    const url = `https://wa.me/${numero}?text=${texto}`;
    
    window.open(url, '_blank');
});