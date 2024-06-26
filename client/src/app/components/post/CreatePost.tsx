import React, { MouseEventHandler, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { selectAllToken } from '@/redux/slices/tokenSlice';
import { addPost } from '@/redux/slices/postsSlice';
import ModalImg from './ModalAddImg';

export default function CreatePost() {
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState('');

  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;

  const accessToken = useSelector(selectAllToken);
  const [userId] = Object.keys(accessToken);

  const dispatch = useDispatch();

  const handleImageSelect = (image: string) => {
    setPostImage(image);
  };

  const splitHashTag = () => {
    const hashtagPattern = /#[\S]+/g;
    const hashtags = postContent.match(hashtagPattern) || [];
    const textWithoutHashtags = postContent.replace(hashtagPattern, '').trim();
    return [textWithoutHashtags, hashtags];
  };

  const createPost: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const [textWithoutHashtags, hashtags] = splitHashTag();
    if (textWithoutHashtags === '') {
      return;
    }

    const newPost = {
      userId: +userId,
      text: textWithoutHashtags,
      image: postImage,
      hashTags: hashtags,
      firstName: accessToken[userId].fistName,
      email: accessToken[userId].email,
    };
  

    try {
      const response = await axios.post(`${hostUrl}/post/create`, newPost, {
        headers: {
          Authorization: `Bearer ${accessToken[userId].accessToken}`,
        },
      });

      // Добавляем новый пост в Redux Store
      dispatch(addPost(response.data));

      // Очищаем поля ввода после успешного создания поста
      setPostContent('');
      setPostImage('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="createPost bg-black">
      <Form.Label htmlFor="">Вылить жижу</Form.Label>
      <Form.Control
        type="text"
        id="text-post"
        placeholder="Лей сюда!"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        required
      />
      <div className="control-createPost">
        <div className="modal-btn">
          <ModalImg onImageSelect={handleImageSelect} />
        </div>
        <Button onClick={createPost} variant="primary">
          Жижануться
        </Button>
      </div>
    </div>
  );
}
