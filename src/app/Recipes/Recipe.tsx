'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';
import IngredientsWithQuantity from '../Ingredients/IngredientsWithQuantity';
import Steps from '../Steps/Steps';
import { Tags } from '../Tags/Tags';
import { RecipeType } from './RecipeType';

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const [showSteps, setShowSteps] = useState<Boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);

  return (
    <Card className='flex flex-col p-3 shadow-[5px_5px_7px_2px_rgba(0,0,0,0.76)] mt-5 '>
      <CardHeader>
        <CardTitle>{recipe.name}</CardTitle>
        <CardDescription className='p-3'> {recipe.description}</CardDescription>
      </CardHeader>
      <Tags tags={recipe.tags} />
      <CardContent className='flex flex-row space-x-2'>
        <Image
          className={`flex flex-col justify-evenly h-52 w-2/3 bg-cover `}
          src={recipe.imageURL}
          alt={recipe.name}
          width={500}
          height={300}
        />
        <div className='p-3 w-full bg-lightBlue'>
          <div className='p-3 flex flex-col items-start bg-blanchedalmond'>
            Ingrédients:
            <button onClick={() => setShowIngredients(!showIngredients)}>
              {showIngredients ? 'Masquer' : 'Afficher'}
            </button>
            {showIngredients && (
              <IngredientsWithQuantity
                ingredientsWithQuantity={recipe.ingredientsWithQuantity}
              />
            )}
          </div>
          <div className='p-3 flex flex-col items-start justify-start'>
            <div className='p-3 flex flex-col'>
              Etapes de la recette:
              <button onClick={() => setShowSteps(!showSteps)}>
                {showSteps ? 'Masquer' : 'Afficher'}
              </button>
            </div>
            {recipe.steps && showSteps && <Steps steps={recipe.steps} />}
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default Recipe;
