'use client';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/slices/postsSlice";
import ModalImg from './ModalAddImg';

export default function CreatePost() {
  const dispatch = useDispatch();

  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState("");

  const handleImageSelect = (image) => {
    setPostImage(image); // Обновление состояния выбранным URL изображения
  };

  const splitHashTag = () => {
    const hashtagPattern = /#[\S]+/g;
    const hashtags = postContent.match(hashtagPattern) || [];
    const textWithoutHashtags = postContent.replace(hashtagPattern, '').trim();

    return [textWithoutHashtags, hashtags];
  };

  const createPost = (e) => {
    e.preventDefault();
    const [textWithoutHashtags, hashtags] = splitHashTag();
    const newPost = {
      id: Date.now().toString(),
      content: textWithoutHashtags,
      img: postImage,
      hasTag: hashtags,
    };
    dispatch(addPost(newPost));
    setPostContent("");
    setPostImage("")
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
