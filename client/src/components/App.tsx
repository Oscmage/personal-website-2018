import * as React from "react";
import "./../css/App.css";
import AboutMe from "./AboutMe";
import Header from "./Header";
import WelcomeImage from "./WelcomeImage";
import Experience from "./Experience";
import Repositories from "./Repositories";
import Contact from "./Contact";
import IHeaderLinks from "../interface/IHeaderLinks";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header links={this.getLinks()} />
        <WelcomeImage />
        <AboutMe />
        <Experience />
        <Repositories />
        <Contact />
      </div>
    );
  }

  private getLinks(): IHeaderLinks[] {
    const links = [
      { name: "About Me", id: "AboutMe" },
      { name: "Experience", id: "Experience" },
      { name: "Github , & Bitbucket", id: "Repositories" },
      { name: "Contact", id: "Contact" }
    ];
    return links;
  }
}

export default App;
