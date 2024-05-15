"use client"

import RecipeList from "./RecipeList/recipeList";
import { tagList } from "./Tags/TagData";
import { Tags } from "./Tags/Tags";
import { FilterContextProvider } from "./filterContextProvider";
import Title from "./title";
import UpdateFilter from "./updateFilter";

export default function App() {
  return (
    <main className="bg-white text-black">
      <FilterContextProvider>
        <Title/>
        <Tags tags={tagList}/>
        <UpdateFilter />
        <RecipeList/>
      </FilterContextProvider>
    </main>
  );
}
