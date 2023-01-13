import React from "react";
import CatalogItem from "./CatalogItem";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCategories } from "../store/selectors";

function CatalogList ({show, onHide}) {

  const categories = useSelector(selectCategories);

  return (
    <Row className="d-flex">
        {categories.map(category => 
          <CatalogItem key={category.id} categories={category}/>
        )}
    </Row>
  );
}
  
  export default CatalogList;