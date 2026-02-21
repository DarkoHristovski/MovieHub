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
    totalPages:number;
    setHandleCategory: (cat: MovieCategory) => void; 
}


const Home = ({movies, category,setCategory,genres, selectedGenres, setSelectedGenres, setPage,page, totalPages}:HomeProps) =>{
return(
    
        <div className="flex container py-8 h-screen">
    <Aside genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} category={category} setCategory={setCategory} />
    <main className="w-[70%] pl-[30px] h-full overflow-auto">
    <div className="">
        <Hero movies={movies}/>
        <Movies movies={movies} totalPages={totalPages} page={page} setPage={setPage}/>
        </div>
    </main>
    </div>
  
)
}

export default Home;