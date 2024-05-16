'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { useContext } from 'react';
import { FilterContext } from './filterContextProvider';

const checkboxList = [
  {
    tag: 'chocolateDessert',
    label: 'Dessert au Chocolat',
  },
  {
    tag: 'easy',
    label: 'facile',
  },
  {
    tag: 'comfort',
    label: 'réconfortant',
  },
  {
    tag: 'winter',
    label: 'hiver',
  },
  {
    tag: 'appetizer',
    label: 'entrée',
  },
  {
    tag: 'sugar',
    label: 'Sucre',
  },
  {
    tag: 'summer',
    label: 'Eté',
  },
  {
    tag: 'dessert',
    label: 'Dessert',
  },
  {
    tag: 'eggs free',
    label: 'Sans Oeufs',
  },
  {
    tag: 'autumn',
    label: 'automne',
  },
  {
    tag: 'vegan',
    label: 'Vegan',
  },
];

export default function UpdateFilter() {
  const filterContext = useContext(FilterContext);
  if (filterContext === undefined) {
    return;
  }
  const { filter, setFilter } = filterContext;

  const handleCheckedChange = (checked: CheckedState, tag: string): void => {
    if (checked.valueOf() === true) {
      setFilter([...filter, tag]);
    } else {
      const newFilter = filter.filter((f) => f !== tag);
      setFilter(newFilter);
    }
  };
  return (
    <section className=' flex h-full w-full flex-col justify-start space-y-2 overflow-y-auto bg-fire-bush-50 p-4 sm:px-10 md:px-20 lg:fixed lg:left-0 lg:top-0 lg:w-52 lg:px-4 '>
      <h3 className='text-lg font-bold'>Tags :</h3>
      <div className='flex w-full flex-row flex-wrap justify-center lg:flex-col lg:flex-nowrap lg:space-y-2'>
        {checkboxList.map((checkbox) => (
          <Checkbox
            className='mb-1 ml-1 lg:mb-0 lg:ml-0'
            key={checkbox.tag}
            id={`${checkbox.tag}Checkbox`}
            onCheckedChange={(checked) =>
              handleCheckedChange(checked, checkbox.tag)
            }
            tag={checkbox.tag}
            label={checkbox.label}
          />
        ))}
      </div>
    </section>
  );
}
