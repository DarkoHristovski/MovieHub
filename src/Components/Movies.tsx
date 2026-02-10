import MovieList from "./MovieList";
import type { Movie } from '../types/Movie';
import PaginationButton from './PaginationButton'

  type MovieProps = {
    movies: Movie[]; // vo React props obično koristime lowercase
    setPage: React.Dispatch<React.SetStateAction<number>>;
    page:number
  };



const Movies = ({movies, setPage,page}:MovieProps) =>{
  const nextHandle = () =>{
    setPage((page)=>page+1)
  }

  const PrevHandle = () =>{
    setPage((page)=>page-1)
  }

    return(
      <>
      <section className="">
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-6 gap-6 mb-3 mt-[20px]">
        {
        movies.map(x => <MovieList key={x.id} movies={x} 
        />)}
        </div>
       </section>


       <div className="flex justify-center items-center gap-4 mt-6">
  <PaginationButton onClick={PrevHandle} disabled={page <= 1}>
    Prev
  </PaginationButton>

  <PaginationButton disabled>
    {page}
  </PaginationButton>

  <PaginationButton onClick={nextHandle}>
    Next
  </PaginationButton>
</div>
       </>
    )
}

export default Movies;