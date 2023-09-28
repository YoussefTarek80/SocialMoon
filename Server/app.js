require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const db = require("./database");

//database coonection
db();

// Middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use('/images', express.static(__dirname + '/images'));
app.use('/Post_Images', express.static(__dirname + '/Post_Images'));
// Routes
const userRegister = require("./routes/AuthRoutes");
const userData = require("./routes/UserRoutes");
const userPost = require("./routes/PostsRoutes");
app.use("/api/auth/", userRegister);
app.use("/api/user/", userData);
app.use("/api/post/",userPost)
app.get("/", (req, res) => {
  res.send("welcom Reset API");
});
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
