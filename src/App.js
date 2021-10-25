import './css/App.css';
import people from './data/people'
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
              <PeoplePage people={people}></PeoplePage>
            </Route>
            <Route path="/vaccines">
              <VaccinesPage />
            </Route>
            <Route path="/clinicsites">
              <ClinicSitesPage />
            </Route>
            <Route path="/counties">
              <CountiesPage />
            </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;