const sql = require("./db.js");

// constructor
const Vaccines = function(vaccines) {
  this.research_name = vaccines.research_name;
  this.manufacturer = vaccines.manufacturer;
  this.vaccine_type = vaccines.vaccine_type;
};

Vaccines.create = (newVaccine, result) => {
  sql.query("INSERT INTO Vaccines SET ?", newVaccine, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created vaccine: ", { id: res.insertId, ...newVaccine });
    result(null, { id: res.insertId, ...newVaccine });
  });
};

Vaccines.getAll = result => {
    sql.query("SELECT * FROM Vaccines", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Vaccines: ", res);
      result(null, res);
    });
  };

  module.exports = Vaccines;