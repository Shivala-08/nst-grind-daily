function addMovie(movieCollection, movie) {
    // Extract name and genre from the incoming movie
    const [newTitle, newGenre] = movie.split('-');
    
    // Check if a movie with the same name and genre already exists
    const exists = movieCollection.some(m => {
        const [title, genre] = m.split('-');
        return title === newTitle && genre === newGenre;
    });

    if (exists) {
        return "The movie already exists in the collection.";
    }

    // Add and return the updated collection if it doesn't exist
    movieCollection.push(movie);
    return movieCollection;
}

function getMoviesByGenre(movieCollection, genre) {
    // Filter collection to only include movies that match the passed genre
    return movieCollection.filter(movie => {
        const movieGenre = movie.split('-')[1];
        return movieGenre === genre;
    });
}

function getHighestRatedMovie(movieCollection, genre) {
    const genreMovies = getMoviesByGenre(movieCollection, genre);
    
    // Return null or undefined if no movies match the genre
    if (genreMovies.length === 0) return null;

    // Reduce the filtered array to find the one with the highest rating
    return genreMovies.reduce((highest, current) => {
        const highestRating = parseFloat(highest.split('-')[2]);
        const currentRating = parseFloat(current.split('-')[2]);
        
        return currentRating > highestRating ? current : highest;
    });
}