const express = require("express");
const cors = require("cors");

const app = express();

// Make sure to update when testing
var corsOptions = {
  // This should point to the port/server of the frontend app
  origin: "http://flip1.engr.oregonstate.edu:5544"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple tester route
app.get("/", (req, res) => {
  res.json({ message: "This is a backend app for CS340 Group 40's project." });
});

require("./app/routes/ClinicSitesRoute.js")(app);
require("./app/routes/CountiesRoute.js")(app);
require("./app/routes/DosesRoute.js")(app);
require("./app/routes/PeopleRoute.js")(app);
require("./app/routes/VaccinesRoute.js")(app);
require("./app/routes/VARoute.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5545;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
