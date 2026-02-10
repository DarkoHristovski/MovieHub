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
  const [category, setCategory] = useState<MovieCategory>(MovieCategory.TopRated);
  const [genres, setGenres]=useState<Genre[]>([])
  const [selectedGenres, setSelectedGenres] = useState<number[]>([])
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(()=>{
   
    const loadMovies = async () =>{
      const res = await movieService.getMovies(category,page, selectedGenres);

      if(!res) return ;
      setMovies(res.results);
      setTotalPages(res.total_pages);
    };
    loadMovies();
  },[category,page,selectedGenres])

  useEffect(() => {
    const loadGenres = async () => {
      const res = await movieService.getGenres();
      if (!res) return;
      setGenres(res.genres);
    };
  
    loadGenres();
  }, []);

  const handleCategoryChange = (cat: MovieCategory) => {
    setCategory(cat);
    setPage(1);
  };
  
  return (
    <>
<Routes>
<Route path="/" element={<Home
 setPage={setPage}
 page={page}
 genres={genres}
 setHandleCategory={handleCategoryChange}
 selectedGenres={selectedGenres}
 setSelectedGenres={setSelectedGenres}
 movies={movies} category={category}
 setCategory={setCategory}/>}
     />
<Route path='/movies/:movieId' element={<MovieDetails/>}/>
</Routes>

    </>
  )
}

export default App
