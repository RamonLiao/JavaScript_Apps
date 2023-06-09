const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const fileRoute = require("./routes").file;
const cors = require("cors");
// const path = require("path");
const port = process.env.PORT || 8080;

// connect to DB
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to Mongo Altas");
  })
  .catch((e) => {
    console.log(e);
  });

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.static(path.join(__dirname, "client", "build")));

// routes
app.use("/api/file", fileRoute);

app.use("/api/testapi", (req, res) => {
  res.send("This is test API.");
});
// // URL/
// if (
//   process.env.NODE_ENV === "production" ||
//   process.env.NODE_ENV === "staging"
// ) {
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.join(__dirname, "client", "build", "index.html"),
//       (err) => {
//         if (err) {
//           res.status(500).send(err);
//         }
//       }
//     );
//   });
// }

app.get("/", (req, res) => {
  res.send("This is server at port 8080.");
});

app.get("*", (req, res) => {
  res.redirect("/");
});

// Back-end Server
app.listen(port, () => {
  console.log("Server is running on port " + port + ".");
});

module.exports = app;
