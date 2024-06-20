import Like from './Like';
import Comments from './Comments';
import View from './View';

export default function AllReactions({id}: { id: string }) {
  return (
    <div className="all-reactions">
      <div className="btn-reactions">
        <Like id={id}/>
        <Comments />
      </div>
      <div className="static-reactions">
        <View />
      </div>
    </div>
  );
}
