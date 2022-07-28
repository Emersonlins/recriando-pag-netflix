$('.owl-carousel').owlCarousel({
    loop: false, // se colocar true as imagens rodam de forma infinita
    margin:10, // separacao das imagens no carrosel
    nav:false, // setinhas de navegação abaixo das imagens do carrosel
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})