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
  <aside className="min-h-screen w-[20%]
  border
  border-[#e3e3e3]
  rounded-[var(--imageBorderRadius)]
  flex
  flex-wrap
  shadow-[0_2px_8px_rgba(0,0,0,0.1)]
  border
  border-[#eee]
  pt-[14px]
  pr-[16px]
  pb-[16px]
  pl-[16px]
  rounded-[10px]
  bg-white
  border-[rgba(0,0,0,0.12)]
  justify-between">
<div className="shrink-0 py-5 border-y w-[100%] ">   
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