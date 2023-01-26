import * as React from 'react';
import styles from "./MiniCard.module.css"
import {Button} from "react-bootstrap";


//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActionArea} from '@mui/material';
export default function MiniCard({href, label, text, backgroundColor,hour}) {
  return (
    <Card sx={{ width: 250 }} style={{backgroundColor: backgroundColor}} className={styles.alinhamento_card}>
      <CardActionArea>
        <CardContent>
          <p className={styles.text_bold}>
              {label}
          </p>
            <p className={styles.text}>
                {hour}
            </p>

            <p className={styles.text_bold}>
                {text}
            </p>
                <Button variant="danger" href={href}  className={styles.color_button}>
                        Entre em contato
                </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
