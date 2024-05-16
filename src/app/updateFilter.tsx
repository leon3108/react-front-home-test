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
    <section className='flex flex-col justify-center mt-5 px-4 space-y-2'>
      <h3 className='text-lg font-bold'>Tags :</h3>
      {checkboxList.map((checkbox) => (
        <Checkbox
          key={checkbox.tag}
          id={`${checkbox.tag}Checkbox`}
          onCheckedChange={(checked) =>
            handleCheckedChange(checked, checkbox.tag)
          }
          tag={checkbox.tag}
          label={checkbox.label}
        />
      ))}
    </section>
  );
}
