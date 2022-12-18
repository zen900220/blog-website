const uri =
  "mongodb+srv://zen900220:6ToT6qvog1p0eILy@cluster0.hbnjl.mongodb.net/blogDB?retryWrites=true&w=majority";

//Modules
const express = require("express");
const ejs = require("ejs");
const db = require("./database/dbFunctions.js");

//Routers
const home = require("./routers/home.js");
const post = require("./routers/post.js");
const compose = require("./routers/compose.js");
const about = require("./routers/about.js");
const contact = require("./routers/contact.js");

const app = express();

db.connect(uri);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", home);
app.use("/posts/:postName", post);
app.use("/compose", compose);
app.use("/about", about);
app.use("/contact", contact);

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Listening on port 3000");
});
