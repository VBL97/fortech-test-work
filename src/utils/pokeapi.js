class Pokeapi {
  baseUrl = "https://pokeapi.co/api/v2/";

  fetchPokemonTypes = () => {
    return fetch(`${this.baseUrl}type`)
      .then(res => res.json())
      .then(data => data.results);
  };

  fetchPokemonsCount = () => {
    return fetch(`${this.baseUrl}pokemon?limit=100000&offset=0`)
      .then(res => res.json())
      .then(data => data.count);
  };

  fetchPokemons = async (limit = 10, offset = 0) => {
    const res = await fetch(
      `${this.baseUrl}pokemon?limit=${limit}&offset=${offset}`
    );
    const pokemonList = await res.json();
    return Promise.all(
      pokemonList.results.map(({ name }) => this.fetchPokemonByName(name))
    );
  };

  fetchPokemonByName = name => {
    return fetch(`${this.baseUrl}pokemon/${name}`)
      .then(res => res.json())
      .then(data => data);
  };

  fetchPokemonsByType = type => {
    return fetch(`${this.baseUrl}type/${type}`)
      .then(res => res.json())
      .then(data => data.pokemon.map(item => item.pokemon.name));
  };

  fetchPokemonsByTypes = async types => {
    const promises = types.map(type => this.fetchPokemonsByType(type));
    const namesResult = await Promise.all(promises);
    const uniqueNames = new Set();
    namesResult.forEach(data => {
      data.forEach(name => {
        uniqueNames.add(name);
      });
    });
    const names = Array.from(uniqueNames);
    return Promise.all(names.map(name => this.fetchPokemonByName(name)));
  };
}

export default Pokeapi;
