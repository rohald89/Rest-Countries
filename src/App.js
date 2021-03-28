import {useEffect, useState} from 'react';

import Countries from "./components/Countries";
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return (
    <>
    <Header />
    <SearchBar />
    <Countries countries={countries}/>
    </>
  );
}

export default App;
