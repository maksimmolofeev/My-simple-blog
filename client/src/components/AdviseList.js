import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectProduct } from "../store/selectors";
import AdviseItem from "./AdviseItem";

function AdviseList() {

    const products = useSelector(selectProduct);

    return (
      <Row>
        {products.map(product => product.advise ? <AdviseItem key={product.id} product={product}/> : true)}
      </Row>
    );
  }
  
  export default AdviseList;