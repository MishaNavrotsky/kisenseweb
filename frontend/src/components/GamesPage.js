import React from "react";
import { withStyles } from "@material-ui/core";
import GameSlider from "./GameSlider";
import GameDetails from "./GameDetails";
import { getGames, getApplications } from "../api";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { setGameUrl } from "../actions"

const classes = (theme) => ({});

class GamesPage extends React.Component {
  state = {
    details: {},
    slides: [],
  };

  async componentDidMount() {
    this.props.showLoadingScreen(true);
    const data = (await getGames()).data;
    this.setState({ slides: data });
  }

  handleSlideClick = (slide) => {
    const selectedSlide = this.state.slides[slide.id]
    console.log(this.state.slides);
    this.setState({ details: {...slide.data, gameUrl:selectedSlide.gameUrl} });
  };

  render() {
    console.log(this.props)
    const { classes, showLoadingScreen } = this.props;
    return (
      <div>
        <GameSlider
          showLoadingScreen={showLoadingScreen}
          handleSlideClick={this.handleSlideClick}
          slides={this.state.slides}
        />
        <GameDetails setGameUrl={this.props.setGameUrl} goTo={this.props.history.push} details={this.state.details} user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => ({
  setGameUrl : (url)=>dispatch(setGameUrl(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(classes)(GamesPage)));