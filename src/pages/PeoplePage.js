import React from 'react';
import Navigation from './../components/Navigation'
import PeopleTable from './../components/PeopleTable'
import PeopleForm from './../components/PeopleForm'
import DosesTable from './../components/DosesTable'
import DosesForm from './../components/DosesForm'


function PeoplePage({ people, doses }) {
    return (
        <>
            <Navigation/>
            <h1>People</h1>
            <p>This page shows the records of people in the US and the doses taken by each individual.</p>
            <PeopleTable people={people}></PeopleTable>
            <PeopleForm/>
            <DosesTable doses={doses}></DosesTable>
            <DosesForm/>
        </>
    );
}

export default PeoplePage;