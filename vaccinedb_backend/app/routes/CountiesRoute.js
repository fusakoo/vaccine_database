module.exports = app => {
  const counties = require("../controllers/CountiesController.js");

  var router = require("express").Router();

  // Create a new County
  router.post("/", counties.create);  

  // Get all Counties
  router.get("/", counties.getAll);

  app.use('/Counties', router);
};
