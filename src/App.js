import {useEffect, useState} from 'react';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  return (
    <div className="grid">
      {countries.map(country => {
        const { name, capital, flag, population, region, numericCode } = country;
        return (
          <div className="country" key={numericCode}>
            <img src={flag} alt={name} />
            <div className="country__details">
              <h2>{name}</h2>
              <p><span>Population:</span> {population}</p>
              <p><span>Region:</span> {region}</p>
              <p><span>Capital:</span> {capital}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
