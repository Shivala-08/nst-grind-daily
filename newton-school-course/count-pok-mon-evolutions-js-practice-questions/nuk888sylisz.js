function countPokemonEvolutions(pokemonList) {
    return pokemonList.map(pokemon => pokemon.evolutions.length);
}