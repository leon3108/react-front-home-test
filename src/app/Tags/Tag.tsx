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

  return (
    <Button
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: `${tag.color}`
      }}
      className="text-black"
      onClick={() => setFilter([...filter, tag.id])}
    >
      {tag.name.fr}
    </Button>
  );
};
