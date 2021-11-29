import React from 'react';
const pathConfig = require("../config/pathconfig.js");

function Validate(site_id) { 

  const errors = [];

  if (site_id < 1) { 
    errors.push("Can't Have Negative Or Zero {site_id}");
  }

  return errors;
}

class VAForm extends React.Component {

  constructor() {
    super();
    this.state = {
      site_id: null,
      research_name: "",
      errors: []
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { site_id, research_name } = this.state;

    const errors = Validate(site_id);
    const hasErrors = errors.length > 0;
    if (hasErrors) { 
      this.setState({ errors });
      return;
    }

    fetch( pathConfig.URL + '/Vaccines_Available' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        site_id:site_id, 
        research_name:research_name
      })
      }).then(response => response.json())
      .then(data => {
        if (alert("Successfully added a new vaccine availability.")) {
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
          <label>site_id <span className="required">*</span>
            <input
              value={this.state.site_id}
              onChange={e => this.setState({ site_id: e.target.value })}
              type="number"
              name="site_id"
              placeholder="Clinic Site ID"
              className="form-control"
              required
            />
          </label>
        </div>
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
          <button type="submit" id="submit" className="submit-button">Add New</button>
        </div> 
      </form>
    );
  }
}

export default VAForm;