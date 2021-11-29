module.exports = app => {
  const counties = require("../controllers/CountiesController.js");

  var router = require("express").Router();

  // Create a new County
  router.post("/", counties.create);  

  // Get all Counties
  router.get("/", counties.getAll);

  // Get all FIPS codes only 
  router.get("/FIPS", counties.getFIPS);

  app.use('/Counties', router);
};
