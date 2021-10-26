import React from 'react';
import Navigation from './../components/Navigation'

function HomePage() {
    // const location = useLocation();
    return (
        <>
            <Navigation/>
            <h1>US COVID-19 Vaccine Database</h1>
            <p>Welcome to the US COVID-19 Vaccine Database.</p>
        </>
    );
}

export default HomePage;