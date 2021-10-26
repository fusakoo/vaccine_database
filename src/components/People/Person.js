import React from 'react';
import { MdEditNote, MdDelete } from 'react-icons/md';


function Person({ person }) {
  return (
      <tr className="list-item">
          <td>{person.id}</td>
          <td>{person.last_name}</td>
          <td>{person.first_name}</td>
          <td>{person.birth_date}</td>
          <td>{person.site_id}</td>
          <td className="selector-button"><MdEditNote/></td>
          <td className="selector-button"><MdDelete/></td>
      </tr>
  );
}

export default Person;