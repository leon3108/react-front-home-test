import { useContext } from 'react';
import { allRecipes } from '../Recipes/RecipeData';
import Recipes from '../Recipes/Recipes';
import { FilterContext } from '../filterContextProvider';

export default function RecipeList() {
  const filterContext = useContext(FilterContext);
  if (filterContext === undefined) {
    return;
  }
  const { filter, setFilter } = filterContext;

  const filteredRecipes = allRecipes.filter((recipe) => {
    const ids = recipe.tags.map((tag) => tag.id);

    return filter.every((tag) => ids.includes(tag));
  });

  return <section>{<Recipes recipes={filteredRecipes} />}</section>;
}
