import MovieList from "./MovieList";
import type { Movie } from '../types/Movie';
import PaginationButton from './PaginationButton'
import SkeletonCard from '../Components/SkeletonCard'

type MovieProps = {
  movies: Movie[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  totalPages: number;
  loading: boolean;
};

const Movies = ({ movies, setPage, page, totalPages, loading }: MovieProps) => {

  const nextHandle = () => {
    setPage((page) => page + 1);
  };

  const PrevHandle = () => {
    setPage((page) => page - 1);
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-5 gap-6 mb-3 auto-rows-fr">

          {loading ? (
            Array.from({ length: 10 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          ) : (
            movies.map(x => (
              <MovieList key={x.id} movies={x} />
            ))
          )}

        </div>
      

      {!loading && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <PaginationButton onClick={PrevHandle} disabled={page <= 1}>
            Prev
          </PaginationButton>

          <PaginationButton disabled>
            {page}
          </PaginationButton>

          <PaginationButton onClick={nextHandle} disabled={page >= totalPages}>
            Next
          </PaginationButton>
        </div>
      )}
      </section>
    </>
  );
};

export default Movies;