"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
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
} from "./Recipes/RecipeData";
import Recipes from "./Recipes/Recipes";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";

export default function App() {
  const [filter, setFilter] = useState<string>("all");
  return (
    <main className="bg-white text-black">
      Liste des recettes
      <TagList tags={tagList} filter={filter} setFilter={setFilter}/>
      <Button onClick={() => setFilter("chocolate")}>Chocolat</Button>
      <Button onClick={() => setFilter("sugar")}>Sucre</Button>
      <Button onClick={() => setFilter("summer")}>Eté</Button>
      <Button onClick={() => setFilter("dessert")}>Dessert</Button>
      <Button onClick={() => setFilter("chocolate dessert")}>
        dessert chocolat
      </Button>
      <Button onClick={() => setFilter("eggs free")}>Sans Oeufs</Button>
      <Button onClick={() => setFilter("autumn")}> Autumn</Button>
      <Button onClick={() => setFilter("vegan")}> Vegan</Button>
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
    </main>
  );
}
