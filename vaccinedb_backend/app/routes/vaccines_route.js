module.exports = app => {
  const vaccines = require("../controllers/vaccines_controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", vaccines.create);  

  // Create a new Tutorial
  router.get("/", vaccines.getAll);

  app.use('/Vaccines', router);
};
