import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectActiveCategory, selectProduct } from "../store/selectors";
import CategoryItem from "./ProductItem";

function CategoryList() {

    const products = useSelector(selectProduct);
    const activeCategory = useSelector(selectActiveCategory);
    const product = useSelector(selectProduct);

    return (
      <Row>
        {products.map(product => product.categoryId === activeCategory ? <CategoryItem key={product.id} product={product}/> : true)}
      </Row>
    );
  }
  
  export default CategoryList;