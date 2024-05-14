"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import RecipeList from "./RecipeList/recipeList";
import { RecipeFilter } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";
import Title from "./title";

export default function App() {
  const [filter, setFilter] = useState<string>("all");  
  return (
    <main className="bg-white text-black">
      <Title/>
      <RecipeFilter tags={tagList} filter={filter} setFilter={setFilter}/>
      <div className="flex justify-center space-x-1">
        <Button onClick={() => setFilter("chocolateDessert")}>Dessert au Chocolat</Button>
        <Button onClick={() => setFilter("easy")}>facile</Button>
        <Button onClick={() => setFilter("comfort")}>réconfortant</Button>
        <Button onClick={() => setFilter("winter")}>hiver</Button>
        <Button onClick={() => setFilter("appetizer")}>entrée</Button>
        <Button onClick={() => setFilter("sugar")}>Sucre</Button>
        <Button onClick={() => setFilter("summer")}>Eté</Button>
        <Button onClick={() => setFilter("dessert")}>Dessert</Button>
        <Button onClick={() => setFilter("eggs free")}>Sans Oeufs</Button>
        <Button onClick={() => setFilter("autumn")}> automne</Button>
        <Button onClick={() => setFilter("vegan")}> Vegan</Button>
      </div>
      <RecipeList filter={filter} setFilter={setFilter}/>
    </main>
  );
}
