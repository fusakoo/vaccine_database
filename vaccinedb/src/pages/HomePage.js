import React from 'react';
import Navigation from './../components/Navigation'

function HomePage() {
    // const location = useLocation();
    return (
        <>
            <Navigation/>
            <h1>US COVID-19 Vaccine Database</h1>
            <p>Vaccination database website backed by mariadb.</p>
        </>
    );
}

export default HomePage;