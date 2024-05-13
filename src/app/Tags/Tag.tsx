import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { TagType } from "./TagType";

export const Tag = ({ tag, setFilter }: { tag: TagType, setFilter: Dispatch<SetStateAction<string>> }) => {
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
      onClick={() => setFilter(tag.id)}
    >
      {tag.name.fr}
    </Button>
  );
};
