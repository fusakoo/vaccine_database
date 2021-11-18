module.exports = app => {
  const vaccines = require("../controllers/VaccinesController.js");

  var router = require("express").Router();

  // Create a new Vaccine
  router.post("/", vaccines.create);  

  // Get all Vaccines
  router.get("/", vaccines.getAll);

  app.use('/Vaccines', router);
};
