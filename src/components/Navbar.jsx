import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoNucba from '../assets/logo-nucba.png';

function NavbarHome() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        <Navbar.Brand href="#home">
            <img src={LogoNucba} alt="Logo Nucba" className='img-logo-nucba'/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <div>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
    ¿
                <Nav.Link href="#link">Login</Nav.Link>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='nav-dropdown'>
                <NavDropdown.Item href="#sectionOne">Home</NavDropdown.Item>
                <NavDropdown.Item href="#sectionTwo">
                    Product
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Contact
                </NavDropdown.Item>
                </NavDropdown>

            </Nav>
            </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;