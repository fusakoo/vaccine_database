module.exports = app => {
  const people = require("../controllers/PeopleController.js");

  var router = require("express").Router();

  // Create a new Person (People)
  router.post("/", people.create);  

  // Get all the People
  router.get("/", people.getAll);

  // Update a specific Person
  router.put("/", people.update);

  app.use('/People', router);
};
