import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Moosinsa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/shirts')}>상의</Nav.Link>
            <Nav.Link onClick={() => navigate('/pants')}>하의</Nav.Link>
            <Nav.Link onClick={() => navigate('/outers')}>아우터</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header