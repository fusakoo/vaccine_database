const Counties = require("../models/CountiesModel.js");

// Create and Save a new Vaccine
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a new County
  const county = new Counties({
    county_fips_code: req.body.county_fips_code,
    county_name: req.body.county_name,
    state: req.body.state
  });

  // Save the newly created County in the database (Counties)
  Counties.create(county, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating a new County."
      });
    else res.send(data);
  });
};

// find all Counties from the DB
exports.getAll = (req, res) => {
  Counties.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving County."
      });
    else res.send(data);
  });
};

// find all county FIPS codes from the DB
exports.getFIPS = (req, res) => {
  Counties.getFIPS((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the FIPS codes."
      });
    else res.send(data);
  });
};