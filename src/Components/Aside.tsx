import { MovieCategory} from "../types/Movie";
import type { Genre } from '../types/Movie';

type CategoryItem ={
label:string,
value:MovieCategory
}

type AsideProps ={
    category:MovieCategory,
    setCategory:(cat:MovieCategory)=>void,
    genres:Genre[],
    selectedGenres:number[];
    setSelectedGenres: React.Dispatch<React.SetStateAction<number[]>>;
}

const Aside = ({category, setCategory, genres, selectedGenres, setSelectedGenres}:AsideProps) =>{
  
    const movieCategories: CategoryItem[]=[
        {
    label:"Popular",
      value:MovieCategory.Popular,
        },
        {
          label:"Top Rated",
      value:MovieCategory.TopRated,
        },
        {
          label:"Upcoming",
          value:MovieCategory.Upcoming,
        }
      ]

      const toggleGenre = (id: number) => {
        setSelectedGenres(prev => prev[0] === id ? [] : [id]);
    };
    return(
        <>
<div>
<h2>Logo</h2>
</div>
<div className="space-y-2">   
<h3 className="px-4 text-sm font-semibld text-gray-400">
    Categories
</h3>
{movieCategories.map(x=>(

    <button
    onClick={()=>setCategory(x.value)}
    className={
        `cursor-pointer flex items-center gap-3 w-full px-4 py-2 rounded-lg text-left transition
        ${category===x.value
            ? "bg-blue-100 text-blue-700"
            : "hover:bg-gray-100 text-gray-700"
        }
        `
    } key={x.value}>
       {x.label}

    </button>
)
)}
</div>
<div className="flex flex-wrap gap-2">
      {genres.map(g => (
        <button
          key={g.id}
          onClick={() => toggleGenre(g.id)}
          className={`
            px-3 py-1 rounded-full text-sm
            ${selectedGenres.includes(g.id)
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"}
          `}
        >
          {g.name}
        </button>
      ))}
    </div>
</>

    )
}


export default Aside;