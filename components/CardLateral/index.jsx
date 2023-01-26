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


export default function CardLateral({link}) {
    return (
        <div>
            {link.map((item,index) => {
                return (
                    <div   style={{margin:"20px"}} key={index}>
                        <Card  className={styles.size}  style={{backgroundColor:item.color}} >

                            <CardMedia
                                component="img"
                                className={styles.card}
                                image={item.image}
                                alt="Live from space album cover"
                            />

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
                                            <Button variant="outline-primary" href={item.href} style={{marginTop:"20px"}}>
                                                Mais informações
                                            </Button>
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                        </Card>
                    </div>
                )
            })}
        </div>
    );
}