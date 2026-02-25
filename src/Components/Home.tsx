
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
    
        <div className="flex container pt-[80px]  h-screen">
    <Aside genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} category={category} setCategory={setCategory} />
    <main className="overflow-x-hidden flex-1 min-w-0 pl-[30px] h-full">
   
        
        <Movies movies={movies} loading={loading} totalPages={totalPages} page={page} setPage={setPage}/>
        
    </main>
    </div>
  
)
}

export default Home;