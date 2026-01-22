import MovieList from "./MovieList";


export type Movie = {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path?: string; // opcionalno, ako koristis pozadinska slika
    overview?: string;      // opcionalno, za prikaz opis
    release_date?: string;  // opcionalno, za datum
    vote_average?: number;  // opcionalno, za rejting
    genre_ids?: number[];   // opcionalno, ako planirash da filtriras po žanr
  };

  type MovieProps = {
    movies: Movie[]; // vo React props obično koristime lowercase
  };

const Movies = ({movies}:MovieProps) =>{
    return(
        <>
        {movies.map(x => <MovieList key={x.id} movies={x} />)}
        </>
    )
}

export default Movies;