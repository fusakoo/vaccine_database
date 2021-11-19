const sql = require("./db.js");

// constructor
const VaccinesAvailable = function(vaccinesAvailable) {
  this.site_id = vaccinesAvailable.site_id;
  this.research_name = vaccinesAvailable.research_name;
};

VaccinesAvailable.create = (newVA, result) => {
  sql.query("INSERT INTO Vaccines_Available SET ?", newVA, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Created a vaccine available entry: ", { id: res.insertId, ...newVA });
    result(null, { id: res.insertId, ...newVA });
  });
};

VaccinesAvailable.getAll = result => {
    sql.query("SELECT * FROM Vaccines_Available", (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Vaccines available: ", res);
      result(null, res);
    });
  };

  module.exports = VaccinesAvailable;