// import { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import { GoHash } from "react-icons/go";
// import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';

// export default function AddHashtag({ handleHashtagSelect }) {
//   const [lgShow, setLgShow] = useState(false);
//   const [hashtag, sethashtag] = useState('');

//   const handleClose = () => setLgShow(false);

//   const handleImageSelect = (hashTag: string) => {
//     handleHashtagSelect(hashTag); // Вызов функции обратного вызова с выбранным изображением
//     handleClose();
//   };

//   return (
//     <>
//       <div className="btn hover-btn-grey">
//         <GoHash onClick={() => setLgShow(true)} className="add-img">
//           #
//         </GoHash>
//       </div>
//       <Modal
//         size="lg"
//         show={lgShow}
//         onHide={() => setLgShow(false)}
//         aria-labelledby="example-modal-sizes-title-lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="example-modal-sizes-title-lg">
//             Добавьте хештег
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="modal-Form">
//           <Form.Control
//             type="src"
//             placeholder="#Bts"
//             autoFocus
//             value={hashtag}
//             onChange={(e) => sethashtag(e.target.value)}
//           />
//           <Button
//             onClick={() => handleImageSelect(hashtag)}
//             className="btn-modal"
//             variant="primary"
//           >
//             Добавить
//           </Button>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
