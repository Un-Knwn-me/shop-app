import './App.css';
import { Badge, Button, Card, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { data } from './data';
import { useState } from 'react';
import RatingStars from 'react-rating-stars-component';
import { BsFillCartFill } from "react-icons/bs";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartData] = useState(data);

  const handleAddToCart = (id) => {
    setCartCount((prevCount) => prevCount + 1);
    setCartItems((prevItems) => [...prevItems, id]);
  };

  const handleRemoveFromCart = (id) => {
    setCartCount((prevCount) => prevCount - 1);
    setCartItems((prevItems) => prevItems.filter((itemId) => itemId !== id));
  };

  const isItemInCart = (id) => {
    return cartItems.includes(id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="cart">
              <Button variant="outline-dark">
                <BsFillCartFill />
                <b className="ms-1"> Cart - </b>
                <b className="ms-1 rounded-pill">{cartCount}</b>
              </Button>
            </div>
          </Container>
        </Navbar>

        <div className="bg-dark py-5">
          <Container>
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
            </div>
          </Container>
        </div>
        <br />
      </header>
      <div className="shop">
        <Container>
          <Row xs={1} md={4} className="g-4">
            {cartData.map((item, idx) => (
              <Col key={idx}>
                <Card>
                <Badge className='position-absolute top-0 end-0' bg="dark">{item.batch}</Badge>
                  <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                  <Card.Body>
                    <Card.Title className="center">{item.name}</Card.Title>
                    <Card.Text>
                      <p className="center">
                        <RatingStars count={5} size={24} value={item.rating} edit={false} activeColor="#ffd700" />
                      </p>
                      <div className="center">
                        <span className="strike">{item.usd1}</span>{item.usd}
                      </div>
                    </Card.Text>
                    <div className="center">
                      {isItemInCart(idx) ? (
                        <Button variant="outline-dark" key={idx} onClick={() => handleRemoveFromCart(idx)}>
                          Remove from Cart
                        </Button>
                      ) : (
                        <Button variant="outline-dark" key={idx} onClick={() => handleAddToCart(idx)}>
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <br /><br />
      <div className="bg-dark py-5">
        <Container>
          <h3 className="text-center lead fw-normal text-white mb-0">Copyrights © 2023</h3>
        </Container>
      </div>
    </div>
  );
}

export default App;
