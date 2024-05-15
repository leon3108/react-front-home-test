import IngredientsWithQuantity from '../Ingredients/IngredientsWithQuantity';
import { StepType } from './StepType';

export const Step = ({ etape }: { etape: StepType }) => {
  return (
    <div className='flex flex-col justify-start p-3 text-left bg-thistle'>
      <div>
        {etape.order}. {etape.description}
      </div>
      <div className='p-3'>
        {etape.ingredients && (
          <IngredientsWithQuantity
            ingredientsWithQuantity={etape.ingredients}
          />
        )}
      </div>
    </div>
  );
};

export default Step;
