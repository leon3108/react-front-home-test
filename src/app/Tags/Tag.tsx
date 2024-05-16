import { TagType } from '@/tags/TagType';
import { cx } from 'class-variance-authority';

export const Tag = ({ tag }: { tag: TagType }) => {
  return (
    <div
      className={cx(
        'mx-3 flex flex-row justify-center rounded-sm p-1 text-black',
        `bg-[${tag.color}]`
      )}
    >
      {tag.name.fr}
    </div>
  );
};
