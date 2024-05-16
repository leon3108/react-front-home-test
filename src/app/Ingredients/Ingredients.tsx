import Ingredient from './Ingredient';
import { IngredientType } from './IngredientType';

export const Ingredients = ({
  ingredients,
}: {
  ingredients?: IngredientType[];
}) => {
  return (
    <>
      {ingredients &&
        ingredients.map((ingredient) => (
          <Ingredient ingredient={ingredient} key={ingredient.name} />
        ))}
    </>
  );
};

export default Ingredients;
