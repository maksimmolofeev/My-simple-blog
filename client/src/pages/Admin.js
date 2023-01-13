import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import CreateCategory from "../components/modals/CreateCategory";

function Admin() {

  const [productVisible, setProductVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        style={{margin: 'auto', width: '80%'}}
        className="mt-5 p-2"
        onClick={() => setProductVisible(true)}
      >
        Создать Букет
      </Button>

      <Button
        variant={"outline-dark"}
        style={{margin: 'auto', width: '80%'}}
        className="mt-5 p-2"
        onClick={() => setCategoryVisible(true)}
      >
        Создать Коллекцию
      </Button>

      <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
      <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
    </Container>
  );
}

export default Admin;