'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Eye, EyeOff } from 'lucide-react';
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
    <Card className='mt-5 flex flex-col p-3 md:w-[600px]'>
      <CardHeader>
        <CardTitle>{recipe.name}</CardTitle>
        <CardDescription className='text-wrap p-3'>
          {' '}
          {recipe.description}
        </CardDescription>
      </CardHeader>
      <Tags tags={recipe.tags} />
      <CardContent className='flex flex-row space-x-2'>
        <Image
          className={`hidden h-52 w-2/3 flex-col justify-evenly bg-cover sm:flex`}
          src={recipe.imageURL}
          alt={recipe.name}
          width={500}
          height={300}
        />
        <div className='w-full rounded-md bg-fire-bush-200 p-3'>
          <div className='flex flex-col items-start rounded-sm bg-fire-bush-100 p-3'>
            <Collapsible>
              <div className='flex space-x-2'>
                <p>Ingrédients:</p>
                <CollapsibleTrigger>
                  {showIngredients ? (
                    <EyeOff
                      onClick={() => setShowIngredients(!showIngredients)}
                    />
                  ) : (
                    <Eye onClick={() => setShowIngredients(!showIngredients)} />
                  )}
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <IngredientsWithQuantity
                  ingredientsWithQuantity={recipe.ingredientsWithQuantity}
                />
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div className='flex flex-col items-start justify-start p-3 '>
            <Collapsible>
              <div className='flex space-x-2 bg-fire-bush-200'>
                <p>Etapes de la recette:</p>
                <CollapsibleTrigger>
                  {showSteps ? (
                    <EyeOff onClick={() => setShowSteps(!showSteps)} />
                  ) : (
                    <Eye onClick={() => setShowSteps(!showSteps)} />
                  )}
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                {recipe.steps && <Steps steps={recipe.steps} />}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default Recipe;
