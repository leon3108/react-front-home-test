import { Dispatch, SetStateAction, useState } from "react";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import Steps from "../Steps/Steps";
import { Tags } from "../Tags/Tags";
import { RecipeType } from "./RecipeType";

export const Recipe = ({ recipe, setFilter }: { recipe: RecipeType, setFilter: Dispatch<SetStateAction<string>> }) => {
  const [showSteps, setShowSteps] = useState<Boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        boxShadow: "5px 5px 7px 2px rgba(0,0,0,0.76)",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "200px",
          width: "70%",
          backgroundImage: `url(${recipe.imageURL})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "lightblue",
          width: "100%",
        }}
      >
        <h2>Nom de la recette: {recipe.name}</h2>
        <div
          style={{
            padding: "10px",
          }}
        >
          {recipe.description}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tags tags={recipe.tags} setFilter={setFilter}/>
        </div>
        <div
          style={{
            backgroundColor: "blanchedalmond",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Ingrédients:
          <button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? "Masquer" : "Afficher"}
          </button>
          {showIngredients && (
            <IngredientsWithQuantity
              ingredientsWithQuantity={recipe.ingredientsWithQuantity}
            />
          )}
        </div>
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            Etapes de la recette:
            <button onClick={() => setShowSteps(!showSteps)}>
              {showSteps ? "Masquer" : "Afficher"}
            </button>
          </div>
          {recipe.steps && showSteps && <Steps steps={recipe.steps} />}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
