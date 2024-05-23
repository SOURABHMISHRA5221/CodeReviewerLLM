import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function RoleCard(props) {
  
  return (

    <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.location}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desciption}
        </Typography>

      </CardContent>
      <CardActions>

        <Button href={props.link}  variant="contained" color="primary">Let's Go</Button>
      </CardActions>
    </Card>
  );
}
