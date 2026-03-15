export type Movie = {
    id: number;
    title: string;
    poster_path: string | null;
    overview:string,
    tagline:string,
    backdrop_path?: string
  production_companies?: {
    id: number
    name: string
    logo_path: string | null
  }[]
    vote_avarage:number,
    vote_count: number;
    release_date:string,
    vote_average:number,
    genres: Genre[];

    credits?:{
    cast: Cast[],
    crew: Crew[];
    }
    videos?:{
      results:Video[];
    }
  };
  
  export type Video = {
    id: string;
    key: string;
    site: "YouTube";
    type: "Trailer" | "Teaser" | "Clip" | "Featurette";
    official: boolean;
    published_at: string;
  };
  

export type Genre ={
id:number,
name:string
}

export type Cast = {
  id: number;
  name: string;
  original_name: string;
  character: string;
  profile_path: string | null;
  known_for_department: string;
};
  
export type Crew = {
  id: number;
  name: string;
  job: string;
  department: string;
};

  export type MovieResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  };


  export type MovieCategory =
  | "popular"
  | "top_rated"
  | "upcoming";
 