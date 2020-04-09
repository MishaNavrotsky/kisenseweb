import React from "react";
import { withStyles } from "@material-ui/core";
import ApplicationSlider from "./ApplicationSlider";
import ApplicationDetails from "./ApplicationDetails";
import {getApplications} from "../api"

const classes = theme => ({});

class ApplicationsPage extends React.Component {
  state = {
    details: {},
    slides: []
  };
  
  async componentDidMount() {
    this.props.showLoadingScreen(true)
    const data = (await getApplications()).data
    this.setState({slides:data})
  }

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
          slides={this.state.slides}
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
