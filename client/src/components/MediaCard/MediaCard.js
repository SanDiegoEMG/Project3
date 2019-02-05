import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function MediaCard(props) {
  const { classes } = props;

  return (
    <Card
      className={classes.card}
      onClick={() =>
        props.getMushroomInfo(
          <div>
            <h5> {props.description} </h5>
            <br></br>
            <h2>Fun Facts</h2>
            {props.fun_facts.map(item => (
              <p> {item}</p>))}
            <h3>Preferred Growing Substrate</h3>
            <p> {props.grows_on} </p>
            <h3>Recipes</h3>
            {props.recipesArray.map(item => (
              <p><a href={item}>{item}</a></p>
            ))}
          </div>
        )
      }
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.picsrc}
          title={props.pictitle}
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
