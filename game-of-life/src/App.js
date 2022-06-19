import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import CustomButton from "./components/CustomButton";
import {
  solid,
  // regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

class App extends Component {
  state = {
    links: [
      {
        id: 0,
        page: "Explanation",
        openInNewTab: false,
        url: "#explanation",
        icon: solid("circle-info"),
      },
      {
        id: 1,
        page: "GitHub",
        openInNewTab: true,
        url: "https://github.com/JamieTsai1024/Game-of-Life-Simulator",
        icon: brands("github"),
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <NavigationBar links={this.state.links} />
        <CustomButton
          variant="secondary"
          text="Start"
          icon={solid("play")}
          showAlternate={false}
          alternateText="Pause"
          alternateIcon={solid("pause")}
        />
        <CustomButton
          variant="secondary"
          text="Reset"
          icon={solid("refresh")}
        />
        <CustomButton
          variant="secondary"
          text="Next"
          icon={solid("angle-right")}
        />
        {/* <CustomButton variant="secondary" text="Start" icon={solid("play")} /> */}
      </React.Fragment>
    );
  }
}

export default App;
