import React from 'react';
const pathConfig = require("../config/pathconfig.js");

function Validate() { 

  const errors = [];

  return errors;
}

class VaccinesForm extends React.Component {

  constructor() {
    super();
    this.state = {
      research_name: "",
      manufacturer: "",
      vaccine_type: "",
      errors: []
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { research_name, manufacturer, vaccine_type } = this.state;

    const errors = Validate();
    const hasErrors = errors.length > 0;
    if (hasErrors) { 
      this.setState({ errors });
      return;
    }

    fetch( pathConfig.URL + '/Vaccines' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        research_name:research_name,
        manufacturer:manufacturer,
        vaccine_type:vaccine_type
      })
    }).then(response => response.json())
    .then(data => {
      alert("Successfully added a new vaccine.");
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
          <label>research_name <span className="required">*</span>
            <input
              value={this.state.research_name}
              onChange={e => this.setState({ research_name: e.target.value })}
              type="text"
              name="research_name"
              placeholder="Research name"
              className="form-control"
              required
            />
          </label>
        </div>
        <div class="form-group">
          <label>manufacturer <span className="required">*</span>
            <input
              value={this.state.manufacturer}
              onChange={e => this.setState({ manufacturer: e.target.value })}
              type="text"
              name="manufacturer"
              placeholder="Manufacturer name"
              className="form-control"
              required
            />
          </label>
        </div>
        <div class="form-group">
          <label>vaccine_type <span className="required">*</span>
            <input
              value={this.state.vaccine_type}
              onChange={e => this.setState({ vaccine_type: e.target.value })}
              type="text"
              name="vaccine_type"
              placeholder="Vaccine type"
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

export default VaccinesForm;