import React from "react";
import CatalogItem from "./CatalogItem";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCollection } from "../store/selectors";

function CatalogList ({show, onHide}) {

  const collection = useSelector(selectCollection);


  return (
    <Row className="d-flex">
        {collection.map(collection => 
          <CatalogItem key={collection.id} collection={collection}/>
        )}
    </Row>
  );
}
  
  export default CatalogList;