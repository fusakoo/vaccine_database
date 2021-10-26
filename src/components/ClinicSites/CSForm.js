import React from 'react';

function CSForm() {
  return (
      <form className="new-input">
        <p><span className="required">* </span><span className="optional">Is required</span></p>
        <div class="form-group">
            <label>site_id <span className="required">*</span>
              <input
                  type="number"
                  name="site_id"
                  placeholder="Clinic site ID"
                  className="form-control"
                  required
              />
            </label>
        </div>
        <div class="form-group">
            <label>site_name <span className="required">*</span>
              <input
                  type="text"
                  name="site_name"
                  placeholder="Clinic site name"
                  className="form-control"
                  required
              />
            </label>
        </div>
        <div class="form-group">
            <label>street_address <span className="required">*</span>
              <input
                  type="text"
                  name="street_address"
                  placeholder="Street address"
                  className="form-control"
                  required
              />
            </label>
        </div>   
        <div class="form-group">
            <label>city <span className="required">*</span>
              <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="form-control"
                  required
              />
            </label>
        </div>   
        <div class="form-group">
            <label>postal_code <span className="required">*</span>
              <input
                  type="number"
                  name="postal_code"
                  placeholder="Postal code"
                  className="form-control"
                  required
              />
            </label>
        </div>   
        <div class="form-group">
            <label>county_fips_code <span className="optional">(Optional)</span>
              <input
                  type="text"
                  name="county_fips_code"
                  placeholder="County FIPS code"
                  className="form-control"
                  required
              />
            </label>
            <p><span className="optional">See <a href="https://www.census.gov/prod/techdoc/cbp/cbp95/st-cnty.pdf">list of FIPS codes</a> for reference</span></p>
        </div>   
        <div class="form-group">
            <button type="submit" id="submit" className="submit-button">Add New</button>
        </div> 
      </form>
  );
}

export default CSForm;