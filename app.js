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

app.post("/register", (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;
  const card_number = req.body.card_number;
  const education = req.body.education;
  const email = req.body.email;
  const password = req.body.password;
  const age = req.body.age;
  const country = req.body.country;

  const user = new User(firstName, lastName, address, card_number, education, email, password, age, country);

  const index = userDAO.addUser(user);

  //Update the array if the new user is not already registered with the same email
  if (index === -1) {
    users.push(user);
    console.log(user);
    console.log(users);
    //Servers' Response
    res.json({
      status: "Successful Registration!",
    });
  } else {
    console.log("The user already exists!");
    //Servers' Response
    res.json({
      status: "The user already exists! Please register with another email",
    });
  }
});

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

// About us page
app.get("/about-us", (req, res, next) => {
  res.render("about_us");
  console.log("Served about us.");
});

// Contact page
app.get("/contact", (req, res, next) => {
  res.render("contact");
  console.log("Served contact.");
});

app.get("/costas", (req, res, next) => {
  res.render("costas");
  console.log("Served costas.");
});

app.get("/george", (req, res, next) => {
  res.render("george");
  console.log("Served george.");
});

// Make the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}.`));
