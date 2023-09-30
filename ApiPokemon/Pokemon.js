let searchInput = document.getElementById("search");
let pokemonContainer = document.getElementById("cardPokemon");

async function searchPokemon(){

    let URL = `https://pokeapi.co/api/v2/pokemon/`;
    let searchedPokemon = searchInput.value.toLowerCase();

    if (!searchedPokemon) {
        showError('Por favor, ingresa un nombre de Pokémon válido.');
        return;
    }

    try {

        let response = await fetch(URL + searchedPokemon)

        let data = await response.json();

        let Habilidades = data.abilities.map(ability => ability.ability.name).join(', ');

        pokemonContainer.innerHTML =
        `

        <img src="${data.sprites.front_default}">
        <h2>${data.name.toUpperCase()}</h2>
        <h4>Habilidades: ${Habilidades}</h4>
        
        ` ;
    }
    catch (error){
        console.log(error);
    }
}

document.getElementById("btn-search").addEventListener("click", searchPokemon);