module.exports = app => {
  const clinicSites = require("../controllers/ClinicSitesController.js");

  var router = require("express").Router();

  // Create a new Clinic Site
  router.post("/", clinicSites.create);  

  // Get all Clinic Sites
  router.get("/", clinicSites.getAll);

  // Get Clinic Site IDs
  router.get("/GetID", clinicSites.getID);  

  // Get Clinic Sites in particular county
  router.get("/:county", clinicSites.getByCounty);

  app.use('/Clinic_Sites', router);
};
