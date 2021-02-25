import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  getCountryByCca3 = (cca3) => {
    for (let element of countries) {
      if (element.cca3 === cca3) {
        return element;
      }
    }
  };
  render() {
    let cca3 = this.props.match.params.cca3;
    let country = this.getCountryByCca3(cca3);
    return (
      <div>
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((border, index) => {
                    return (
                      <li>
                        <Link to={`/country/${border}`}>
                          {this.getCountryByCca3(border).name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
