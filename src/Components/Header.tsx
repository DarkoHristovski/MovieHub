import { useEffect, useState } from "react";
import { searchMovies } from "../Services/MovieServices";
import type { Movie } from '../types/Movie';


type HeaderProps ={
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  allMovies: Movie[];
}

const Header = ({setMovies, setIsSearching, allMovies}:HeaderProps) =>{
    const [search, setSearch] = useState<string>('');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      };
    
      
      useEffect(()=>{

        if (!search.trim()) {
        setIsSearching(false);
        setMovies(allMovies)
        return;
      }
  
      const timer = setTimeout(async()=>{
        setIsSearching(true);
        const data = await searchMovies(search);
        if (data?.results) setMovies(data.results);
      }, 400);
    
     return () => clearTimeout(timer);
      },[search, setMovies, setIsSearching, allMovies])
      
      
    return(
<header className="bg-[rgb(25,118,210)] py-5">
     <div className="logo"></div>
     <form className="relative mx-auto w-[150px] text-white bg-none focus:outline-none focus:border-blue-500 py-2 px-1"

     >
        <input
        className="pl-5 w-[100%] outline-none border-b border-white text-white"
          type="text"
          value={search}
          onChange={onChangeHandler}
          placeholder="Search movies..."
        />
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white ml-0">🔍</span>
      </form>
            <button></button>
        </header>
    )
}


export default Header;