import * as React from "react";

import "./../css/HeaderMobile.css";
import IHeaderLinks from "../interface/IHeaderLinks";

class HeaderMobile extends React.Component<
  {
    headerText: string;
    links: IHeaderLinks[];
  },
  { isActive: boolean }
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  public render() {
    const isActive = this.state.isActive ? " is-active" : "";
    const listItems = this.props.links.map(link => (
      <li key={link.name}>
        <a onClick={this.toggleHamburger} href={"#" + link.id}>
          {link.name}
        </a>
      </li>
    ));
    return (
      <div className="HeaderMobileContainer">
        <header>
          <h1>
            <a href="/">{this.props.headerText}</a>
          </h1>
          <div className="HamburgerContainer">
            <button
              className={"hamburger hamburger--slider" + isActive}
              type="button"
              onClick={this.toggleHamburger}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </header>
        <nav className={"MobileLinks" + isActive}>
          <ul>{listItems}</ul>
        </nav>
      </div>
    );
  }

  private toggleHamburger = (): void => {
    this.setState(state => ({
      isActive: !state.isActive
    }));
  };
}

export default HeaderMobile;
