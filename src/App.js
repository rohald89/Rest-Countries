import {useEffect, useState} from 'react';

import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return (
    <>
    <Countries countries={countries}/>
    </>
  );
}

export default App;
