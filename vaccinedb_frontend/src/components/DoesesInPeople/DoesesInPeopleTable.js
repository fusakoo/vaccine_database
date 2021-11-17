import React from 'react';

function DoesesInPeopleTable({ }) {
  return (
      <table className="table-container">
          <caption>List of Doses Taken by Specified Person</caption>
          <thead>
            <tr>
              <th>research_name</th>
              <th>date_taken</th> 
            </tr>
          </thead>
          <tbody>
          </tbody>
      </table>
  );
}

export default DoesesInPeopleTable;