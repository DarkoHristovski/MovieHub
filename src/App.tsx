import { useState, useEffect } from 'react'
import './App.css'
import * as movieService from '../src/Services/MovieServices';
import type { Movie, Genre } from './types/Movie'; 
import { MovieCategory } from "./types/Movie";
import Home  from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from '../src/Components/MovieDetails'

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [category, setCategory] = useState<MovieCategory>(MovieCategory.Popular);
  const [genres, setGenres]=useState<Genre[]>([])
  const [selectedGenres, setSelectedGenres] = useState<number[]>([])



  useEffect(()=>{
   
    movieService.discoverMovie(category, selectedGenres)
    .then(res=>setMovies(res.results))


    movieService.getMoviesByCategories(category)
    .then(res => setMovies(res.results));

    movieService.getGenres()
    .then(res=>setGenres(res.genres))
    
    const loadMovies = async () =>{
      const res = await movieService.allMovie();

      if(!res) return ;
      setMovies(res.results);
    };

   
    loadMovies();
  },[category, selectedGenres])

  console.log(genres)
  return (
    <>
<Routes>
<Route path="/" element={<Home genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} movies={movies} category={category} setCategory={setCategory}/>}/>
<Route path='/movies/:movieId' element={<MovieDetails/>}/>
</Routes>

    </>
  )
}

export default App
