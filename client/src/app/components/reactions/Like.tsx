import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectAllToken } from "@/redux/slices/tokenSlice";
import cn from 'classnames';
// http://localhost:80/post/likes


export default function Like({id}) {
  const [haveLike, setHaveLike] = useState(false);
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  const accessToken = useSelector(selectAllToken);
  const postLike = {
    "userId": 0,
    "postId": id,
  }
  const handleLike = () => {
    setHaveLike(!haveLike)
    axios.post(`${hostUrl}/post/create`, postLike, {
      headers: {
        'Authorization': `Bearer ${accessToken.undefined}`,
      }
    }).then((console.log));
  }
 

  // axios({
  //   method: 'get',
  //   url: `${hostUrl}/post/likes`,
  //   headers: {
  //      'Authorization': `Bearer ${accessToken.undefined}`
  //   }, 
  //   data: {
  //     postId: 'id', // This is the body part
  //   }
  // }).then((e) => console.log(e));

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
      <span>100</span>
    </div>
  );
}
