import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { MdOutlinePermMedia } from "react-icons/md";

export default function CreatePost() {
    return (
        <div className='createPost'>
        <Form.Label htmlFor="">Создать Пост</Form.Label>
        <Form.Control
          type="text"
          id="text-post"
          placeholder='Что произошло?!'
        />
        <div className='control-createPost'>
            <MdOutlinePermMedia className='add-img'/>
            <Button variant="primary">Создать</Button>{' '}
        </div>
      </div>
    );
} 