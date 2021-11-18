import React from 'react';
import Navigation from '../components/Navigation'
import CountiesTable from '../components/Counties/CountiesTable'
import CountiesForm from '../components/Counties/CountiesForm'
import ClinicSitesInCountiesTable from '../components/ClinicSitesInCounties/ClinicSitesInCountiesTable'
import ClinicSitesInCountiesForm from '../components/ClinicSitesInCounties/ClinicSitesInCountiesForm'

function CountiesPage() {
    return (
        <>
            <Navigation/>
            <h1>Counties</h1>
            <p>This page shows the counties where people reside and clinic sites are located in.</p>
            <CountiesTable></CountiesTable>
            <CountiesForm/>
            <ClinicSitesInCountiesTable></ClinicSitesInCountiesTable>
            <ClinicSitesInCountiesForm/>
        </>
    );
}

export default CountiesPage;