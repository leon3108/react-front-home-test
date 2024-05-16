'use client';

import { useContext } from 'react';
import Recipe from '../Recipes/Recipe';
import { allRecipes } from '../Recipes/RecipeData';
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

  return (
    <section className='flex flex-grow flex-col items-center p-3 lg:ml-10 xl:justify-center '>
      {filteredRecipes.map((obj) => (
        <Recipe recipe={obj} key={obj.name} />
      ))}
    </section>
  );
}
