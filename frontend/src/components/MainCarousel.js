import React from "react";
import { Carousel } from "react-responsive-carousel";
import { withStyles } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const classes = theme => ({
  slide: {
    width: "100% !important",
    className: "100% !important",
    backgroundColor: theme.palette.primary[50]
  },
  image: {
    maxHeight: 500,
    maxWidth: 500,
    backgroundColor: theme.palette.primary[50]
  }
});

// const classes = theme => console.log(theme);
class MainCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <div className={classes.slide}>
          <img
            alt="err"
            className={classes.image}
            src="https://upload.wikimedia.org/wikipedia/de/6/67/Some%26Any-Logo.jpg"
          ></img>
        </div>
        <div className={classes.slide}>
          <img
            alt="err"
            className={classes.image}
            src="https://upload.wikimedia.org/wikipedia/de/6/67/Some%26Any-Logo.jpg"
          ></img>
        </div>
        <div className={classes.slide}>
          <img
            alt="err"
            className={classes.image}
            src="https://upload.wikimedia.org/wikipedia/de/6/67/Some%26Any-Logo.jpg"
          ></img>
        </div>
        <div className={classes.slide}>
          <img
            alt="err"
            className={classes.image}
            src="https://upload.wikimedia.org/wikipedia/de/6/67/Some%26Any-Logo.jpg"
          ></img>
        </div>
        <div className={classes.slide}>
          <img
            alt="err"
            className={classes.image}
            src="https://upload.wikimedia.org/wikipedia/de/6/67/Some%26Any-Logo.jpg"
          ></img>
        </div>
        <div className={classes.slide}>
          <img
            alt="err"
            className={classes.image}
            src="https://upload.wikimedia.org/wikipedia/de/6/67/Some%26Any-Logo.jpg"
          ></img>
        </div>
      </Carousel>
    );
  }
}

export default withStyles(classes)(MainCarousel);
