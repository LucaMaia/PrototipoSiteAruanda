import * as React from 'react';
import styles from "./Card.module.css"
import {Button} from "react-bootstrap";

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from "@mui/material";

import {Fade,Flip,Rotate,Zoom,Bounce,Slide,Roll,LightSpeed} from "react-reveal";


export default function CardLateral({link}) {
    return (
        <div>
            {link.map((item,index) => {
                return (
                    <div style={{margin:"20px 0px"}} key={index}>
                        <Fade duration={3000}>
                            <Card  className={styles.size}  style={{backgroundColor:item.color}} >
                                <div className={styles.card_limite}>
                                    <CardMedia
                                        component="img"
                                        className={styles.card}
                                        image={item.image}
                                        alt="Live from space album cover"
                                    />
                                </div>

                                <CardActionArea>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: ' 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {item.date}
                                            </Typography>
                                            <div>
                                                <Typography variant="subtitle1" color="text.secondary" component="div" id="test" >
                                                    {item.text}
                                                </Typography>
                                            </div>
                                            <Button variant="outline-primary" href={item.href} className={styles.button_att}>
                                                Comprar ingresso
                                            </Button>
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Fade>

                    </div>
                )
            })}
        </div>
    );
}