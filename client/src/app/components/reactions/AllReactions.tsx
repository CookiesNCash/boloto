import React from 'react';
import Like from './Like';
import Comments from './Comments';
import View from './View';

export default function AllReactions({postId, userId}: { postId: string, userId: string }) {
  return (
    <div className="all-reactions">
      <div className="btn-reactions">
        <Like postId={postId} userId={userId}/>
        <Comments />
      </div>
      <div className="static-reactions">
        <View postId={postId} userId={userId}/>
      </div>
    </div>
  );
}
