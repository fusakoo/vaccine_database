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
      county_fips_code: null,
      errors: [],
      counties: [],
      sites: []
    };
  }

  componentDidMount() {
    fetch( process.env.REACT_APP_BACKEND_URL + '/Counties' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(results => results.json())
    .then(data => this.setState({ counties: data })
    ).catch(error => {
      alert(error);
    });
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

    console.log(county_fips_code)

    fetch( process.env.REACT_APP_BACKEND_URL + '/Clinic_Sites/' + county_fips_code , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(results => results.text())
    .then(data => {
      var json = JSON.parse(data);
      var HTML = "";
      for (var row in json)
        HTML += "<tr className=\"list-item\"><td>" 
        + json[row].site_id + "</td><td>" 
        + json[row].site_name + "</td><td>" 
        + json[row].street_address + "</td><td>" 
        + json[row].city + "</td><td>" 
        + json[row].postal_code + "</td></tr>";
      document.getElementById("CSBody").innerHTML = HTML;
    })
    .catch(error => {
      alert(error);
    });
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
          <label>County Name <span className="required">*</span>
            <select
              value={this.state.county_fips_code}
              onChange={e => this.setState({ county_fips_code: e.target.value })}
              name="county_fips_code"
              className="form-control-select"
              required
            >   
              <option key={null} value={null}></option>
              {this.state.counties.map((county) => <option value={county.county_fips_code}>{county.county_name + ', ' + county.state}</option>)}            
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