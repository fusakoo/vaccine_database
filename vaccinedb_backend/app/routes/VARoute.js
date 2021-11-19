module.exports = app => {
  const vaccinesAvailable = require("../controllers/VAController.js");

  var router = require("express").Router();

  // Create a new Vaccine Available 
  router.post("/", vaccinesAvailable.create);  

  // Get all Vaccines Available
  router.get("/", vaccinesAvailable.getAll);

  app.use('/Vaccines_Available', router);
};
