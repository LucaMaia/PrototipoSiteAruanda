import styles from "./Topo.module.css";
import NavbarComponent from "../../components/Navbar";
import CarouselComponent from "../../components/Caroussel";

let carroussel = [
    {
        "title":"Site do Grupo Aruanda Capoeira",
        "text":"Conheça mais sobre a nossa história e faça parte da nossa familia!",
        "src":"/EDB2017(2).jpg"
    },
    {
        "title":"Encontro de Bambas 2017",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/EDB2017(2).jpg"
    },
    {
        "title":"Encontro de Bambas 2019",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/EDB2019.jpg"
    },
    {
        "title":"Encontro de Bambas 2020",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/EDB.webp"
    },
    {
        "title":"Encontro de Bambas 2020",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/EDB2017.jpeg"
    },
]

let navbar = [
    {
        "name":"Eventos",
        "href":"/eventos",
        "number":"1"
    },
    {
        "name":"Locais",
        "href":"/locais-treino",
        "number":"2"
    },
    {
        "name":"História Aruanda ",
        "href":"/historia-aruanda",
        "number":"3"
    },
    {
        "name":"Por que praticar Capoeira?",
        "href":"#capoeira",
        "number":"4"
    },
    {
        "name":"Horários",
        "href":"#horarios",
        "number":"5"
    },
    {
        "name":"Mestres da casa",
        "href":"#mestres",
        "number":"6"
    },

]

export default function Topo(){
    return(
        <>
            <NavbarComponent link={navbar} image="/logo.svg"/>

            {/*<div id="navBar" className={styles.alinhamento_image}>*/}
            {/*    <Image*/}
            {/*        src="/EDB2019.jpg"*/}
            {/*        width="800"*/}
            {/*        height="500"*/}
            {/*        alt="fundo"*/}
            {/*        priority*/}
            {/*        className={styles.image}*/}
            {/*    />*/}
            {/*</div>*/}

            <div className={styles.caroussel}>
                <div style={{paddingTop:"110px"}}>
                    <CarouselComponent link={carroussel}/>
                </div>
            </div>
        </>
    )
}