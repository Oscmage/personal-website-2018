const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/experience", (req, res) => {
  res.send({
    experienceList: [
      {
        description: "Own firm working primarily with web",
        endDate: new Date(),
        present: true,
        startDate: new Date("2017-06-01"),
        subTitle: "Gothenburg",
        title: "Own Firm"
      },
      {
        description:
          "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
        endDate: new Date("2018-08-31"),
        present: false,
        startDate: new Date("2018-06-12"),
        subTitle: "Stockholm",
        title: "Backend Developer Intern - Spotify"
      }
    ]
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
