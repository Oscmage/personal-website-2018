import * as React from "react";
import "./../css/HeaderDesktop.css";
import IHeaderLinks from "../interface/IHeaderLinks";

class HeaderDesktop extends React.Component<{
  headerText: string;
  links: IHeaderLinks[];
}> {
  public render() {
    const listItems = this.props.links.map(link => (
      <li key={link.name}>
        <a href={"#" + link.id}>{link.name}</a>
      </li>
    ));
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
