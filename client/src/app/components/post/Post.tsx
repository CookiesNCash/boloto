import Card from 'react-bootstrap/Card';
import AllReactions from '../reactions/AllReactions';
import AllHashtag from './AllHashtag';

export default function Post({ text, img, author, tag }) {
  const { id, photo, name } = author;

  return (
    <Card style={{ width: "18rem" }} className="w-100 p-3 bg-black">
      <div className="post-author">
        <Card.Img className="photo-author" variant="top" src={photo} />

        <Card.Text>{name}</Card.Text>
        <a className="id-author" href="#">
          {id}
        </a>
      </div>
      <div className="text-post">
        <Card.Text>{text}</Card.Text>
        <AllHashtag tag={tag} />
      </div>
      <Card.Img variant="top" src={img} />
      <AllReactions />
    </Card>
  );
}
