'use client'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { addPost } from '../../redux/slices/postsSlice';
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import {selectAllPosts} from '../../redux/slices/postsSlice'
import ModalImg from './ModalImg'

export default function CreatePost() {
  const dispatch = useDispatch();

  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState("");
  const handleImageSelect = (image) => {
    setPostImage(image); // Обновление состояния выбранным URL изображения
  }
  
  const createPost = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now().toString(), content: postContent, img: postImage,}
    dispatch(addPost(newPost));
    setPostContent(""); 
  }

    return (
        <div className='createPost'>
        <Form.Label htmlFor="">Создать Пост</Form.Label>
        <Form.Control
          type="text"
          id="text-post"
          placeholder='Что произошло?!'
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <div className='control-createPost'>
            <ModalImg onImageSelect={handleImageSelect}/>
            <Button onClick={createPost} variant="primary">Создать</Button>
        </div>
      </div>
    );
} 