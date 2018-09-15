import * as React from "react";
import "./../css/HeaderDesktop.css";

class HeaderDesktop extends React.Component<{
  headerText: string;
  links: string[];
}> {
  public render() {
    const listItems = this.props.links.map(link => <li key={link}>{link}</li>);
    return (
      <div className="HeaderDesktopContainer">
        <h1>
          <a href="/">{this.props.headerText}</a>
        </h1>
        <ul className="LinkList">{listItems}</ul>
      </div>
    );
  }
}

export default HeaderDesktop;
