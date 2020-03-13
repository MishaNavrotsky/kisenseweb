import React from "react";
import MainCarousel from "./MainCarousel";
import MainMenu from "./MainMenu";

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <MainCarousel></MainCarousel>
        <MainMenu></MainMenu>
      </div>
    );
  }
}

export default IndexPage;
