import { useState, useEffect } from 'react'
import './App.css'
import * as movieService from '../src/Services/MovieServices';
import Movies from '../src/Components/Movies'
import type { Movie } from './Components/Movies'; // ili gde go imas definiran tipot


function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(()=>{
    movieService.allMovie()
    .then(res=>setMovies(res.results));
  },[])
  
 
  return (
    <>
<Movies movies={movies}/>

    </>
  )
}

export default App
