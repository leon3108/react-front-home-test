import { useContext, useState } from 'react';
import IngredientsWithQuantity from '../Ingredients/IngredientsWithQuantity';
import Steps from '../Steps/Steps';
import { Tags } from '../Tags/Tags';
import { FilterContext } from '../filterContextProvider';
import { RecipeType } from './RecipeType';

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const [showSteps, setShowSteps] = useState<Boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);
  const filterContext = useContext(FilterContext);
  if (filterContext === undefined) {
    return;
  }
  const { filter, setFilter } = filterContext;

  return (
    <div className='flex flex-row p-3 shadow-[5px_5px_7px_2px_rgba(0,0,0,0.76)] mt-5 '>
      <div
        className={`flex flex-col justify-evenly h-52 w-2/3 bg-cover `}
        style={{
          backgroundImage: `url(${recipe.imageURL})`,
        }}
      ></div>
      <div className='p-3 w-full bg-lightBlue'>
        <h2>Nom de la recette: {recipe.name}</h2>
        <div className='p-3'>{recipe.description}</div>
        <div className='flex justify-center'>
          <Tags tags={recipe.tags} />
        </div>
        <div className='p-3 flex flex-col items-start bg-blanchedalmond'>
          Ingrédients:
          <button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? 'Masquer' : 'Afficher'}
          </button>
          {showIngredients && (
            <IngredientsWithQuantity
              ingredientsWithQuantity={recipe.ingredientsWithQuantity}
            />
          )}
        </div>
        <div className='p-3 flex flex-col items-start justify-start'>
          <div className='p-3 flex flex-col'>
            Etapes de la recette:
            <button onClick={() => setShowSteps(!showSteps)}>
              {showSteps ? 'Masquer' : 'Afficher'}
            </button>
          </div>
          {recipe.steps && showSteps && <Steps steps={recipe.steps} />}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
