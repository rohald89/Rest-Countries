import React, { useState } from 'react';

export const CountriesContext = React.createContext();

export const Provider = (props) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();
  const [theme, setTheme] = useState({ mode: 'light' });
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

  const changeTheme = () => theme.mode === 'light' ? setTheme({ mode: 'dark'}) : setTheme({ mode: 'light' });

  const getNameFromCode = (code) => {
    const country = countries.find( country => country.alpha3Code === code );
    const name = country ? country.name : code;
    return name;
  }

  return (
    <CountriesContext.Provider value={{ 
      countries,
      setCountries,
      theme,
      setTheme,
      changeTheme,
      query,
      setQuery,
      region,
      setRegion,
      country,
      setCountry,
      getNameFromCode
    //   actions: {
    //     changeScore: handleScoreChange,
    //     addPlayer: handleAddPlayer,
    //     removePlayer: handleRemovePlayer
    //   }
    }}>
      { props.children }
    </CountriesContext.Provider>
  );
};