import React from 'react';

function Vaccine({ vaccine }) {
  return (
      <tr className="list-item">
          <td>{vaccine.research_name}</td>
          <td>{vaccine.manufacturer}</td>
          <td>{vaccine.vaccine_type}</td>
      </tr>
  );
}

export default Vaccine;