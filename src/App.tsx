import { useState, useEffect } from 'react'
import './App.css'
import * as movieService from '../src/Services/MovieServices';
import type { Movie, Genre } from './types/Movie'; 
import { MovieCategory } from "./types/Movie";
import Home  from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from '../src/Components/MovieDetails' 
import Header from './Components/Header';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [category, setCategory] = useState<MovieCategory>(MovieCategory.TopRated);
  const [genres, setGenres]=useState<Genre[]>([])
  const [selectedGenres, setSelectedGenres] = useState<number[]>([])
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isSearching, setIsSearching] = useState(false);
  const [Loading, setLoading] = useState(false);



  useEffect(()=>{
    if (isSearching) return; 
    const loadMovies = async () =>{

      try{
        setLoading(true);
        const res = await movieService.getMovies(category,page, selectedGenres);
        if(!res) return ;
        setMovies(res.results);
        setAllMovies(res.results);
        setTotalPages(res.total_pages);
      }finally{
      setLoading(false)
      }
     
    };
    
    loadMovies();
  },[category,page,selectedGenres, isSearching])

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
    <Header setIsSearching={setIsSearching} allMovies={allMovies} movies={movies} setMovies={setMovies}/>
<Routes>
<Route path="/" element={<Home
 setPage={setPage}
 page={page}
 totalPages={totalPages}
 genres={genres}
 setHandleCategory={handleCategoryChange}
 selectedGenres={selectedGenres}
 setSelectedGenres={setSelectedGenres}
 movies={movies} category={category}
 loading={Loading} 
 setCategory={setCategory}/>}
 
     />
<Route path='/movies/:movieId' element={<MovieDetails/>}/>
</Routes>

    </>
  )
}

export default App
