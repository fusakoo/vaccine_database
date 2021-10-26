import React from 'react';
import Navigation from './../components/Navigation'
import VaccinesTable from '../components/Vaccines/VaccinesTable'
import VaccinesForm from '../components/Vaccines/VaccinesForm'

function VaccinesPage({ vaccines }) {
    return (
        <>
            <Navigation/>
            <h1>Vaccines</h1>
            <p>This page shows the details of covid-19 vaccines on record.</p>
            <VaccinesTable vaccines={vaccines}></VaccinesTable>
            <VaccinesForm/>
        </>
    );
}

export default VaccinesPage;