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
        setSelectedGenres(prev =>
          prev.includes(id)
            ? prev.filter(g => g !== id)
            : [...prev, id]
        );
      };
    return(
        <>
        <aside className="h-full overflow-auto w-[20%] border-r border-black">
<div className="shrink-0 py-5 border-y border-[rgba(0,0,0,0.12)]">   
<h3 className="px-4 text-sm font-semibld text-gray-400">
    Categories
</h3>

{movieCategories.map(x=>(

    <button
    onClick={()=>setCategory(x.value)}
    className={
        `cursor-pointer flex items-center gap-3 w-full px-4 py-2 text-left transition
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
<div className="flex flex-col items-baseline w-full">
      {genres.map(g => (
        <button
          key={g.id}
          onClick={() => toggleGenre(g.id)}
          className={`
            cursor-pointer flex items-center gap-3 w-full px-4 py-2 text-left transition
            ${selectedGenres.includes(g.id)
              ? "bg-blue-100 border border-white text-blue-700"
            : "hover:bg-gray-100 text-gray-700"}
          `}
        >
          {g.name}
        </button>
      ))}
    </div>
    </aside>
</>

    )
}


export default Aside;