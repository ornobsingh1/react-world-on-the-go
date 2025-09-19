import { use } from "react";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  console.log(countriesData)
  const countries = countriesData.countries;
  return (
    <div>
      <h2>In The Countries: {countries.length}</h2>
    </div>
  );
};

export default Countries;
