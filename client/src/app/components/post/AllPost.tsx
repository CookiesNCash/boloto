'use client';
import { selectAllPosts } from '@/redux/slices/postsSlice';
import Post from './Post';
import axios, { all } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addPosts } from '@/redux/slices/postsSlice';
import { selectAllToken } from '@/redux/slices/tokenSlice';

export default function AllPost() {

  const dispatch = useDispatch();
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  const accessToken = useSelector(selectAllToken);
  
  const allPostGet = axios.get(`${hostUrl}/post/all`, {
   headers: {
    'Authorization': `Bearer ${accessToken.undefined}`
   }
})
.then((response) => console.log(response.data))
.catch((error) => console.error('Error fetching posts:', error));
  const allPost = useSelector(selectAllPosts);
  const allPostArray = Object.values(allPost); // Преобразуем объект в массив
  // if (!allPostArray || allPostArray.length === 0) {
  //     return <p>Нет постов для отображения</p>;
  // }

  return (
    <>
      {allPostArray.reverse().map((el, indx) => (
        <Post
          key={el.id}
          text={el.content}
          img={el.img}
          tag={el.hasTag}
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
