const cards = document.querySelectorAll('.gallery__card')

for (let x = 0; x < 15; x++) {
   const ran1 = Math.floor(Math.random() * 15)
   const ran2 = Math.floor(Math.random() * 15)

   const temp = cards[ran1].innerHTML;
   cards[ran1].innerHTML = cards[ran2].innerHTML;
   cards[ran2].innerHTML = temp
}
