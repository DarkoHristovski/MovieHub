import { useEffect, useState } from "react";
import { searchMovies } from "../Services/MovieServices";
import type { Movie } from '../types/Movie';

type HeaderProps ={
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({setMovies, setIsSearching}:HeaderProps) =>{
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      };
    
      
      useEffect(()=>{

        if (!search.trim()) {
        setIsSearching(true);
        return;
      }
  
      const timer = setTimeout(async()=>{
        setLoading(true);
        setIsSearching(true);
        const data = await searchMovies(search);
        if (data?.results) setMovies(data.results);
        setLoading(false);
      }, 400);
    
     return () => clearTimeout(timer);
      },[search, setMovies, setIsSearching])
      
      
    return(
<header className="bg-[rgb(25,118,210)] py-5">
     <div className="logo"></div>
     <form 
             className="mx-auto w-[200px] text-white placeholder-white border-b-2 border-white bg-none focus:outline-none focus:border-blue-500 py-2 px-1"

     >
        <input
          type="text"
          value={search}
          onChange={onChangeHandler}
          placeholder="Search movies..."
        />
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white ml-0">🔍</span>
      </form>

      {loading && <p className="text-white mt-2">Loading...</p>}
            <button></button>
        </header>
    )
}


export default Header;