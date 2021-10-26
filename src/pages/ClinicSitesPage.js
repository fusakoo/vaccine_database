import React from 'react';
import Navigation from './../components/Navigation'
import VAForm from '../components/VaccinesAvailable/VAForm'
import VATable from '../components/VaccinesAvailable/VATable'
import CSTable from '../components/ClinicSites/CSTable'
import CSForm from '../components/ClinicSites/CSForm'

function ClinicSitesPage( {clinicSites, vaccinesAvailable}) {
    return (
        <>
            <Navigation/>
            <h1>Clinic Sites + Vaccines Available</h1>
            <p> This page shows the details of clinical site for vaccination and testing as well as the vaccine(s) available at each site.</p>
            <CSTable clinicSites={clinicSites}></CSTable>
            <CSForm/>
            <VATable vaccinesAvailable={vaccinesAvailable}></VATable>
            <VAForm/>
        </>
    );
}

export default ClinicSitesPage;