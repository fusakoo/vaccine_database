import React from 'react';
import ClinicSite from './ClinicSite'

function CSTable({ clinicSites }) {
  return (
      <table className="table-container">
          <caption>Clinic Sites</caption>
          <thead>
            <tr>
              <th>site_id</th>
              <th>site_name</th> 
              <th>street_address</th>
              <th>city</th>
              <th>postal_code</th>
              <th>county_fips_code</th>
            </tr>
          </thead>
          <tbody>
            {clinicSites.map((CS, i) => <ClinicSite CS={CS} key={i}/>)}
          </tbody>
      </table>
  );
}

export default CSTable;