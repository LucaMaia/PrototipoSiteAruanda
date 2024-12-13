import styles from "./Mestres.module.css";
import {Button} from "react-bootstrap";
import CarouselMestres from "../../components/CarousselMestres";

import { Zoom } from "react-reveal";

let carousselMestres = [
    {
        "title":"Mestre Paulo Renato",
        "description":"São Paulo - SP",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/PRenato.jpeg","href": "https://www.instagram.com/mestrepaulorenato/"
    },
    {
        "title":"Mestre Igor",
        "description":"Brasília - DF",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/MIgor.jpeg","href": "https://www.instagram.com/mestrepaulorenato/"
    },
    {
        "title":"Mestra Michellinha",
        "description":"Brasília - DF",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/Micheline.jpeg",
        "href": "https://www.instagram.com/mestrepaulorenato/"
    },
]

export default function Mestres() {
    return (
        <div className={styles.text}>
            <Zoom duration={2000}>
                <h2 className={styles.text_mestres} id="mestres">
                    Mestres da casa
                </h2>
                <CarouselMestres link={carousselMestres}/>

                <div className={styles.alinhamento_button}>
                    <Button variant="danger" href="" className={styles.button}>
                        Começar agora
                    </Button>
                </div>
            </Zoom>
        </div>
    );
}
