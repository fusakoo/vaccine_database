import React from 'react';
import Person from './../components/Person'

function PeopleTable({ people }) {
  return (
      <table className="table-container">
          <caption>List of People</caption>
          <thead>
            <tr>
              <th>id</th>
              <th>last_name</th>
              <th>first_name</th> 
              <th>birth_date</th>
              <th>site_id</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, i) => <Person person={person} key={i}/>)}
          </tbody>
      </table>
  );
}

export default PeopleTable;