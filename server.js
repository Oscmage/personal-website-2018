const express = require("express");

const app = express();
app.use("/api", express.static(__dirname + "/public"));

const port = process.env.PORT || 5000;

app.get("/api/experience", (req, res) => {
  res.send({
    experienceList: [
      {
        description: "Working primarily with web",
        endDate: new Date(),
        present: true,
        startDate: new Date("2017-06-01"),
        subTitle: "Gothenburg",
        title: "Own Firm",
        imgUrl: "/api/img/background.jpg"
      },
      {
        description: "Working primarily with python.",
        endDate: new Date("2018-08-31"),
        present: false,
        startDate: new Date("2018-06-12"),
        subTitle: "Stockholm",
        title: "Backend Developer Intern - Spotify",
        imgUrl: "/api/img/background.jpg"
      },
      {
        description:
          "The role comprises of leading the student division board and representing the 650 students at the five year Software Engineering program.",
        endDate: new Date("2018-06-01"),
        present: false,
        startDate: new Date("2017-07-01"),
        subTitle: "Gothenburg",
        title:
          "Student Division President - Teknologsektionen Informationsteknik",
        imgUrl: "/api/img/background.jpg"
      },
      {
        description:
          "The role comprised of full-stack software development in Scala on the backend side and Elm on the frontend. Additionally the role consisted of working very close with the customer of BEKK.",
        endDate: new Date("2017-07-31"),
        present: false,
        startDate: new Date("2017-06-01"),
        subTitle: "Oslo",
        title: "Software Developer Intern - Bekk Consulting AS",
        imgUrl: "/api/img/background.jpg"
      },
      {
        description: "Building websites.",
        endDate: new Date("2016-09-01"),
        present: false,
        startDate: new Date("2016-01-01"),
        subTitle: "Gothenburg",
        title: "Web Developer - We Know IT",
        imgUrl: "/api/img/background.jpg"
      }
    ]
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
