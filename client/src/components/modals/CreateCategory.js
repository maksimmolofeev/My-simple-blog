import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Dropdown, CloseButton, Alert } from "react-bootstrap";
import { selectCategories } from "../../store/selectors";
import { useSelector } from "react-redux";
import { createCategory } from "../../http/productApi";

function CreateCategory({show, onHide}) {
    const [valueName, setValueName] = useState('');
    const [valueURL, setValueURL] = useState('');

    // const addCategory = () => {
    //     createCategory({name: valueName, URL: valueURL}).then(data => )
    // }

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
                value={valueName}
                onChange={e => setValueName(e.target.value)}
                className="mt-3"
                placeholder="Название коллекции"
            />

            <Form.Control
                value={valueURL}
                onChange={e => setValueURL(e.target.value)}
                className="mt-3"
                placeholder="URL коллекции"
                type="number"
            />


            <Form.Control
                className="mt-3"
                type="file"
            />

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default CreateCategory;