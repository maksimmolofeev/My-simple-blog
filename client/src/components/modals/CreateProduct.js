import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col, Dropdown, CloseButton, Alert, ToggleButton } from "react-bootstrap";
import { selectCategories } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, fetchCategories } from "../../http/productApi";
import { setCategories } from "../../store/productSlicer";

function CreateProduct({show, onHide}) {

    const collection = useSelector(selectCategories);

    const [composition, setComposition] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [advise, setAdvise] = useState(false);
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState(null);
    const [file, setFile] = useState(null);
    const [nameCategory, setNameCategory] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategories().then(data => dispatch(setCategories(data)))
    }, [])


    function addComposition () {
        setComposition([...composition, {name: '', description: '', number: Date.now()}])
    }

    function removeComposition (number) {
        setComposition(composition.filter(item => item.number !== number))
    }

    function changeComposition (key, value, number) {
        setComposition(composition.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    function selectFile (e) {
        setFile(e.target.files[0])
    }

    function choiceCategory (id, name) {
        setCategoryId(id);
        setNameCategory(name)
    }

    function addProduct () {
        const formData = new FormData();
        formData.append('name', name)
        formData.append('price', price)
        formData.append('advise', advise)
        formData.append('description', description)
        formData.append('categoryId', categoryId)
        formData.append('img', file)
        formData.append('composition', JSON.stringify(composition))
        createProduct(formData).then(data => onHide())
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
                value={name}
                onChange={e => setName(e.target.value)}
                className="mt-3"
                placeholder="Название букета"
            />

            <Form.Control
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                className="mt-3"
                placeholder="Цена букета"
                type="number"
            />

            <Form.Control
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="mt-3"
                as='textarea'
                placeholder="Описание"
            />

            <Form.Control
                onChange={selectFile}
                className="mt-3"
                type="file"
            />

            <ToggleButton
                className="mt-3"
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={advise}
                value="1"
                onChange={(e) => setAdvise(e.currentTarget.checked)}
            >
                {advise === true ? 'Убрать из рекомендуемое' : 'Добавить в рекомендуемое'}
            </ToggleButton>

            <br />

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
                                value={item.name}
                                onChange={(e) => changeComposition('name', e.target.value, item.number)}
                                placeholder="Название состава"
                            />
                        </Col>

                        <Col md={8}>
                            <Form.Control
                                value={item.description}
                                onChange={(e) => changeComposition('description', e.target.value, item.number)}
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
                    {/* {nameCategory !== '' ? nameCategory : 'Выбрать категорию'} */}
                    {nameCategory || 'Выбрать категорию'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {collection.map(item => 
                        <Dropdown.Item key={item.id} onClick={() => choiceCategory(item.id, item.name)}>{item.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default CreateProduct;