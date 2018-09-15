import * as React from "react";
import "./../css/WelcomeImage.css";

class WelcomeImage extends React.Component {
  public render() {
    return (
      <div className="WelcomeImageContainer">
        <div className="WelcomeImageContainerInner">
          <h2>Who am I?</h2>
          <div className="CircleImageContainer" />
          <h3>I'm Oscar Evertsson </h3>
          <p>
            A 23 years old Chalmers student currently studying the masters
            program Software Engineering with a passion for programming,
            leadership and climbing.
          </p>
        </div>
      </div>
    );
  }
}

export default WelcomeImage;
