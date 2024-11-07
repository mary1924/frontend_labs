const characterList = [
    {"id": 1, "name": 'Dazai Osamu', "img": "Osamu_Dazai_Wan_Anime.jpg"},
    {"id": 2, "name": 'Chuuya Nakahara', "img": "Chuya_Nakahara_Wan_Anime.jpg"},
    {"id": 3, "name": 'Rampo Edogawa', "img": "Ranpo_Edogawa_Wan_Anime.jpg"},

]

const characters = {
    dazai: {
        name: 'Dazai Osamu',
        age: '22',
        height: '181 cm',
        ability: 'No Longer Human'
    },
    chuuya: {
        name: 'Chuuya Nakahara',
        age: '22',
        height: '160 cm',
        ability: 'Upon the Tainted Sorrow'
    },
    rampo: {
        name: 'Rampo Edogawa',
        age: '26',
        height: '168 cm',
        ability: 'Super Deduction'
    }
}


function selectCharacter(characterId) {
    const character = characters[characterId];
    if (!character) return;
    document.getElementById('character-name').innerText = character.name;
    document.getElementById('character-age').innerText = character.age;
    document.getElementById('character-height').innerText = character.height;
    document.getElementById('character-ability').innerText = character.ability;
    document.getElementById('character-info').style.display = 'block';
    // Приховуємо всі картки, крім вибраної
    const cards = document.getElementById('character-grid');
    // cards.forEach(card => {
    //     if (!card.classList.contains(`card_${characterId}`)) {
    //         card.style.display = 'none';
    //     }
    // });
    cards.style.display = 'none';
    // Приховуємо всі інші карти персонажів
    // document.getElementById('character-grid').classList.add('hidden');
    // Показуємо таблицю з інформацією про персонажа
    document.getElementById('character-info').style.display = 'block';
}
function showAllCharacters() {
    // Показуємо всі персонажі
    // document.getElementById('character-grid').classList.remove('hidden');
    // Приховуємо таблицю з інформацією про обраного персонажа
    document.getElementById('character-grid').style.display = 'grid';
    document.getElementById('character-info').style.display = 'none';

}







// function selectCharacter(event) {
//     console.log(event);
//     const character = characters[characterId];
//     document.getElementById('character-name').innerText = character.name;
//     document.getElementById('character-age').innerText = character.age;
//     document.getElementById('character-height').innerText = character.height;
//     document.getElementById('character-ability').innerText = character.ability;
//     document.getElementById('character-info').style.display = 'block';

    
// }


// dazai:
// name: "Dazai";
// age:
// height:
