import styles from "./Historia.module.css"
import Topo from "../../subpages/Topo";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";


let navbar = [
    {
        "name":"Página Principal",
        "href":"/",
        "number":"1"
    },
    {
        "name":"Locais de Treino",
        "href":"/locais-treino",
        "number":"2"
    },
    {
        "name":"Eventos",
        "href":"/eventos",
        "number":"3"
    },

]

export default function HistoriaAruanda() {
    return (
        <>
            <NavbarComponent link={navbar} image="/labslogo.svg"/>

            <div className={styles.image_background}>
                    <div className={styles.text_historia}>
                        <h2 className={styles.title_historia}>
                            Conheça a nossa história
                        </h2>

                        <div className={styles.historia}>
                            <p>
                                Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.
                                Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido
                                pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos.
                            </p>
                            <p>
                                Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.
                                Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido
                                pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos.
                            </p>
                            <p>
                                Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.
                                Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido
                                pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos.
                            </p>
                        </div>
                    </div>
                <Footer/>
            </div>
        </>
    );
}

