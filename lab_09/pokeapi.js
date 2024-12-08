document.addEventListener("DOMContentLoaded", fetchPokemonList);

async function fetchPokemonList() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20`; 

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Не вдалося отримати список покемонів');
        }

        const data = await response.json();

       
        displayPokemonList(data.results);
    } catch (error) {
        console.error(error);
        document.getElementById('pokemon-info').innerHTML = `<p class="error">Помилка: ${error.message}</p>`;
    }
}
async function fetchPokemonData(url) {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Не вдалося отримати список покемонів');
        }

        const data = await response.json();
        console.log(data);
        document.getElementById('info').innerHTML = `<img src="${data.sprites.back_default}"/>` + `<img src="${data.sprites.front_default}"/>`; 
        document.getElementById('info2').innerHTML = `<img src="${data.sprites.back_shiny}"/>` + `<img src="${data.sprites.front_shiny}"/>`  ; 
    } catch (error) {
        console.error(error);
        document.getElementById('info').innerHTML = `<p class="error">Помилка: ${error.message}</p>`;
    }
}


function displayPokemonList(pokemonList) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = ''; 

    const ul = document.createElement('ul');
    ul.classList.add('pokemon-list');

    pokemonList.forEach(pokemon => {
        const li = document.createElement('li');
        li.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        ul.appendChild(li);
        li.addEventListener('click',()=>{
            fetchPokemonData(pokemon.url)
        });
    });

    pokemonInfo.appendChild(ul);
}



