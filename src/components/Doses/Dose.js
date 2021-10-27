import React from 'react';
import { MdDelete } from 'react-icons/md';

function Dose({ dose }) {
  return (
      <tr className="list-item">
          <td>{dose.id}</td>
          <td>{dose.research_name}</td>
          <td>{dose.date_taken}</td>
          <td className="selector-button"><MdDelete/></td>
      </tr>
  );
}

export default Dose;