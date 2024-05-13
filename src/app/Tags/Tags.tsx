import { Dispatch, SetStateAction } from "react";
import { Tag } from "./Tag";
import { TagType } from "./TagType";

export const Tags = ({ tags, setFilter }: { tags: TagType[], setFilter: Dispatch<SetStateAction<string>> }) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {tags.map((obj) => (
        <Tag tag={obj} setFilter={setFilter}/>
      ))}
    </div>
  );
};
