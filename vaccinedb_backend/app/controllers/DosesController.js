const Doses = require("../models/DosesModel.js");

// Create and Save a new Vaccine
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a new Dose
  const dose = new Doses({
    research_name: req.body.research_name,
    date_taken: req.body.date_taken || false
  });

  // Save the newly created Dose in the database (Doses)
  Doses.create(dose, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating a new Dose."
      });
    else res.send(data);
  });
};

// find all Doses from the DB
exports.getAll = (req, res) => {
  Doses.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Doses."
      });
    else res.send(data);
  });
};

