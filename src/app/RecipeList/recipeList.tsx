import { useContext } from 'react';
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
import { FilterContext } from '../filterContextProvider';


export default function RecipeList() {
  const filterContext = useContext(FilterContext);
  if (filterContext === undefined) {
    return;
  }
  const {filter, setFilter} = filterContext;
  return (
  <section>
      {filter.length === 0 && <Recipes recipes={allRecipes}/>}
      {filter.includes("sugar") && <Recipes recipes={sugarRecipes}/>}
      {filter.includes("summer") && <Recipes recipes={summerRecipes}/>}
      {filter.includes("dessert") && <Recipes recipes={dessertRecipes}/>}
      {filter.includes("chocolateDessert") && (
        <Recipes recipes={chocolateDessertRecipes}/>
      )}
      {filter.includes("eggs free") && <Recipes recipes={noEggsRecipes}/>}
      {filter.includes("autumn") && <Recipes recipes={autumnRecipes}/>}
      {filter.includes("vegan") && <Recipes recipes={veganRecipes}/>}
      {filter.includes("winter") && <Recipes recipes={winterRecipes}/>}
      {filter.includes("appetizer") && <Recipes recipes={appetizerRecipes}/>}
      {filter.includes("easy") && <Recipes recipes={easyRecipes}/>}
      {filter.includes("comfort") && <Recipes recipes={comfortRecipes}/>}
  </section>
  )
}