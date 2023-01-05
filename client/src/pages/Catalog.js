import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CatalogList from "../components/CatalogList";

function Catalog() {

  return (
    <Container>
      <h2>Каталог</h2>
      <CatalogList />
    </Container>
  );
}
  
  export default Catalog;