async function getPokemonStatsObject(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = await response.json();
    
    return data.stats.reduce((statsObj, currentStat) => {
        statsObj[currentStat.stat.name] = currentStat.base_stat;
        return statsObj;
    }, {});
}