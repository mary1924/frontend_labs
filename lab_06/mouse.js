const img = document.getElementById('myMouse'); 
let x = window.innerWidth / 2; 
let y = window.innerHeight / 2; 

function updatePosition(event) {

  x = Math.random() * window.innerWidth / 1.2;
  y = Math.random() * window.innerHeight / 1.8;

  img.style.left = x + 'px';
  img.style.top = y + 'px';
}

img.addEventListener('mousemove', updatePosition);