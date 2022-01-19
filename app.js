const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { User, UserDAO } = require("./user.js");

// Load the express module
const express = require("express");

// Load the handlebars module
const handlebars = require("express-handlebars");

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

// For parsing requests' body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static("public"));

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
userDAO = new UserDAO();

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

// app.post("/register", (req, res, next) => {

// });

// Login page
app.get("/profile", (req, res, next) => {
  res.render("profile", {
    status: false,
    message: "",
  });
  console.log("Served login.");
});

app.post("/profile", cors({ origin: "*" }), (req, res, next) => {
  console.log("Received login request.");

  const email = req.body.email;
  const password = req.body.password;

  // Search for a user matching the given criteria
  const user = userDAO.getUser(email);

  // Set the response's headers up
  // res.set("Content-Type", "application/json");

  // No such user found
  if (user == null) {
    res.render("profile", {
      status: false,
      message: "No such user exists.",
    });
  } else {
    if (user.password == password) {
      res.render("profile", {
        status: true,
        message: "Login successful",
        "firstName": user.firstName,
        "lastName": user.lastName,
        "address": user.address,
        "phone": user.phone,
        "education": user.education,
        "email": user.email,
        "age": user.age,
        "country": user.country,
      });
    } else {
      res.render("profile", {
        status: false,
        message: "Wrong password.",
      });
    }
  }
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
