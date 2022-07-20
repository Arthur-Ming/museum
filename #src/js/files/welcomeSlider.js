const slider = new Swiper('.welcome-slider', {
   
    effect: "coverflow",
    speed: 600,
    loop: true,
    
    pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
    
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
    coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: true,
    },
});
 
const pag = document.querySelector('.pagination-current')
 
document.querySelector('.swiper-slide-active').addEventListener("transitionend", () => {
    const activeIndex = Number(document.querySelector('.swiper-slide-active').dataset.swiperSlideIndex)
    pag.innerHTML = `0${activeIndex + 1}`
 })