import * as React from 'react';
import styles from "./Card.module.css";
import { Button } from "react-bootstrap";

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";

import { Fade } from "react-reveal";

export default function CardLateral({ link }) {
    console.log("itens recebidos:", link); // DEBUG opcional

    return (
        <div className={styles.card_container}>
            {link.map((item, index) => {
                const isPDFOrDocx = item.href && (
                    item.href.toLowerCase().endsWith('.pdf') ||
                    item.href.toLowerCase().endsWith('.docx') ||
                    item.href.toLowerCase().endsWith('.xlsx')
                );

                return (
                    <div className={styles.card_wrapper} key={index}>
                        <Fade duration={3000}>
                            <Card className={styles.size} style={{ backgroundColor: item.color || "#fff" }}>
                                <div className={styles.card_limite}>
                                    <CardMedia
                                        component="img"
                                        className={styles.card}
                                        image={`/${item.image}`}
                                        alt={item.title}
                                    />
                                </div>
                                <CardActionArea>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent>
                                            <Typography component="div" variant="h5">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                {item.date}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                {item.text}
                                            </Typography>

                                            <Button
                                                variant="primary"
                                                href={isPDFOrDocx ? item.href : undefined}
                                                target={isPDFOrDocx ? "_blank" : undefined}
                                                rel={isPDFOrDocx ? "noopener noreferrer" : undefined}
                                                className={styles.button_att}
                                                disabled={!isPDFOrDocx}
                                            >
                                                {isPDFOrDocx ? "Visualizar planilha de custos" : "Compra indisponível"}
                                            </Button>

                                            {isPDFOrDocx && (
                                                <p className={styles.text_link}>
                                                    Para mais informações,{" "}
                                                    <a
                                                        href="https://discricionarias.transferegov.sistema.gov.br/voluntarias/ConsultarProposta/ResultadoDaConsultaDePropostaDetalharProposta.do?idProposta=1971653&Usr=guest&Pwd=guest"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={styles.link}
                                                    >
                                                        acesse o link
                                                    </a>.
                                                </p>
                                            )}
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Fade>
                    </div>
                );
            })}
        </div>
    );
}
