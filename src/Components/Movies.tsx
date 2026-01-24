import MovieList from "./MovieList";
import type { Movie } from '../types/Movie';

  type MovieProps = {
    movies: Movie[]; // vo React props obično koristime lowercase
  };

const Movies = ({movies}:MovieProps) =>{
    return(
      <section className="container py-8">
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {
        movies.map(x => <MovieList key={x.id} movies={x} 
        />)}
        </div>
        
       </section>
    )
}

export default Movies;