import React from 'react';
import Vaccine from './Vaccine'

function VaccinesTable({ vaccines }) {
  return (
      <table className="table-container">
          <caption>Vaccine(s) Available</caption>
          <thead>
            <tr>
              <th>research_name</th>
              <th>manufacturer</th> 
              <th>vaccine_type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((vaccine, i) => <Vaccine vaccine={vaccine} key={i}/>)}
          </tbody>
      </table>
  );
}

export default VaccinesTable;