import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { GrView } from "react-icons/gr";

export default function Post ({text, img, author}) {
    const {id, photo, name} = author;
    return (
        <Card style={{ width: '18rem' }} className='w-100 p-3'>
        <div className='post-author'>
       <Card.Img className='photo-author' variant="top" src={photo} />
     
       <Card.Text>
            {name}
       </Card.Text>
       <a className='id-author' href='#'>
            {id}
       </a>
         </div>
         <Card.Text>
             {text}
            </Card.Text>
          <Card.Img variant="top" src={img} />
          <div className='all-reactions'>
            <div className='btn-reactions'>
              <div className='reactions like'>
              <FaRegHeart />
              <span>100</span>
              </div>
              <div className='reactions like'>
              <FaRegCommentAlt />
              <span>100</span>
              </div>
            </div>
            <div className='static-reactions'>
              <GrView />
              <span>10000</span>
            </div>
          </div>
        </Card>
      );
}