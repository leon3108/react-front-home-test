import { Button } from '@/components/ui/button';
import { cx } from 'class-variance-authority';
import { useContext } from 'react';
import { FilterContext } from '../filterContextProvider';
import { TagType } from './TagType';

const shouldShowTag = (filter: string[], tag: TagType) => {
  if (!filter.includes(tag.id) && filter.length != 0) {
    return false;
  }
  return true;
};

export const Tag = ({ tag }: { tag: TagType }) => {
  const filterContext = useContext(FilterContext);
  if (filterContext === undefined) {
    return;
  }
  const { filter, setFilter } = filterContext;

  if (!shouldShowTag(filter, tag)) {
    return;
  }

  const handleClick = () => {
    if (filter.includes(tag.id)) {
      // const newFilter = filter.fonction qui boucle et qui retourne l'array (element => {element != tag.id})
      // setFilter(newFilter);
      console.log('WIP : tag.id deleted');
    } else {
      setFilter([...filter, tag.id]);
    }
  };

  return (
    <Button
      className={cx(
        'text-black m-3 p-1 flex flex-row justify-center rounded-sm',
        `bg-[${tag.color}]`
      )}
      onClick={handleClick}
    >
      {tag.name.fr}
    </Button>
  );
};
