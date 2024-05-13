import { Dispatch, SetStateAction } from "react";
import { TagType } from "../Tags/TagType";
import { Tags } from "../Tags/Tags";

export const TagList = ({ tags, setFilter }: { tags: TagType[], setFilter: Dispatch<SetStateAction<string>> }) => {
  return <Tags tags={tags} setFilter={setFilter}/>;
};
