const VaccinesAvailable = require("../models/VAModel.js");

// Create and Save a new Vaccine
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a new Vaccine Available entry
  const vaccineAvailable = new VaccinesAvailable({
    site_id: req.body.site_id,
    research_name: req.body.research_name || false
  });

  // Save the newly created Vaccine in the database
  VaccinesAvailable.create(vaccineAvailable, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating a new Vaccine Available entry."
      });
    else res.send(data);
  });
};

// find all Vaccines Available from the DB
exports.getAll = (req, res) => {
  VaccinesAvailable.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vaccines available."
      });
    else res.send(data);
  });
};

