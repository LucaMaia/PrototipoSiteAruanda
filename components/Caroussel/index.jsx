import Carousel from 'react-bootstrap/Carousel';
import styles from"./Caroussel.module.css"

export default function CarouselComponent() {
    return (
        <Carousel fade >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg"
                    alt="First slide"
                    id={styles.luca}
                    // style={{height:"70vh"}}
                />
                <Carousel.Caption>
                    <h3>Encontro de Bambas 2020</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://burst.shopifycdn.com/photos/perfect-yellow-flower.jpg?width=1200&format=pjpg&exif=1&iptc=1"
                    alt="Second slide"
                    id={styles.luca}
                    // style={{height:"70vh"}}
                />

                <Carousel.Caption>
                    <h3>Encontro de Bambas 2021</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg"
                    alt="Third slide"
                    id={styles.luca}
                    // style={{height:"70vh"}}
                />

                <Carousel.Caption>
                    <h3>Encontro de Bambas 2022</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

