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
  const person = new People({
    id: req.body.id || null,
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    birth_date: req.body.birth_date,
    site_id: req.body.site_id || null
  });

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

  const person = new People({
    id: req.body.id,
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    birth_date: req.body.birth_date || null,
    site_id: req.body.site_id || null
  });

  // Updates an existing Person in the database
  People.update(person, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating an existing Person."
      });
    else res.send(data);
  });
};


