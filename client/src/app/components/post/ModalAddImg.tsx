import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { MdOutlinePermMedia } from "react-icons/md";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function ModalImg({ onImageSelect }: {
  onImageSelect: (image: string) => void;
}) {
  const [lgShow, setLgShow] = useState(false);
  const [url, setUrl] = useState('');

  const handleClose = () => setLgShow(false);

  const handleImageSelect = (image: string) => {
    onImageSelect(image); // Вызов функции обратного вызова с выбранным изображением
    handleClose();
  };

  return (
    <>
      <div className="btn hover-btn-grey">
        <MdOutlinePermMedia
          onClick={() => setLgShow(true)}
          className="add-img"
        />
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Добавьте url на изображение
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-Form">
          <Form.Control
            type="src"
            placeholder="https://example.top/uploads/posts"
            autoFocus
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button
            onClick={() => handleImageSelect(url)}
            className="btn-modal"
            variant="primary"
          >
            загрузить
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
