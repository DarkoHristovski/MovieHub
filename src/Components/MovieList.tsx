import type { Movie } from "./Movies";
type MovieProps = {
    movies: Movie[]; // vo React props obično koristime lowercase
  };
const MovieList= ({movies}:MovieProps)=>{
return (
<div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
      {/* Poster */}
      <img
        className="w-full h-64 object-cover"
        src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
        alt={movies.title}
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{movies.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{movies.release_date}</p>
        <p className="text-yellow-500 font-semibold mb-2">
          ⭐ {movies.vote_average ?? "N/A"}
        </p>
        <p className="text-gray-700 text-sm line-clamp-3">
          {movies.overview ?? "No description available."}
        </p>
      </div>
    </div>

)
}


export default MovieList