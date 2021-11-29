const sql = require("./db.js");

// constructor
const People = function() { };

People.create = (np, result) => {
  sql.query("INSERT INTO People SET ?", np, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Created a person entry: ", { id: res.insertId, ...np });
    result(null, { id: res.insertId, ...np });
  });
};

People.getAll = result => {
  sql.query("SELECT * FROM People", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    console.log("People: ", res);
    result(null, res);
  });
};

People.update = (id, to_update, result) => {
  sql.query("UPDATE People SET ? WHERE id = ?", [to_update, id], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    
    console.log("Updated a person entry: ", { id: id, ...to_update });
    result(null, { id: id, ...to_update });
  });
};

module.exports = People;