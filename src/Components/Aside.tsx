import { MovieCategory } from "../types/Movie";

type CategoryItem ={
label:string,
value:MovieCategory
}

type AsideProps ={
    category:MovieCategory,
    setCategory:(cat:MovieCategory)=>void
}

const Aside = ({category, setCategory}:AsideProps) =>{
    
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
</>

    )
}


export default Aside;