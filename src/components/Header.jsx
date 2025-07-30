import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function CartIcon() {
    return (
      <FontAwesomeIcon icon={faShoppingCart} size='sm'/>
    );
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{position: 'fixed', width: '100%', zIndex:'9999'}}>
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}><img src="/M_logo.png" alt="" width={'50px'}/>Moosinsa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/shirts')}>상의</Nav.Link>
            <Nav.Link onClick={() => navigate('/pants')}>하의</Nav.Link>
            <Nav.Link onClick={() => navigate('/outers')}>아우터</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>장바구니<CartIcon/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header