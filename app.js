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
  const dropdown = document.querySelector('#locality-dropdown');

  // DropDown Code
  const dropdownURL = 'https://pokeapi.co/api/v2/pokemon';
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose a Pokemon';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  fetch(dropdownURL)
    .then(function (response) {
      if (response.status !== 200) {
        console.warn(
          `Looks like there was a problem. Status Code: ${response.status}`,
        );
        return;
      }
      // Examine the text in the response
      response.json().then(function (data) {
        let option;

        for (let i = 0; i < data.results.length; i++) {
          option = document.createElement('option');
          option.text = data.results[i].name;
          option.value = data.results[i].name;
          dropdown.add(option);
          
        }
      });
    })
    .catch(function (err) {
      console.error('Fetch Error -', err);
    });

  // Search Field Code
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
        document.querySelector('.poke-img').innerHTML = '';
        document.querySelector('.poke-img').appendChild(img);
        //Card Title
        pokemonName = data.name;
        const nameCapitalized =
          pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        const h3 = document.createElement('h3');
        h3.textContent = nameCapitalized;
        document.querySelector('.poke-title').innerHTML = '';
        document.querySelector('.poke-title').appendChild(h3);

        //Card Text

        //Card Button

        // Clear everything
      });
  });
};

// Testing

const pokeTest = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

getJoke();
getPokemon();
pokeTest();
