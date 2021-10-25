import React from 'react';
import Person from './../components/Person'

function PeopleTable({ people }) {
  return (
      <table className="list-container">
          <caption>List of People</caption>
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th> 
              <th>Birthdate</th>
              <th>Clinic Site</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, i) => <Person person={person} key={i}/>)}
          </tbody>
      </table>
  );
}

export default PeopleTable;