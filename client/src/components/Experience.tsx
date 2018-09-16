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

class Experience extends React.Component {
  public render() {
    const list: ITimeLineData[] = [
      {
        description:
          "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
        endDate: new Date("2018-08-20"),
        present: true,
        startDate: new Date("2017-07-20"),
        subTitle: "Miami, FL",
        title: "Creative Director"
      },
      {
        description:
          "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
        endDate: new Date("2018-08-20"),
        present: true,
        startDate: new Date("2017-07-20"),
        subTitle: "Miami, FL",
        title: "Creative Director"
      }
    ];
    const verticalTimelineElement = list.map(elem => (
      <VerticalTimelineElement
        key={elem.title}
        className="vertical-timeline-element--work"
        date={this.getDateAsString(elem.startDate, elem.endDate, elem.present)}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">{elem.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{elem.subTitle}</h4>
        <p>{elem.description}</p>
      </VerticalTimelineElement>
    ));
    return (
      <div className="ExperienceContainer">
        <h2>Experience</h2>
        <VerticalTimeline>{verticalTimelineElement}</VerticalTimeline>
      </div>
    );
  }

  private getDateAsString(
    startDate: Date,
    endDate: Date,
    present: boolean
  ): string {
    const diff = new Date(endDate.getTime() - startDate.getTime());
    const years = diff.getUTCFullYear() - 1970;
    const yString = years > 1 ? " years, " : " year, ";
    const months = diff.getUTCMonth();
    const mString = months > 1 ? " months)" : " month)";
    if (present) {
      return (
        startDate.getFullYear() +
        " - Present" +
        " (" +
        years +
        yString +
        months +
        mString
      );
    }
    return (
      startDate.getFullYear() +
      " - " +
      endDate.getFullYear() +
      " (" +
      years +
      yString +
      months +
      mString
    );
  }
}

export default Experience;
