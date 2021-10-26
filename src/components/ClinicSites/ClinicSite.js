import React from 'react';
import { MdEditNote, MdDelete } from 'react-icons/md';

function ClinicSite({ CS }) {
  return (
      <tr className="list-item">
          <td>{CS.site_id}</td>
          <td>{CS.site_name}</td>
          <td>{CS.street_address}</td>
          <td>{CS.city}</td>
          <td>{CS.postal_code}</td>
          <td>{CS.county_fips_code}</td>
          <td className="selector-button"><MdEditNote/></td>
          <td className="selector-button"><MdDelete/></td>
      </tr>
  );
}

export default ClinicSite;