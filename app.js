const path = require("path");
const cors = require("cors");
const User = require("./public/javascript/user.js");

// Load the express module
const express = require("express");

// Load the handlebars module
const handlebars = require("express-handlebars");

// Load the handlebars
const hbs = require("handlebars");

// Load the handlebars
const bodyParser = require("body-parser");
const { response } = require("express");

// Create the express server
const app = express();
const port = 3000;

// Set the handlebar's engine as the default engine
app.engine(
  "handlebars",
  handlebars.engine({
    /*     helpers: {
      link: function (url) {
        var url = Handlebars.escapeExpression(url);
        return new Handlebars.SafeString("<img src='https://elearning-aueb.herokuapp.com/static/images/" + url + "'>");
      },
    }, */
    layoutsDir: path.join(__dirname, "views", "layouts"),
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static("public"));

// Read JSON files up to 100MB
app.use(express.json({ limit: "100mb" }));

// Configure CORS
const corsOptions = {
  origin: "https://elearning-aueb.herokuapp.com/",
  originSuccessStatus: 200,
};
// app.use(cors());

// Database
users = [
  new User("Anakin", "Skywalker", "Downing St. 10", "6912345678", "Master", "anakin@example.com", "testing321", 23, "Greece"),
];

// URLs
// Homepage
app.get("/", cors(corsOptions), (req, res, next) => {
  res.render("index", { layout: "main" });
  console.log("Served index.");
});

// Registration page
app.get("/register", (req, res, next) => {
  res.render("register", { layout: "main" });
  console.log("Served register.");
});

app.post("/register", (req, res, next) => {
  /*   let firstName = req.body.first_name;
  let lastName = req.body.last_name;
  let address = req.body.billing_address;
  let card_number = req.body.card_number;
  let education = req.body.education;
  let email = req.body.email;
  let password = req.body.password;
  let age = req.body.age;
  let country = req.body.country;
  console.log(firstName); */
  const user = req.body;
  console.log(user);
  res.end();
});

// Single course page
app.get("/courses", (req, res, next) => {
  res.render("courses", { layout: "main" });
  console.log("Served courses.");
});

// Make the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}.`));

// register new functions
/* handlebars.registerHelper("link", function (url) {
  var url = Handlebars.escapeExpression(url);
  return new Handlebars.SafeString("<img src='https://elearning-aueb.herokuapp.com/static/images/" + url + "'>");
}); */

/* hbs.registerHelper("link", function (url) {
  var url = hbs.escapeExpression(url);
  return new hbs.SafeString("<img src='https://elearning-aueb.herokuapp.com/static/images/" + url + "'>");
}); */

/* var hbs = handlebars.create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    link: function (url) {
      var url = Handlebars.escapeExpression(url);
      return new Handlebars.SafeString("<img src='https://elearning-aueb.herokuapp.com/static/images/" + url + "'>");
    },
  },
}); */
