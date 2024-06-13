import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { MdOutlinePermMedia } from "react-icons/md";
import { addPost } from '../slices/postsSlice';
import React, { useState } from 'react';
// import {useDispatch} from 'react-redux';

export default function CreatePost() {
  const [postContent, setPostContent] = useState("");
  // const dispatch = useDispatch();

  const createPost = (e) => {
    e.preventDefault();
    // dispatch(addPost(postContent));
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
            <MdOutlinePermMedia className='add-img'/>
            <Button onClick={createPost} variant="primary">Создать</Button>
        </div>
      </div>
    );
} 