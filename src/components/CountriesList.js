import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import countries from '../countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './CountryDetails';

class CountriesList extends Component {
  state = {
    countries,
  };

  render() {
    const { countries } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group" id = "left-country-column">
              {countries.map((country, index) => {
                return (
                  <Link to={`/country/${country.cca3}`} className="list-group-item list-group-item-action">
                      {country.flag} {country.name.common}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-7">
            <Route path="/country/:cca3" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;
