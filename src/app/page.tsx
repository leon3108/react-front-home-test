import RecipeList from './RecipeList/recipeList';
import { FilterContextProvider } from './filterContextProvider';
import Title from './title';
import UpdateFilter from './updateFilter';

export default function App() {
  return (
    <main className='bg-white text-black'>
      <FilterContextProvider>
        <Title />
        <div className='flex flex-col lg:flex-row'>
          <UpdateFilter />
          <RecipeList />
        </div>
      </FilterContextProvider>
    </main>
  );
}
