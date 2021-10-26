import React from 'react';
import Navigation from './../components/Navigation'
import CountiesTable from '../components/Counties/CountiesTable'
import CountiesForm from '../components/Counties/CountiesForm'

function CountiesPage( { counties }) {
    return (
        <>
            <Navigation/>
            <h1>Counties</h1>
            <p>This page shows the counties where people resides and sites are located in.</p>
            <CountiesTable counties={counties}></CountiesTable>
            <CountiesForm/>
        </>
    );
}

export default CountiesPage;