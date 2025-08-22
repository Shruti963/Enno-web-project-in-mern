
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link as ScrollLink } from 'react-scroll'; // ✅ Import react-scroll
import './Header.css';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-white sticky-top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand href="#"><h1>eNno</h1></Navbar.Brand>
                    </Nav>

                    <Nav className="navlist custom-nav">
                        <Nav.Link as={ScrollLink} to="home"  smooth={true} duration={200} offset={-70}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={ScrollLink} to="about" smooth={true} duration={200} offset={-70}>
                            About
                        </Nav.Link>
                        <Nav.Link as={ScrollLink} to="services" smooth={true} duration={200} offset={-70}>
                            Services
                        </Nav.Link>
                        <Nav.Link as={ScrollLink} to="portfolio" smooth={true} duration={200} offset={-70}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link as={ScrollLink} to="team" smooth={true} duration={200} offset={-70}>
                            Team
                        </Nav.Link>

                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#">Dropdown 1</NavDropdown.Item>
                            <NavDropdown.Item href="#">Dropdown 2</NavDropdown.Item>
                            <NavDropdown.Item href="#">Dropdown 3</NavDropdown.Item>
                            <NavDropdown.Item href="#">Dropdown 4</NavDropdown.Item>
                            <NavDropdown.Item href="#">Dropdown 5</NavDropdown.Item>
                            <NavDropdown.Item href="#">Dropdown 6</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={200} offset={-70}>
                            Contact
                        </Nav.Link>

                        <Button
                            variant="success"
                            as={ScrollLink}
                            to="home"
                            smooth={true}
                            duration={200}
                            offset={-70}
                            className="custom-button"
                        >
                            Get Started
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
