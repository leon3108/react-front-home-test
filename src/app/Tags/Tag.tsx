import { Button } from "@/components/ui/button";
import { useContext } from 'react';
import { FilterContext } from '../filterContextProvider';
import { TagType } from "./TagType";

export const Tag = ({ tag }: { tag: TagType}) => {
  const filterContext = useContext(FilterContext);
  if (filterContext === undefined) {
    return;
  }
  const {filter, setFilter} = filterContext;
  
  if (!filter.includes(tag.id))
    return;

  const handleClick = () => {
    if (filter.includes(tag.id)) {
      // const newFilter = filter.fonction qui boucle et qui retourne l'array (element => {element != tag.id})
      // setFilter(newFilter);
      console.log("WIP : tag.id deleted")
    } else {
      setFilter([...filter, tag.id])
    } 
  }

  return (
    <Button
      className={`text-black m-3 p-1 flex flex-row justify-center bg-[${tag.color}] rounded-sm`}
      onClick={handleClick}
    >
      {tag.name.fr}
    </Button>
  );
};
