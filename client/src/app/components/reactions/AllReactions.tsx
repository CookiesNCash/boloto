import Like from './Like';
import Comments from './Comments';
import View from './View';

export default function AllReactions({postId, userId}) {
  return (
    <div className="all-reactions">
      <div className="btn-reactions">
        <Like postId={postId} userId={userId}/>
        <Comments />
      </div>
      <div className="static-reactions">
        <View />
      </div>
    </div>
  );
}
