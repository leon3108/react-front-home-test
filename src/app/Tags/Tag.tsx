import { cx } from 'class-variance-authority';
import { TagType } from './TagType';

export const Tag = ({ tag }: { tag: TagType }) => {
  return (
    <div
      className={cx(
        'text-black mx-3 p-1 flex flex-row justify-center rounded-sm',
        `bg-[${tag.color}]`
      )}
    >
      {tag.name.fr}
    </div>
  );
};
