import Carousel from 'react-bootstrap/Carousel';
import styles from"./Caroussel.module.css"

export default function CarouselComponent({link}) {
    return (
        <Carousel  >
            {link.map((item,index) => {
                return (
                    <Carousel.Item key={index} >
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt="First slide"
                            id={styles.luca}
                        />
                        <Carousel.Caption>
                            {/*<div style={{paddingBottom:"500px"}}>*/}
                            {/*    <h3>{item.title}</h3>*/}
                            {/*    <p>{item.text}</p>*/}
                            {/*</div>*/}

                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

