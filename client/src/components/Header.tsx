import * as React from "react";

import "./../css/Header.css";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

class Header extends React.Component<
  {},
  { data: string; headerText: string; links: string[]; width: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: "test",
      headerText: "Oscar Evertsson",
      links: ["About Me", "Experience", "Github & Bitbucket", "Contact"],
      width: 0
    };
  }

  public componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  public render() {
    if (this.isDesktop()) {
      return (
        <div className="HeaderWrapper">
          <HeaderDesktop
            headerText={this.state.headerText}
            links={this.state.links}
          />
        </div>
      );
    } else {
      return (
        <div className="HeaderWrapper">
          <HeaderMobile />
        </div>
      );
    }
  }

  private updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  private isDesktop(): boolean {
    const width = this.state.width;
    return width > 1200 ? true : false;
  }
}

export default Header;
