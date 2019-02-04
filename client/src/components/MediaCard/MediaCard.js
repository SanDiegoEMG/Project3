


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

let imgUrl = 'https://cdn.pixabay.com/photo/2016/08/27/11/16/mushrooms-1623893_960_720.jpg';
let MushroomTypeTitle = 'Maitake Mushroom';

function MediaCard(props) {
  const { classes } = props;
  const { showMushData } = props;
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
          {/* <Typography gutterBottom variant="h5" component="h2">
            name_common
          </Typography>
          <Typography component="p">
            name_latin
          </Typography> */}
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
