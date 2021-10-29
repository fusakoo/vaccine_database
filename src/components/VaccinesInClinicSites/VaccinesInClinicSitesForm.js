import React from 'react';

function Validate(site_id) { 

  const errors = [];

  if (site_id < 1) { 
    errors.push("Can't Have Negative Or Zero {site_id}");
  }

  return errors;
}

class VaccinesInClinicSitesForm extends React.Component {

  constructor() {
    super();
    this.state = {
      site_id: null,
      errors: []
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { site_id } = this.state;
    
    const errors = Validate(site_id);
    const hasErrors = errors.length > 0;
    if (hasErrors) { 
      this.setState({ errors });
      return;
    }

    // SQL
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
              placeholder="Clinic site ID"
              className="form-control"
              required
            />
          </label>
        </div>
        <div class="form-group">
          <button type="submit" id="submit" className="submit-button">Select Clinic Site</button>
        </div> 
      </form>
    );
  }
}

export default VaccinesInClinicSitesForm;