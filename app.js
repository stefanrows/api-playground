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
	fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => response.json()).then((data) => {
		console.log(data);
		name = data.name;
		const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
		const p = document.createElement('p');
		p.textContent = `What about:${nameCapitalized}`;

		document.getElementById('pokemonDisplay').appendChild(p);
		const img = document.createElement('img');
		img.src = data.sprites.front_default;
		document.getElementById('pokemonDisplay').appendChild(img);
	});
};

getJoke();
getPokemon();
