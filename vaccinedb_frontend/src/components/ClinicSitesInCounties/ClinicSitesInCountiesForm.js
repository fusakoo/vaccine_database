import React from 'react';
const pathConfig = require("../config/pathconfig.js");

function Validate(county_fips_code) { 

  const errors = [];

  if (county_fips_code < 0) { 
    errors.push("Can't Have Negative {county_fips_code}");
  }

  else if (county_fips_code < 1001) { 
    errors.push("Invalid {county_fips_code}");
  }

  else if (county_fips_code > 99999) { 
    errors.push("Invalid {county_fips_code}");
  }

  return errors;
}

class ClinicSitesInCountiesForm extends React.Component {

  constructor() {
    super();
    this.state = {
      county_fips_code: null,
      errors: [],
      clinics: []
    };
  }

  componentDidMount() {
    fetch( pathConfig.URL + '/Counties/FIPS' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(results => results.json())
    .then(data => this.setState({ clinics: data })
    );
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { county_fips_code } = this.state;

    const errors = Validate(county_fips_code);
    const hasErrors = errors.length > 0;
    if (hasErrors) { 
      this.setState({ errors });
      return;
    }

    // SQL
    // TODO: Add a functionality where once the user press submit, it'll populate/render the table
  };

  render() {
    const { errors } = this.state;

    console.log(this.state.clinics);

    return (
      <form className="new-input" onSubmit={this.HandleSubmit}>
        {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}
        <p><span className="required">* </span><span className="optional">Is required</span></p>
        <div class="form-group">
          <label>county_fips_code <span className="required">*</span>
            <select
              value={this.state.county_fips_code}
              onChange={e => this.setState({ county_fips_code: e.target.value })}
              type="number"
              name="county_fips_code"
              placeholder="County FIPS code"
              className="form-control-select"
              required
            >   
              {this.state.clinics.map((clinic) => <option key={clinic.county_fips_code} value={clinic.county_fips_code}>{clinic.county_fips_code}</option>)}            
              </select>
          </label>
        </div>
        <div class="form-group">
          <button type="submit" id="submit" className="submit-button">Select County</button>
        </div> 
      </form>
    );
  }
}

export default ClinicSitesInCountiesForm;