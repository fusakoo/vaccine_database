import React from 'react';

function VAForm() {
  return (
      <form className="new-input">
        <p><span className="required">* </span><span className="optional">Is required</span></p>
        <div class="form-group">
            <label>site_id <span className="required">*</span>
              <input
                  type="number"
                  name="site_id"
                  placeholder="Clinic Site ID"
                  className="form-control"
                  required
              />
            </label>
        </div>
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
            <button type="submit" id="submit" className="submit-button">Add New</button>
        </div> 
      </form>
  );
}

export default VAForm;