const cards = document.querySelectorAll('.card');
const numbers = [1, 1, 2, 2].sort(() => Math.random() - 0.5); // Перемішані числа
let openCard = null;

cards.forEach((card, i) => {
    card.dataset.value = numbers[i]; // Присвоїти значення картам
    card.onclick = () => {
        if (card.textContent) return; // Якщо вже відкрита, нічого не робити
        card.textContent = card.dataset.value; // Показати число

        if (!openCard) {
            openCard = card; // Запам'ятати першу карту
        } else {
            if (openCard.dataset.value !== card.dataset.value) {
                setTimeout(() => { // Якщо не збігаються, закрити обидві
                    openCard.textContent = '';
                    card.textContent = '';
                }, 500);
            }
            openCard = null; // Скинути вибір
        }
    };
});
