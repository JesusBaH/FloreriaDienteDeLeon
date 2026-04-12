const botonWhatsapp = document.getElementById('whatsapp-link');

const configurarEnlaceWhatsApp = () => {
    const telefono = "522223328721";
    const mensaje = "¡Hola! Me interesa un ramo de la Florería Diente de León.";
    const urlFinal = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    if (botonWhatsapp) {
        botonWhatsapp.href = urlFinal;
    }
};

document.addEventListener('DOMContentLoaded', configurarEnlaceWhatsApp);

document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-cta');
    const navMenu = document.getElementById('nav-menu');

    // Toggle del menú móvil
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        mobileBtn.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace (ideal para móviles)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            mobileBtn.classList.remove('active');
        });
    });
});