import Carousel from "react-bootstrap/Carousel";
import styles from "../Caroussel/Caroussel.module.css";
import Image from 'next/image'
import {Link} from "@mui/material";
import ImageAvatars from "../Avatar";

export default function CarouselMestres({link}) {
    return (
       <>
           <Carousel fade >
               {link.map((item,index) => {
                   return (
                       <Carousel.Item key={index} style={{
                           display:"flex",
                           justifyContent:"center",
                           paddingBottom:"250px",
                       }}
                       >

                           <Link href={item.href}>
                               <ImageAvatars src={item.src} width="100" height="100"/>
                           </Link>

                           <Carousel.Caption>
                               <h3 style={{color:"black"}}>
                                   {item.title}
                               </h3>
                               <p style={{color:"black"}}>
                                   {item.description}
                               </p>

                               <p style={{color:"black"}}>
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