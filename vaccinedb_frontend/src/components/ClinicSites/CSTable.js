import React, {useEffect} from 'react';
const pathConfig = require("../config/pathconfig.js");

function CSTable() {

  useEffect ( () => {
    fetch( pathConfig.URL + '/Clinic_Sites' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.text())
    .then(data => {
      var json = JSON.parse(data);
      var HTML = "";
      for (var row in json)
        HTML += "<tr className=\"list-item\"><td>" 
        + json[row].site_id + "</td><td>" 
        + json[row].site_name + "</td><td>" 
        + json[row].street_address + "</td><td>" 
        + json[row].city + "</td><td>" 
        + json[row].postal_code + "</td><td>" 
        + json[row].county_fips_code + "</td></tr>";
      document.getElementById("ClinicSiteBody").innerHTML = HTML;
    })
    .catch(error => {
      alert(error);
    });
  })

  return (
    <table className="table-container">
      <caption>Clinic Sites</caption>
      <thead>
        <tr>
          <th>site_id</th>
          <th>site_name</th> 
          <th>street_address</th>
          <th>city</th>
          <th>postal_code</th>
          <th>county_fips_code</th>
        </tr>
      </thead>
      <tbody id='ClinicSiteBody'>
      </tbody>
    </table>
  );
}

export default CSTable;