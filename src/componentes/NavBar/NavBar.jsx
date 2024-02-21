
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';








function NavBar() {

  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Academia profesional</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto navBar">
            <Nav.Link href="/category/Cursos">Cursos</Nav.Link>
            <Nav.Link href="/category/Productos">Productos</Nav.Link>
            <Nav.Link href="/category/Nosotros">Nosotros</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );

  
}




export default NavBar;





