import React from 'react';
//import { Grid,Card, Image, Embed } from "semantic-ui-react";
//import 'semantic-ui-css/semantic.min.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    margin: '50px auto',
  },
});

const Photo = (props) => {

  const classes = useStyles();

  if(props.data.media_type==='video'){
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="iframe"
            alt="Nasa Image of the Day"
            height= '400'
            image={props.data.url}
            title={props.data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.data.explanation}
            </Typography>
          </CardContent>
        </CardActionArea>        
      </Card>
    );
  } else {
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Nasa Image of the Day"
            height= '400'
            image={props.data.url}
            title={props.data.title}
          />
          <CardContent height={700}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.data.explanation}
            </Typography>
          </CardContent>
        </CardActionArea>        
      </Card>
    );
  }

};

export default Photo;