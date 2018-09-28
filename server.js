const express = require("express");
const path = require("path");

const app = express();
app.use("/api", express.static(__dirname + "/public"));

const port = process.env.PORT || 5000;

app.get("/api/experience", (req, res) => {
  res.send({
    experienceList: [
      {
        description: "Working primarily with web.",
        endDate: new Date(),
        present: true,
        startDate: new Date("2017-06-01"),
        subTitle: "Gothenburg",
        title: "Own Firm",
        imgUrl: "/api/img/me.jpg"
      },
      {
        description:
          "Working with payments and more specifically with the gift card system. The work involved Go lang, Python, Google cloud storage (GCS), Google KMS, Encryption/Decryption.",
        endDate: new Date("2018-08-31"),
        present: false,
        startDate: new Date("2018-06-12"),
        subTitle: "Stockholm",
        title: "Backend Developer Intern - Spotify",
        imgUrl: "/api/img/spotify-logo.png"
      },
      {
        description:
          "The role comprises of leading the student division board and representing the 650 students at the five year Software Engineering program.",
        endDate: new Date("2018-07-01"),
        present: false,
        startDate: new Date("2017-07-01"),
        subTitle: "Gothenburg",
        title:
          "Student Division President - Teknologsektionen Informationsteknik",
        imgUrl: "/api/img/itlogo.png"
      },
      {
        description:
          "The role comprised of full-stack software development in Scala on the backend side and Elm on the frontend. Additionally the role consisted of working very close with the customer of BEKK.",
        endDate: new Date("2017-07-31"),
        present: false,
        startDate: new Date("2017-06-01"),
        subTitle: "Oslo",
        title: "Software Developer Intern - Bekk Consulting AS",
        imgUrl: "/api/img/bekk.png"
      },
      {
        description: "Building websites.",
        endDate: new Date("2016-09-01"),
        present: false,
        startDate: new Date("2016-01-01"),
        subTitle: "Gothenburg",
        title: "Web Developer - We Know IT",
        imgUrl: "/api/img/we-know-it.png"
      }
    ]
  });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
