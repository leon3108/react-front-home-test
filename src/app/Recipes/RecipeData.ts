import { ListOfRecipes, RecipeType } from "./RecipeType";

import {
  almondPowder,
  butter,
  chocolate,
  cream,
  cucumber,
  egg,
  feta,
  flour,
  pear,
  redFruits,
  salad,
  sugar,
} from "../Ingredients/IngredientData";

import {
  stepsCookie,
  stepsFondantChocolat,
  stepsPavlova,
  stepsTarteAuxPoires,
} from "../Steps/StepData";

import {
  appetizer,
  autumn,
  comfort,
  dessert,
  easy,
  summer,
  vegan,
  winter,
} from "../Tags/TagData";

const cookie: RecipeType = {
  name: "Cookie",
  description: "un cookie est un biscuit américain aux pépites de chocolat",
  imageURL:
    "https://media.istockphoto.com/id/1182279813/photo/butter-toffee-crunch-chocolate-chip-cookies.jpg?s=2048x2048&w=is&k=20&c=cWzC6xy6rZvsEJ2ZS-z3UG8p5xahwZGS9l74M0kJDmc=",
  ingredients: [sugar, flour, chocolate, egg, cream],
  steps: stepsCookie,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 100, unit: "g" },
    { ingredient: egg, quantity: 3 },
    { ingredient: chocolate, quantity: 100, unit: "g" },
    { ingredient: flour, quantity: 300, unit: "g" },
    { ingredient: cream, quantity: 20, unit: "cl" },
  ],
  tags: [dessert, easy],
};

const pavlova: RecipeType = {
  name: "Pavlova",
  description: "La pavlova est un dessert à base de meringue et de fruits",
  imageURL:
    "https://www.mycake.fr/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg",
  ingredients: [sugar, flour, redFruits, egg, cream],
  steps: stepsPavlova,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 100, unit: "g" },
    { ingredient: egg, quantity: 3 },
    { ingredient: redFruits, quantity: 100, unit: "g" },
    { ingredient: cream, quantity: 20, unit: "cl" },
  ],
  tags: [summer, dessert],
};

const fondantChocolat: RecipeType = {
  name: "Fondant au chocolat",
  description:
    "Le fondant au chocolat est un gâteau au chocolat qui fond en bouche",
  imageURL:
    "https://www.guydemarle.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0ZvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--333bff76e254e1934153f809f2d9cc2b5967da52/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VWTI5dFltbHVaVjl2Y0hScGIyNXpld2c2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpvR1JWUTZER2R5WVhacGRIbEpJZ3REWlc1MFpYSUdPd2RVT2dsamNtOXdTU0lRTmpBd2VEWXdNQ3N3S3pBR093ZFUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--929a1958a8630156464b089800ca739f1b4570de/fondant-au-chocolat.jpg",
  ingredients: [chocolate, egg, flour, butter, sugar],
  steps: stepsFondantChocolat,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 200, unit: "g" },
    { ingredient: flour, quantity: 50, unit: "g" },
    { ingredient: chocolate, quantity: 200, unit: "g" },
    { ingredient: butter, quantity: 150, unit: "g" },
  ],
  tags: [dessert, winter, comfort],
};

const pearPie: RecipeType = {
  name: "Tarte amandine aux poires",
  description:
    "La tarte au poire est une tarte faite à base d'un appareil à l'amande, d'une pâte sablée et de poires",
  imageURL:
    "https://assets.afcdn.com/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp",
  ingredients: [almondPowder, sugar, butter, flour, pear],
  steps: stepsTarteAuxPoires,
  ingredientsWithQuantity: [
    { ingredient: pear, quantity: 2 },
    { ingredient: almondPowder, quantity: 50, unit: "g" },
    { ingredient: sugar, quantity: 150, unit: "g" },
    { ingredient: egg, quantity: 2 },
  ],
  tags: [dessert, autumn, comfort],
};

const waldorfSalad: RecipeType = {
  name: "Salade Waldorf",
  description: "La salade greque est parfaite pour l'été",
  imageURL:
    "https://assets.afcdn.com/recipe/20190704/94666_w420h420c1cx2689cy1920cxb5378cyb3840.webp",
  ingredients: [salad, cucumber, feta],
  ingredientsWithQuantity: [
    { ingredient: salad, quantity: 1 },
    {
      ingredient: cucumber,
      quantity: 1,
    },
    { ingredient: feta, quantity: 150, unit: "g" },
  ],
  tags: [appetizer, summer, vegan, easy],
};

export const allRecipes: ListOfRecipes = [
  pavlova,
  fondantChocolat,
  pearPie,
  waldorfSalad,
];

export const summerRecipes = allRecipes.filter((recipe) => {
  const recipesTags = recipe.tags.map((tag) => tag.id);
  return recipesTags.includes("summer");
});

export const sugarRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );
  return ingredientsList && ingredientsList.includes("sucre");
});

export const chocolateRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );

  return ingredientsList && ingredientsList.includes("chocolat");
});

export const dessertRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tags: string[] = recette.tags.map((tag) => tag.id);
  return tags.includes("dessert");
});

export const chocolateDessertRecipes: RecipeType[] = allRecipes.filter(
  (recette) => {
    const tagsString: string[] = recette.tags.map((tag) => tag.id);
    const ingredientString: string[] = recette.ingredients
      ? recette.ingredients.map((ingredient) => ingredient.name)
      : [];
    return (
      tagsString.includes("dessert") && ingredientString.includes("chocolat")
    );
  }
);

export const noEggsRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsString: string[] = recette.ingredients
    ? recette.ingredients.map((ingredient) => ingredient.name)
    : [];
  return !ingredientsString.includes("oeuf");
});

export const autumnRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagIds = recette.tags.map((tag) => tag.id);
  return tagIds.includes("autumn");
});

export const veganRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagIds: string[] = recette.tags.map((tag) => tag.id);
  return tagIds.includes("vegan");
});
