'use client'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { addPost } from '../../../redux/slices/postsSlice';
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import ModalImg from './ModalAddImg';
import AddHashtag from './ModalAddHashtag';

export default function CreatePost() {
  const dispatch = useDispatch();

  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postHashtag, sethashtag] = useState("");

  const handleImageSelect = (image) => {
    setPostImage(image); // Обновление состояния выбранным URL изображения
  }
  const handleHashtagSelect = (hashtag) => {
    sethashtag(hashtag); // Обновление состояния выбранным URL изображения
  }
  
  const createPost = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now().toString(), content: postContent, img: postImage, hasTag: postHashtag,}
    dispatch(addPost(newPost));
    setPostContent(""); 
  }
  console.log(postHashtag)
    return (
        <div className='createPost'>
        <Form.Label htmlFor="">Создать бульк</Form.Label>
        <Form.Control
          type="text"
          id="text-post"
          placeholder='О чем булькать будешь?!'
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <div className='control-createPost'>
          <div className='modal-btn'>
            <ModalImg onImageSelect={handleImageSelect}/>
            <AddHashtag handleHashtagSelect={handleHashtagSelect}></AddHashtag>           
          </div>
             <Button onClick={createPost} variant="primary">булькнуть</Button>
        </div>
      </div>
    );
} 