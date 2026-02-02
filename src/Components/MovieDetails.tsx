import { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";
import type { Movie } from '../types/Movie'; 
import * as movieService from '../Services/MovieServices';

const MovieDetails = () =>{

    const [movie, setMovie]= useState<Movie | null>(null);
    const {movieId} = useParams<{movieId: string}>();
const trailer= movie?.videos?.results?.filter(x=>x.type==='Trailer')[0];
const actors = movie?.credits?.cast.filter(x=>x.known_for_department==='Acting').slice(0,5);
console.log(trailer)
    useEffect(()=>{
        if (!movieId) return;
        movieService.getMovie(movieId)
        .then(res => {
            if (res) setMovie(res);
          });
    },[movieId])
    if (!movie) {
        return <div>Loading...</div>;
      }
    return(
        <div className="container">
        
        
        <div className="flex justify-between">
        <h1 className="font-dm font-bold text-[36px] leading-[36px] tracking-[0]">{movie.title}</h1>
        <p>⭐ {movie.vote_average}/10 ({movie.vote_count})</p>
        </div>
        <div className="flex mt-6 mb-6 gap-3">
            <img className="w-[30%] h-[500px] object-cover rounded-lg shadow-lg" src={
          movie.poster_path?
          `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
          : "/placeholder.jpg"
        } alt="" />
        
        <div className="w-[70%] h-[500px] object-cover rounded-lg shadow-lg">
        <iframe className="rounded-lg shadow-lg" width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </div>
<section className="max-w-[1280px] mx-auto px-4 mt-10">
      <div className="grid grid-cols-[200px_1fr] gap-y-6 text-[15px]">
        {/* GENRES */}
        <p>Genres</p>
        <div className="flex items-center gap-3">
          {movie.genres.map(g => (
            <span
              key={g.id}
              className="px-[18px] py-[8px]
                        
                         border border-[#221F3D]
                         rounded-[6px]"
            >
              {g.name}
            </span>
          ))}
        </div>
        <p>Cast</p>
<ul className="flex items-center flex-wrap gap-2">
    {actors.map(x=>{
        return <li key={x.original_name} className="grow rounded-[15px]">
            <img className="object-cover h-[130px] w-[100%] rounded-[6px]" src={`https://image.tmdb.org/t/p/w500${x.profile_path}`} alt="" />
            <p>{x.original_name}</p>
           
        </li>
    })}
</ul>
        {/* OVERVIEW */}
        <p>Overview</p>
        <p className="leading-relaxed max-w-[800px]">
          {movie.overview}
        </p>

        {/* RELEASE DATE */}
        <p>Release date</p>
        <p>{movie.release_date}</p>

     

        {/* TAGLINE */}
        <p>Tagline</p>
        <p>
          {movie.tagline}
        </p>

        {/* PRODUCTION */}
        <p>Production Companies</p>
        <p>
          {movie.production_companies.map(p => p.name).join(" • ")}
        </p>

      </div>
    </section>

    </div>
    
    

)

}

export default MovieDetails;