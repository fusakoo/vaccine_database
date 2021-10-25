import React from 'react';
import Navigation from './../components/Navigation'
import PeopleTable from './../components/PeopleTable'
import DosesTable from './../components/DosesTable'


function PeoplePage({ people, doses }) {
    return (
        <>
            <Navigation/>
            <h1>People</h1>
            <p>This page shows the records of people in the US and the doses taken by each individual.</p>
            <PeopleTable people={people}></PeopleTable>
            <DosesTable doses={doses}></DosesTable>
        </>
    );
}

export default PeoplePage;