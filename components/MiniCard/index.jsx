import * as React from 'react';

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActionArea, Link} from '@mui/material';
import {Button} from "react-bootstrap";

export default function MiniCard({href, label, text, backgroundColor,hour}) {
  return (
    <Card sx={{ width: 250 }} style={{
        backgroundColor: backgroundColor,
        borderRadius:"20px",
        height:"190px",
        boxShadow: "rgba(0, 0, 0, 0.15) 10px 10px 2.6px",
        textAlign:"center",
        margin:"0 auto",
        maxWidth:"80%,"
    }}
    >
      <CardActionArea>
        <CardContent>
          <p style={{color:"white", fontWeight:"bold"}}>
              {label}
          </p>
            <p style={{color:"white"}}>
                {hour}
            </p>

            <p style={{color:"white", fontWeight:"bold"}}>
                {text}
            </p>
                <Button variant="outline-success" href={href}>
                    Entre em contato
                </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
