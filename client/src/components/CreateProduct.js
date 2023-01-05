import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Dropdown, CloseButton, Alert } from "react-bootstrap";
import { selectCollection } from "../store/selectors";
import { useSelector } from "react-redux";

function CreateProduct({show, onHide}) {

    const collection = useSelector(selectCollection);

    const [composition, setComposition] = useState([]);
    const [categories, setCategories] = useState([]);

    function addComposition () {
        setComposition([...composition, {title: '', amount: '', number: Date.now()}])
    }

    function removeComposition (number) {
        setComposition(composition.filter(item => item.number !== number))
    }

    function addCategories (title, id) {
        setCategories([...categories, {title: title, id: id}])
    }

    function removeCategories (id) {
        console.log('asd')
        setCategories(categories.filter(item => item.id !== id))
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
            Добавить букет
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
                className="mt-3"
                placeholder="Название букета"
            />

            <Form.Control
                className="mt-3"
                placeholder="Цена букета"
                type="number"
            />

            <Form.Control
                className="mt-3"
                as='textarea'
                placeholder="Описание"
            />

            <Form.Control
                className="mt-3"
                type="file"
            />

            <Button
                className="mt-3"
                variant="outline-success"
                onClick={addComposition}
            >
                Добавить состав
            </Button>
            {
                composition.map(item => 
                    <Row className="mt-3" key={item.number}>
                        <Col md={8}>
                            <Form.Control
                                placeholder="Название состава"
                            />
                        </Col>

                        <Col md={8}>
                            <Form.Control
                                placeholder="Количество"
                            />
                        </Col>

                        <Col md={4}>
                            <Button
                                variant="outline-danger"
                                onClick={() => removeComposition(item.number)}
                            >
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                )
            }

            <br />

            <Dropdown className="mt-3">
                <Dropdown.Toggle>
                    Выберети категорию
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {collection.map(item => 
                        <Dropdown.Item key={item.id} onClick={() => addCategories(item.title, item.id)}>{item.title}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            {categories.map(item => 
                <Row key={item.id} className="d-flex align-items-center mt-3">
                    <Col md={15} className='mb-2'>
                        <Alert variant='light' style={{padding: 0, margin: 0}}>
                            {item.title}
                        </Alert>
                    </Col>

                    <Col md={5} className='mb-2'>
                        <CloseButton onClick={() => removeCategories(item.id)}/>
                    </Col>
                    <hr/>
                </Row>
            )}

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default CreateProduct;