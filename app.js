//Simple API call using fetch & displaying data in the DOM

const getJoke = () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      let text = data.value;
      const p = document.createElement('p');
      p.textContent = data.value;
      document.getElementById('randomJokeDisplay').appendChild(p);
    });
};

const getPokemon = () => {
  const pokeSearchForm = document.querySelector('.pokemon-search');
  const inputField = document.querySelector('#input-field');

  pokeFilter = '';

  pokeSearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    pokeFilter = inputField.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeFilter}`)
      .then((response) => response.json())
      .then((data) => {
        // Card Img
        const img = document.createElement('img');
        img.src = data.sprites.front_default;
        document.querySelector('.poke-img').appendChild(img);
        //Card Title
        pokemonName = data.name;
        const nameCapitalized =
          pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        const h3 = document.createElement('h3');
        h3.textContent = nameCapitalized;
        document.querySelector('.poke-title').appendChild(h3);

        //Card Text

        //Card Button

        // Clear everything
      });
  });
};

getJoke();
getPokemon();
