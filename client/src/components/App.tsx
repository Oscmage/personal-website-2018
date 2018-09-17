import * as React from "react";
import "./../css/App.css";
import AboutMe from "./AboutMe";
import Header from "./Header";
import WelcomeImage from "./WelcomeImage";
import Experience from "./Experience";
import Repositories from "./Repositories";
import Contact from "./Contact";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <WelcomeImage />
        <AboutMe />
        <Experience />
        <Repositories />
        <Contact />
      </div>
    );
  }
}

export default App;
