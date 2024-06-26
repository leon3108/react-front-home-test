'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import IngredientsWithQuantity from '@/ingredients/IngredientsWithQuantity';
import placeholderImage from '@/public/placeholder.jpg';
import { RecipeType } from '@/recipes/RecipeType';
import Steps from '@/steps/Steps';
import { Tags } from '@/tags/Tags';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const [showSteps, setShowSteps] = useState<Boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState(recipe.imageURL);

  return (
    <Card className='mt-5 flex flex-col p-3 md:w-[600px]'>
      <CardHeader>
        <CardTitle>{recipe.name}</CardTitle>
        <CardDescription className='text-wrap p-3'>
          {recipe.description}
        </CardDescription>
      </CardHeader>
      <Tags tags={recipe.tags} />
      <CardContent className='flex flex-row space-x-2'>
        <Image
          className={`hidden h-52 w-2/3 flex-col justify-evenly rounded-sm bg-cover sm:flex`}
          src={imgSrc}
          alt={recipe.name}
          width={500}
          height={300}
          onError={() => setImgSrc(placeholderImage.src)}
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
    </Card>
  );
};

export default Recipe;
