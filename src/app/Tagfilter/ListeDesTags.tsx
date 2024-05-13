import { Dispatch, SetStateAction } from "react";
import { TagType } from "../Tags/TagType";
import { Tags } from "../Tags/Tags";

export const TagList = ({ tags, filter, setFilter }: { tags: TagType[], filter: string, setFilter: Dispatch<SetStateAction<string>> }) => {
  return <Tags tags={tags} filter={filter} setFilter={setFilter}/>;
};
