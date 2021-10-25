import React from 'react';

function Person({ person }) {
  return (
      <tr className="list-item">
          <td>{person.last_name}</td>
          <td>{person.first_name}</td>
          <td>{person.birth_date}</td>
          <td>{person.site_id}</td>
      </tr>
  );
}

export default Person;