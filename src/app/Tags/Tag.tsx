import { TagType } from '@/tags/TagType';

export const Tag = ({ tag }: { tag: TagType }) => {
  return (
    <div
      className={'mx-3 flex flex-row justify-center rounded-sm p-1 text-black'}
    >
      {tag.name.fr}
    </div>
  );
};
