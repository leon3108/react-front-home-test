import { useContext } from 'react';
import { FilterContext } from '../filterContextProvider';
import Recipe from "./Recipe";
import { ListOfRecipes } from "./RecipeType";

export const Recipes = ({ recipes}: { recipes: ListOfRecipes }) => {
  const filterContext = useContext(FilterContext);
  if (filterContext === undefined) {
    return;
  }
  const {filter, setFilter} = filterContext;
  return (
    <div
    className='p-3 flex flex-col items-center '
    >
      <div className='border-8 border-black max-w-3xl bg-whitesmoke'>
        {recipes.map((obj) => (
          <Recipe recipe={obj} key={obj.name}/>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
