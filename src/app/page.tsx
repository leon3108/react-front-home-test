import RecipeList from './RecipeList/recipeList';
import { FilterContextProvider } from './filterContextProvider';
import Title from './title';
import UpdateFilter from './updateFilter';

export default function App() {
  return (
    <main className='bg-white text-black'>
      <FilterContextProvider>
        <Title />
        <div className='flex'>
          <div className='hidden w-52 h-full bg-fire-bush-50 lg:fixed top-0 left-0 overflow-y-auto'>
            <UpdateFilter />
          </div>
          <div className='flex-grow flex items-center justify-center'>
            <RecipeList />
          </div>
        </div>
      </FilterContextProvider>
    </main>
  );
}
