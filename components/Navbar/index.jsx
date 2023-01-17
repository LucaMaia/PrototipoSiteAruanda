import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link eventKey={1} href="#eventos">
                            Eventos Aruanda Capoeira
                        </Nav.Link>

                        <Nav.Link eventKey={2} href="#eventos">
                            Notícias
                        </Nav.Link>

                        <Nav.Link eventKey={3} href="https://www.instagram.com/aruanda.capoeira/">
                            Instagram
                        </Nav.Link>

                        <Nav.Link eventKey={4} href="#jornada">
                            Conheça nossa jornada
                        </Nav.Link>

                        <Nav.Link eventKey={5} href="#mestres">
                            Mestres da casa
                        </Nav.Link>

                        {/*<Nav.Link eventKey={6} href="">*/}
                        {/*    Locais de Treino*/}
                        {/*</Nav.Link>*/}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};