const sql = require("./db.js");

// constructor
const Counties = function(counties) {
  this.county_fips_code = counties.county_fips_code;
  this.county_name = counties.county_name;
  this.state = counties.state;
};

Counties.create = (newCounty, result) => {
  sql.query("INSERT INTO Counties SET ?", newCounty, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Created a county entry: ", { id: res.insertId, ...newCounty });
    result(null, { id: res.insertId, ...newCounty });
  });
};

Counties.getAll = result => {
    sql.query("SELECT * FROM Counties", (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Counties: ", res);
      result(null, res);
    });
  };

module.exports = Counties;