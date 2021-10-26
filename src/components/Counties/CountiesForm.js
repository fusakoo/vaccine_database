import React from 'react';

function CountiesForm() {
  return (
      <form className="new-input">
        <p><span className="required">* </span><span className="optional">Is required</span></p>
        <div class="form-group">
            <label>county_fips_code <span className="required">*</span>
              <input
                  type="number"
                  name="county_fips_code"
                  placeholder="County FIPS code"
                  className="form-control"
                  required
              />
            </label>
        </div>
        <div class="form-group">
            <label>county_name <span className="required">*</span>
              <input
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

export default CountiesForm;