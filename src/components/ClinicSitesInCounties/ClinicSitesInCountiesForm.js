import React from 'react';

function ClinicSitesInCountiesForm() {
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
            <button type="submit" id="submit" className="submit-button">Select County</button>
        </div> 
      </form>
  );
}

export default ClinicSitesInCountiesForm;