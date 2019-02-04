


import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
<<<<<<< HEAD:client/src/components/MushCard/MushCard.js
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
=======
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
>>>>>>> ed60cb0bff3f0292950662143ff2078213cf0cd7:client/src/components/Cards/Cards.js

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
<<<<<<< HEAD:client/src/components/MushCard/MushCard.js
  const { classes } = props;
  const { showMushData } = props;
  console.log("Awww props: ", props)
  console.log("showMushData is ", showMushData)
=======
  const { classes, modifyCardSrc } = props;


>>>>>>> ed60cb0bff3f0292950662143ff2078213cf0cd7:client/src/components/Cards/Cards.js
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
<<<<<<< HEAD:client/src/components/MushCard/MushCard.js
          image= {props.picsrc}
          title= {props.pictitle}
        />
        <CardContent>
          {showMushData}
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
=======
          image={imgUrl}
          title={MushroomTypeTitle}
        />
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" onClick={() => modifyCardSrc(imgUrl, MushroomTypeTitle)}>
          Maitake
>>>>>>> ed60cb0bff3f0292950662143ff2078213cf0cd7:client/src/components/Cards/Cards.js
        </Button>
      </CardActions> */}
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

<<<<<<< HEAD:client/src/components/MushCard/MushCard.js
export default withStyles(styles)(MediaCard);
=======
export default withStyles(styles)(MediaCard);




>>>>>>> ed60cb0bff3f0292950662143ff2078213cf0cd7:client/src/components/Cards/Cards.js
