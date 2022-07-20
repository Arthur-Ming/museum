const swiper = new Swiper(".videoslider2", {
    spaceBetween: 20,
    slidesPerView: 2,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    breakpoints: {
 
       770: {
          slidesPerView: 3,
          spaceBetween: 42,
       },
     },
});

const swiper2 = new Swiper(".videoslider", {
    spaceBetween: 10,
    loop: true,
    navigation: {
       nextEl: ".video__next",
       prevEl: ".video__prev",
    },
    pagination: {
       el: '.videoslider2-pagination',
       clickable: true,
    },
 
    thumbs: {
       swiper: swiper,
    },
 });