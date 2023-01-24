import styles from "./Historia.module.css";


export default function Historia(){
    return(
        <>
            <div className={styles.text_historia} id="jornada">
                <h2 className={styles.title_historia}>
                    Conheça a nossa história
                </h2>

                <div className={styles.historia}>
                    <p>
                        Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.
                        Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido
                        pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos.
                    </p>
                </div>
            </div>

        </>
    )
}