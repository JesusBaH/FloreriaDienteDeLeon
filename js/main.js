const botonWhatsapp = document.getElementById('whatsapp-link');

const telefono = "522223328721";
const mensaje = "¡Hola! Me interesa un ramo de la Florería Diente de León.";

const urlFinal = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

//const urlFinal = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;

botonWhatsapp.href = urlFinal;