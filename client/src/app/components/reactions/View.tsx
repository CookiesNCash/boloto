import React from 'react';
import { GrView } from 'react-icons/gr';
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllToken } from "@/redux/slices/tokenSlice";
import { useEffect } from "react";
// http://localhost:80/post/view

export default function View({postId, userId}: { postId: string; userId: string }) {
  const [view, setView] = useState([]);

  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  const accessToken = useSelector(selectAllToken);
  useEffect(() => {
        axios.patch(`${hostUrl}/post/view`, postLike, {
      headers: {
        'Authorization': `Bearer ${accessToken[userId].accessToken}`,
      }
    }).then((response) => setView(response.data.views));

  }, [])

  const postLike = {
    "userId": +userId,
    "postId": +postId,
  }
  // console.log(`${hostUrl}/post/view`)

  return (
    <div className="reactions view">
      <GrView />
      <span>{view.length}</span>
    </div>
  );
}
