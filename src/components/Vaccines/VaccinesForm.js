import React from 'react';

function VaccinesForm() {
  return (
      <form className="new-input">
        <p><span className="required">* </span><span className="optional">Is required</span></p>
        <div class="form-group">
            <label>research_name <span className="required">*</span>
              <input
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

export default VaccinesForm;