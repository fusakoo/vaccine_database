const sql = require("./db.js");

// constructor
const ClinicSites = function(clinicSites) {
  this.site_name = clinicSites.site_name;
  this.street_address = clinicSites.street_address;
  this.city = clinicSites.city;
  this.postal_code = clinicSites.postal_code;
  this.county_fips_code = clinicSites.county_fips_code;
};

ClinicSites.create = (newCS, result) => {
  sql.query("INSERT INTO Clinic_Sites SET ?", newCS, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Created a clinic site entry: ", { site_id: res.insertId, ...newCS });
    result(null, { site_id: res.insertId, ...newCS });
  });
};

ClinicSites.getAll = result => {
    sql.query("SELECT * FROM Clinic_Sites", (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Clinic sites: ", res);
      result(null, res);
    });
  };

ClinicSites.getByID = (id, result) => {
  sql.query("SELECT cs.site_id, cs.site_name, cs.street_address, cs.city, cs.postal_code FROM Clinic_Sites cs INNER JOIN Counties c ON cs.county_fips_code = c.county_fips_code WHERE c.county_fips_code = ? ORDER BY site_id;", id, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    console.log("Clinic sites: ", res);
    result(null, res);
  });
};


module.exports = ClinicSites;