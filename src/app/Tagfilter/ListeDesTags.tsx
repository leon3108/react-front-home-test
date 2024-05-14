import { TagType } from "../Tags/TagType";
import { Tags } from "../Tags/Tags";

export const RecipeFilter = ({ tags }: { tags: TagType[] }) => {
  return <Tags tags={tags}/>;
};
