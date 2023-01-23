import React from "react";
import styles from './ProcessoSeletivo.module.css'

// MaterialUI
import Card from '@mui/material/Card';
import {CardActionArea} from '@mui/material';
import Image from "next/image";

export default function CardProcessoSeletivo({title,description,date,text,number, image}) {
  return (
    <>
        <Card sx={{ maxWidth: 800}}
              style={{
                  borderRadius:"20px",
                  height:"auto",
                  boxShadow: "rgba(0, 0, 0, 0.15) 10px 10px 2.6px",
                  margin: "0 auto",
                  background:"white",
        }}>
                <CardActionArea >
                        <div className={styles.item}>
                            <div className={styles.num}>
                                {number}
                            </div>

                            <div className={styles.info}>
                                <div className={styles.alinhamento_card_processoseletivo}>
                                    <h2 className={styles.title}>
                                        {title}
                                    </h2>

                                    <span className={styles.description}>
                                        {description}
                                    </span>
                                </div>
                                
                                <p className={styles.date}>
                                    {date}
                                </p>

                                <p className={styles.desc}>
                                    {text}
                                </p>
                            </div>
                        </div>
                </CardActionArea>
        </Card>

        <div style={{display:"flex", justifyContent:"center"}}>
            <Image src={image}  width={10} height={20} />
        </div>
    </>
  )
}
