import styles from "./Beneficios.module.css";
import CardBeneficios from "../../components/CardBeneficios";
import {Button} from "react-bootstrap";

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
        "subtitle":"Desestimula a timidez",
        "textarea":"A capoeira é uma atividade que envolve dança, música, diferentes movimentos… Não há, portanto, espaço para timidez. Todos os participantes – sejam adultos, sejam crianças – estão ali expostos ao grupo com todas as suas imperfeições."
    },
]

export default function Beneficios() {
    return (
        <>
            <h2 className={styles.text_beneficios} id="beneficios">
                8 benefícios da capoeira
            </h2>

            <CardBeneficios link={cardBeneficios}/>

            {/*<div className={styles.alinhamento_button}>*/}
            {/*    <Button variant="danger">*/}
            {/*        Começar agora*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </>
    );
}
