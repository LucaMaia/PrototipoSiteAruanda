import styles from "./Topo.module.css";
import NavbarComponent from "../../components/Navbar";
import CarouselComponent from "../../components/Caroussel";

let carroussel = [
    {
        "title":"Encontro de Bambas 2017",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/EDB2017(2).jpg"
    },
    {
        "title":"Encontro de Bambas 2019",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/EDB2019.jpg"
    },
    {
        "title":"Encontro nacional - Batizado 2021",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/EN2021.jpeg"
    },
    {
        "title":"Encontro Internacional - 2022",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/EI2022.jpeg"
    },
    {
        "title":"Encontro de Bambas 2022",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/EB2022.jpeg"
    },
    {
        "title":"I Festival Ginga (RO) - 2022",
        // "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/ginga.jpeg"
    },
]

let navbar = [
    {
        "name":"Eventos",
        "href":"/eventos",
        "number":"1"
    },
    {
        "name":"História Aruanda ",
        "href":"/historia-aruanda",
        "number":"2"
    },
    {
        "name":"Horários",
        "href":"#horarios",
        "number":"3"
    },
    {
        "name":"Mestres da casa",
        "href":"#mestres",
        "number":"4"
    },
    {
        "name":"Transparência: recursos de emendas de 2024 recebidos pelo MIR",
        "href":"/emendas",
        "number":"4"
    },

]

export default function Topo(){
    return(
        <>
            <NavbarComponent link={navbar} image="/logo.svg"/>

            <div className={styles.caroussel}>
                <div style={{paddingTop:"110px"}}>
                    <CarouselComponent link={carroussel}/>
                </div>
            </div>
        </>
    )
}