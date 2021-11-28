const People = require("../models/PeopleModel.js");

// Create and Save a new Vaccine
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a new Person
  const person = [{
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    birth_date: req.body.birth_date,
    site_id: req.body.site_id || null
  }];

  // Save the newly created Person in the database (People)
  People.create(person, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating a new Person."
      });
    else res.send(data);
  });
};

// find all People from the DB
exports.getAll = (req, res) => {
  People.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving People."
      });
    else res.send(data);
  });
};

// Updates an existing Person
exports.update = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Creates new object and populates with properties to update
  let to_update = {};

  if (req.body.last_name != null)
    to_update.last_name = req.body.last_name;

  if (req.body.first_name != null)
    to_update.first_name = req.body.first_name;

  if (req.body.should_update_site_id == true)
    to_update.site_id = req.body.site_id || null;

  // Updates an existing Person in the database
  People.update(req.body.id, to_update, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating an existing Person."
      });
    else res.send(data);
  });
};