const cards = document.querySelectorAll('.card');
const numbers = [1, 1, 2, 2].sort(() => Math.random() - 0.5); 
let openCard = null;

cards.forEach((card, i) => {
    card.dataset.value = numbers[i]; 
    card.onclick = () => {
        if (card.textContent) return; 
        card.textContent = card.dataset.value; 

        if (!openCard) {
            openCard = card; 
        } else {
            if (openCard.dataset.value !== card.dataset.value) {
                setTimeout(() => { 
                    openCard.textContent = '';
                    card.textContent = '';
                }, 500);
            }
            openCard = null; 
        }
    };
});
