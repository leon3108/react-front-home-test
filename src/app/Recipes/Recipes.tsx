import { Dispatch, SetStateAction } from "react";
import Recipe from "./Recipe";
import { ListOfRecipes } from "./RecipeType";

export const Recipes = ({ recipes,filter, setFilter }: { recipes: ListOfRecipes, filter: string, setFilter: Dispatch<SetStateAction<string>> }) => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "whitesmoke",
          borderWidth: "10px",
          borderColor: "black",
          maxWidth: "800px",
        }}
      >
        {recipes.map((obj) => (
          <Recipe recipe={obj} filter={filter} setFilter={setFilter}/>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
