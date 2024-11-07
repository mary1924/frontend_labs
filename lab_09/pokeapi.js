document.addEventListener("DOMContentLoaded", fetchPokemonList);

async function fetchPokemonList() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20`; // Встановіть limit для кількості покемонів у списку

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Не вдалося отримати список покемонів');
        }

        const data = await response.json();

        // Виклик функції для відображення списку покемонів
        displayPokemonList(data.results);
    } catch (error) {
        console.error(error);
        document.getElementById('pokemon-info').innerHTML = `<p class="error">Помилка: ${error.message}</p>`;
    }
}

function displayPokemonList(pokemonList) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = ''; // Очищуємо попередній вміст

    const ul = document.createElement('ul');
    ul.classList.add('pokemon-list');

    pokemonList.forEach(pokemon => {
        const li = document.createElement('li');
        li.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        ul.appendChild(li);
    });

    pokemonInfo.appendChild(ul);
}








// async function fetchPokemon() {
//     const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
//     const url = `https://pokeapi.co/api/v2/pokemon`;

//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error('Покемона не знайдено');
//         }

//         const data = await response.json();
//         console.log(data)
//         for (let i=0; i<data.results.length; i++) {
//             console.log(data.results[i].name)
//         }
//     } catch (error) {
//         console.log(error)
//         document.getElementById('pokemon-info').innerHTML = `<p class="error">Error ${error.message}</p>`;
//     }
// }
