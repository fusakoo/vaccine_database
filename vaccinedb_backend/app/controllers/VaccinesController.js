const Vaccines = require("../models/VaccinesModel.js");

// Create and Save a new Vaccine
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a new Vaccine
  const vaccine = new Vaccines({
    research_name: req.body.research_name,
    manufacturer: req.body.manufacturer,
    vaccine_type: req.body.vaccine_type || false
  });

  // Save the newly created Vaccine in the database
  Vaccines.create(vaccine, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating a new Vaccine."
      });
    else res.send(data);
  });
};

// find all Vaccines from the DB
exports.getAll = (req, res) => {
  Vaccines.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vaccines."
      });
    else res.send(data);
  });
};

