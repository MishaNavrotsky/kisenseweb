import React from "react";
import { withStyles } from "@material-ui/core";
import GameSlider from "./GameSlider";
import GameDetails from "./GameDetails";
import { getGames, getApplications } from "../api";

const classes = (theme) => ({});

class GamesPage extends React.Component {
  state = {
    details: {},
    slides: [],
  };

  async componentDidMount() {
    this.props.showLoadingScreen(true);
    const data = (await getGames()).data;
    console.log(data);
    this.setState({ slides: data });
  }

  handleSlideClick = (slide) => {
    this.setState({ details: slide.data });
  };

  render() {
    const { classes, showLoadingScreen } = this.props;
    return (
      <div>
        <GameSlider
          showLoadingScreen={showLoadingScreen}
          handleSlideClick={this.handleSlideClick}
          slides={this.state.slides}
        />
        <GameDetails details={this.state.details} user={this.props.user} />
      </div>
    );
  }
}

export default withStyles(classes)(GamesPage);
