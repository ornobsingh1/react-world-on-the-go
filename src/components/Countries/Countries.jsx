import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("visited countries", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    // console.log('flag needed to add', flag)
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h2>In The Countries: {countries.length}</h2>
      <h4>Total Country Visited: {visitedCountries.length}</h4>
      <h4>Total Flags Visited: {visitedFlags.length}</h4>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visited-flags-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag} />
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            handleVisitedFlags={handleVisitedFlags}
            handleVisitedCountries={handleVisitedCountries}
            key={country.cca3.cca3}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
