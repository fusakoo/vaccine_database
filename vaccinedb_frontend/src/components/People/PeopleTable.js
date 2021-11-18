import React, {useEffect} from 'react';

function PeopleTable({ people }) {

  useEffect ( () => {
    fetch('http://flip3.engr.oregonstate.edu:49490/People', {
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
        + json[row].last_name + "</td><td>" 
        + json[row].first_name + "</td><td>" 
        + json[row].birth_date + "</td><td>" 
        + json[row].site_id + "</td></tr>";
      document.getElementById("PeopleBody").innerHTML = HTML;
    })
    .catch(error => {
      alert(error);
    });
  })

  return (
    <table className="table-container">
      <caption>List of People</caption>
      <thead>
        <tr>
          <th>id</th>
          <th>last_name</th>
          <th>first_name</th> 
          <th>birth_date</th>
          <th>site_id</th>
        </tr>
      </thead>
      <tbody id='PeopleBody'>
      </tbody>
    </table>
  );
}

export default PeopleTable;