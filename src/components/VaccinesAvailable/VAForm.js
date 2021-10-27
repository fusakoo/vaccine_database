import React from 'react';

function Validate(site_id) { 

  const errors = [];

  if (site_id > -1) { 
    errors.push("site_id must be non-negative");
  }

  return errors;
}

class VAForm extends React.Component {

  constructor() {
    super();
    this.state = {
      site_id: -1,
      research_name: "",
      errors: []
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { site_id, research_name } = this.state;

    // DO SQL INSERT

    const errors = Validate(site_id);
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