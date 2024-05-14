import { Dispatch, SetStateAction } from "react";
import {
  allRecipes,
  appetizerRecipes,
  autumnRecipes,
  chocolateDessertRecipes,
  comfortRecipes,
  dessertRecipes,
  easyRecipes,
  noEggsRecipes,
  sugarRecipes,
  summerRecipes,
  veganRecipes,
  winterRecipes
} from "../Recipes/RecipeData";
import Recipes from "../Recipes/Recipes";

export default function RecipeList({ filter, setFilter }: { filter: string, setFilter: Dispatch<SetStateAction<string>> }) {
  return (
  <section>
      {filter === "all" && <Recipes recipes={allRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "sugar" && <Recipes recipes={sugarRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "summer" && <Recipes recipes={summerRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "dessert" && <Recipes recipes={dessertRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "chocolateDessert" && (
        <Recipes recipes={chocolateDessertRecipes} filter={filter} setFilter={setFilter}/>
      )}
      {filter === "eggs free" && <Recipes recipes={noEggsRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "autumn" && <Recipes recipes={autumnRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "vegan" && <Recipes recipes={veganRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "winter" && <Recipes recipes={winterRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "appetizer" && <Recipes recipes={appetizerRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "easy" && <Recipes recipes={easyRecipes} filter={filter} setFilter={setFilter}/>}
      {filter === "comfort" && <Recipes recipes={comfortRecipes} filter={filter} setFilter={setFilter}/>}
  </section>
  )
}