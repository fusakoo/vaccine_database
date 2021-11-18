import React, {useEffect} from 'react';

function DosesTable() {

  useEffect ( () => {
    fetch('http://flip3.engr.oregonstate.edu:49490/Doses', {
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
        + json[row].date_taken + "</td></tr>";
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