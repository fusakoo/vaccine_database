import React from 'react';
import { MdEditNote, MdDelete } from 'react-icons/md';

function Vaccine({ vaccine }) {
  return (
      <tr className="list-item">
          <td>{vaccine.research_name}</td>
          <td>{vaccine.manufacturer}</td>
          <td>{vaccine.vaccine_type}</td>
          <td className="selector-button"><MdEditNote/></td>
          <td className="selector-button"><MdDelete/></td>
      </tr>
  );
}

export default Vaccine;