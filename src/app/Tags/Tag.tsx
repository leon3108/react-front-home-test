import { TagType } from "./TagType";

export const Tag = ({ tag }: { tag: TagType }) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: `${tag.color}`
      }}
    >
      {tag.name.fr}
    </div>
  );
};
