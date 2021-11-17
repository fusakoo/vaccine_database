import React from 'react';

function County({ county }) {
  return (
      <tr className="list-item">
          <td>{county.county_fips_code}</td>
          <td>{county.county_name}</td>
          <td>{county.state}</td>
      </tr>
  );
}

export default County;