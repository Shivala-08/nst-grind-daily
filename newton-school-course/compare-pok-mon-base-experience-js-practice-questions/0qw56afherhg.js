async function comparePokemonExperience(name1, name2) {
    // Fetch data for both Pokémon in parallel using Promise.all
    const [res1, res2] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${name1.toLowerCase()}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${name2.toLowerCase()}`)
    ]);

    const data1 = await res1.json();
    const data2 = await res2.json();

    const exp1 = data1.base_experience;
    const exp2 = data2.base_experience;

    if (exp1 > exp2) {
        return { winner: name1.toLowerCase(), base_experience: exp1 };
    } else if (exp2 > exp1) {
        return { winner: name2.toLowerCase(), base_experience: exp2 };
    } else {
        return { tie: true, base_experience: exp1 };
    }
}