'use client';

import NoRecipe from '@/public/undraw_No_data_re_kwbl.png';
import Recipe from '@/recipes/Recipe';
import { allRecipes } from '@/recipes/RecipeData';
import Image from 'next/image';
import { useContext } from 'react';
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
      {filteredRecipes.length === 0 ? (
        <div className='flex h-full w-full flex-col items-center justify-center'>
          <p>Dommage pas de recette</p>
          <Image
            src={NoRecipe}
            alt='no recipe found'
            width={300}
            height={300}
          />
        </div>
      ) : (
        filteredRecipes.map((obj) => <Recipe recipe={obj} key={obj.name} />)
      )}
    </section>
  );
}
