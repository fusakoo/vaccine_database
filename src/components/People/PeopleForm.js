import React from 'react';

function PeopleForm() {
  const [status, setStatus] = React.useState(0) // 0: show new form, 1: show update form

  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
      <>
        <form className="new-input">
          <div className="form-group">
            <input 
                // value="new" 
                type="radio" 
                name="formselector" 
                className="input-radio"
                checked={status === 0}
                onClick={(e) => radioHandler(0)}
            />Add New Entry
            <br/>
            <input 
                // value="update" 
                type="radio" 
                name="formselector" 
                className="input-radio"
                checked={status === 1}
                onClick={(e) => radioHandler(1)}
            />Edit Existing
          </div>
          <p><span className="required">* </span><span className="optional">Is required</span></p>
          {status === 0 && (
            <>
              <div className="form-group">
                <label>last_name <span className="required">*</span>
                  <input
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      className="form-control"
                      required
                  />
                </label>
              </div>
              <div className="form-group">
                  <label>first_name <span className="required">*</span>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        className="form-control"
                        required
                    />
                  </label>
              </div>
              <div className="form-group">
                  <label>birth_date <span className="required">*</span>
                    <input
                        type="text"
                        name="birth_date"
                        placeholder="YYYY-MM-DD"
                        className="form-control"
                        required
                    />
                  </label>
              </div>
              <div className="form-group">
                  <label>site_id <span className="optional">(Optional)</span>
                    <input
                        type="number"
                        name="site_id"
                        placeholder="Site ID"
                        className="form-control"
                    />
                  </label>
              </div>
              <div className="form-group">
                  <button type="submit" id="submit" className="submit-button">Add New</button>
              </div> 
            </>
          )}
          {status === 1 && (
            <>
              <div className="form-group">
                  <label>id <span className="required">*</span>
                    <input
                        type="number"
                        name="id"
                        placeholder="Person's ID"
                        className="form-control"
                        required
                    />
                  </label>
              </div>
              <div className="form-group">
                <label>last_name <span className="optional">(Optional)</span>
                  <input
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      className="form-control"
                      required
                  />
                </label>
              </div>
              <div className="form-group">
                  <label>first_name <span className="optional">(Optional)</span>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        className="form-control"
                        required
                    />
                  </label>
              </div>
              <div className="form-group">
                  <label>site_id <span className="optional">(Optional)</span>
                    <input
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
      </>
  );
}

export default PeopleForm;