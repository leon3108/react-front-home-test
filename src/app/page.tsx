"use client"

import RecipeList from "./RecipeList/recipeList";
import { RecipeFilter } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";
import { FilterContextProvider } from "./filterContextProvider";
import Title from "./title";
import UpdateFilter from "./updateFilter";

export default function App() {
  return (
    <main className="bg-white text-black">
      <FilterContextProvider>
        <Title/>
        <RecipeFilter tags={tagList}/>
        <UpdateFilter />
        <RecipeList/>
      </FilterContextProvider>
    </main>
  );
}
