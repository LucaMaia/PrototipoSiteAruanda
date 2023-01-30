import Card from 'react-bootstrap/Card';
import styles from "./CardBootstrap.module.css"
import {Button} from "react-bootstrap";

export default  function CardBootstrap({link}) {
    return (
        <>
            {link.map((item,index) => {
                return (
                    // <div className={styles.background}  key={index}>
                        <Card style={{ width: '50rem'}} className={styles.card} key={index}>
                            <Card.Img variant="top" src={item.src} className={styles.image}/>
                            <Card.Body>
                                <h2>{item.title}</h2>
                                <p>Data: {item.date}</p>
                                <p>{item.hour}</p>
                                <p>{item.description}</p>

                                <div className={styles.alinhamento_button}>
                                    <Button className={styles.button}>
                                        Mais informações
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    // </div>
                )
            })}

        </>
    );
}

