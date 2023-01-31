import styles from "./Mestres.module.css";
import {Button} from "react-bootstrap";
import CarouselMestres from "../../components/CarousselMestres";

let carousselMestres = [
    {
        "title":"Mestre Paulo Renato",
        "description":"São Paulo - SP",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/paulo.png","href": "https://www.instagram.com/mestrepaulorenato/"
    },
    {
        "title":"Mestre Igor",
        "description":"Brasília - DF",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/igor.png","href": "https://www.instagram.com/mestrepaulorenato/"
    },
    {
        "title":"Mestra Michellinha",
        "description":"Brasília - DF",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/Michellinha.png",
        "href": "https://www.instagram.com/mestrepaulorenato/"
    },
]

export default function Mestres() {
    return (
        <div className={styles.text}>
            <h2 className={styles.text_mestres} id="mestres">
                Mestres da casa
            </h2>
            <CarouselMestres link={carousselMestres}/>

            <div className={styles.alinhamento_button}>
                <Button variant="danger" href="" className={styles.button}>
                    Começar agora
                </Button>
            </div>
        </div>
    );
}
