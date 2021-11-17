import React from 'react';

function VaccineAvailable({ VA }) {
  return (
      <tr className="list-item">
          <td>{VA.site_id}</td>
          <td>{VA.research_name}</td>
      </tr>
  );
}

export default VaccineAvailable;