import './App.css';
import { Badge, Button, Card, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { data } from './data';
import { useState } from 'react';
import RatingStars from 'react-rating-stars-component';

function App() {

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
              <i> </i> Cart<span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
            </Button>
          </div></Container>
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
            {data.map((item, idx) => (
              <Shopcard
                key={idx}
                idx={idx}
                name={item.name}
                usd={item.usd}
                usd1={item.usd1}
                batch={item.batch}
                rating={item.rating}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </Row>
        </Container>
      </div>
      <br /><br />
      <div className="bg-dark py-5">
        <Container>
          <h3 className='text-center lead fw-normal text-white mb=0'>Copyrights © 2023</h3>
        </Container>
      </div>
    </div>
  );
}

function Shopcard(props) {
  return (
    <div className="cardbox">
      <Card className="col mb-4">
        <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
        <Card.ImgOverlay>
          <h6 className="position-absolute top-0 end-0">
            <Badge bg="dark">{props.batch}</Badge>
          </h6>
        </Card.ImgOverlay>
        <Card.Body className="bodybox">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <p className='rating'>
          <RatingStars
              count={5}
              size={24}
              value={props.rating}
              edit={false}
              activeColor="#ffd700"
            /></p>
            <div>
              <span className="strike">{props.usd1}</span> {props.usd}
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className='bg-transparent border-top-0 p-4 pt-0 rating'>
          {/* <Button variant="outline-dark" onClick={props.handleAddToCart}>Add to cart</Button> */}
          <a className='btn btn-outline-dark mt-auto' href='#' onClick={props.handleAddToCart}>Add to cart</a>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;
