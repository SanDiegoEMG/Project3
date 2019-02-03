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




let imgUrl = 'https://cdn.pixabay.com/photo/2014/07/10/20/55/mushroom-389421_960_720.jpg';



function MediaCard(props) {
    
    const { classes } = props;

    function sendImageLink(e){
        e.preventDefault();
        console.log("I need to return a value on click");
        return  (
            imgUrl
            )
    }

    // function showMushroom4(e) {
    //     e.preventDefault();
    //     console.log('The link was clicked');
        
    // }

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
          
          <Button size="small" color="primary" onClick={sendImageLink}>
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
  