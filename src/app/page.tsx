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
      <TagList tags={tagList} setFilter={setFilter}/>
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
      {filter === "all" && <Recipes recipes={allRecipes} setFilter={setFilter}/>}
      {filter === "sugar" && <Recipes recipes={sugarRecipes}  setFilter={setFilter}/>}
      {filter === "summer" && <Recipes recipes={summerRecipes}  setFilter={setFilter}/>}
      {filter === "dessert" && <Recipes recipes={dessertRecipes}  setFilter={setFilter}/>}
      {filter === "chocolate dessert" && (
        <Recipes recipes={chocolateDessertRecipes}  setFilter={setFilter}/>
      )}
      {filter === "eggs free" && <Recipes recipes={noEggsRecipes}  setFilter={setFilter}/>}
      {filter === "chocolate" && <Recipes recipes={chocolateRecipes}  setFilter={setFilter}/>}
      {filter === "autumn" && <Recipes recipes={autumnRecipes}  setFilter={setFilter}/>}
      {filter === "vegan" && <Recipes recipes={veganRecipes}  setFilter={setFilter}/>}
    </main>
  );
}
