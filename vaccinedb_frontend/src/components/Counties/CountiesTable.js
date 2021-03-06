import React, {useEffect} from 'react';

function CountiesTable() {

  useEffect ( () => {
    fetch( process.env.REACT_APP_BACKEND_URL + '/Counties' , {
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
        + json[row].county_fips_code + "</td><td>" 
        + json[row].county_name + "</td><td>" 
        + json[row].state + "</td></tr>";
      document.getElementById("CountyBody").innerHTML = HTML;
    })
    .catch(error => {
      alert(error);
    });
  })

  return (
    <table className="table-container">
      <caption>List of Counties</caption>
      <thead>
        <tr>
          <th>county_fips_code</th>
          <th>county_name</th> 
          <th>state</th>
        </tr>
      </thead>
      <tbody id='CountyBody'>
      </tbody>
    </table>
  );
}

export default CountiesTable;