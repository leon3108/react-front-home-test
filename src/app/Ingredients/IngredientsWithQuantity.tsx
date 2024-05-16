import { IngredientWithQuantity } from './IngredientWithQuantity';
import { IngredientWithQuantityType } from './IngredientWithQuantityType';

export const IngredientsWithQuantity = ({
  ingredientsWithQuantity,
}: {
  ingredientsWithQuantity: IngredientWithQuantityType[];
}) => {
  return (
    <>
      {ingredientsWithQuantity.map((obj) => (
        <IngredientWithQuantity
          ingredientWithQuantity={obj}
          key={obj.ingredient.name}
        />
      ))}
    </>
  );
};

export default IngredientsWithQuantity;
