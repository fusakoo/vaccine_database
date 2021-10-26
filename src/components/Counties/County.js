import React from 'react';
import { MdEditNote, MdDelete } from 'react-icons/md';

function County({ county }) {
  return (
      <tr className="list-item">
          <td>{county.county_fips_code}</td>
          <td>{county.county_name}</td>
          <td>{county.state}</td>
          <td className="selector-button"><MdEditNote/></td>
          <td className="selector-button"><MdDelete/></td>
      </tr>
  );
}

export default County;