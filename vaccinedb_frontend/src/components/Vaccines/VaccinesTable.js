import React, {useEffect} from 'react';

function VaccinesTable() {

  useEffect ( () => {
    fetch( process.env.REACT_APP_BACKEND_URL + '/Vaccines' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then ((response) => {
      if (response.ok)
        return response;
      else
        throw new Error("Something went wrong querying the database!");
    })
    .then(response => response.text())
    .then(data => {
      var json = JSON.parse(data);
      var HTML = "";
      for (var row in json)
        HTML += "<tr className=\"list-item\"><td>" 
        + json[row].research_name + "</td><td>" 
        + json[row].manufacturer + "</td><td>" 
        + json[row].vaccine_type + "</td></tr>";
      document.getElementById("VaccineBody").innerHTML = HTML;
    })
    .catch(error => {
      alert(error);
    });
  })

return (
  <table className="table-container">
    <caption>Vaccine(s) Available</caption>
    <thead>
      <tr>
        <th>research_name</th>
        <th>manufacturer</th> 
        <th>vaccine_type</th>
      </tr>
    </thead>
    <tbody id='VaccineBody'>
    </tbody>
  </table>
  );
}

export default VaccinesTable;