const ClinicSites = require("../models/ClinicSitesModel.js");

// Create and Save a new Vaccine
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a new Clinic Site
  const clinicSite = new ClinicSites({
    site_name: req.body.site_name,
    street_address: req.body.street_address,
    city: req.body.city,
    postal_code: req.body.postal_code,
    county_fips_code: req.body.county_fips_code || false
  });

  // Save the newly created Clinic Site in the database (Clinic Sites)
  ClinicSites.create(clinicSite, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating a new Clinic Site."
      });
    else res.send(data);
  });
};

// find all People from the DB
exports.getAll = (req, res) => {
  ClinicSites.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Clinic Sites."
      });
    else res.send(data);
  });
};

