const thumb = document.querySelector('.explore__curtain');
const exploreImages = document.querySelector('.explore__images');
const exploreImageAfter = document.querySelector('.explore__image_after');

exploreImageAfter.style.width = thumb.getBoundingClientRect().left - exploreImages.getBoundingClientRect().left + thumb.clientWidth / 2 + 'px';
thumb.addEventListener('pointerdown', (event) => {
   event.preventDefault(); 

   let shiftX = event.clientX - thumb.getBoundingClientRect().left;

   document.addEventListener('pointermove', onMouseMove);
   document.addEventListener('pointerup', onMouseUp);

   function onMouseMove(event) {

      let newLeft = event.clientX - shiftX - exploreImages.getBoundingClientRect().left;

      if (newLeft < 0) {
         newLeft = 0;
      }
      let rightEdge = exploreImages.offsetWidth - thumb.offsetWidth;
      if (newLeft > rightEdge) {
         newLeft = rightEdge;
      }

      thumb.style.left = newLeft + 'px';
      exploreImageAfter.style.width = newLeft + thumb.clientWidth / 2 + 'px';
   }

   function onMouseUp() {
      document.removeEventListener('pointerup', onMouseUp);
      document.removeEventListener('pointermove', onMouseMove);
   }
}) 
