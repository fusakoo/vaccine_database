module.exports = app => {
  const doses = require("../controllers/DosesController.js");

  var router = require("express").Router();

  // Create a new Dose
  router.post("/", doses.create);  

  // Get all the Doses
  router.get("/", doses.getAll);

  // Delete a specific dose
  router.delete("/", doses.remove);

  app.use('/Doses', router);
};
