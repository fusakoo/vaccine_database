import React from 'react';

function VaccinesInClinicSitesTable({ }) {
  return (
      <table className="table-container">
          <caption>List of Vaccines Available at Specified Clinic Site</caption>
          <thead>
            <tr>
              <th>research_name</th>
              <th>manufacturer</th> 
              <th>vaccine_type</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
      </table>
  );
}

export default VaccinesInClinicSitesTable;