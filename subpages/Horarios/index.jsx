import styles from "./Horario.module.css";
import MiniCard from "../../components/MiniCard";
import Image from "next/image";
import {Fade,Flip,Rotate,Zoom,Bounce,Slide,Roll,LightSpeed} from "react-reveal";

let miniCards = [
    {
        "label": "SEG/QUAR/SEX",
        "text": "Mestra Michellinha",
        "hour":"18:30 ás 19:30",
        "backgroundColor":"white",
        "href":"https://wa.me/5561983439530?text=Vim%20do%20site%20Aruanda%20Capoeira%20e%20gostaria%20de%20fazer%20um%20orçamento.",
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
           <Zoom top={2000} left={3000} duration={2000}>
               <div className={styles.text}>
                   <Image src="/hora.svg" height={100} width={80}/>
                   {/*<h2 className={styles.text_horarios} id="horarios">*/}
                   {/*   Horários Aruanda Brasília - DF*/}
                   {/*</h2>*/}
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
           </Zoom>

       </div>
    );
}
