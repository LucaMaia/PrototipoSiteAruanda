import Head from "next/head";
import styles from "./Noticias.module.css"

// Components
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardLateral from "../../components/CardLateral";
import CardMuiComponent from "../../components/CardMUI";


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
]

let cardLateral = [
    {
        "title":"Encontro de Bambas 2018",
        "date":"13 de janeiro a 15 de janeiro",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "href":"/",
        "color":"#D3D3D3",
        "image":"EDB2017.jpeg"
    },

    {
        "title":"Encontro de Bambas 2020",
        "date":"13 de janeiro a 15 de janeiro",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "href":"/",
        "color":"",
        "image":"Michellinha.png"
    },
]

let cardsMui = [
    {
        "height": "300",
        "width":"800",
        "color":"",
        "image": "/EDB2017(2).jpg",
        "alt": "LycaTest",
        "title":"Sidoka",
        "button":"Mais informações",
        "text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.0Lorem Ipsum is simply dummy text of the printing and typesetting industry.0Lorem Ipsum is simply dummy text of the printing and typesetting industry.0"
    },
]

export default function Noticias(){
    return(
        <>
            <Head>
                <title>Aruanda Capoeira - DF</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavbarComponent
                link={navbar}
                image="/labslogo.svg"
            />
            <div style={{paddingTop:"120px"}}>
                <h1 className={styles.text}>
                    Eventos Aruanda capoeira
                </h1>

                <div style={{display:"flex", justifyContent:"center"}}>
                    <CardLateral link={cardLateral} />
                </div>

                <div style={{display:"flex", justifyContent:"center"}}>
                    <CardMuiComponent link={cardsMui}/>
                </div>
            </div>

            <Footer/>
        </>
    )
}