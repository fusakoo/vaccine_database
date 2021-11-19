import './css/App.css';
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
              <PeoplePage></PeoplePage>
            </Route>
            <Route path="/vaccines">
              <VaccinesPage></VaccinesPage>
            </Route>
            <Route path="/clinicsites">
              <ClinicSitesPage></ClinicSitesPage>
            </Route>
            <Route path="/counties">
              <CountiesPage></CountiesPage>
            </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;