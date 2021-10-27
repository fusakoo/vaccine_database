import React from 'react';

function ClinicSite({ CS }) {
  return (
      <tr className="list-item">
          <td>{CS.site_id}</td>
          <td>{CS.site_name}</td>
          <td>{CS.street_address}</td>
          <td>{CS.city}</td>
          <td>{CS.postal_code}</td>
          <td>{CS.county_fips_code}</td>
      </tr>
  );
}

export default ClinicSite;