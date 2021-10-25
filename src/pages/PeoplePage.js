import React from 'react';
import Navigation from './../components/Navigation'
import PeopleTable from './../components/PeopleTable'

function PeoplePage({ people }) {
    return (
        <>
            <Navigation/>
            <h1>People</h1>
            <p>
                Records the details of people in the US.
                Records the doses of vaccine taken by each person.
		    </p>
            <PeopleTable people={people}></PeopleTable>
        </>
    );
}

export default PeoplePage;