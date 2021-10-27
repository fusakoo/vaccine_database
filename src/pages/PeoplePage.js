import React from 'react';
import Navigation from './../components/Navigation'
import PeopleTable from '../components/People/PeopleTable'
import PeopleForm from '../components/People/PeopleForm'
import DosesTable from '../components/Doses/DosesTable'
import DosesForm from '../components/Doses/DosesForm'
import DoesesInPeopleTable from '../components/DoesesInPeople/DoesesInPeopleTable'
import DoesesInPeopleForm from '../components/DoesesInPeople/DoesesInPeopleForm'


function PeoplePage({ people, doses }) {
    return (
        <>
            <Navigation/>
            <h1>People + Doses Taken</h1>
            <p>This page shows the records of people in the US and the doses taken by each individual.</p>
            <PeopleTable people={people}></PeopleTable>
            <PeopleForm/>
            <DosesTable doses={doses}></DosesTable>
            <DosesForm/>
            <DoesesInPeopleTable></DoesesInPeopleTable>
            <DoesesInPeopleForm/>
        </>
    );
}

export default PeoplePage;