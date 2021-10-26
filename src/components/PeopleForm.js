import React from 'react';

function PeopleForm() {
  return (
      <form className="new-input">
        <p><span className="required">* </span><span className="optional">Is required</span></p>
        <div class="form-group">
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
        <div class="form-group">
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
        <div class="form-group">
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
        <div class="form-group">
            <label>site_id <span className="optional">(Optional)</span>
              <input
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
      </form>
  );
}

export default PeopleForm;