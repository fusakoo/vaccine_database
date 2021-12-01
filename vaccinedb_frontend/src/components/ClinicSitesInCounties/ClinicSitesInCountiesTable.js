import React from 'react';

function ClinicSitesInCountiesTable() {
  return (
    <table className="table-container">
      <caption>List of Clinic Sites Available in Specified County</caption>
      <thead>
        <tr>
          <th>site_id</th>
          <th>site_name</th> 
          <th>street_address</th>
          <th>city</th>
          <th>postal_code</th>
        </tr>
      </thead>
      <tbody id='CSBody'>
      </tbody>
    </table>
  );
}

export default ClinicSitesInCountiesTable;