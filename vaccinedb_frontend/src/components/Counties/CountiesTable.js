import React from 'react';
import County from './County'

function CountiesTable({ counties }) {
  return (
      <table className="table-container">
          <caption>List of Counties</caption>
          <thead>
            <tr>
              <th>county_fips_code</th>
              <th>county_name</th> 
              <th>state</th>
            </tr>
          </thead>
          <tbody>
            {counties.map((county, i) => <County county={county} key={i}/>)}
          </tbody>
      </table>
  );
}

export default CountiesTable;