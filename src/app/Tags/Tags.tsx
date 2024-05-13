import { Dispatch, SetStateAction } from "react";
import { Tag } from "./Tag";
import { TagType } from "./TagType";

export const Tags = ({ tags, filter, setFilter }: { tags: TagType[], filter : string, setFilter: Dispatch<SetStateAction<string>> }) => {
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
        <Tag tag={obj} filter={filter} setFilter={setFilter} key={obj.id}/>
      ))}
    </div>
  );
};
