import React from 'react';
import Navigation from '../components/Navigation'
import VAForm from '../components/VaccinesAvailable/VAForm'
import VATable from '../components/VaccinesAvailable/VATable'
import CSTable from '../components/ClinicSites/CSTable'
import CSForm from '../components/ClinicSites/CSForm'

function ClinicSitesPage() {
    return (
        <>
            <Navigation/>
            <h1>Clinic Sites + Vaccines Available</h1>
            <p> This page shows clinical sites available for vaccination and testing as well as the vaccine(s) available at each site.</p>
            <CSTable></CSTable>
            <CSForm/>
            <VATable></VATable>
            <VAForm/>
        </>
    );
}

export default ClinicSitesPage;