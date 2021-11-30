import React from 'react';
const pathConfig = require("../config/pathconfig.js");

function Validate(id, date_taken) { 

  const errors = [];

  if (id < 1) { 
    errors.push("Can't Have Negative Or Zero {id}");
  }

  if (!(/^\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])$/.test(date_taken))) {
    errors.push("Invalid Format For {date_taken}");
  }

  return errors;
}

class DosesForm extends React.Component {

  constructor() {
    super();
    this.state = {
      id: null,
      research_name: "",
      date_taken: "",
      errors: [],
      people: [],
      vaccines: []
    };
  }

  componentDidMount() {
    fetch( pathConfig.URL + '/Vaccines' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(results => results.json())
    .then(data => this.setState({ vaccines: data })
    );
    fetch( pathConfig.URL + '/People' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(results => results.json())
    .then(data => this.setState({ people: data })
    );
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { id, research_name, date_taken } = this.state;

    const errors = Validate(id, date_taken);
    const hasErrors = errors.length > 0;
    if (hasErrors) { 
      this.setState({ errors });
      return;
    }

    fetch( pathConfig.URL + '/Doses' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id:id, 
        research_name:research_name, 
        date_taken:date_taken
      })
      }).then(response => response.json())
      .then(data => {
        if (alert("Successfully added a new dose.")) {
        } else {
          window.location.reload();
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    const { errors } = this.state;

    return (
      <form className="new-input" onSubmit={this.HandleSubmit}>
        {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}
        <p><span className="required">* </span><span className="optional">Is required</span></p>
        <div class="form-group">
          <label>Person's ID <span className="optional">(id)</span><span className="required">*</span>
            <select
              value={this.state.id}
              onChange={e => this.setState({ id: e.target.value })}
              name="id"
              className="form-control-select"
              required
            >
              {this.state.people.map((person) => <option value={person.id}>{person.id + " (" + person.first_name + " " + person.last_name + ")"}</option>)}     
            </select>
          </label>
        </div>
        <div class="form-group">
          <label>Vaccine <span className="optional">(reserach_name)</span><span className="required">*</span>
            <select
              value={this.state.research_name}
              onChange={e => this.setState({ research_name: e.target.value })}
              name="research_name"
              placeholder="Research name"
              className="form-control-select"
              required
            >
              {this.state.vaccines.map((vaccine) => <option value={vaccine.research_name}>{vaccine.research_name}</option>)}     
            </select>
          </label>
        </div>
        <div class="form-group">
          <label>date_taken <span className="required">*</span>
            <input
              value={this.state.date_taken}
              onChange={e => this.setState({ date_taken: e.target.value })}
              type="date"
              name="date_taken"
              placeholder="YYYY-MM-DD"
              className="form-control"
              required
            />
          </label>
        </div>   
        <div class="form-group">
          <button type="submit" id="submit" className="submit-button">Add New</button>
        </div> 
      </form>
    );
  }
}

export default DosesForm;