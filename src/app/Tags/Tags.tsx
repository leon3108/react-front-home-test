import { Tag } from '@/tags/Tag';
import { TagType } from '@/tags/TagType';

export const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <div className='mx-3 flex flex-row flex-wrap p-1'>
      {tags.map((obj) => (
        <Tag tag={obj} key={obj.id} />
      ))}
    </div>
  );
};
