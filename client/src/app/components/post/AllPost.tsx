'use client';
import { selectAllPosts } from '@/redux/slices/postsSlice';
import Post from './Post';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addPosts } from '@/redux/slices/postsSlice';
import { selectAllToken } from '@/redux/slices/tokenSlice';
import { useEffect } from 'react';

export default function AllPost () {
  const dispatch = useDispatch();
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  const accessToken = useSelector(selectAllToken);
  const allPost = useSelector(selectAllPosts);
  // console.log(allPost)
  const allPostArray: Array<{
    id: number;
    text: string;
    image: string;
    hashTags: Array<string>;
  }> = Object.values(allPost); // Преобразуем объект в массив

  useEffect( () => {
    axios.get(`${hostUrl}/post/all`, {
      headers: {
        'Authorization': `Bearer ${accessToken.undefined}`
      }
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
          author={{
            name: "Иоан",
            photo: "../Иоан.jpeg",
            id: "@pro100cowboyyyyyyyJoeBidenyyyyyy",
          }}
        />
      ))}
    </>
  );
}
