import { IngredientType } from "../Ingredients/IngredientType";
import { IngredientWithQuantityType } from "../Ingredients/IngredientWithQuantityType";
import { StepType } from "../Steps/StepType";
import { TagType } from "../Tags/TagType";

export type RecipeType = {
  name: string;
  description: string;
  imageURL: string;
  ingredients?: IngredientType[];
  steps?: StepType[];
  ingredientsWithQuantity: IngredientWithQuantityType[];
  tags: TagType[];
};

export type ListOfRecipes = RecipeType[];
