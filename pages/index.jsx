import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components
import NavbarComponent from "../components/Navbar";
import CarouselComponent from "../components/Caroussel";
import Footer from "../components/Footer";
import MiniCard from "../components/MiniCard";

// Subpages
import Historia from "../subpages/Historia";
import CarouselMestres from "../components/CarousselMestres";
import CardBeneficios from "../components/CardBeneficios";

let cardsProcessoSeletivo = [
    {
        "title":"Atende a todos os públicos e faixas etárias",
        "number":"1",
        "text":" Nos dias atuais, existem inúmeros profissionais especialistas em áreas específicas para o treinamento de capoeira: capoeira para crianças, capoeira para atletas, capoeira para a terceira idade, dentre outros.",
        "image":"/retangulo3.svg"
    },
    {
        "title":"Ajuda a liberar o estresse",
        "number":"2",
        "text":" A capoeira serve de válvula de escape; é uma forma de liberar o estresse de uma forma lúdica e saudável." ,
        "image":"/retangulo3.svg"
    },
]

let carroussel = [
    {
        "title":"Seja vem vindo ao Site do Grupo Aruanda Capoeira",
        "text":"Conheça mais sobre a nossa casa e faça parte da nossa familia!",
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
]

let navbar = [
    {
        "name":"Notícias",
        "href":"/noticias",
        "number":"1"
    },
    {
        "name":"Locais de Treino",
        "href":"/locais-treino",
        "number":"2"
    },
    {
        "name":"Conheça a nossa história",
        "href":"#jornada",
        "number":"3"
    },
    {
        "name":"Mestres da casa",
        "href":"#mestres",
        "number":"4"
    },
]

let carousselMestres = [
    {
        "title":"Mestre Paulo Renato",
        "description":"São Paulo - SP",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/paulo.png","href": "https://www.instagram.com/mestrepaulorenato/"
    },
    {
        "title":"Mestre Igor",
        "description":"Brasília - DF",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/igor.png","href": "https://www.instagram.com/mestrepaulorenato/"
    },
    {
        "title":"Mestra Michellinha",
        "description":"Brasília - DF",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/Michellinha.png",
        "href": "https://www.instagram.com/mestrepaulorenato/"
    },
]

let miniCards = [
    {
        "label": "SEG/QUAR/SEX",
        "text": "Mestra Michellinha",
        "hour":"18:30 ás 19:30",
        "backgroundColor":"#07456C",
        "href":"https://wa.me/5561983439530",
    },
    {
        "label": "TER/QUIN",
        "text": "Mestre Igor" ,
        "hour":"19:30 ás 20:30",
        "backgroundColor":"#07456C",
        "href":"https://wa.me/5561983439530",
    },
    {
        "label": "TER/QUIN",
        "text": "Mestre Carlos",
        "hour":"18:30 ás 19:30",
        "backgroundColor":"#07456C",
        "href":"https://wa.me/5561983439530",

    },
]

let cardBeneficios = [
    {
        "title":"Atende a todos os públicos e faixas etárias",
        "text":"Existem inúmeros profissionais especialistas em áreas específicas para o treinamento de capoeira: capoeira para crianças, capoeira para atletas, capoeira para a terceira idade, dentre outros.",
        "number":"1",

        "numeric":"2",
        "subtitle":"Ajuda a liberar o estresse",
        "textarea":"A capoeira serve de válvula de escape; é uma forma de liberar o estresse de uma forma lúdica e saudável."
    },

    {
        "title":"Trabalha todo o corpo",
        "text":"Em termos físicos, a capoeira é uma das atividades mais completas, por trabalhar todos os segmentos corporais e diversas posições em sua prática.",
        "number":"3",

        "numeric":"4",
        "subtitle":"Estimula o condicionamento cardiovascular e musculoesquelético",
        "textarea":"A capoeira é classificada como uma atividade física anaeróbica e predominantemente funcional, por estimular o condicionamento cardiovascular e musculoesquelético utilizando o peso do próprio corpo."
    },
    {
        "title":"Promove maior flexibilidade",
        "text":"Os movimentos de capoeira exigem e desenvolvem a flexibilidade no corpo, quase que como os movimentos de ioga.",
        "number":"5",

        "numeric":"6",
        "subtitle":"Promove maior coordenação",
        "textarea":"Os movimentos da capoeira, de forma geral, são guiados pela dança e pela música, o que faz com o que o corpo fique mais coordenado."
    },
    {
        "title":"Estimula a autoconfiança",
        "text":"Como a ideia é fazer os movimentos com fluidez em um período curto de tempo, a capoeira estimula a velocidade – o que fará que o corpo fique mais ágil para responder de volta aos movimentos de outras pessoas.",
        "number":"7",

        "numeric":"8",
        "subtitle":"Ajuda a liberar o estresse",
        "textarea":"A capoeira serve de válvula de escape; é uma forma de liberar o estresse de uma forma lúdica e saudável."
     },
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aruanda Capoeira - DF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavbarComponent link={navbar} image="/labslogo.svg"/>

        {/*<div className={styles.caroussel}>*/}
            <div style={{paddingTop:"95px"}}>
                <CarouselComponent link={carroussel}/>
            </div>
        {/*</div>*/}

        <div className={styles.text_historia} id="jornada">
            <h2 className={styles.title_historia}>
                Conheça a nossa história
            </h2>
            <Historia/>
        </div>

        <h2 className={styles.text_beneficios} id="mestres">
            7 benefícios da capoeira
        </h2>

        <CardBeneficios link={cardBeneficios}/>

        <h2 className={styles.text_horarios} id="horarios">
            Quadro de Horários Aruanda Brasília - DF
        </h2>
        <p className={styles.text}>
            Local :
            <a href="https://www.google.com/maps/place/Gin%C3%A1sio+do+Col%C3%A9gio+Maxwell/@-15.8226874,-47.9796321,17z/data=!3m1!4b1!4m5!3m4!1s0x935a315c72e699a7:0x23865d7e17ea0e1f!8m2!3d-15.8227733!4d-47.977403">
                Ginásio do Colégio Maxwell
            </a> - Guará 1 , QE 11 conj. I</p>


        <div className={styles.alinhamento}>
            {miniCards.map((item,index) => {
                return (
                    <div  key={index} style={{padding:"40px"}}>
                        <MiniCard
                            src={item.src}
                            label={item.label}
                            text={item.text}
                            backgroundColor={item.backgroundColor}
                            hour={item.hour}
                            href={item.href}
                        />
                    </div>
                )
            })}
        </div>


        <h2 className={styles.text_mestres} id="mestres">
            Mestres da casa
        </h2>
        <CarouselMestres link={carousselMestres}/>

        <Footer/>
    </div>
  )
}
