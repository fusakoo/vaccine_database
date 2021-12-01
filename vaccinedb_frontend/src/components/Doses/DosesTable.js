import React from 'react';
import { useAsync } from "react-async";
const pathConfig = require("../config/pathconfig.js");

let loadTableData = async () => {
  const doses = await 
  console.log(doses.length);
  return doses;
}

function RenderTableData() {
  let doses = useAsync({ promiseFn: loadTableData});
  return doses.map(dose => {
    const {id, research_name, date_taken} = dose;
    return ( 
      <tr className="list-item">
        <td>{id}</td>
        <td>{research_name}</td>
        <td>{date_taken}</td>
      </tr>
    );
  });
}

class DosesTable extends React.Component {
  constructor() {
    super();
    this.state = { doses: [] };
  }

  HandleDelete = (id,research_name,date_taken) => {
    fetch( pathConfig.URL + '/Doses' , {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id, 
        research_name: research_name, 
        date_taken: date_taken
      })
    }).then(response => response.text())
    .then(data => {
      if (alert("Successfully deleted the record.")) {
      } else {
        window.location.reload();
      }
    })
    .catch(error => {
      alert(error);
    });
  }

  componentDidMount() {
    fetch( pathConfig.URL + '/Doses' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.text())
    .then(data => {
      var json = JSON.parse(data);
      let doses = [];
      for (var row in json) {
        var dictionary = { id: json[row].id, research_name: json[row].research_name, date_taken: json[row].date_taken.slice(0,10) };
        doses.push(dictionary);
      }
      this.setState({doses: doses});
    })
    .catch(error => {
      alert(error);
    });
  }

  render () {
    return (    
      <table className="table-container">
        <caption>Dose(s) Taken by People</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>research_name</th> 
            <th>date_taken</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.doses.map(dose => {
            const {id, research_name, date_taken} = dose;
            return ( 
              <tr className="list-item">
                <td>{id}</td>
                <td>{research_name}</td>
                <td>{date_taken}</td>
                <td class='selector-button'><button onClick={() => this.HandleDelete(id,research_name,date_taken)} class='delete-button'>X</button></td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    );
  }
}

export default DosesTable;