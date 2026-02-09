import Hero from "./Hero";
import Aside from "./Aside";
import Movies from "./Movies";
import type { Movie, MovieCategory, Genre, } from "../types/Movie";


type HomeProps = {
    movies: Movie[];
    category: MovieCategory;
    setCategory: (cat: MovieCategory) => void;
    genres: Genre[];
    selectedGenres: number[];
    setSelectedGenres: React.Dispatch<React.SetStateAction<number[]>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    page:number;
  
}


const Home = ({movies, category,setCategory,genres, selectedGenres, setSelectedGenres, setPage,page}:HomeProps) =>{
return(
    <div>
    <Aside genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} category={category} setCategory={setCategory} />
    <main>
        <Hero movies={movies}/>
        <Movies movies={movies} page={page} setPage={setPage}/>
    </main>
    
    </div>
)
}

export default Home;