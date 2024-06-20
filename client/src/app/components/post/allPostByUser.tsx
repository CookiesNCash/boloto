'use client';
import { selectAllPostsByUser } from '@/redux/slices/postByUser';
import Post from './Post';
import axios, { all } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addPostsByUser } from '@/redux/slices/postByUser';
import { selectAllToken } from '@/redux/slices/tokenSlice';
import { useEffect } from 'react';
// http://localhost:80/post/byUser/:userId
export default function AllPostByUser () {
  const dispatch = useDispatch();
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  const accessToken = useSelector(selectAllToken);
  const [userId] = Object.keys(accessToken);

  const allPost = useSelector(selectAllPostsByUser);
  const allPostArray: Array<{
    id: string;
    text: string;
    image: string;
    hashTags: Array<string>;
  }> = Object.values(allPost); // Преобразуем объект в массив

  useEffect( () => {
    axios.get(`${hostUrl}/post/byUser/${userId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken[userId].accessToken}`
      }
    })
    .then((response) => dispatch(addPostsByUser(response.data)))
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
            name: accessToken[userId].fistName,
            photo: "../frog.jpg",
            id: accessToken[userId].email,
          }
        }
          // observe={observeElement}
        />
      ))}
    </>
  );
}