import HashTag from "./hashTag";

export default function AllHashtag({ tag }) {
  return (
    <div className="AllHashtag">{tag?.map((el, indx) => <HashTag key={indx} tag={el} />)}</div>
  );
}
