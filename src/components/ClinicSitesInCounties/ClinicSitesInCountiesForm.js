import React from 'react';


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
      county_fips_code: -1,
      errors: []
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { county_fips_code } = this.state;

    // DO SQL INSERT

    const errors = Validate(county_fips_code);
    const hasErrors = errors.length > 0;
    if (hasErrors) { 
      this.setState({ errors });
      return;
    }

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
          <label>county_fips_code <span className="required">*</span>
            <input
              value={this.state.county_fips_code}
              onChange={e => this.setState({ county_fips_code: e.target.value })}
              type="number"
              name="county_fips_code"
              placeholder="County FIPS code"
              className="form-control"
              required
            />
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