import styles from "./Topo.module.css";


export default function Topo(){
    return(
        <>
            <h2 style={{
                textAlign:"center",
                padding:"40px",
                backgroundColor:"rgba(0, 0, 0, 0.1)",
                margin:"0 auto",
            }}
            >
                Bem-vindo ao site do Grupo Aruanda Capoeira!
            </h2>

            <p style={{maxWidth:"85%", margin:"0 auto"}}>
                A capoeira é uma arte brasileira que combina elementos de luta, musicalidade, ritmo e acrobacia, formando uma manifestação cultural extremamente rica e única.
                Este site contém informação sobre onde encontrar os nossos núcleos, aulas, e um pouco da nossa longa história, além de muito conteúdo interessante.
                Obrigado pelo interesse na nossa arte!
            </p>

        </>
    )
}