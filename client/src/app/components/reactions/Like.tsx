import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { selectAllToken } from '@/redux/slices/tokenSlice';

// http://localhost:80/post/isPostLiked/:userId/:postId

export default function Like({postId, userId}: { postId: string; userId: string }) {
  const [haveLike, setHaveLike] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  const accessToken = useSelector(selectAllToken);
  const postLike = {
    "userId": +userId,
    "postId": +postId,
  }

  axios.get(`${hostUrl}/post/likes/${postId}`,  {
    headers: {
      'Authorization': `Bearer ${accessToken[userId].accessToken}`
    }
  }).then((response) => setCountLike(response.data));

  axios.get(`${hostUrl}/post/isPostLiked/${postLike.userId}/${postLike.postId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken[userId].accessToken}`
    }
  }).then((response) => setHaveLike(response.data))

  const handleLike = () => {
    setHaveLike(!haveLike)
    axios.post(`${hostUrl}/post/likes`, postLike, {
      headers: {
        'Authorization': `Bearer ${accessToken[userId].accessToken}`,
      }
    });
  }
 
  const classLikeIcon = cn("heart-icon", {
    liked: haveLike,
  });

  return (
    <div className="reactions">
      <div className="like-button" onClick={() => handleLike()}>
        <div className="heart-bg">
          <div className={classLikeIcon} />
        </div>
      </div>
      <span>{countLike}</span>
    </div>
  );
}
