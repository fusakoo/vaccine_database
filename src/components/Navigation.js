import React from 'react';
import { Link } from 'react-router-dom';

// Citation for the following function:
// Date: 10/22/2021 
// Adapted from:
// Source URL: https://www.w3schools.com/howto/howto_js_topnav.asp

function Navigation() {
  // console.log(location.pathname);    // debugging use
  // Checks the current path and display appropriate Links
  return (
    <>
      <div className="topnav">
          <Link className="App-link" to="/">Home</Link>
          <Link className="App-link" to="/people">View People</Link>
          <Link className="App-link" to="/vaccines">View Vaccines</Link>
          <Link className="App-link" to="/clinicsites">View Clinic Sites</Link>
          <Link className="App-link" to="/counties">View Counties</Link>
      </div> 
    </>
  );
}

export default Navigation;