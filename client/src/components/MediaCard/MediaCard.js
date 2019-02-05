import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140,
  }
};


function MediaCard(props) {
  const { classes } = props;



  return (
    <Card className={classes.card} onClick={() => (
    props.getMushroomInfo(
      <div>
      <p> {props.description} </p>
      <p> {props.grows_on} </p>
      <p> {props.recipesArray} </p>
      </div>
      ))}
      >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {props.picsrc}
          title= {props.pictitle}
        />
        
        <CardContent>
          <p>{props.name_common}</p>
          <p>{props.name_latin}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
