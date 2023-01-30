import * as React from 'react';
import {Button} from "react-bootstrap";

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import styles from "./Card.module.css"

export default function CardMuiComponent({link}) {
    return (
        <>
            {link.map((item,index) => {
                return (
                    <Card sx={{ maxWidth: parseInt(item.width) , maxHeight:700}}
                          style={{backgroundColor:item.color,margin:"10px"}}
                          key={index}
                          className={styles.card}
                    >
                        <CardActionArea >
                            <CardMedia
                                component="img"
                                height={item.height}
                                image={item.image}
                                alt={item.alt}
                            />
                            <CardContent>
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                    <p>{item.hour}</p>
                            </CardContent>
                        </CardActionArea>
                        <div className={styles.espacamento}>
                            <Button className={styles.button}>
                                {item.button}
                            </Button>
                        </div>
                    </Card>
                )
            })}
        </>
    );
}
