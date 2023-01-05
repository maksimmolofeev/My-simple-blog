import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts";


function AdviseItem({product}) {

  const navigate = useNavigate();
  
  return (
    <Col md='4' onClick={() => navigate(`${PRODUCT_ROUTE}/${product.id}`)}>
      <Card className="d-flex">
          <Image src={product.img}/>
          <p style={{margin: 'auto'}}>{product.price} ₽</p>
          <h3 style={{fontSize: 14, margin: 'auto', textAlign: 'center'}}>{product.name}</h3>
      </Card>
    </Col>
  );
}
  
  export default AdviseItem;