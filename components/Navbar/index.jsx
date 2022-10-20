import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home" style={{display:"flex", alignItems:"center"}}>
                    <Image
                        src="/labslogo.svg"
                        width={130}
                        height={70}
                    />
                    {/*<h5>Aruanda Capoeira</h5>*/}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#memes">
                            Home
                        </Nav.Link>

                        <Nav.Link eventKey={2} href="#memes">
                            Instagram
                        </Nav.Link>

                        <Nav.Link eventKey={3} href="#memes">
                            Conheça nossa jornada
                        </Nav.Link>

                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}

                        <Nav.Link eventKey={4} href="#memes">
                            Eventos Aruanda Capoeira
                        </Nav.Link>

                        <Nav.Link eventKey={5} href="#memes">
                            Eventos futuros
                        </Nav.Link>

                        <Nav.Link eventKey={6} href="#memes">
                            Entre em contato
                        </Nav.Link>
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};