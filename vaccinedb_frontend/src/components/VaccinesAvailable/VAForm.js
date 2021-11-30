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
      errors: [],
      clinics: [],
      vaccines: []
    };
  }

  componentDidMount() {
    fetch( pathConfig.URL + '/Clinic_Sites' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(results => results.json())
    .then(data => this.setState({ clinics: data })
    );
    fetch( pathConfig.URL + '/Vaccines' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(results => results.json())
    .then(data => this.setState({ vaccines: data })
    );
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
          <label>Clinic site <span className="optional">(site_id)</span><span className="required">*</span>
            <select
              value={this.state.site_id}
              onChange={e => this.setState({ site_id: e.target.value })}
              name="site_id"
              className="form-control-select"
              required
            >
              {this.state.clinics.map((clinic) => <option value={clinic.site_id}>{clinic.site_name}</option>)}            
            </select>
          </label>
        </div>
        <div class="form-group">
          <label>Vaccine <span className="optional">(research_name)</span><span className="required">*</span>
            <select
              value={this.state.research_name}
              onChange={e => this.setState({ research_name: e.target.value })}
              name="research_name"
              className="form-control-select"
              required
            >
              {this.state.vaccines.map((vaccine) => <option value={vaccine.research_name}>{vaccine.research_name}</option>)}            
            </select>
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