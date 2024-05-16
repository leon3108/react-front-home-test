import Recipe from './Recipe';
import { ListOfRecipes } from './RecipeType';

export const Recipes = ({ recipes }: { recipes: ListOfRecipes }) => {
  return (
    <div className='p-3 flex flex-col items-center '>
      <div className='max-w-3xl '>
        {recipes.map((obj) => (
          <Recipe recipe={obj} key={obj.name} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
