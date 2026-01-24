import type {Movie} from "../types/Movie"

type HeroProps = {
    movies: Movie[];
}

const Hero = ({movies}:HeroProps) =>{

    if(movies.length=== 0) return null;

    const randomIndex = Math.floor(Math.random() * movies.length);

    const randomMovie = movies[randomIndex];

    return(
        <section className="container">
        <img className="w-full h-[500px] object-cover rounded-lg shadow-lg"  src={
                  randomMovie.poster_path?
                  `https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`
                  : "/placeholder.jpg"
                } alt="" />
                
            </section>
)


}

export default Hero;