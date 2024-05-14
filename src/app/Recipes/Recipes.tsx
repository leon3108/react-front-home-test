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
          <Recipe recipe={obj} key={obj.name}/>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
