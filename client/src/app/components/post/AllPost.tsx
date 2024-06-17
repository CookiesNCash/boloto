'use client';

import { useSelector } from 'react-redux';
import { selectAllPosts } from '@/redux/slices/postsSlice';
import Post from './Post';

export default function AllPost() {
  const allPost = useSelector(selectAllPosts);
  const allPostArray = Object.values(allPost); // Преобразуем объект в массив

  // if (!allPostArray || allPostArray.length === 0) {
  //     return <p>Нет постов для отображения</p>;
  // }

  return (
    <>
      {allPostArray.map((el) => (
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
