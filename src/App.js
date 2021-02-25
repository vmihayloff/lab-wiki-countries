import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <div>
    <Navbar />
    <CountriesList />
    </div>
  );
}

export default App;
