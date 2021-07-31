const movies = require('./star-wars.json')

// all the movies released before 2000

console.log(movies.length);

const result = movies.filter(
    function(movie){
        return movie.release_year < 2000
    }
).map(
    function(movie){
        return movie.title
    }
)

console.log(result.length);
// will show movie titles due to the .map
console.log(result);