import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent({link,image}) {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:"#07456C", overflow:"hidden", position:"fixed", width:"100vw", zIndex:"100"}}>
            <Container>
                <Navbar.Brand href="/" style={{display:"flex", alignItems:"center"}}>
                    <Image
                        src={image}
                        width={130}
                        height={70}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {link.map((item,index) => {
                                return (
                                    <Nav.Link
                                        eventKey={item.number}
                                        href={item.href}
                                        key={index}
                                    >
                                        {item.name}
                                    </Nav.Link>
                                )
                            })}

                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};