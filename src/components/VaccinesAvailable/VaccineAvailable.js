import React from 'react';
import { MdEditNote, MdDelete } from 'react-icons/md';

function VaccineAvailable({ VA }) {
  return (
      <tr className="list-item">
          <td>{VA.site_id}</td>
          <td>{VA.research_name}</td>
          <td className="selector-button"><MdEditNote/></td>
          <td className="selector-button"><MdDelete/></td>
      </tr>
  );
}

export default VaccineAvailable;