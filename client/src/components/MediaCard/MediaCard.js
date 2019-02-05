


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
    height: 140,
  }
};


function MediaCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} onClick={() => props.getMushroomInfo(props.description)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {props.picsrc}
          title= {props.pictitle}
        />
        <CardContent>
          <p>{props.name_common}</p>
          {/* <p >{data.name_call}</p> */}
          <p>{props.name_latin}</p>

        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
