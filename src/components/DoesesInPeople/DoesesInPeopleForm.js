import React from 'react';

function Validate(id) { 

  const errors = [];

  if (id < 0) { 
    errors.push("Can't Have Negative {id}");
  }

  return errors;
}

class DoesesInPeopleForm extends React.Component {

  constructor() {
    super();
    this.state = {
      id: -1,
      errors: []
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { id } = this.state;

    // DO SQL INSERT

    const errors = Validate(id);
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
          <button type="submit" id="submit" className="submit-button">Select Person</button>
        </div> 
      </form>
    );
  }
}

export default DoesesInPeopleForm;