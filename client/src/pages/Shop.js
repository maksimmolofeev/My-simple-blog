import React from "react";
import { Container } from "react-bootstrap";
import CatalogList from "../components/CatalogList";
import AdviseList from "../components/AdviseList";

function Shop() {
    return (
      <Container>

        <h2>Рекомендуем</h2>
        <AdviseList />

        <h2>Коллекции</h2>
        <CatalogList />

      </Container>
    );
  }
  
  export default Shop;