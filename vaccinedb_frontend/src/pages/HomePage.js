import React from 'react';
import Navigation from '../components/Navigation'

function HomePage() {
    // const location = useLocation();
    return (
        <>
            <Navigation/>
            <h1>US COVID-19 Vaccine Database</h1>
            <p className="fade">&#127973; Welcome to the US COVID-19 Vaccine Database.</p>
            <footer>
                <p>&copy; 2021 Designed by Trevyn Exley and Fusako Obata for CS340</p>
            </footer>
        </>
    );
}

export default HomePage;