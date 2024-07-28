import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-container">
      <Navbar.Brand href="/">Formulario</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contato</Nav.Link>
          <Nav.Link href="/signup">Cadastro</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
