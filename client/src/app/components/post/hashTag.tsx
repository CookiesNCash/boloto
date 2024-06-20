export default function HashTag({ tag }: { tag: string}) {
  return (
    <a href="#" className="hashTag">
      {tag}
    </a>
  );
}
