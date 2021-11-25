import React, {useEffect} from 'react';
const pathConfig = require("../config/pathconfig.js");

function DosesTable() {

  useEffect ( () => {
    fetch( pathConfig.URL + '/Doses' , {
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
        + json[row].id + "</td><td>" 
        + json[row].research_name + "</td><td>" 
        + json[row].date_taken + "</td>"
        // Still need to implement how to connect this to the backend
        + "<td class='selector-button'><button type='submit' id='submit' class='delete-button'>X</button></td>"
        + "</tr>";
      document.getElementById("DoseBody").innerHTML = HTML;
    })
    .catch(error => {
      alert(error);
    });
  })

  return (
    <table className="table-container">
      <caption>Dose(s) Taken by People</caption>
      <thead>
        <tr>
          <th>id</th>
          <th>research_name</th> 
          <th>date_taken</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody id='DoseBody'>
      </tbody>
    </table>
  );
}

export default DosesTable;