//Simple API call using fetch & displaying data in the DOM

const getJoke = () => {
	fetch('https://api.chucknorris.io/jokes/random').then((response) => response.json()).then((data) => {
		let text = data.value;
		const p = document.createElement('p');
		p.textContent = data.value;
		document.getElementById('randomJokeDisplay').appendChild(p);
	});
};

const getPokemon = () => {
	const selectForm = document.querySelector('#input');
	const submitButton = document.querySelector('#submit');

	pokeFilter = '';

	selectForm.addEventListener('change', function(e) {
		e.preventDefault();
		pokeFilter = e.target.value;
		console.log(pokeFilter);
		url = `https://pokeapi.co/api/v2/pokemon/${pokeFilter}`;
		console.log(url);
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokeFilter}`).then((response) => response.json()).then((data) => {
			console.log(data);
			// Card Img
			const img = document.createElement('img');
			img.src = data.sprites.front_default;
			document.querySelector('.poke-img').appendChild(img);
			//Card Title
			pokemonName = data.name;
			const nameCapitalized = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
			const h3 = document.createElement('h3');
			h3.textContent = nameCapitalized;
			document.querySelector('.poke-title').appendChild(h3);

			//Card Text

			//Card Button
		});
	});
};

getJoke();
getPokemon();
