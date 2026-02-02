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
  };
  


const Home = ({movies, category,setCategory,genres, selectedGenres, setSelectedGenres}:HomeProps) =>{
return(
    <div>
    <Aside genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} category={category} setCategory={setCategory} />
    <main>
        <Hero movies={movies}/>
        <Movies movies={movies}/>
    </main>
    
    </div>
)
}

export default Home;