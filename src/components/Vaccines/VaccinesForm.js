import React from 'react';

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

    // DO SQL INSERT

    const errors = Validate();
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
          <label>manufacturer <span className="required">*</span>
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