import Card from 'react-bootstrap/Card';
import AllReactions from './reactions/AllReactions'

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
        <AllReactions />
        </Card>
      );
}