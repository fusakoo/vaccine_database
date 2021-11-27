const sql = require("./db.js");

// constructor
const Doses = function(dose) {
  this.id = dose.id;
  this.research_name = dose.research_name;
  this.date_taken = dose.date_taken;
};

Doses.create = (newDose, result) => {
  sql.query("INSERT INTO Doses SET ?", newDose, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Created a dose entry: ", { ...newDose });
    result(null, { ...newDose });
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

Doses.remove = (doseInfo, result) => {
  sql.query("DELETE FROM Doses WHERE id = ? and research_name = ? and date_taken = ?", [doseInfo.id, doseInfo.research_name, doseInfo.date_taken], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    console.log("Deleted dose with id: ", doseInfo.id, ", research_name: ", doseInfo.research_name, ", date_taken: ", doseInfo.date_taken);
    result(null, res);
  });
};  

module.exports = Doses;