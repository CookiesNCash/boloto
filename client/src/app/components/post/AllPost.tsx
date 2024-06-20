'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, addPosts } from '@/redux/slices/postsSlice';
import Post from './Post';
import { selectAllToken } from '@/redux/slices/tokenSlice';

export default function AllPost() {
  const dispatch = useDispatch();
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  const accessToken = useSelector(selectAllToken);

  const [userId] = Object.keys(accessToken);
  const allPost = useSelector(selectAllPosts);
  console.log(allPost)
  const allPostArray: Array<{
    id: string;
    text: string;
    image: string;
    hashTags: Array<string>;
    firstName: string;
    email: string;
  }> = Object.values(allPost); // Преобразуем объект в массив
  useEffect(() => {
    axios
      .get(`${hostUrl}/post/all`, {
        headers: {
          Authorization: `Bearer ${accessToken[userId].accessToken}`,
        },
      })
      .then((response) => dispatch(addPosts(response.data)))
      .catch((error) => console.error('Error fetching posts:', error));
  }, [dispatch]);

  return (
    <>
      {allPostArray.reverse().map((el) => (
        <Post
          key={el.id}
          text={el.text}
          img={el.image}
          tag={el.hashTags}
          postId={el.id}
          userId={userId}
          author={{
            name: el.firstName,
            photo: "../frog.jpg",
            id: el.email,
          }
        }
        />
      ))}
    </>
  );
}
