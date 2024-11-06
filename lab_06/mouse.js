const img = document.getElementById('myMouse'); 
console.log(img)
let x = window.innerWidth / 2; 
let y = window.innerHeight / 2; 
let speed = 5; 

function updatePosition(event) {

  x = Math.random() * window.innerWidth;
  y = Math.random() * window.innerHeight;

  img.style.left = x + 'px';
  img.style.top = y + 'px';
}

img.addEventListener('mousemove', updatePosition);