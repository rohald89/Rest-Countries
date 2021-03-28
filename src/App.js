import {useEffect, useState} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import Countries from "./components/Countries";
import Country from './components/Country';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    let url = 'https://restcountries.eu/rest/v2/';
    if (query) {
      url = url + `name/${query}`;
    } else if (region){
      url = url + `region/${region}`;
    } else {
      url = url + `all`;
    }
    fetch(url)
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [query, region])

  return (
    <>
    <Header />
    <Router>
      <Route path='/' exact>
        <SearchBar setQuery={setQuery} setRegion={setRegion}/>
        <Countries countries={countries}/>
      </Route>
      <Route path='/:id'>
        <Country />
      </Route>
    </Router>
    </>
  );
}

export default App;
