window.addEventListener('scroll', onScrolledBottom)

const buttonUp = document.querySelector('.button-up')
const gall = document.querySelector('.gallery')

let h = document.documentElement.clientHeight
let step = 500;
let st = h / 2;
if (document.documentElement.clientWidth <= 1200) {
   step = 300;
}
if (document.documentElement.clientWidth <= 600) {
   step = 200;

}
if (document.documentElement.clientWidth <= 420) {
   step = 100;
}
window.addEventListener('resize', () => {

   h = document.documentElement.clientHeight
   step = 500;
   st = h / 2;

   if (document.documentElement.clientWidth <= 1200) {
      step = 300;
   }
   if (document.documentElement.clientWidth <= 600) {
      step = 200;
   }
   if (document.documentElement.clientWidth <= 420) {
      step = 100;
   }
})

function onScrolledBottom(event) {



   let top = gall.getBoundingClientRect().top

   if (window.pageYOffset > h) {
      buttonUp.classList.add('button-up_sh')
   } else {
      buttonUp.classList.remove('button-up_sh')
   }


   if (top < st) {

      gall.classList.add('gallery_hs-1')
   }
   if (top < (st - step)) {
      gall.classList.add('gallery_hs-2')
   }
   if (top < (st - step * 2)) {
      gall.classList.add('gallery_hs-3')
   }
   if (top < (st - step * 3)) {
      gall.classList.add('gallery_hs-4')
   }
   if (top < (st - step * 4)) {
      gall.classList.add('gallery_hs-5')
   }

   if (top > st) {

      gall.classList.remove('gallery_hs-1')
   }
   if (top > (st - step)) {
      gall.classList.remove('gallery_hs-2')
   }
   if (top > (st - step * 2)) {
      gall.classList.remove('gallery_hs-3')
   }
   if (top > (st - step * 3)) {
      gall.classList.remove('gallery_hs-4')
   }
   if (top > (st - step * 4)) {
      gall.classList.remove('gallery_hs-5')
   }

}


buttonUp.addEventListener('click', () => {


   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   })

})