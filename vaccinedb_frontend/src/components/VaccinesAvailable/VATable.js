import React, {useEffect} from 'react';

function VATable() {

  useEffect ( () => {
    fetch( process.env.REACT_APP_BACKEND_URL + '/Vaccines_Available' , {
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
        + json[row].site_id + "</td><td>" 
        + json[row].research_name + "</td></tr>";
      document.getElementById("VaccineAvailableBody").innerHTML = HTML;
    })
    .catch(error => {
      alert(error);
    });
  })

  return (
    <table className="table-container">
      <caption>Vaccine(s) Available at Clinic Sites</caption>
      <thead>
        <tr>
          <th>site_id</th>
          <th>research_name</th> 
        </tr>
      </thead>
      <tbody id='VaccineAvailableBody'>
      </tbody>
    </table>
  );
}

export default VATable;