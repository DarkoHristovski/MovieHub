const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGFiZmE3OGJmOTU2YjBjZTQyZDQ3ODI3Mzg3YTZlNiIsIm5iZiI6MTc2OTAyNjE1Mi42ODIsInN1YiI6IjY5NzEzMjY4YzIyMmE3ZGViZDk0ZDhlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MWCWAdpkQcoyxmSrrsnffg05NVkVQedHWdpfEjy3wko'
    }
  }

const baseUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';


export const allMovie = async() =>{
try{
    const response = await fetch(baseUrl,options);
    const result = await(response.json())

return result;
}catch(error){
    console.log(error)
}


}