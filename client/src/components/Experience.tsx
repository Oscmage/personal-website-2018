import "./../css/Experience.css";
import * as React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface ITimeLineData {
  description: string;
  endDate: Date;
  present: boolean;
  startDate: Date;
  subTitle: string;
  title: string;
}

class Experience extends React.Component<
  {},
  { experienceList: ITimeLineData[] }
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      experienceList: []
    };
  }

  public componentDidMount() {
    this.getExperienceList()
      .then((res: ITimeLineData[]) => this.setState({ experienceList: res }))
      .catch((err: Error) => console.log(err));
  }

  public getExperienceList = async (): Promise<ITimeLineData[]> => {
    const response = await fetch("/api/experience");
    const body = await response
      .json()
      .then(data => data as { experienceList: ITimeLineData[] });

    if (response.status !== 200) {
      throw Error("Fail");
    }
    return body.experienceList;
  };

  public render() {
    const experienceList = this.state.experienceList;
    const verticalTimelineElement = experienceList.map(elem => (
      <VerticalTimelineElement
        key={elem.title}
        className="vertical-timeline-element--work"
        date={this.getWorkingDurationString(
          elem.startDate,
          elem.endDate,
          elem.present
        )}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">{elem.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{elem.subTitle}</h4>
        <p>{elem.description}</p>
      </VerticalTimelineElement>
    ));

    if (experienceList === []) {
      return (
        <div className="ExperienceContainer">
          <h2>Experience</h2>
          <p>Error fetching experience list</p>
        </div>
      );
    }

    return (
      <div className="ExperienceContainer">
        <h2>Experience</h2>
        <VerticalTimeline>{verticalTimelineElement}</VerticalTimeline>
      </div>
    );
  }

  private getWorkingDurationString(
    startDate: Date,
    endDate: Date,
    present: boolean
  ): string {
    // Javascript is stupid
    if (typeof endDate === "string") {
      endDate = new Date(endDate);
    }
    if (typeof startDate === "string") {
      startDate = new Date(startDate);
    }

    const diff = new Date(endDate.getTime() - startDate.getTime());
    const years = diff.getUTCFullYear() - 1970;

    const months = diff.getMonth();
    if (present) {
      return (
        this.getDateAsString(startDate) +
        " - Present " +
        this.getDurationString(years, months)
      );
    }
    return (
      this.getDateAsString(startDate) +
      " - " +
      this.getDateAsString(endDate) +
      " " +
      this.getDurationString(years, months)
    );
  }

  private getDateAsString(date: Date): string {
    const year = date.getFullYear();
    const m = date.getMonth();
    const month = m < 10 ? "0" + m : m + "";
    const d = date.getDay();
    const day = d < 10 ? "0" + d : d + "";
    return year + "/" + month + "/" + day;
  }

  private getDurationString(years: number, months: number): string {
    let yString = "(";
    if (years === 1) {
      yString = "(1 year, ";
    } else if (years > 1) {
      yString = "(" + years + " years, ";
    }

    if (months === 0) {
      return yString + ")";
    } else if (months === 1) {
      return yString + "1 month";
    }
    return yString + months + " months)";
  }
}

export default Experience;
