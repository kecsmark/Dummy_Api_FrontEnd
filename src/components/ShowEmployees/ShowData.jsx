import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth:150,
    margin:"1rem"
  },
  media: {
    height: 140,
  },
});





export default function ShowData(props){
    const classes = useStyles();



    return(
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            props.data.profile_image!= "" ?
            <img src={props.data.profile_image} className="card-img-top" alt=""/>:
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          }
          title={props.data.employee_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.data.employee_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.data.employee_age}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>

        

    )
}
