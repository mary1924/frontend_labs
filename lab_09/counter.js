let score=0;
let openCard = null;

const start=()=>{
    const cards = document.querySelectorAll('.card');
const numbers = [1, 1, 2, 2].sort(() => Math.random() - 0.5); 

cards.forEach((card, i) => {
    card.dataset.value = numbers[i]; 
    card.onclick = () => {
        if (card.textContent) return; 
        card.textContent = card.dataset.value; 
// console.log("card", card)
// console.log("openCard", openCard)
        if (!openCard) {
            openCard = card; 
        } else {
            if (openCard.dataset.value !== card.dataset.value) {
                setTimeout(() => { 
                
                    card.textContent = '';
                }, 500);
            } 
            else {
                score++;
                document.getElementById('score').innerHTML=score;
                openCard = null; 
            }
        
        }
    };
});
}
const reset=()=>{
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        card.textContent = ''; 
    } )
}
document.getElementById('startButton').addEventListener('click',start)
document.getElementById('resetButton').addEventListener('click',()=>{
    openCard = null; 
    score=0;
    document.getElementById('score').innerHTML=score;
    reset();
})