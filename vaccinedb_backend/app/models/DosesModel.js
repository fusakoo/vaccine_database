const sql = require("./db.js");

// constructor
const Doses = function(dose) {
  this.research_date = dose.research_date;
  this.date_taken = dose.date_taken;
};

Doses.create = (newDose, result) => {
  sql.query("INSERT INTO Doses SET ?", newDose, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Created a dose entry: ", { id: res.insertId, ...newDose });
    result(null, { id: res.insertId, ...newPerson });
  });
};

Doses.getAll = result => {
    sql.query("SELECT * FROM Doses", (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Doses: ", res);
      result(null, res);
    });
  };

  module.exports = Doses;