import { useState, useEffect } from 'react'
import './App.css'
import * as movieService from '../src/Services/MovieServices';
import Movies from '../src/Components/Movies'
import type { Movie } from './types/Movie'; 
import Hero  from './Components/Hero';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(()=>{
    const loadMovies = async () =>{
      const res = await movieService.allMovie();

      if(!res) return ;
      setMovies(res.results);
    };
   
    loadMovies();
  },[])
  

  console.log(movies)
 
  return (
    <>
    <Hero movies={movies}/>
<Movies movies={movies}/>

    </>
  )
}

export default App
