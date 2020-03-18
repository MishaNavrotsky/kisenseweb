import React from "react";
import { withStyles } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import Slider from "react-slick";
import _ from "lodash";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const classes = theme => ({
  slide: {
    backgroundColor: theme.palette.primary[50]
  },
  image: {
    height: "auto",
    width: "95%",
    maxWidth: 800,
    maxHeight: 480,
    margin: "auto",
    marginTop: 10,
    marginBottom: 10
  },
  overlay: {
    position: "absolute",
    textAlign: "center",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    visibility: "hidden"
  },
  container: {
    width: "100%",
    position: "relative",
    "&:hover $overlay": {
      visibility: "visible"
    },
    "&:hover img": {
      filter: "blur(5px)"
    }
  },
  topSlider: {
    marginTop: 20,
    marginBottom: 50
  }
});

function SliderButtonBack({ children, onClick, className }) {
  return (
    <ArrowBack onClick={onClick} className={className}>
      {children}
    </ArrowBack>
  );
}

function SliderButtonForward({ children, onClick, className }) {
  return (
    <ArrowForward onClick={onClick} className={className}>
      {children}
    </ArrowForward>
  );
}

function Slide({ slide, classes, onClick, id }) {
  const { imgUrl, data, label } = slide;
  return (
    <div
      className={classes.container}
      onClick={() => onClick({ ...slide, id })}
    >
      <img alt="err" className={classes.image} src={imgUrl}></img>
      <div className={classes.overlay}>{label}</div>
    </div>
  );
}

function imageLoaded(src, alt = "") {
  return new Promise(function(resolve, rejected) {
    const image = document.createElement("img");

    image.setAttribute("alt", alt);
    image.setAttribute("src", src);

    image.addEventListener("load", function() {
      resolve(image);
    });

    image.addEventListener("error", rejected);
  });
}
class ApplicationsSlider extends React.Component {
  static defaultProps = {
    slides: [],
    handleSlideClick: () => {}
  };

  async UNSAFE_componentWillMount() {
    const reflect = p =>
      p.then(
        v => ({ v, status: "fulfilled" }),
        e => ({ e, status: "rejected" })
      );
    this.props.showLoadingScreen(true);
    const promises = [];
    for (let i = 0; i < this.props.slides.length; i++) {
      promises.push(
        imageLoaded(this.props.slides[i].bigSlide.imgUrl),
        imageLoaded(this.props.slides[i].smallSlide.imgUrl)
      );
    }
    await Promise.all(promises.map(reflect));
    this.props.showLoadingScreen(false);
  }

  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  }

  handleSlideClick = slide => {
    this.smallSlider.slickGoTo(slide.id);
    this.bigSlider.slickGoTo(Math.floor(slide.id / 2));
    this.props.handleSlideClick(slide);
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginLeft: 45, marginRight: 45 }}>
        <Slider
          ref={slider => (this.bigSlider = slider)}
          infinite={true}
          slidesToShow={3}
          slidesToScroll={1}
          rows={2}
          arrows={false}
          focusOnSelect={true}
          className={classes.topSlider}
        >
          {this.props.slides.map((slide, key) => (
            <Slide
              key={key}
              id={key}
              classes={classes}
              slide={{ ...slide.bigSlide, data: slide.data }}
              onClick={this.handleSlideClick}
            />
          ))}
        </Slider>
        <Slider
          ref={slider => (this.smallSlider = slider)}
          infinite={true}
          speed={500}
          slidesToShow={6}
          slidesToScroll={1}
          arrows={true}
          focusOnSelect={true}
          nextArrow={<SliderButtonForward />}
          prevArrow={<SliderButtonBack />}
        >
          {this.props.slides.map((slide, key) => (
            <Slide
              key={key}
              id={key}
              classes={classes}
              slide={{ ...slide.smallSlide, data: slide.data }}
              onClick={this.handleSlideClick}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

export default withStyles(classes)(ApplicationsSlider);
