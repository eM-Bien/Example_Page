const rotatingText = document.querySelectorAll('.last-text__subtitle');
const interval = setInterval(function() {
   startRotate();
}, 2000);  
let index = 1;
let textLenght = rotatingText.length;

startRotate = () => {
   if (index >= textLenght) {
      index = 0;
   }

   for (let text of rotatingText) {
      text.classList.remove('last-text__subtitle--animation');
  }
  rotatingText[index++].classList.add('last-text__subtitle--animation');
}


