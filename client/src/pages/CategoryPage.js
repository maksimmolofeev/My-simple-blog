import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryBar from "../components/CategoryBar";
import ProductList from "../components/ProductList";
import Pages from "../components/Pages"
import { fetchCategories, fetchCategoryProducts } from "../http/productApi";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setProducts, setTotalCount } from "../store/productSlicer";
import { selectActiveCategory, selectLimit, selectPage, selectProduct, selectTotalCount } from "../store/selectors";

function CategoryPage() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const activeCategory = useSelector(selectActiveCategory);
  const limit = useSelector(selectLimit)

  useEffect(() => {
    fetchCategories().then(data => dispatch(setCategories(data)))
    fetchCategoryProducts().then(data =>
      dispatch(
        setProducts(data.rows),
        setTotalCount(data.count)
        )
    )
  }, [])

  useEffect(() => {
    fetchCategoryProducts(activeCategory, page).then(data => {
      dispatch(setProducts(data.rows))
      dispatch(setTotalCount(data.count))
    })
  }, [page, activeCategory]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md='4'>
          <CategoryBar />
        </Col>
        <Col md='16'>
          <ProductList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryPage;