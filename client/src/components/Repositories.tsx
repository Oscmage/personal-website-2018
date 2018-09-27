import * as React from "react";
import "./../css/Repositories.css";

class Repositories extends React.Component {
  public render() {
    return (
      <div className="RepositoriesContainer FlexCenter FlexDirectionColumn ContentContainer">
        <i id="Repositories" className="Anchor" />
        <h2>Repositories</h2>
        <p>
          At a current stage I manage all of my code at GitHub, but you can also
          find my Bitbucket accout below
        </p>
        <div className="RepositoryIcons">
          <a href="https://github.com/Oscmage" target="_blank">
            <i className="fab fa-github" />
          </a>
          <a href="https://bitbucket.org/Oscmage/" target="_blank">
            <i className="fab fa-bitbucket" />
          </a>
        </div>
      </div>
    );
  }
}

export default Repositories;
