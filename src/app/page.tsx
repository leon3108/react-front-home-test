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
      <RecipeList filter={filter} setFilter={setFilter}/>
    </main>
  );
}
