import React from "react";
import { withStyles } from "@material-ui/core";
import ApplicationSlider from "./ApplicationSlider";
import ApplicationDetails from "./ApplicationDetails";

function generateImgUrl() {
  return `https://i.picsum.photos/id/${~~(Math.random() * 100)}/800/480.jpg`;
}
const classes = theme => ({});
const slides = [
  {
    bigSlide: {
      imgUrl: generateImgUrl(),
      label: "1"
    },
    smallSlide: {
      imgUrl: generateImgUrl(),
      label: "1"
    },
    data: { name: "game 1", text: "super game 1" }
  },
  {
    bigSlide: {
      imgUrl: generateImgUrl(),
      label: "2"
    },
    smallSlide: {
      imgUrl: generateImgUrl(),
      label: "2"
    },
    data: { name: "game 2", text: "super game 2" }
  },
  {
    bigSlide: {
      imgUrl: generateImgUrl(),
      label: "3"
    },
    smallSlide: {
      imgUrl: generateImgUrl(),
      label: "3"
    },
    data: { name: "game 3", text: "super game 3" }
  },
  {
    bigSlide: {
      imgUrl: generateImgUrl(),
      label: "4"
    },
    smallSlide: {
      imgUrl: generateImgUrl(),
      label: "4"
    },
    data: { name: "game 4", text: "super game 4" }
  },
  {
    bigSlide: {
      imgUrl: generateImgUrl(),
      label: "5"
    },
    smallSlide: {
      imgUrl: generateImgUrl(),
      label: "5"
    },
    data: { name: "game 5", text: "super game 5" }
  },
  {
    bigSlide: {
      imgUrl: generateImgUrl(),
      label: "6"
    },
    smallSlide: {
      imgUrl: generateImgUrl(),
      label: "6"
    },
    data: { name: "game 6", text: "super game 6" }
  },
  {
    bigSlide: {
      imgUrl: generateImgUrl(),
      label: "7"
    },
    smallSlide: {
      imgUrl: generateImgUrl(),
      label: "7"
    },
    data: { name: "game 7", text: "super game 7" }
  },
  {
    bigSlide: {
      imgUrl: generateImgUrl(),
      label: "8"
    },
    smallSlide: {
      imgUrl: generateImgUrl(),
      label: "8"
    },
    data: { name: "game 8", text: "super game 8" }
  },
  {
    bigSlide: {
      imgUrl: generateImgUrl(),
      label: "9"
    },
    smallSlide: {
      imgUrl: generateImgUrl(),
      label: "9"
    },
    data: { name: "game 9", text: "super game 9", lolkek: 123 }
  }
];

class ApplicationsPage extends React.Component {
  state = {
    details: {}
  };

  handleSlideClick = slide => {
    this.setState({ details: slide.data });
  };

  render() {
    const { classes, showLoadingScreen } = this.props;
    return (
      <div>
        <ApplicationSlider
          showLoadingScreen={showLoadingScreen}
          handleSlideClick={this.handleSlideClick}
          slides={slides}
        />
        <ApplicationDetails
          details={this.state.details}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default withStyles(classes)(ApplicationsPage);
