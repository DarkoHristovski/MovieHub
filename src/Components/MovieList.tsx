import type { Movie } from "../types/Movie";
import { Link } from "react-router-dom";


type MovieProps = {
    movies: Movie; 
}


const MovieList= ({movies}:MovieProps)=>{
return (

  <Link
    className="flex flex-col h-full"
    to={`movies/${movies.id}`}
  >
    <div className="flex flex-col justify-between bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300 h-full">
      {/* Poster */}
      <img
        className="w-full h-64 object-cover"
        src={
          movies.poster_path
            ? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
            : "/placeholder.jpg"
        }
        alt={movies.title}
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-full">
        <h2 className="text-lg font-bold text-gray-800">{movies.title}</h2>
        <p className="text-yellow-500 font-semibold mb-2">
          ⭐ {movies.vote_average ?? "N/A"}
        </p>
      </div>
    </div>
  </Link>
)
}


export default MovieList