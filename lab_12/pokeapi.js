document.addEventListener("DOMContentLoaded", fetchPokemonList);

async function fetchPokemonList() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20`; 
        const response = await fetch(url);
        const data = await response.json();
        displayPokemonList(data.results);
}

async function fetchPokemonData(url) {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('info').innerHTML = `<img src="${data.sprites.back_default}"/>` + `<img src="${data.sprites.front_default}"/>`; 
        document.getElementById('info2').innerHTML = `<img src="${data.sprites.back_shiny}"/>` + `<img src="${data.sprites.front_shiny}"/>`  ;
        document.getElementById('info3').innerHTML = '<div>Abilities: '+data.abilities.map(ability=> `<span> ${ability.ability.name}</span>` )+'</div>';  
}


function displayPokemonList(pokemonList) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = ''; 

    const ul = document.createElement('ul');
    ul.classList.add('pokemon-list');

    pokemonList.forEach(pokemon => {
        const li = document.createElement('li');
        li.textContent = pokemon.name;
        ul.appendChild(li);
        li.addEventListener('click',()=>{
            fetchPokemonData(pokemon.url)
        });
    });

    pokemonInfo.appendChild(ul);
}



