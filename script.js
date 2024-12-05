//codigo para los botones de la paginacion

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1, // Número de tarjetas visibles por defecto
        spaceBetween: 20, // Espaciado entre las tarjetas
        loop: true, // Carrusel infinito
        centeredSlides: true, // Centra las tarjetas
        navigation: {
            nextEl: '.swiper-button-next', // Botón "Siguiente"
            prevEl: '.swiper-button-prev', // Botón "Anterior"
        },
        breakpoints: {
            480: {
                slidesPerView: 1, // Una tarjeta visible en pantallas pequeñas
                spaceBetween: 10, // Menor espacio entre tarjetas
                loop: true, // Mantener el carrusel infinito en pantallas pequeñas
                centeredSlides: true, // Centrar las tarjetas en pantallas pequeñas
            },
            768: {
                slidesPerView: 2, // Dos tarjetas visibles en pantallas medianas
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3, // Tres tarjetas visibles en pantallas grandes
                spaceBetween: 20,
            },
        },
    });
});

//codigo para las preguntas frecuentes, para dale movimiento tanto a la flecha y las casillas

document.querySelectorAll('.faq-item h6').forEach(item => {
    item.addEventListener('click', () => {
        // Muestra u oculta la respuesta
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        
        // Añade o elimina la clase active para animar la flecha y mostrar la respuesta
        item.parentElement.classList.toggle('active');
    });
});

// CODIGO PARA EL BOTON DEL MENU DE HAMBURGUESA

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    // Verifica si los elementos existen en el DOM
    if (!menuIcon || !menu) {
        console.error('Error: No se encuentran los elementos .menu-icon o .menu en el DOM.');
        return;
    }

    // Evento para alternar la visibilidad del menú
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active'); // Activa/desactiva la clase 'active'
    });
});






