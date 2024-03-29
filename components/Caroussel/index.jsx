import Carousel from 'react-bootstrap/Carousel';
import styles from"./Caroussel.module.css"
import Image from "next/image";


export default function CarouselComponent({link}) {
    return (
        <Carousel  >
            {link.map((item,index) => {
                return (
                    <Carousel.Item key={index} style={{padding:"5px"}}>
                            <Image
                                src={item.src}
                                height="500"
                                width="900"
                                className={styles.image}
                            />

                            {/*<Carousel.Caption>*/}
                            {/*        <h3 className={styles.text}>{item.title}</h3>*/}
                            {/*        /!*<p>{item.text}</p>*!/*/}
                            {/*</Carousel.Caption>*/}

                            <div className={styles.text}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>

                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

