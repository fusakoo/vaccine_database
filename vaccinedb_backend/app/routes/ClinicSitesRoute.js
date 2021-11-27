module.exports = app => {
  const clinicSites = require("../controllers/ClinicSitesController.js");

  var router = require("express").Router();

  // Create a new County
  router.post("/", clinicSites.create);  

  // Get all Counties
  router.get("/", clinicSites.getAll);

  // Get Clinic Sites in particular county
  router.get("/:id", clinicSites.getByID);

  app.use('/Clinic_Sites', router);
};
