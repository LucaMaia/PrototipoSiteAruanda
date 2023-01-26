import styles from "./Horario.module.css";
import MiniCard from "../../components/MiniCard";

let miniCards = [
    {
        "label": "SEG/QUAR/SEX",
        "text": "Mestra Michellinha",
        "hour":"18:30 ás 19:30",
        "backgroundColor":"white",
        "href":"https://wa.me/5561983439530",
    },
    {
        "label": "TER/QUIN",
        "text": "Mestre Igor" ,
        "hour":"19:30 ás 20:30",
        "backgroundColor":"white",
        "href":"https://wa.me/5561983439530",
    },
    {
        "label": "TER/QUIN",
        "text": "Contra Mestre Carlos",
        "hour":"18:30 ás 19:30",
        "backgroundColor":"white",
        "href":"https://wa.me/5561983439530",

    },
]

export default function Horarios() {
    return (
       <div className={styles.bg_color}>
           <div className={styles.text}>
               <h2 className={styles.text_horarios} id="horarios">
                   Quadro de Horários Aruanda Brasília - DF
               </h2>
               <p className={styles.text}>
                   Local :
                   <a className={styles.text}
                       href="https://www.google.com/maps/place/Gin%C3%A1sio+do+Col%C3%A9gio+Maxwell/@-15.8226874,-47.9796321,17z/data=!3m1!4b1!4m5!3m4!1s0x935a315c72e699a7:0x23865d7e17ea0e1f!8m2!3d-15.8227733!4d-47.977403">
                       Ginásio do Colégio Maxwell
                   </a> - Guará 1 , QE 11 conj. I</p>

           </div>


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
       </div>
    );
}
