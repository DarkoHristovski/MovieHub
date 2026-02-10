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
    
        <div className="flex">
    <Aside genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} category={category} setCategory={setCategory} />
    <main className="w-[80%] ">
    <div className="container py-8">
        <Hero movies={movies}/>
        <Movies movies={movies} page={page} setPage={setPage}/>
        </div>
    </main>
    </div>
  
)
}

export default Home;