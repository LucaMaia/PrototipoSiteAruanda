import styles from "./Pratica.module.css";
import {Button} from "react-bootstrap";

import {Fade,Flip,Rotate,Zoom,Bounce,Slide,Roll,LightSpeed} from "react-reveal";

export default function PorquePraticar(){
    return(
        <>
            <div className={styles.text_historia} id="capoeira">
                <Slide bottom>
                    <h2 className={styles.title_historia}>
                        Por que praticar capoeira?
                    </h2>

                    <div className={styles.historia}>
                        <p>
                            A prática da capoeira trabalha a coordenação motora, aprimora a flexibilidade, equilíbrio e destreza,
                            alivia as tensões do dia a dia, proporciona criatividade e liberdade de movimentos.
                        </p>
                        <p>
                            A Capoeira desenvolve no aluno habilidades que vão além das capacidades físicas, como é um tema amplo,
                            pode-se trabalhar de forma lúdica, assim brincando,
                            os alunos tomam consciência do seu corpo e de suas capacidades motoras, facilitando o crescimento cognitivo e afetivo.
                        </p>
                    </div>
                </Slide>

            </div>
        </>
    )
}