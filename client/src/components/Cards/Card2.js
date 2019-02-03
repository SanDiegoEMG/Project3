import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};
let imgUrl = 'https://cdn.pixabay.com/photo/2016/04/05/11/26/mushrooms-1309246_960_720.jpg';
let MushroomTypeTitle = "Type Two of Mushroom";

function MediaCard(props) {
    const { classes,modifyCardSrc } = props;


    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imgUrl}
            title="Mushrooms"
          />
        </CardActionArea>
        <CardActions>
          
          <Button size="small" color="primary" onClick={()=>modifyCardSrc(imgUrl, MushroomTypeTitle)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
  
  MediaCard.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(MediaCard);
  