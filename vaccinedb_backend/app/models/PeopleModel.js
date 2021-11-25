const sql = require("./db.js");

// constructor
const People = function(people) {
  this.id = people.id;
  this.last_name = people.last_name;
  this.first_name = people.first_name;
  this.birth_date = people.birth_date;
  this.site_id = people.site_id;
};

People.create = (np, result) => {
  sql.query("INSERT INTO People SET last_name = ?, first_name = ?, birth_date=?, site_id=?", [np.last_name, np.first_name, np.birth_date, np.site_id], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    np.id = res.insertId;
    console.log("Created a person entry: ", { ...np });
    result(null, { ...np });
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

People.update = (ep, result) => {
  sql.query("UPDATE People SET last_name = ?, first_name = ?, site_id=? WHERE id = ?", [ep.last_name, ep.first_name, ep.site_id, ep.id], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Updated a person entry: ", { ...ep });
    result(null, { ...ep });
  });
};

module.exports = People;