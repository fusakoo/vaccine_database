import React from 'react';

function ValidateAdd(birth_date, site_id) { 

  const errors = [];

  if (!(/^\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])$/.test(birth_date))) {
    errors.push("Invalid Format For {birth_date}");
  }

  if (site_id !== null && site_id < 1) {
    errors.push("Can't Have Negative Or Zero {site_id}");
  }

  return errors;
}

function ValidateUpdate(site_id, id) { 

  const errors = [];

  if (id < 1) {
    errors.push("Can't Have Negative Or Zero {id}");
  }

  if (site_id !== null && site_id < 1) {
    errors.push("Can't Have Negative Or Zero {site_id}");
  }

  return errors;
}

class PeopleForm extends React.Component {

  constructor() {
    super();
    this.state = {
      id: null,
      last_name: "",
      first_name: "",
      birth_date: "",
      site_id: null,
      errors: [],
      status: 0
    };
  }

  HandleSubmit = (e) => {
    e.preventDefault();

    const { id, last_name, first_name, birth_date, site_id, err, status } = this.state;

    if (status == 1) { // Udpate

      const errors = ValidateUpdate(id, site_id);
      const hasErrors = errors.length > 0;
      if (hasErrors) { 
        this.setState({ errors });
        return;
      }

      // SQL
    }
    else { // Add

      const errors = ValidateAdd(birth_date, site_id);
      const hasErrors = errors.length > 0;
      if (hasErrors) { 
        this.setState({ errors });
        return;
      }

      // SQL
    }    

  };

  // New entry/Update entry toggle 
  radioHandler = (status) => {
    this.setState({ status });
  };

  render() {
    const { errors } = this.state;
    const { status } = this.state;

    return (
        <form className="new-input" onSubmit={this.HandleSubmit}>
          {errors.map(error => (
            <p key={error}>Error: {error}</p>
          ))}
          <div className="form-group">
            <input 
                type="radio" 
                name="formselector" 
                className="input-radio"
                checked={status === 0}
                onClick={(e) => this.radioHandler(0)}
            />Add New Entry
            <br/>
            <input 
                type="radio" 
                name="formselector" 
                className="input-radio"
                checked={status === 1}
                onClick={(e) => this.radioHandler(1)}
            />Edit Existing
          </div>
          <p><span className="required">* </span><span className="optional">Is required</span></p>
          {status === 0 && (
            <>
              <div class="form-group">
                <label>last_name <span className="required">*</span>
                  <input
                      value={this.state.last_name}
                      onChange={e => this.setState({ last_name: e.target.value })}
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      className="form-control"
                      required
                  />
                </label>
              </div>
              <div class="form-group">
                <label>first_name <span className="required">*</span>
                  <input
                      value={this.state.first_name}
                      onChange={e => this.setState({ first_name: e.target.value })}
                      type="text"
                      name="first_name"
                      placeholder="First name"
                      className="form-control"
                      required
                  />
                </label>
              </div>
              <div class="form-group">
                <label>birth_date <span className="required">*</span>
                  <input
                      value={this.state.birth_date}
                      onChange={e => this.setState({ birth_date: e.target.value })}
                      type="text"
                      name="birth_date"
                      placeholder="YYYY-MM-DD"
                      className="form-control"
                      required
                  />
                </label>
              </div>
              <div class="form-group">
                <label>site_id <span className="optional">(Optional)</span>
                  <input
                      value={this.state.site_id}
                      onChange={e => this.setState({ site_id: e.target.value })}
                      type="number"
                      name="site_id"
                      placeholder="Site ID"
                      className="form-control"
                  />
                </label>
              </div>       
              <div class="form-group">
                  <button type="submit" id="submit" className="submit-button">Add New</button>
              </div> 
            </>
          )}
          {status === 1 && (
            <>
              <div class="form-group">
                  <label>id <span className="required">*</span>
                    <input
                        value={this.state.id}
                        onChange={e => this.setState({ id: e.target.value })}
                        type="number"
                        name="id"
                        placeholder="Person's ID"
                        className="form-control"
                        required
                    />
                  </label>
              </div>
              <div class="form-group">
                <label>last_name <span className="optional">(Optional)</span>
                  <input
                      value={this.state.last_name}
                      onChange={e => this.setState({ last_name: e.target.value })}
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      className="form-control"
                  />
                </label>
              </div>
              <div class="form-group">
                <label>first_name <span className="optional">(Optional)</span>
                  <input
                      value={this.state.first_name}
                      onChange={e => this.setState({ first_name: e.target.value })}
                      type="text"
                      name="first_name"
                      placeholder="First name"
                      className="form-control"
                  />
                </label>
              </div>
              <div class="form-group">
                  <label>site_id <span className="optional">(Optional)</span>
                    <input
                        value={this.state.site_id}
                        onChange={e => this.setState({ site_id: e.target.value })}
                        type="number"
                        name="site_id"
                        placeholder="Site ID"
                        className="form-control"
                    />
                  </label>
              </div> 
              <div className="form-group">
                  <button type="submit" id="submit" className="submit-button">Update</button>
              </div> 
            </>
          )}
        </form>
    );
  }
}

export default PeopleForm;