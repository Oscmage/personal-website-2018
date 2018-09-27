import * as React from "react";
import "./../css/AboutMe.css";

class AboutMe extends React.Component {
  public render() {
    return (
      <div className="AboutMeContainer ContentContainer">
        <i id="AboutMe" className="Anchor" />
        <h2>About me</h2>
        <p>
          My name is Oscar Evertsson and I’m a 23 years old student at Chalmers
          University of Technology studying my second year at masters level.
          Apart from studying I’m doing some freelancing work mainly because I
          always find it interesting to learn something new! What do I love to
          do? I love coding of course, it’s one of my greatest passions, my
          special interest lies in human behaviour in Software Engineering (Soft
          parts). When I don’t spend my time coding/studying, I find interest in
          leadership, personal development and running! If you are interested in
          what I have done previously you can find my CV below. Welcome to my
          site!
        </p>
      </div>
    );
  }
}

export default AboutMe;
