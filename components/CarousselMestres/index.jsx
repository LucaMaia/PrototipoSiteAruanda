import Carousel from "react-bootstrap/Carousel";
import styles from "./Caroussel.module.css";
import {Link} from "@mui/material";

// Components
import ImageAvatars from "../Avatar";

export default function CarouselMestres({link}) {
    return (
       <>
           <Carousel  fade >
               {link.map((item,index) => {
                   return (
                       <Carousel.Item key={index} className={styles.alinhamento_image}>
                               <Link href={item.href}>
                                   <ImageAvatars
                                       src={item.src}
                                       width="150"
                                       height="150"
                                   />
                               </Link>

                           <Carousel.Caption>
                               <h3>
                                   {item.title}
                               </h3>
                               <p>
                                   {item.description}
                               </p>

                               <p className={styles.alinhamento_text}>
                                   {item.text}
                               </p>
                           </Carousel.Caption>
                       </Carousel.Item>
                   )
               })}
           </Carousel>
       </>
    );
};