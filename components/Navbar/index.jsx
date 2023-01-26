import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./Navbar.module.css"

export default function NavbarComponent({link,image}) {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="/" className={styles.alinhamento}>
                    <Image
                        src={image}
                        width={100}
                        height={60}
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