import React from 'react';

function VaccinesInClinicSitesForm() {
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
            <button type="submit" id="submit" className="submit-button">Select Clinic Site</button>
        </div> 
      </form>
  );
}

export default VaccinesInClinicSitesForm;