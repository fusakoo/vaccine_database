import React from 'react';

function Validate(id, date_taken) { 

  const errors = [];

  if (id > -1) { 
    errors.push("id must be non-negative");
  }

  if (!(/^\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])$/.test(date_taken.length))) {
    errors.push("Invalid Date Format");
  }

  return errors;
}
class DosesForm extends React.Component {

  constructor() {
    super();
    this.state = {
      id: -1,
      research_name: "",
      date_taken: "",
      errors: []
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { id, research_name, date_taken } = this.state;

    // DO SQL INSERT

    const errors = Validate(id, date_taken);
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
            <label>id <span className="required">*</span>
              <input
                  value={this.state.id}
                  onChange={e => this.setState({ id: e.target.value })}
                  type="number"
                  name="id"
                  placeholder="Person ID"
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
            <label>date_taken <span className="required">*</span>
              <input
                  value={this.state.date_taken}
                  onChange={e => this.setState({ date_taken: e.target.value })}
                  type="text"
                  name="date_taken"
                  placeholder="YYYY-MM-DD"
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

export default DosesForm;