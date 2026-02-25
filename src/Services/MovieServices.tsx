import type { Movie, MovieCategory } from '../types/Movie';
import type {MovieResponse} from '../types/Movie';


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGFiZmE3OGJmOTU2YjBjZTQyZDQ3ODI3Mzg3YTZlNiIsIm5iZiI6MTc2OTAyNjE1Mi42ODIsInN1YiI6IjY5NzEzMjY4YzIyMmE3ZGViZDk0ZDhlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MWCWAdpkQcoyxmSrrsnffg05NVkVQedHWdpfEjy3wko'
    }
  }

                 
const baseUrl = 'https://api.themoviedb.org/3';


export const allMovie = async(): Promise<MovieResponse | undefined> =>{
try{
    const response = await fetch(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,options);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const result: MovieResponse = await response.json()

return result;
}catch(error){
    console.log(error);
    return undefined;
}
}

export const getMovie = async(id:string): Promise<Movie | undefined> =>{
try{

const response = await fetch(`${baseUrl}/movie/${id}?language=en-US&append_to_response=credits,videos`, options)
if(!response.ok){
  throw new Error(`HTTP error: ${response.status}`);
}
const result: Movie = await response.json();

return result;

}catch(error){
console.log(error)
}

}

export const getMoviesByCategories = async(category:MovieCategory, page:number) =>{
try{
  const response = await fetch(`${baseUrl}/movie/${category}?language=en-US&page=${page}`,
    options);
   if(!response.ok){
    throw new Error('Failed')
   }
   const result = await response.json();
return result;
}catch(error){
  console.log(error)
}
}


export const getGenres = async() =>{

  try{

    const response = await fetch(`${baseUrl}/genre/movie/list?language=en-US`,options);
    if(!response.ok){
      throw new Error('Failed');
    }
    const result = response.json();

    return result;

  }catch(error){
console.log(error)
  }
  

}

export const getMovies = async(category:MovieCategory, page:number, genreIds:number[]=[]):Promise<MovieResponse | undefined> => {

try{

  let url :string= '';
  if (genreIds.length > 0) {
    url = `${baseUrl}/discover/movie?with_genres=${genreIds.join(',')}&language=en-US&page=${page}&sort_by=popularity.desc`;
  } else {
    // класична категорија
    url = `${baseUrl}/movie/${category}?language=en-US&page=${page}`;
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const result = await response.json();

  return result;

}catch(error){
console.log(error);
return undefined
}


}


// movieService.ts
export const searchMovies = async (query: string): Promise<MovieResponse | undefined> => {
  try {
    const url = `${baseUrl}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`;
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const result: MovieResponse = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};