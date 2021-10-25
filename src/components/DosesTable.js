import React from 'react';
import Dose from './../components/Dose'

function DosesTable({ doses }) {
  return (
      <table className="table-container">
          <caption>Doses Taken by People</caption>
          <thead>
            <tr>
              <th>id</th>
              <th>research_name</th> 
              <th>date_taken</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doses.map((dose, i) => <Dose dose={dose} key={i}/>)}
          </tbody>
      </table>
  );
}

export default DosesTable;