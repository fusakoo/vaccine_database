import React from 'react';
const pathConfig = require("../config/pathconfig.js");

function Validate(postal_code, county_fips_code) { 

  const errors = [];

  if (postal_code < 0) { 
    errors.push("Can't Have Negative {postal_code}");
  }

  else if (postal_code < 501) { 
    errors.push("Invalid {postal_code}");
  }

  else if (postal_code > 99999) { 
    errors.push("Invalid {postal_code}");
  }

  if (county_fips_code !== null && isNaN(county_fips_code)) {
    errors.push("Invalid {county_fips_code}");
  }

  else if (county_fips_code !== null && county_fips_code < 0) { 
    errors.push("Can't Have Negative {county_fips_code}");
  }

  else if (county_fips_code !== null && county_fips_code < 1001) { 
    errors.push("Invalid {county_fips_code}");
  }

  else if (county_fips_code !== null && county_fips_code > 99999) { 
    errors.push("Invalid {county_fips_code}");
  }

  return errors;
}

class CSForm extends React.Component {

  constructor() {
    super();
    this.state = {
      site_name: "",
      street_address: "",
      city: "",
      postal_code: null,
      county_fips_code: null,
      errors: []
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { site_name, street_address, city, postal_code, county_fips_code } = this.state;

    const errors = Validate(postal_code, county_fips_code);
    const hasErrors = errors.length > 0;
    if (hasErrors) { 
      this.setState({ errors });
      return;
    }

    fetch( pathConfig.URL + '/Clinic_Sites' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        site_name:site_name, 
        street_address:street_address, 
        city:city,
        postal_code:postal_code,
        county_fips_code:county_fips_code
      })
      }).then(response => response.json())
      .then(data => {
        if (alert("Successfully added a new clinic site.")) {
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
          <label>Site name <span className="optional">(site_name)</span> <span className="required">*</span>
            <input
              value={this.state.site_name}
              onChange={e => this.setState({ site_name: e.target.value })}
              type="text"
              name="site_name"
              placeholder="Clinic site name"
              className="form-control"
              required
            />
          </label>
        </div>
        <div class="form-group">
          <label>Street address <span className="optional">(street_address)</span><span className="required">*</span>
            <input
              value={this.state.street_address}
              onChange={e => this.setState({ street_address: e.target.value })}
              type="text"
              name="street_address"
              placeholder="Street address"
              className="form-control"
              required
            />
          </label>
        </div>   
        <div class="form-group">
          <label>City <span className="optional">(city)</span><span className="required">*</span>
            <input
              value={this.state.city}
              onChange={e => this.setState({ city: e.target.value })}
              type="text"
              name="city"
              placeholder="City"
              className="form-control"
              required
            />
          </label>
        </div>   
        <div class="form-group">
          <label>Postal code <span className="optional">(postal_code)</span><span className="required">*</span>
            <input
              value={this.state.postal_code}
              onChange={e => this.setState({ postal_code: e.target.value })}
              type="number"
              name="postal_code"
              placeholder="Postal code"
              className="form-control"
              required
            />
          </label>
        </div>   
        <div class="form-group">
          <label>County FIPS code <span className="optional">(county_fips_code)</span> <span className="required">*</span>
            <input
              value={this.state.county_fips_code}
              onChange={e => this.setState({ county_fips_code: e.target.value })}
              type="text"
              name="county_fips_code"
              placeholder="County FIPS code"
              className="form-control"
            />
          </label>
          <p className="shrink"><span className="optional">See <a href="https://www.census.gov/prod/techdoc/cbp/cbp95/st-cnty.pdf">list of FIPS codes</a> for reference</span></p>
        </div>   
        <div class="form-group">
          <button type="submit" id="submit" className="submit-button">Add New</button>
        </div> 
      </form>
    );
  }
}

export default CSForm;