import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateProduct from "../components/CreateProduct";

function Admin() {

  const [productVisible, setProductVisible] = useState(false);

  return (
    <Container className="d-flex">
      <Button
        variant={"outline-dark"}
        style={{margin: 'auto', width: '80%'}}
        className="mt-5"
        onClick={() => setProductVisible(true)}
      >
        Создать Букет
      </Button>
      <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
    </Container>
  );
}

export default Admin;