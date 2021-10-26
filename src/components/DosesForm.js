import React from 'react';

function DosesForm() {
  return (
      <form className="new-input">
        <p><span className="required">* </span><span className="optional">Is required</span></p>
        <div class="form-group">
            <label>id <span className="required">*</span>
              <input
                  type="number"
                  name="id"
                  placeholder="Person ID"
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
            <label>date_taken <span className="required">*</span>
              <input
                  type="text"
                  name="date_taken"
                  placeholder="YYYY-MM-DD"
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

export default DosesForm;