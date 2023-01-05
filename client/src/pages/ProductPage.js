import { Col, Row, Container, Image, Button, Accordion } from "react-bootstrap";
import AdviseList from "../components/AdviseList";

function ProductPage() {
  const product = {
    id: 1,
    name: 'Букет "Зимнее солнце"',
    price: 1990, 
    advise: true,
    img: 'https://content2.flowwow-images.com/data/flowers/262x262/23/1672148934_38855923.jpg',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga tempora nostrum vitae accusamus, odio quod incidunt. Adipisci aperiam vel dicta harum, dolor, non voluptatibus veniam sunt cupiditate numquam est! Est.'
  }

    return (
      <Container className="mt-5">
        <Row className="mb-5">
          <Col md={10}>
            <Image src={product.img}/>
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
                  <p>Размер - 25 шт.</p>
                  <p>Состав - роза</p>
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