import React from 'react';

function Validate(county_fips_code, state) { 

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

  if (!(/[A-Z]{2}/.test(state)) || state.length != 2) {
    errors.push("Invalid Format For {state}");
  }

  return errors;
}

class CountiesForm extends React.Component {

  constructor() {
    super();
    this.state = {
      county_fips_code: null,
      county_name: "",
      state: "",
      errors: []
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { county_fips_code, county_name, state } = this.state;

    const errors = Validate(county_fips_code, state);
    const hasErrors = errors.length > 0;
    if (hasErrors) { 
      this.setState({ errors });
      return;
    }

    fetch('http://flip3.engr.oregonstate.edu:49490/Counties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        county_fips_code:county_fips_code, 
        county_name:county_name, 
        state:state
      })
      }).then(response => response.json())
      .then(data => {
        alert("Successfully added a new county.");
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
          <p className="shrink"><span className="optional">See <a href="https://www.census.gov/prod/techdoc/cbp/cbp95/st-cnty.pdf">list of FIPS codes</a> for reference</span></p>
        </div>
        <div class="form-group">
          <label>county_name <span className="required">*</span>
            <input
              value={this.state.county_name}
              onChange={e => this.setState({ county_name: e.target.value })}
              type="text"
              name="county_name"
              placeholder="County name"
              className="form-control"
              required
            />
          </label>
        </div>
        <div class="form-group">
          <label>state <span className="optional">(Optional)</span>
            <input
              value={this.state.state}
              onChange={e => this.setState({ state: e.target.value })}
              type="text"
              name="state"
              placeholder="State (e.g. 'CA', 'WA')"
              className="form-control"
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

export default CountiesForm;