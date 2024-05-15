import { Tag } from "./Tag";
import { TagType } from "./TagType";

export const Tags = ({ tags}: { tags: TagType[]}) => {
  return (
    <div className="mx-3 p-1 border-2 flex flex-row justify-center">
      {tags.map((obj) => (
        <Tag tag={obj} key={obj.id}/>
      ))}
    </div>
  );
};
