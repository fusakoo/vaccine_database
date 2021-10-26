import React from 'react';
import VaccineAvailable from './VaccineAvailable'

function VATable({ vaccinesAvailable }) {
  return (
      <table className="table-container">
          <caption>Vaccine(s) Available At Clinic Sites</caption>
          <thead>
            <tr>
              <th>site_id</th>
              <th>research_name</th> 
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {vaccinesAvailable.map((VA, i) => <VaccineAvailable VA={VA} key={i}/>)}
          </tbody>
      </table>
  );
}

export default VATable;