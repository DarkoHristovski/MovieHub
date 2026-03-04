import { MovieCategory} from "../types/Movie";
import type { Genre } from '../types/Movie';
import AccordionItem from '../Components/AccordionItem'

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
<aside className="w-[260px]">
<div className="shrink-0 py-5 w-[100%] ">   

<AccordionItem title="Categories">
  <div className="flex flex-col w-full">
    {movieCategories.map(x => (
      <button
        key={x.value}
        onClick={() => setCategory(x.value)}
        className={`
          cursor-pointer flex items-center gap-3 w-full px-4 py-2 text-left transition
          ${category === x.value
            ? "bg-blue-100 text-blue-700"
            : "hover:bg-gray-100 text-gray-700"}
        `}
      >
        {x.label}
      </button>
    ))}
  </div>
</AccordionItem>

</div>
<AccordionItem title="Genres">
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
    </AccordionItem>
    </aside>
</>

    )
}


export default Aside;