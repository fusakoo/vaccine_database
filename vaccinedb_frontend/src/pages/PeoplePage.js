import React from 'react';
import Navigation from '../components/Navigation'
import PeopleTable from '../components/People/PeopleTable'
import PeopleForm from '../components/People/PeopleForm'
import DosesTable from '../components/Doses/DosesTable'
import DosesForm from '../components/Doses/DosesForm'

function PeoplePage() {
    return (
        <>
            <Navigation/>
            <h1>People + Doses Taken</h1>
            <p>This page shows the records of people in the US and the doses taken by each individual.</p>
            <PeopleTable></PeopleTable>
            <PeopleForm/>
            <DosesTable></DosesTable>
            <DosesForm/>
        </>
    );
}

export default PeoplePage;