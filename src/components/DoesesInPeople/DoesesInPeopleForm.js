import React from 'react';

function DoesesInPeopleForm() {
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
            <button type="submit" id="submit" className="submit-button">Select Person</button>
        </div> 
      </form>
  );
}

export default DoesesInPeopleForm;