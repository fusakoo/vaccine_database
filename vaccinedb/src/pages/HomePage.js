import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    // const location = useLocation();
    return (
        <>
            <div className="topnav">
                <Link className="App-link" to="/">Home</Link>
                <Link className="App-link" to="/people">View People</Link>
                <Link className="App-link" to="/vaccines">View Vaccines</Link>
                <Link className="App-link" to="/clinicsites">View Clinic Sites</Link>
                <Link className="App-link" to="/counties">View Counties</Link>
            </div> 
            <h1>US COVID-19 Vaccine Database</h1>
            <p>Vaccination database website backed by mariadb.</p>
        </>
    );
}

export default HomePage;