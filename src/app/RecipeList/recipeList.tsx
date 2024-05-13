import { Dispatch, SetStateAction } from "react";
import {
  allRecipes,
  autumnRecipes,
  chocolateDessertRecipes,
  chocolateRecipes,
  dessertRecipes,
  noEggsRecipes,
  sugarRecipes,
  summerRecipes,
  veganRecipes,
} from "../Recipes/RecipeData";
import Recipes from "../Recipes/Recipes";

export default function RecipeList({ filter, setFilter }: { filter: string, setFilter: Dispatch<SetStateAction<string>> }) {
  return (
  <section>
          {filter === "all" && <Recipes recipes={allRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "sugar" && <Recipes recipes={sugarRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "summer" && <Recipes recipes={summerRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "dessert" && <Recipes recipes={dessertRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "chocolate dessert" && (
        <Recipes recipes={chocolateDessertRecipes} filter={filter} setFilter={setFilter}/>
      )}
      {filter === "eggs free" && <Recipes recipes={noEggsRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "chocolate" && <Recipes recipes={chocolateRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "autumn" && <Recipes recipes={autumnRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "vegan" && <Recipes recipes={veganRecipes} filter={filter} setFilter={setFilter}/>}

  </section>
  )
}