
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
    loading:boolean
}


const Home = ({movies, category,setCategory,genres, selectedGenres, setSelectedGenres, setPage,page, totalPages, loading}:HomeProps) =>{
return(
    
        <div className="py-[60px] container grid grid-cols-1 md:grid-cols-[256px_1fr] gap-6">
    <Aside genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} category={category} setCategory={setCategory} />
    <main className="">
   
        
        <Movies movies={movies} loading={loading} totalPages={totalPages} page={page} setPage={setPage}/>
        
    </main>
    </div>
  
)
}

export default Home;