import { useEffect, useState } from "react";
import { Col, Row, Container, Image, Button, Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdviseList from "../components/AdviseList";
import { fetchOnProduct, fetchProducts } from "../http/productApi";
import { setProducts } from "../store/productSlicer";
import { selectProduct } from "../store/selectors";

function ProductPage() {
  const [product, setProduct] = useState({composition: []});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOnProduct(id).then(data => setProduct(data))
    fetchProducts().then(data => dispatch(setProducts(data.rows)))
  }, []);
  console.log(product)
    return (
      <Container className="mt-5">
        <Row className="mb-5">
          <Col md={10}>
            <Image width={'100%'} src={process.env.REACT_APP_API_URL + product.img}/>
          </Col>

          <Col md={10}>
            <p>{product.price} ₽</p>
            <h2>{product.name}</h2>

            <Button>В КОРЗИНУ</Button>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Описание</Accordion.Header>
                <Accordion.Body>
                  {product.description}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Характеристики</Accordion.Header>
                <Accordion.Body>
                  {product.composition.map(item => <p>{item.name} - {item.description} шт.</p>)}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Уход за букетом</Accordion.Header>
                <Accordion.Body>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias fugiat voluptatibus aperiam dolore, accusantium repellat doloribus assumenda blanditiis sit consequuntur eligendi? Totam earum quibusdam atque possimus expedita voluptates eveniet tempore.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </Col>
        </Row>

        <h2>Рекомендуем</h2>
        <AdviseList />

      </Container>
    );
  }
  
  export default ProductPage;