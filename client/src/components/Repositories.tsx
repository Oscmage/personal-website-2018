import * as React from "react";
import "./../css/Repositories.css";

class Repositories extends React.Component {
  public render() {
    return (
      <div className="RepositoriesContainer FlexCenter FlexDirectionColumn">
        <h2>Repositories</h2>
        <p>
          At a current stage I manage all of my code at GitHub, but you can also
          find my Bitbucket accout below
        </p>
        <div className="RepositoryIcons">
          <i>Link One</i>
          <i>Link Two</i>
        </div>
      </div>
    );
  }
}

export default Repositories;