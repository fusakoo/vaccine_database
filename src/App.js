import './css/App.css';
// Data imports
import people from './data/people'
import doses from './data/doses'
import vaccines from './data/vaccines'
import vaccinesAvailable from './data/vaccinesAvailable'
import clinicSites from './data/clinicSites'
import counties from './data/counties'
// Router import
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Individual pages
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage';
import VaccinesPage from './pages/VaccinesPage';
import ClinicSitesPage from './pages/ClinicSitesPage';
import CountiesPage from './pages/CountiesPage';

function App() {  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/people">
              <PeoplePage people={people} doses={doses}></PeoplePage>
            </Route>
            <Route path="/vaccines">
              <VaccinesPage vaccines={vaccines}></VaccinesPage>
            </Route>
            <Route path="/clinicsites">
              <ClinicSitesPage clinicSites={clinicSites} vaccinesAvailable={vaccinesAvailable}></ClinicSitesPage>
            </Route>
            <Route path="/counties">
              <CountiesPage counties={counties}></CountiesPage>
            </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;