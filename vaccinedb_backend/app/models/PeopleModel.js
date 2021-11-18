const sql = require("./db.js");

// constructor
const People = function(people) {
  this.last_name = people.site_id;
  this.first_name = people.research_name;
  this.birth_date = people.birth_date;
  this.site_id = people.site_id;
};

People.create = (newPerson, result) => {
  sql.query("INSERT INTO People SET ?", newPerson, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Created a person entry: ", { id: res.insertId, ...newPerson });
    result(null, { id: res.insertId, ...newPerson });
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

  module.exports = People;