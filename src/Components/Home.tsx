import Hero from "./Hero";
import Aside from "./Aside";
import Movies from "./Movies";
import type { Movie } from "../types/Movie";


type HomeProps = {
    movies: Movie[]; // vo React props obično koristime lowercase
    category:Movie;
    setCategory:(cat: MovieCategory)=>void
  };


const Home = ({movies, category,setCategory}:HomeProps) =>{
return(
    <div>
    <Aside category={category} setCategory={setCategory} />
    <main>
        <Hero movies={movies}/>
        <Movies movies={movies}/>
    </main>
    
    </div>
)
}

export default Home;