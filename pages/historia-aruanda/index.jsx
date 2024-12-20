import styles from "./Historia.module.css"
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";

import {LightSpeed} from "react-reveal";

let navbar = [
    {
        "name":"Página Principal",
        "href":"/",
        "number":"1"
    },
    {
        "name":"Eventos",
        "href":"/eventos",
        "number":"2"
    },
    {
        "name":"Transparência das emendas",
        "href":"/emendas",
        "number":"3"
    },

]

export default function HistoriaAruanda() {
    return (
        <>
            <Head>
                <title>Aruanda Capoeira - DF</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <NavbarComponent link={navbar} image="/logo.svg"/>

            <div className={styles.image_background}>
                <LightSpeed left>
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
                </LightSpeed>


                <Footer/>
            </div>
        </>
    );
}

