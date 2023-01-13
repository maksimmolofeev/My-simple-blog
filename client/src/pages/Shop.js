import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CatalogList from "../components/CatalogList";
import AdviseList from "../components/AdviseList";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "../http/productApi";
import { setCategories, setProducts } from "../store/productSlicer";
import { selectProduct } from "../store/selectors";

function Shop() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchCategories().then(data => dispatch(setCategories(data)))
    fetchProducts().then(data => dispatch(setProducts(data.rows))
  )}, [])

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