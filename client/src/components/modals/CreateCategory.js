import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Dropdown, CloseButton, Alert } from "react-bootstrap";
import { selectCategories } from "../../store/selectors";
import { useSelector } from "react-redux";
import { createCategory } from "../../http/productApi";

function CreateCategory({show, onHide}) {
  const [name, setValueName] = useState('');
  const [URL, setValueURL] = useState('');
  const [file, setFile] = useState(null);

  // const addCategory = () => {
  //     createCategory({name: valueName, URL: valueURL}).then(data => )
  // }

  function selectFile (e) {
    setFile(e.target.files[0])
  }

  function addCategory () {
    const formData = new FormData();
    formData.append('name', name)
    formData.append('url', URL)
    formData.append('img', file)
    createCategory(formData).then(data => onHide())
  }


  return (
      <Modal
          size="lg"
          centered
          show={show}
          onHide={onHide}
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить коллекцию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
              value={name}
              onChange={e => setValueName(e.target.value)}
              className="mt-3"
              placeholder="Название коллекции"
          />

          <Form.Control
              value={URL}
              onChange={e => setValueURL(e.target.value)}
              className="mt-3"
              placeholder="URL коллекции"
          />


          <Form.Control
              onChange={selectFile}
              className="mt-3"
              type="file"
          />

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addCategory}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateCategory;